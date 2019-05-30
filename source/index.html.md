---
title: Hedgehog Documentation

toc_footers:
  - <a href='https://hedgehog.audius.co'>Hedgehog Public Site</a>
  - <a href='https://github.com/AudiusProject/hedgehog'>Hedgehog Repository</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

search: true
---

<br />
<br />

**Hedgehog** is alternative to Metamask that manages a user's private key and wallet on the browser. It exposes a simple API to allow you to create an authentication scheme to let users sign up and login to their wallet 
across multiple browsers and devices. [hedgehog.audius.co](https://hedgehog.audius.co).

<br />

**Why Use This?**
Not All Transactions Are Created Equal! Currently available wallets treat every transaction as if it were moving around your life’s savings. Hedgehog was built for use-cases involving low-to-no financial value.


# Installation
Hedgehog is available as an [npm package](https://www.npmjs.com/package/@audius/hedgehog). 

```
npm install --save @audius/hedgehog
```

# Overview

The following sections are a technical overview of how Hedgehog works, for coded examples, skip to the [How To](#how-to) section.

![Hedgehog System Diagram](https://user-images.githubusercontent.com/2731362/58212636-4e33a900-7ca4-11e9-9fdd-ac3cd16dc6f0.png "Hedgehog System Diagram")

# How It Works

Hedgehog is a package that lives in your front end application to create and manage a user's entropy (from which a private key is derived). It allows your application to interact with a REST API on a server and database of your choice to securely persist and retrieve auth artifacts. Hedgehog relies on username and password to create auth artifacts, so it's able to simulate a familiar authentication system that allows users to sign up or login from multiple browsers or devices and retrieve their entropy.

Since Hedgehog interacts with a REST API, it requires that you run a server or database, or use a managed solution, and conform to the API specified in the [How To](#how-to) section below.

Hedgehog generates a set of artifacts similar to a MyEtherWallet keystore file. Those artifacts can then be persisted to a database of your choice and retrieved with a hash computed from the username, password and an initialization vector. The private key is only computed and available client side and is never transmitted or stored anywhere besides the user's browser.

## Wallet Creation

Wallets are created by first generating a wallet seed and entropy as per the [BIP-39 spec](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). The entropy can then be used to derive a hierarchical deterministic wallet given a path, as stated in the [BIP-32 spec](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). This entropy is stored in the browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#Browser_compatibility) to allow user state to persist across multiple sessions without any external dependency. Using this entropy, a wallet object from `ethereumjs-wallet` is generated and stored in the `wallet` property within the Hedgehog class on initialization, enabling state persistence.

In addition to the entropy, Hedgehog generates an initialization vector(`iv`), `lookupKey` and `cipherText`. These three values can be securely stored in a database and retrieved from a server to authenticate a user. The `iv` is a random hex string generated for each user to secure authentication. The `lookupKey` is the username and password combined with a pre-defined, constant, initialization vector(not the same `iv` that's stored in the database). This `lookupKey` acts as the primary key in the database to retrieve the `cipherText` and `iv` values. The `cipherText` is generated using an aes-256-cbc cipher with the `iv` and a key derived from a combination of the user's password and the iv using [scrypt](https://en.wikipedia.org/wiki/Scrypt) and stores the entropy. 

Since entropy is stored in the `cipherText`, it can be derived from there if we know the `iv` and key(scrypt of user's password and `iv`). After the entropy is decrypted, it's stored in the browser on a local `ethereumjs-wallet` object as well as in localStorage. The encryption and decryption process happens exclusively on the client side with the user's password or entropy never leaving the browser without first being encrypted.

For API of functions to access and modify wallet state, please see the [API](#api) section

## Wallet Persistence

The wallet information can be persisted on the backend of your choice. You, as the developer, have the choice to pick which language and frameworks to use, write the endpoints to suit any custom logic necessary and select  a hosting provider (if any). 

The database schema for persisting data should resemble the following example. There two tables, one for storing authentication information, and the other for storing username and walletAddress. It's important that the username is not stored in the Authentications table because the `lookupKey` is a scrypt hash of a predefined iv with an username and password combination. If the data in these tables were ever exposed, susceptibility of a [rainbow table attack](https://en.wikipedia.org/wiki/Rainbow_table) could increase because the password is the only unknown property. These tables can be named anything since Hedgehog only interacts with REST API endpoints that will perform CRUD on these tables.

## Security Considerations

All third party javascript should be audited for localStorage access. One possible attack vector is a script that loops through all localStorage keys and sends them to a third party server from where those keys could be used to sign transactions on behalf of malicious actors. To mitigate this, all third party javascript should be audited and stored locally to serve, instead of being loaded dynamically through scripts.

Username should be stored separately from auth artifacts in different tables. The table containing the authentication values should be independent with no relation to the table storing username

If the application developers’ server is seized, breached, or controlled by bad actors, the resources required to brute-force decrypt the auth artifacts stored there would be immense. It would only make sense to expend those resources if there were enough value to be gained by breaking a given account, which is why we only recommend using Hedgehog in cases where the stakes are lower. This is also why we recommend a bridge approach for certain use-cases, where one could start users on Hedgehog and suggest migrating to a more secure wallet if their stored value increases beyond a certain threshold. We are working on fallback mechanisms to enable key sharing between devices in the absence of this server component, eg. QR codes.

For more deployment best practices please see [this section](#best-practices)

## IMPORTANT: Lost Passwords

If a user loses their password, the account is no longer recoverable. There's no way to reset a password because the entropy is encrypted client side before it's sent to the database. And since the old password is required to decrypt the entropy and re-encrypt with a new password, if the password used to encrypt the entropy has been lost or forgotten, the account is not recoverable.

# How To

The code below shows code snippets to integrate Hedgehog into your own application. For more information about setting up a database schema, see the [example schema section](#example-sql-schema), and for a fully working end-to-end demo with a custom backend (Firebase or Express), see the [demo repo](https://github.com/AudiusProject/hedgehog-demo).


## Client-side setup

In this example, we assume you have already a backend/database set up to handle the following scenarios:

**`POST /authentication`**

| param | type |
| - | - |
|`iv` | string |
| `cipherText` | string |
| `lookupKey` | string |

Inserts `iv`, `cipherText`, and `lookupKey` into the authentication table.

**`GET /authentication`**

| param | type |
| - | - |
| `lookupKey` | string |

Retrieve one record with `lookupKey` from the authentication table.

**`POST /users`**

| param | type |
| - | - |
| `username` | string |
| `walletAddress` | string |

Inserts `username` and `walletAddress` into a users table.

```js
const { Hedgehog, /*WalletManager, Authentication */ } = require('@audius/hedgehog')
const axios = require('axios')


const makeRequestToService = async (axiosRequestObj) => {
  axiosRequestObj.baseURL = 'http://hedgehog.base-url.com'

  try {
    const resp = await axios(axiosRequestObj)
    if (resp.status === 200) {
      return resp.data
    } else {
      throw new Error(`Server returned error: ${resp.status.toString()} ${resp.data['error']}`)
    }
  } catch (e) {
    console.error(e)
    throw new Error(`Server returned error: ${e.response.status.toString()} ${e.response.data['error']}`)
  }
}
```

Next,


Import Hedgehog and necessary dependencies. Hedgehog is the package export that should be used by most users.
WalletManager and Authentication imports are possible but not recommended and should only be used by advanced users.

### makeRequestToService
This is a helper function that makes XHR requests to a server of your choosing and parses the response status code.
This is simply a helper to make defining our setters and getters easier.

The Hedgehog constructor requires 3 parameters to set and retrieve data from your backend. These are:

### setAuthFn

Responsible for setting values into the authentication table on the backend.

On the backend, the `/authentication` route will need to insert an entry into the authentication table containing the iv, cipherText, and lookupKey.

```javascript
/**
 * @param {Object} obj contains {iv, cipherText, lookupKey}
 */
const setAuthFn = async (obj) => {
  await makeRequestToService({
    url: '/authentication',
    method: 'post',
    data: obj
  })
}

```

### setUserFn

Similarly to setAuthFn, the setUserFn is used to relay user information to our custom backend users table.

On the backend, the `/user` route will need to insert an entry into the users table containing the walletAddress and username.

```js
/**
 * @param {Object} obj contains {walletAddress, username}
 */
const setUserFn = async (obj) => {
  await makeRequestToService({
    url: '/user',
    method: 'post',
    data: obj
  })
}

```

### getFn

The getFn used to retrieve a record from the authentication table.

```javascript
/**
 * @param {Object} obj contains {lookupKey}
 */
const getFn = async (obj) => {
  return makeRequestToService({
    url: '/authentication',
    method: 'get',
    params: obj
  })
}
```

After setting up these methods, we're good to go and ready let users create accounts & sign in!

## Usage

```javascript
const hedgehog = new Hedgehog(getFn, setAuthFn, setUserFn)

// wallet is an `ethereumjs-wallet` object that can be used to sign transactions
let wallet = null

try {
  if (hedgehog.isLoggedIn()) {
    wallet = hedgehog.getWallet()
  }
  else {
    // Prompt user for username/password input for login or signup
    wallet = await hedgehog.login('username', 'password')
    // or
    wallet = await hedgehog.signUp('username', 'password')
  }
}
catch(e) {
  console.error(e)
}
```

Here, we:

1. Construct a new Hedgehog instance using our getFn, setAuthFn, and setUserFn.
2. Create a variable to store a wallet
3. Check if a user is logged in and set their wallet accordingly
4. If not, we can either log in a user with their credentials or sign up for a new account

## Example: SQL Schema
There are two tables that should be used to persist hedgehog authentication and user information. The names of the tables and columns can be customized. For a full working example of a server and SQL schema, see the [Hedgehog demo repo](https://github.com/AudiusProject/hedgehog-demo).

### Authentications
This table stores auth information like `iv` and `cipherText` and also the `lookupKey`, which should serve as the primary key for this table since it's sent from the browser to request an auth record.

The values and explanation for fields in the Authentications table (`iv`, `cipherText` and `lookupKey`) are given in the [Wallet creation](#wallet-creation) section.

An example of the Authentications table with example data:

| iv | cipherText | lookupKey |
| - | - | - |
| c9b3...48 | 07...e561 | 0e...2a8 |
| d6...355 | 059f...561 | 15e...3c0 |
| 99...6e | f4...07 | 18...10 |


### Users

This table can store information about users. The the two default fields hedgehog returns in the `setUserFn` call are `username` and `walletAddress`. `username` should serve as the primary key for the table.

## Next Steps

After setting up Hedgehog, in order to fund wallets so that transactions can be waived on behalf of the user, see [Funding Hedgehog Accounts](#funding-hedgehog-accounts) as well as other [best practices](#best-practices).

# Funding Hedgehog Accounts

Since Hedgehog creates and manages wallets client side, just like Metamask, the problem of funding a wallet still exists. When performing only reads from a blockchain, there's usually no transaction fee. However, write transactions typically require fees, and the onus is on the transaction sender to pay these fees. 

This is less than ideal for an end user facing product since users will be required to pay when submitting transactions - without a technology or cryptocurrency background, self-funding wallets is an unrealistic requirement.

There are two ways to try to solve this problem: **funding user wallets** or **using EIP-712 relay transactions**.

## Fund User Wallets

As part of the endpoint which persists the walletAddress, you can fund any new `walletAddress`'s created. When a new wallet is created, you could send a small amount of tokens to that address so the user can sign and send transactions to the chain browser side. The downside is there could be potential for abuse where someone farms accounts to collect tokens because these accounts would be funded directly. 

## EIP-712 Relay Transactions

Another option is to have users sign their transactions browser side, but relay their transaction through an EIP-712 relayer which submits their transaction to chain. Any transaction costs incurred would be paid by the relayer instead of the user, however the original user transaction data is preserved and submitted.

For more information about EIP-712, please see the following links:

[https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)

[https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26](https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26)

# Best practices

## Password Strength

It's recommended to enforce password standards client side to reject any insecure passwords. Two recommendations to increase password strength are to enforce a minimum character limit and use a bloom filter to reject commonly used passwords like this [npm module from Mozilla](https://github.com/mozilla/fxa-common-password-list)

## Rate limiting

The server endpoint that is called by [getFn](#client-side-setup) should be rate limited to prevent brute force attacks

## Javascript security

All client side code should be audited for localStorage since the entropy resides in localStorage. Please see the [security considerations](#security-considerations) section for more information

# API

The functions exposed via hedgehog are:

## signUp

```javascript
/**
  * @param {String} username username
  * @param {String} password user password
  * @returns {Object} ethereumjs-wallet wallet object
  */
async signUp (username, password)
```

> Example

```javascript
const wallet = await hedgehog.signUp('username', 'password')
```

Given user credentials, create a client side wallet and all other authentication artifacts, call setFn to persist the artifacts to a server and return the wallet object

## login

```js
/**
  * @param {String} username username
  * @param {String} password user password
  * @returns {Object} ethereumjs-wallet wallet object
  */
async login (username, password)
```

> Example

```javascript
const wallet = await hedgehog.login('username', 'password')
```

Given user credentials, attempt to get authentication artifacts from server using getFn, create the private key using the artifacts and the user password

## logout

```javascript
logout ()
```

> Example

```javascript
hedgehog.logout()
```

Deletes the local client side wallet including entropy and all associated authentication artifacts

## isLoggedIn

```javascript

/**
  * @returns {Boolean} true if the user has a client side wallet, false otherwise
  */
isLoggedIn ()
```

> Example

```javascript
if (hedgehog.isLoggedIn()) { /* show user account */ }
```

Returns is the user has a client side wallet. If they do, calls can be made against that wallet, if they don't the user has to login or signup.

##getWallet

```javascript
/**
  * @returns {Object} ethereumjs-wallet wallet object if a wallet exists, otherwise null
  */
getWallet ()
```

> Example

```javascript
const wallet = hedgehog.getWallet()
```

Returns the current user wallet.


## restoreLocalWallet

```javascript
/**
   * @returns {Object/null} If the user has a wallet client side, the wallet object is returned,
   *                        otherwise null is returned
   */
restoreLocalWallet ()
```

If a user refreshes or navigates away from the page and comes back later, this attempts to restore the client side wallet from localStorage, if it exists.

## createWallet

```javascript
/**
  * @param {String} password user password
  * @returns {Object} ethereumjs-wallet wallet object
  */
async createWallet (password)
```

Create a new client side wallet object without going through the signup flow. This is useful if you need a temporary, read-only wallet that is ephemeral and does not need to be persisted.

# Code Organization

The Hedgehog package is organized into several files with varying levels of control.

* <b>index.js</b> - default exports for the npm module, exports each of the src/ modules below
* <b>src/hedgehog.js</b> -  main constructor with primary consumable public facing API and high level functions
* <b>src/walletManager.js</b> - wallet management logic including localStorage, and end to end authentication functionality
* <b>src/authentication.js</b> - low level authentication functions (eg create iv, encrypt hash etc)

# Live Demo

<iframe src="https://codesandbox.io/embed/pp9zzv2n00?fontsize=14" title="Hedgehog Firebase Demo" style="width:100%;min-height:800px;height:800px;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>