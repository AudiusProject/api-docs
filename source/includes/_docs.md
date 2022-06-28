

<h1 id="api-users">users</h1>

## Get User

<a id="opIdGet User"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}`

Gets a single user by their user ID

<h3 id="get-user-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "album_count": 0,
    "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
    "cover_photo": {
      "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
      "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
    },
    "followee_count": 26,
    "follower_count": 33246,
    "does_follow_current_user": false,
    "handle": "TeamBandL",
    "id": "nlGNe",
    "is_verified": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 10,
    "is_deactivated": false,
    "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
    "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
    "supporter_count": 0,
    "supporting_count": 0
  }
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[user_response](#schemauser_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User ID from Wallet

<a id="opIdGet User ID from Wallet"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/id?associated_wallet=0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/id?associated_wallet=0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/id?associated_wallet=0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/id',
  params: {
  'associated_wallet' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/id', params={
  'associated_wallet': '0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/id', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/id?associated_wallet=0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/id", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/id`

Gets a User ID from an associated wallet address

<h3 id="get-user-id-from-wallet-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|associated_wallet|string|true|Wallet address|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "user_id": "nlGNe"
  }
}
```

<h3 id="get-user-id-from-wallet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[user_associated_wallet_response](#schemauser_associated_wallet_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Search Users

<a id="opIdSearch Users"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/search?query=Brownies&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/search?query=Brownies&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/search?query=Brownies&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/search',
  params: {
  'query' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/search', params={
  'query': 'Brownies',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/search?query=Brownies&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/search`

Search for users that match the given query

<h3 id="search-users-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|query|string|true|The search query|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
        "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
      },
      "followee_count": 26,
      "follower_count": 33246,
      "does_follow_current_user": false,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 10,
      "is_deactivated": false,
      "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
      "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
      "supporter_count": 0,
      "supporting_count": 0
    }
  ]
}
```

<h3 id="search-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[user_search](#schemauser_search)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Verify ID token

<a id="opIdVerify ID token"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/verify_token?token=type,string&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/verify_token?token=type,string&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/verify_token?token=type,string&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/verify_token',
  params: {
  'token' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/verify_token', params={
  'token': {
  "type": "string"
},  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/verify_token', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/verify_token?token=type,string&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/verify_token", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/verify_token`

Verify if the given jwt ID token was signed by the subject (user) in the payload

<h3 id="verify-id-token-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|token|string|true|JWT to verify|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "message": "Oh no! Bad request parameter token."
}
```

<h3 id="verify-id-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[verify_token](#schemaverify_token)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad input|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|ID token not valid|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User's Connected Wallets

<a id="opIdGet User's Connected Wallets"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/connected_wallets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/connected_wallets`

Get the User's ERC and SPL connected wallets

<h3 id="get-user's-connected-wallets-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "erc_wallets": [
      "0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b"
    ],
    "spl_wallets": []
  }
}
```

<h3 id="get-user's-connected-wallets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[connected_wallets_response](#schemaconnected_wallets_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User's Favorite Tracks

<a id="opIdGet User's Favorite Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/favorites',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/favorites', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/favorites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/favorites?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/favorites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/favorites`

Gets a user's favorite tracks

<h3 id="get-user's-favorite-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "favorite_item_id": "ezYKz",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe"
    }
  ]
}
```

<h3 id="get-user's-favorite-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[favorites_response](#schemafavorites_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User's Reposts

<a id="opIdGet User's Reposts"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/reposts?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/reposts?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/reposts?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/reposts',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/reposts', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/reposts', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/reposts?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/reposts", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/reposts`

Gets the given user's reposts

<h3 id="get-user's-reposts-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|user_id|string|false|The user ID of the user making the request|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "timestamp": "2021-05-03 02:48:00",
      "item_type": "track",
      "item": {
        "artwork": {
          "150x150": "https://creatornode3.audius.co/ipfs/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/150x150.jpg",
          "480x480": "https://creatornode3.audius.co/ipfs/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/480x480.jpg",
          "1000x1000": "https://creatornode3.audius.co/ipfs/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/1000x1000.jpg"
        },
        "description": null,
        "genre": "Electronic",
        "id": "y7XX7",
        "mood": "Other",
        "release_date": "Sun Mar 28 2021 11:52:35 GMT-0700",
        "remix_of": {
          "tracks": null
        },
        "repost_count": 45,
        "favorite_count": 99,
        "tags": null,
        "title": "PAULINE HERR @ BROWNIES & LEMONADE OPEN AUX 1/30",
        "user": {
          "album_count": 1,
          "bio": "producer, singer, human\n\nsocials: @paulineherr",
          "cover_photo": {
            "640x": "https://creatornode3.audius.co/ipfs/QmZXwdQDq5QDJW3W17g4n4zXVjaDGDbvuzsMWqhis61W7h/640x.jpg",
            "2000x": "https://creatornode3.audius.co/ipfs/QmZXwdQDq5QDJW3W17g4n4zXVjaDGDbvuzsMWqhis61W7h/2000x.jpg"
          },
          "followee_count": 144,
          "follower_count": 33625,
          "does_follow_current_user": false,
          "handle": "paulineherr",
          "id": "eGEam",
          "is_verified": true,
          "location": "Burbank, CA",
          "name": "Pauline Herr",
          "playlist_count": 1,
          "profile_picture": {
            "150x150": "https://creatornode3.audius.co/ipfs/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/150x150.jpg",
            "480x480": "https://creatornode3.audius.co/ipfs/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/480x480.jpg",
            "1000x1000": "https://creatornode3.audius.co/ipfs/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/1000x1000.jpg"
          },
          "repost_count": 154,
          "track_count": 36,
          "is_deactivated": false,
          "erc_wallet": "0xf568ab060acd91fe4861e52136deb08ca1f26574",
          "spl_wallet": "3DeyiqjmCAtqPUzGX6MQP2C62kKRANy7LFvcBzUEHqPc",
          "supporter_count": 0,
          "supporting_count": 0
        },
        "duration": 1708,
        "downloadable": false,
        "play_count": 874,
        "permalink": "/paulineherr/pauline-herr-brownies-lemonade-open-aux-130-316935"
      }
    }
  ]
}
```

<h3 id="get-user's-reposts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[reposts](#schemareposts)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Supporters

<a id="opIdGet Supporters"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/type,string/supporters?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/type,string/supporters?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/type,string/supporters?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/type,string/supporters',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/type,string/supporters', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/type,string/supporters', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/type,string/supporters?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/type,string/supporters", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/supporters`

Gets the supporters of the given user

<h3 id="get-supporters-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "message": "Invalid ID: 'type,string'. You have requested this URI [/v1/users/type,string/supporters] but did you mean /v1/users/<string:id>/supporters or /v1/full/users/<string:id>/supporters or /v1/users/<string:id>/supporting ?"
}
```

<h3 id="get-supporters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[get_supporters](#schemaget_supporters)|

## Get Supportings

<a id="opIdGet Supportings"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/type,string/supporting?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/type,string/supporting?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/type,string/supporting?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/type,string/supporting',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/type,string/supporting', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/type,string/supporting', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/type,string/supporting?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/type,string/supporting", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/supporting`

Gets the users that the given user supports

<h3 id="get-supportings-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "message": "Invalid ID: 'type,string'. You have requested this URI [/v1/users/type,string/supporting] but did you mean /v1/users/<string:id>/supporting or /v1/full/users/<string:id>/supporting or /v1/users/<string:id>/supporters ?"
}
```

<h3 id="get-supportings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[get_supporting](#schemaget_supporting)|

## Get User's Most Used Track Tags

<a id="opIdGet User's Most Used Track Tags"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/tags?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/tags?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/tags?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/tags',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/tags', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/tags', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/tags?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/tags", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/tags`

*Fetch most used tags in a user's tracks*

Gets the most used track tags by a user.

<h3 id="get-user's-most-used-track-tags-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|limit|integer|false|The number of items to fetch|
|user_id|string|false|The user ID of the user making the request|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    "browniesandlemonade"
  ]
}
```

<h3 id="get-user's-most-used-track-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tags_response](#schematags_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User's Tracks

<a id="opIdGet User's Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/tracks',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/tracks', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/tracks?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/tracks`

Gets the tracks created by a user using their user ID

<h3 id="get-user's-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|id|string|true|A User ID|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|user_id|string|false|The user ID of the user making the request|
|sort|string|false|Field to sort by<table class="inline"><tr><th>Available values:</th><td>date</td><td>plays</td></tr></table>|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmP47PX5vEMds7cddyz18VGo1bFSgS5jKNbpoeTdDTeBfY/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmP47PX5vEMds7cddyz18VGo1bFSgS5jKNbpoeTdDTeBfY/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmP47PX5vEMds7cddyz18VGo1bFSgS5jKNbpoeTdDTeBfY/1000x1000.jpg"
      },
      "description": "Dimension live from Brownies & Lemonade DNBNL on Nov. 10, 2021",
      "genre": "Drum & Bass",
      "id": "gJqxx",
      "mood": "Energizing",
      "release_date": "Fri Mar 04 2022 09:47:12 GMT-0800",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 2466,
      "favorite_count": 2606,
      "tags": "browniesandlemonade,drumandbass,dnbnl,dimension",
      "title": "Dimension - Brownies and Lemonade Live in LA (Live Set)",
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 33246,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 0,
        "supporting_count": 0
      },
      "duration": 4645,
      "downloadable": false,
      "play_count": 11049,
      "permalink": "/TeamBandL/dimension-brownies-and-lemonade-live-in-la-live-set-1"
    }
  ]
}
```

<h3 id="get-user's-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tracks_response](#schematracks_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

<h1 id="api-playlists">playlists</h1>

## Get Playlist

<a id="opIdGet Playlist"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/DOPRl?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/DOPRl", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}`

Get a playlist by ID

<h3 id="get-playlist-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|playlist_id|string|true|A Playlist ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot & new tracks on Audius! Prepare to buckle in for a trip through various genres featuring artists you love and new artists you are about to discover.",
      "id": "DOPRl",
      "is_album": false,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count": 1497,
      "favorite_count": 764978,
      "total_play_count": 15484,
      "user": {
        "album_count": 0,
        "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audiusannounce",
        "cover_photo": {
          "640x": "https://usermetadata.audius.co/ipfs/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
          "2000x": "https://usermetadata.audius.co/ipfs/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
        },
        "followee_count": 524,
        "follower_count": 1032085,
        "does_follow_current_user": false,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "Audius",
        "playlist_count": 4,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
          "480x480": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
          "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
        },
        "repost_count": 1520,
        "track_count": 0,
        "is_deactivated": false,
        "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
        "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
        "supporter_count": 0,
        "supporting_count": 0
      }
    }
  ]
}
```

<h3 id="get-playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[playlist_response](#schemaplaylist_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Search Playlists

<a id="opIdSearch Playlists"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/search',
  params: {
  'query' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/search', params={
  'query': 'Hot & New',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/search?query=Hot & New&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/search`

Search for a playlist

<h3 id="search-playlists-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|query|string|true|The search query|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/ipfs/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot & new tracks on Audius! Prepare to buckle in for a trip through various genres featuring artists you love and new artists you are about to discover.",
      "id": "DOPRl",
      "is_album": false,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count": 1497,
      "favorite_count": 764979,
      "total_play_count": 15478,
      "user": {
        "album_count": 0,
        "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audiusannounce",
        "cover_photo": {
          "640x": "https://usermetadata.audius.co/ipfs/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
          "2000x": "https://usermetadata.audius.co/ipfs/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
        },
        "followee_count": 524,
        "follower_count": 1032070,
        "does_follow_current_user": false,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "Audius",
        "playlist_count": 4,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
          "480x480": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
          "1000x1000": "https://usermetadata.audius.co/ipfs/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
        },
        "repost_count": 1520,
        "track_count": 0,
        "is_deactivated": false,
        "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
        "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
        "supporter_count": 0,
        "supporting_count": 0
      }
    }
  ]
}
```

<h3 id="search-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[playlist_search_result](#schemaplaylist_search_result)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Trending Playlists

<a id="opIdGet Trending Playlists"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/playlists/trending?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/playlists/trending?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/trending?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/trending',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/trending', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/trending', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/trending?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/trending", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/trending`

Gets trending playlists for a time period

<h3 id="get-trending-playlists-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|time|string|false|Calculate trending over a specified time range<table class="inline"><tr><th>Available values:</th><td>week</td><td>month</td><td>year</td><td>allTime</td></tr></table>|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode2.audius.co/ipfs/QmcF1dQdqnn5K49YTCyhR6aKX5kHqnMyVMpwi7dCBfNvsm/150x150.jpg",
        "480x480": "https://creatornode2.audius.co/ipfs/QmcF1dQdqnn5K49YTCyhR6aKX5kHqnMyVMpwi7dCBfNvsm/480x480.jpg",
        "1000x1000": "https://creatornode2.audius.co/ipfs/QmcF1dQdqnn5K49YTCyhR6aKX5kHqnMyVMpwi7dCBfNvsm/1000x1000.jpg"
      },
      "description": null,
      "id": "aAw5Q",
      "is_album": false,
      "playlist_name": "Chill Vibes  Lofi hip hop Music Deep ",
      "repost_count": 25,
      "favorite_count": 30,
      "total_play_count": 7417,
      "user": {
        "album_count": 0,
        "bio": "vibe music",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/ipfs/QmWx2iWSpAT3Z5oLSFB9DfxgppESkLBEB9oJpU1BKtPPZk/640x.jpg",
          "2000x": "https://creatornode2.audius.co/ipfs/QmWx2iWSpAT3Z5oLSFB9DfxgppESkLBEB9oJpU1BKtPPZk/2000x.jpg"
        },
        "followee_count": 17,
        "follower_count": 117,
        "does_follow_current_user": false,
        "handle": "vibemusic",
        "id": "7AG6P",
        "is_verified": false,
        "location": null,
        "name": "vibemusic",
        "playlist_count": 4,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/ipfs/QmSbpL8UxnTgXJF6exg1t3JpnA7QM1YnTF2UEoK5CvNhTQ/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/ipfs/QmSbpL8UxnTgXJF6exg1t3JpnA7QM1YnTF2UEoK5CvNhTQ/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/ipfs/QmSbpL8UxnTgXJF6exg1t3JpnA7QM1YnTF2UEoK5CvNhTQ/1000x1000.jpg"
        },
        "repost_count": 179,
        "track_count": 3,
        "is_deactivated": false,
        "erc_wallet": "0xa83604a5a9bae53def1f4325f048d86afed13a6e",
        "spl_wallet": "XAcjNmSrsH8JHXynMhDF9erRpxgVN26g8zs3p6dUCGa",
        "supporter_count": 0,
        "supporting_count": 0
      }
    }
  ]
}
```

<h3 id="get-trending-playlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[trending_playlists_response](#schematrending_playlists_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Playlist Tracks

<a id="opIdGet Playlist Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/playlists/DOPRl/tracks',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/playlists/DOPRl/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/playlists/DOPRl/tracks?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/playlists/DOPRl/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}/tracks`

Fetch tracks within a playlist.

<h3 id="get-playlist-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|playlist_id|string|true|A Playlist ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode3.audius.co/ipfs/QmV1pQZdfmrMFG2E4GCPvTcC3JVXUejfdZ4W2rSa3jTjsZ/150x150.jpg",
        "480x480": "https://creatornode3.audius.co/ipfs/QmV1pQZdfmrMFG2E4GCPvTcC3JVXUejfdZ4W2rSa3jTjsZ/480x480.jpg",
        "1000x1000": "https://creatornode3.audius.co/ipfs/QmV1pQZdfmrMFG2E4GCPvTcC3JVXUejfdZ4W2rSa3jTjsZ/1000x1000.jpg"
      },
      "description": null,
      "genre": "Hip-Hop/Rap",
      "id": "W66jo",
      "mood": "Gritty",
      "release_date": "Fri Jun 24 2022 08:14:47 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 38,
      "favorite_count": 53,
      "tags": null,
      "title": "TAXIN",
      "user": {
        "album_count": 1,
        "bio": "$INGLES COLLECTION\nhttps://linktr.ee/DarnellW\n\nEach collector will receive 10% of the music royalties via UnitedMasters Splitpay. news.unitedmasters.com/blog/splitpay (Does not include licensing rights)",
        "cover_photo": {
          "640x": "https://creatornode3.audius.co/ipfs/QmdttfmkepBmhRN1SXN1HahhyURGkZTQvfvvnHFjFiTxS1/640x.jpg",
          "2000x": "https://creatornode3.audius.co/ipfs/QmdttfmkepBmhRN1SXN1HahhyURGkZTQvfvvnHFjFiTxS1/2000x.jpg"
        },
        "followee_count": 28,
        "follower_count": 28866,
        "does_follow_current_user": false,
        "handle": "DarnellWilliams",
        "id": "6EEYG",
        "is_verified": true,
        "location": "Los Angeles",
        "name": "Darnell William$",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://creatornode3.audius.co/ipfs/QmZJibTCb9ti4ZRr8myKcLXeE2yFMmvu7WPYZ7Nghp4yN3/150x150.jpg",
          "480x480": "https://creatornode3.audius.co/ipfs/QmZJibTCb9ti4ZRr8myKcLXeE2yFMmvu7WPYZ7Nghp4yN3/480x480.jpg",
          "1000x1000": "https://creatornode3.audius.co/ipfs/QmZJibTCb9ti4ZRr8myKcLXeE2yFMmvu7WPYZ7Nghp4yN3/1000x1000.jpg"
        },
        "repost_count": 2,
        "track_count": 19,
        "is_deactivated": false,
        "erc_wallet": "0x1a994e5b35526111e7aa92fece1815f5099c72b2",
        "spl_wallet": "5rnytbVtJiV1fqkUPHZhFngPsmEFgjpjJWSg2oLCt2ut",
        "supporter_count": 0,
        "supporting_count": 0
      },
      "duration": 166,
      "downloadable": false,
      "play_count": 3626,
      "permalink": "/DarnellWilliams/taxin"
    }
  ]
}
```

<h3 id="get-playlist-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[playlist_tracks_response](#schemaplaylist_tracks_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

<h1 id="api-tracks">tracks</h1>

## Get Track

<a id="opIdGet Track"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks/D7KyD?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/D7KyD?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}`

Gets a track by ID

<h3 id="get-track-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|track_id|string|true|A Track ID|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "artwork": {
      "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
    "genre": "Electronic",
    "id": "D7KyD",
    "mood": "Fiery",
    "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
    "remix_of": {
      "tracks": null
    },
    "repost_count": 397,
    "favorite_count": 867,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "user": {
      "album_count": 0,
      "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
        "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
      },
      "followee_count": 26,
      "follower_count": 33246,
      "does_follow_current_user": false,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 10,
      "is_deactivated": false,
      "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
      "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
      "supporter_count": 0,
      "supporting_count": 0
    },
    "duration": 5265,
    "downloadable": false,
    "play_count": 333474,
    "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725"
  }
}
```

<h3 id="get-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[track_response](#schematrack_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Bulk Tracks

<a id="opIdGet Bulk Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks?permalink=/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tracks?permalink=/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks?permalink=/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks',
  params: {
  'permalink' => 'array[string]',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks', params={
  'permalink': '/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks?permalink=/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks`

Gets a list of tracks using their IDs or permalinks

<h3 id="get-bulk-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|permalink|array[string]|false|The permalink of the track(s)|
|id|array[string]|false|The ID of the track(s)|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 397,
      "favorite_count": 867,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 33246,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 0,
        "supporting_count": 0
      },
      "duration": 5265,
      "downloadable": false,
      "play_count": 333474,
      "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725"
    }
  ]
}
```

<h3 id="get-bulk-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tracks_response](#schematracks_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Search Tracks

<a id="opIdSearch Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/search',
  params: {
  'query' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/search', params={
  'query': 'baauer b2b',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/search', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/search?query=baauer b2b&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/search`

Search for a track or tracks

<h3 id="search-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|query|string|true|The search query|
|only_downloadable|string|false|Return only downloadable tracks|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 397,
      "favorite_count": 866,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "user": {
        "album_count": 0,
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://creatornode.audius.co/ipfs/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 33246,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://creatornode.audius.co/ipfs/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 0,
        "supporting_count": 0
      },
      "duration": 5265,
      "downloadable": false,
      "play_count": 333472,
      "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725"
    }
  ]
}
```

<h3 id="search-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[track_search](#schematrack_search)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Trending Tracks

<a id="opIdGet Trending Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks/trending?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tracks/trending?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/trending?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/trending',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tracks/trending', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/trending', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/trending?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/trending", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/trending`

Gets the top 100 trending (most popular) tracks on Audius

<h3 id="get-trending-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|genre|string|false|Filter trending to a specified genre|
|time|string|false|Calculate trending over a specified time range<table class="inline"><tr><th>Available values:</th><td>week</td><td>month</td><td>year</td><td>allTime</td></tr></table>|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode2.audius.co/ipfs/QmebRQmCE23W9m9ojFQQkYkwofks61hjB91Y4T9GntLN7k/150x150.jpg",
        "480x480": "https://creatornode2.audius.co/ipfs/QmebRQmCE23W9m9ojFQQkYkwofks61hjB91Y4T9GntLN7k/480x480.jpg",
        "1000x1000": "https://creatornode2.audius.co/ipfs/QmebRQmCE23W9m9ojFQQkYkwofks61hjB91Y4T9GntLN7k/1000x1000.jpg"
      },
      "description": "Listen: http://bit.ly/_OffTheGround",
      "genre": "Drum & Bass",
      "id": "bmb3k",
      "mood": "Energizing",
      "release_date": "Tue Jun 21 2022 13:36:53 GMT+0100",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 58,
      "favorite_count": 119,
      "tags": "subfocus,offtheground,drumandbass,dnb",
      "title": "Sub Focus - Off The Ground",
      "user": {
        "album_count": 0,
        "bio": "Sub Focus",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/ipfs/QmWkQMQfdEMZ3GLH29kvfoewWQssdnJPnNfr39uLeBFfL1/640x.jpg",
          "2000x": "https://creatornode2.audius.co/ipfs/QmWkQMQfdEMZ3GLH29kvfoewWQssdnJPnNfr39uLeBFfL1/2000x.jpg"
        },
        "followee_count": 10,
        "follower_count": 1761,
        "does_follow_current_user": false,
        "handle": "subfocus",
        "id": "G0yMb",
        "is_verified": true,
        "location": "London, UK",
        "name": "SUB FOCUS",
        "playlist_count": 3,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/ipfs/QmYR9cNPMNfiTxnsmiRBpYRPRmDn2GKRSHKrQGK3RLDXF2/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/ipfs/QmYR9cNPMNfiTxnsmiRBpYRPRmDn2GKRSHKrQGK3RLDXF2/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/ipfs/QmYR9cNPMNfiTxnsmiRBpYRPRmDn2GKRSHKrQGK3RLDXF2/1000x1000.jpg"
        },
        "repost_count": 0,
        "track_count": 13,
        "is_deactivated": false,
        "erc_wallet": "0xcf003cfcb1a34002419d1a10e786e8b4b57ceaac",
        "spl_wallet": "FatcZPM9wqWrFnRT3omtxPQHvwV3bFM3e48cz8PCTExA",
        "supporter_count": 0,
        "supporting_count": 0
      },
      "duration": 243,
      "downloadable": false,
      "play_count": 9066,
      "permalink": "/subfocus/sub-focus-off-the-ground"
    }
  ]
}
```

<h3 id="get-trending-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tracks_response](#schematracks_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Stream Track

<a id="opIdStream Track"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP

```

```http
GET AUDIUS_API_HOST/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

fetch('AUDIUS_API_HOST/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/D7KyD/stream',
  params: {
  'app_name' => 'string'
}

p JSON.parse(result)

```

```python
import requests

r = requests.get('AUDIUS_API_HOST/v1/tracks/D7KyD/stream', params={
  'app_name': 'EXAMPLEAPP'
})

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/D7KyD/stream', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/D7KyD/stream?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/D7KyD/stream", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}/stream`

*Get the streamable MP3 file of a track*

This endpoint accepts the Range header for streaming.
<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests">https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests</a>

<h3 id="stream-track-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|track_id|string|true|A Track ID|
|app_name|string|false|Your app name|

<h3 id="stream-track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|216|Unknown|Partial content|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|416|[Range Not Satisfiable](https://tools.ietf.org/html/rfc7233#section-4.4)|Content range invalid|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

<h1 id="api-tips">tips</h1>

## Get Tips

<a id="opIdGet Tips"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tips?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tips?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tips?app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/tips',
  params: {
  'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/tips', params={
  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tips', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/tips?app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tips", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tips`

Gets the most recent tips on the network

<h3 id="get-tips-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|user_id|string|false|The user ID of the user making the request|
|receiver_min_followers|integer|false|Only include tips to recipients that have this many followers|
|receiver_is_verified|boolean|false|Only include tips to recipients that are verified|
|current_user_follows|string|false|Only include tips involving the user's followers in the given capacity. Requires user_id to be set.<table class="inline"><tr><th>Available values:</th><td>sender</td><td>receiver</td><td>sender_or_receiver</td></tr></table>|
|unique_by|string|false|Only include the most recent tip for a user was involved in the given capacity.<table class="inline"><tr><th>Available values:</th><td>sender</td><td>receiver</td></tr></table>|
|app_name|string|false|Your app name|

#### Detailed descriptions

**unique_by**: Only include the most recent tip for a user was involved in the given capacity.

Eg. 'sender' will ensure that each tip returned has a unique sender, using the most recent tip sent by a user if that user has sent multiple tips.
    

> Example Response

```json
{
  "data": [
    {
      "amount": "6000000000000000000",
      "sender": {
        "album_count": 0,
        "bio": "Bebig Music is a record label part of treinta3tres records dedicated to dance commercial music.\nBebig Music is Dance!\nbebigmusic@gmail.com",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/ipfs/QmQRATHCJEiwsCu4f1rGjPefF8fcwYnGzv2wuiKFnA3hv2/640x.jpg",
          "2000x": "https://creatornode2.audius.co/ipfs/QmQRATHCJEiwsCu4f1rGjPefF8fcwYnGzv2wuiKFnA3hv2/2000x.jpg"
        },
        "followee_count": 57,
        "follower_count": 69,
        "does_follow_current_user": false,
        "handle": "bebigmusic",
        "id": "aW8mr",
        "is_verified": false,
        "location": "Barcelona",
        "name": "Bebig Music",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/ipfs/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/ipfs/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/ipfs/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/1000x1000.jpg"
        },
        "repost_count": 70,
        "track_count": 10,
        "is_deactivated": false,
        "erc_wallet": "0xcdc88b59fc7f2ea01ff6781bae25c1a59a2378cd",
        "spl_wallet": "3EDj16wey6nfw26LhEXTyVmCnvvAMw4ruHfc76kWKkq8",
        "supporter_count": 0,
        "supporting_count": 1
      },
      "receiver": {
        "album_count": 5,
        "bio": "Record label based in BCN serving cool house music to the world\ntreinta3tres\nBebig Music\nMassivefunk\ninfo@treinta3tres.com",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/ipfs/QmdHB2wg2inSdiUMYd693dxFB6qcgHnF4REoZQcsUogMJj/640x.jpg",
          "2000x": "https://creatornode2.audius.co/ipfs/QmdHB2wg2inSdiUMYd693dxFB6qcgHnF4REoZQcsUogMJj/2000x.jpg"
        },
        "followee_count": 13,
        "follower_count": 83,
        "does_follow_current_user": false,
        "handle": "treinta3tres",
        "id": "lzkyZ",
        "is_verified": false,
        "location": "Barcelona",
        "name": "treinta3tres",
        "playlist_count": 3,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/ipfs/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/ipfs/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/ipfs/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/1000x1000.jpg"
        },
        "repost_count": 21,
        "track_count": 52,
        "is_deactivated": false,
        "erc_wallet": "0xa18d959231ca5728fefbf7b45ddc87f44e0832db",
        "spl_wallet": "3Mm5mdBT3jtRifHpxBfJavRXyfM4G4kbV7KKrX2nj12M",
        "supporter_count": 2,
        "supporting_count": 0
      },
      "created_at": "2022-06-27 11:53:12"
    }
  ]
}
```

<h3 id="get-tips-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[get_tips_response](#schemaget_tips_response)|

<h1 id="api-resolve">resolve</h1>

## Resolve

<a id="opIdResolve"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'AUDIUS_API_HOST/v1/resolve',
  params: {
  'url' => 'string',
'app_name' => 'string'
}, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('AUDIUS_API_HOST/v1/resolve', params={
  'url': 'https://audius.co/camouflybeats/hypermantra-86216',  'app_name': 'EXAMPLEAPP'
}, headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','AUDIUS_API_HOST/v1/resolve', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("AUDIUS_API_HOST/v1/resolve?url=https://audius.co/camouflybeats/hypermantra-86216&app_name=EXAMPLEAPP");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/resolve", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /resolve`

*Resolves and redirects a provided Audius app URL to the API resource URL it represents*

This endpoint allows you to lookup and access API resources when you only know the
audius.co URL.
Tracks, Playlists, and Users are supported.

<h3 id="resolve-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|url|string|true|URL to resolve. Either fully formed URL (https://audius.co) or just the absolute path|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "artwork": {
      "150x150": "https://creatornode.audius.co/ipfs/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/150x150.jpg",
      "480x480": "https://creatornode.audius.co/ipfs/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/480x480.jpg",
      "1000x1000": "https://creatornode.audius.co/ipfs/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/1000x1000.jpg"
    },
    "description": "HYPERMANTRA.\n1 play, 7 chapters, no breaks.\n\nget it here: http://tiny.cc/hypermantra\n\npremiered on Ä Live 8/22.\n\ncredits: ilian, the salsoul orchestra, brian bennett, 100% pure poison, you & explosion band, yuji ohno, frank ocean.",
    "genre": "Electronic",
    "id": "V4W8r",
    "mood": "Yearning",
    "release_date": "Mon Aug 24 2020 21:08:36 GMT+0200",
    "remix_of": {
      "tracks": null
    },
    "repost_count": 78,
    "favorite_count": 171,
    "tags": null,
    "title": "HYPERMANTRA",
    "user": {
      "album_count": 0,
      "bio": "kawaii bounce 🌟\n\nmy sample pack: gum.co/camocandybox1\n\nheader by paprikaworm",
      "cover_photo": {
        "640x": "https://creatornode.audius.co/ipfs/QmS3mXLjrmm5i61CWzJHSmQcwKPNQw92rTWC36nCsqF3uU/640x.jpg",
        "2000x": "https://creatornode.audius.co/ipfs/QmS3mXLjrmm5i61CWzJHSmQcwKPNQw92rTWC36nCsqF3uU/2000x.jpg"
      },
      "followee_count": 204,
      "follower_count": 16992,
      "does_follow_current_user": false,
      "handle": "camouflybeats",
      "id": "nd6JD",
      "is_verified": false,
      "location": "",
      "name": "camoufly 🌟",
      "playlist_count": 4,
      "profile_picture": {
        "150x150": "https://creatornode.audius.co/ipfs/QmZDEwMQbKFAgGMbM6YLRvvnqy1SjVqK6k7yPks4sdCEh4/150x150.jpg",
        "480x480": "https://creatornode.audius.co/ipfs/QmZDEwMQbKFAgGMbM6YLRvvnqy1SjVqK6k7yPks4sdCEh4/480x480.jpg",
        "1000x1000": "https://creatornode.audius.co/ipfs/QmZDEwMQbKFAgGMbM6YLRvvnqy1SjVqK6k7yPks4sdCEh4/1000x1000.jpg"
      },
      "repost_count": 157,
      "track_count": 64,
      "is_deactivated": false,
      "erc_wallet": "0xa65a69a3c38b55b9a3f83266bcc36fe6950cd85f",
      "spl_wallet": "2bnJKYk6WnseedNWkDEACmS5563uxLCrSRAsQqora947",
      "supporter_count": 0,
      "supporting_count": 0
    },
    "duration": 1741,
    "downloadable": false,
    "play_count": 12867,
    "permalink": "/camouflybeats/hypermantra-86216"
  }
}
```

<h3 id="resolve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|
|302|[Found](https://tools.ietf.org/html/rfc7231#section-6.4.3)|Internal redirect|None|

<h3 id="resolve-responseschema">Response Schema</h3>

# Schemas

The following are examples of response formats you can expect to receive from the API.

<a id="schemauser_response"></a>
<a id="schema_user_response"></a>
<a id="tocSuser_response"></a>
<a id="tocsuser_response"></a>
<h2 id="tocS_user_response">user_response</h2>

```json
{
  "properties": {
    "data": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user](#schemauser)|false|none|none|

<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>
<h2 id="tocS_user">user</h2>

```json
{
  "required": [
    "album_count",
    "followee_count",
    "follower_count",
    "handle",
    "id",
    "is_deactivated",
    "is_verified",
    "name",
    "playlist_count",
    "repost_count",
    "spl_wallet",
    "supporter_count",
    "supporting_count",
    "track_count"
  ],
  "properties": {
    "album_count": {
      "type": "integer"
    },
    "bio": {
      "type": "string"
    },
    "cover_photo": {
      "properties": {
        "640x": {
          "type": "string"
        },
        "2000x": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "followee_count": {
      "type": "integer"
    },
    "follower_count": {
      "type": "integer"
    },
    "does_follow_current_user": {
      "type": "boolean"
    },
    "handle": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "is_verified": {
      "type": "boolean"
    },
    "location": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "playlist_count": {
      "type": "integer"
    },
    "profile_picture": {
      "properties": {
        "150x150": {
          "type": "string"
        },
        "480x480": {
          "type": "string"
        },
        "1000x1000": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "repost_count": {
      "type": "integer"
    },
    "track_count": {
      "type": "integer"
    },
    "is_deactivated": {
      "type": "boolean"
    },
    "erc_wallet": {
      "type": "string"
    },
    "spl_wallet": {
      "type": "string"
    },
    "supporter_count": {
      "type": "integer"
    },
    "supporting_count": {
      "type": "integer"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_count|integer|true|none|none|
|bio|string|false|none|none|
|cover_photo|[cover_photo](#schemacover_photo)|false|none|none|
|followee_count|integer|true|none|none|
|follower_count|integer|true|none|none|
|does_follow_current_user|boolean|false|none|none|
|handle|string|true|none|none|
|id|string|true|none|none|
|is_verified|boolean|true|none|none|
|location|string|false|none|none|
|name|string|true|none|none|
|playlist_count|integer|true|none|none|
|profile_picture|[profile_picture](#schemaprofile_picture)|false|none|none|
|repost_count|integer|true|none|none|
|track_count|integer|true|none|none|
|is_deactivated|boolean|true|none|none|
|erc_wallet|string|false|none|none|
|spl_wallet|string|true|none|none|
|supporter_count|integer|true|none|none|
|supporting_count|integer|true|none|none|

<a id="schemacover_photo"></a>
<a id="schema_cover_photo"></a>
<a id="tocScover_photo"></a>
<a id="tocscover_photo"></a>
<h2 id="tocS_cover_photo">cover_photo</h2>

```json
{
  "properties": {
    "640x": {
      "type": "string"
    },
    "2000x": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|640x|string|false|none|none|
|2000x|string|false|none|none|

<a id="schemaprofile_picture"></a>
<a id="schema_profile_picture"></a>
<a id="tocSprofile_picture"></a>
<a id="tocsprofile_picture"></a>
<h2 id="tocS_profile_picture">profile_picture</h2>

```json
{
  "properties": {
    "150x150": {
      "type": "string"
    },
    "480x480": {
      "type": "string"
    },
    "1000x1000": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|150x150|string|false|none|none|
|480x480|string|false|none|none|
|1000x1000|string|false|none|none|

<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>
<h2 id="tocS_tracks_response">tracks_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "duration",
          "favorite_count",
          "id",
          "play_count",
          "repost_count",
          "title",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "genre": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "mood": {
            "type": "string"
          },
          "release_date": {
            "type": "string"
          },
          "remix_of": {
            "properties": {
              "tracks": {
                "type": "array",
                "items": {
                  "required": [
                    "parent_track_id"
                  ],
                  "properties": {
                    "parent_track_id": {
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              }
            },
            "type": "object"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "tags": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "duration": {
            "type": "integer"
          },
          "downloadable": {
            "type": "boolean"
          },
          "play_count": {
            "type": "integer"
          },
          "permalink": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Track](#schematrack)]|false|none|none|

<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>
<h2 id="tocS_Track">Track</h2>

```json
{
  "required": [
    "duration",
    "favorite_count",
    "id",
    "play_count",
    "repost_count",
    "title",
    "user"
  ],
  "properties": {
    "artwork": {
      "properties": {
        "150x150": {
          "type": "string"
        },
        "480x480": {
          "type": "string"
        },
        "1000x1000": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "description": {
      "type": "string"
    },
    "genre": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "mood": {
      "type": "string"
    },
    "release_date": {
      "type": "string"
    },
    "remix_of": {
      "properties": {
        "tracks": {
          "type": "array",
          "items": {
            "required": [
              "parent_track_id"
            ],
            "properties": {
              "parent_track_id": {
                "type": "string"
              }
            },
            "type": "object"
          }
        }
      },
      "type": "object"
    },
    "repost_count": {
      "type": "integer"
    },
    "favorite_count": {
      "type": "integer"
    },
    "tags": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "user": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    },
    "duration": {
      "type": "integer"
    },
    "downloadable": {
      "type": "boolean"
    },
    "play_count": {
      "type": "integer"
    },
    "permalink": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artwork|[track_artwork](#schematrack_artwork)|false|none|none|
|description|string|false|none|none|
|genre|string|false|none|none|
|id|string|true|none|none|
|mood|string|false|none|none|
|release_date|string|false|none|none|
|remix_of|[remix_parent](#schemaremix_parent)|false|none|none|
|repost_count|integer|true|none|none|
|favorite_count|integer|true|none|none|
|tags|string|false|none|none|
|title|string|true|none|none|
|user|[user](#schemauser)|true|none|none|
|duration|integer|true|none|none|
|downloadable|boolean|false|none|none|
|play_count|integer|true|none|none|
|permalink|string|false|none|none|

<a id="schematrack_artwork"></a>
<a id="schema_track_artwork"></a>
<a id="tocStrack_artwork"></a>
<a id="tocstrack_artwork"></a>
<h2 id="tocS_track_artwork">track_artwork</h2>

```json
{
  "properties": {
    "150x150": {
      "type": "string"
    },
    "480x480": {
      "type": "string"
    },
    "1000x1000": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|150x150|string|false|none|none|
|480x480|string|false|none|none|
|1000x1000|string|false|none|none|

<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>
<h2 id="tocS_remix_parent">remix_parent</h2>

```json
{
  "properties": {
    "tracks": {
      "type": "array",
      "items": {
        "required": [
          "parent_track_id"
        ],
        "properties": {
          "parent_track_id": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[track_element](#schematrack_element)]|false|none|none|

<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>
<h2 id="tocS_track_element">track_element</h2>

```json
{
  "required": [
    "parent_track_id"
  ],
  "properties": {
    "parent_track_id": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent_track_id|string|true|none|none|

<a id="schemareposts"></a>
<a id="schema_reposts"></a>
<a id="tocSreposts"></a>
<a id="tocsreposts"></a>
<h2 id="tocS_reposts">reposts</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "properties": {
          "timestamp": {
            "type": "string"
          },
          "item_type": {
            "type": "object"
          },
          "item": {
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[activity](#schemaactivity)]|false|none|none|

<a id="schemaactivity"></a>
<a id="schema_activity"></a>
<a id="tocSactivity"></a>
<a id="tocsactivity"></a>
<h2 id="tocS_activity">activity</h2>

```json
{
  "properties": {
    "timestamp": {
      "type": "string"
    },
    "item_type": {
      "type": "object"
    },
    "item": {
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|string|false|none|none|
|item_type|object|false|none|none|
|item|object|false|none|none|

<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>
<h2 id="tocS_favorites_response">favorites_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "favorite_item_id",
          "favorite_type",
          "user_id"
        ],
        "properties": {
          "favorite_item_id": {
            "type": "string"
          },
          "favorite_type": {
            "type": "string"
          },
          "user_id": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[favorite](#schemafavorite)]|false|none|none|

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>
<h2 id="tocS_favorite">favorite</h2>

```json
{
  "required": [
    "favorite_item_id",
    "favorite_type",
    "user_id"
  ],
  "properties": {
    "favorite_item_id": {
      "type": "string"
    },
    "favorite_type": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|favorite_item_id|string|true|none|none|
|favorite_type|string|true|none|none|
|user_id|string|true|none|none|

<a id="schematags_response"></a>
<a id="schema_tags_response"></a>
<a id="tocStags_response"></a>
<a id="tocstags_response"></a>
<h2 id="tocS_tags_response">tags_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[string]|false|none|none|

<a id="schemauser_search"></a>
<a id="schema_user_search"></a>
<a id="tocSuser_search"></a>
<a id="tocsuser_search"></a>
<h2 id="tocS_user_search">user_search</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "album_count",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "bio": {
            "type": "string"
          },
          "cover_photo": {
            "properties": {
              "640x": {
                "type": "string"
              },
              "2000x": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "followee_count": {
            "type": "integer"
          },
          "follower_count": {
            "type": "integer"
          },
          "does_follow_current_user": {
            "type": "boolean"
          },
          "handle": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "is_verified": {
            "type": "boolean"
          },
          "location": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "playlist_count": {
            "type": "integer"
          },
          "profile_picture": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "repost_count": {
            "type": "integer"
          },
          "track_count": {
            "type": "integer"
          },
          "is_deactivated": {
            "type": "boolean"
          },
          "erc_wallet": {
            "type": "string"
          },
          "spl_wallet": {
            "type": "string"
          },
          "supporter_count": {
            "type": "integer"
          },
          "supporting_count": {
            "type": "integer"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[user](#schemauser)]|false|none|none|

<a id="schemauser_associated_wallet_response"></a>
<a id="schema_user_associated_wallet_response"></a>
<a id="tocSuser_associated_wallet_response"></a>
<a id="tocsuser_associated_wallet_response"></a>
<h2 id="tocS_user_associated_wallet_response">user_associated_wallet_response</h2>

```json
{
  "properties": {
    "data": {
      "properties": {
        "user_id": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[encoded_user_id](#schemaencoded_user_id)|false|none|none|

<a id="schemaencoded_user_id"></a>
<a id="schema_encoded_user_id"></a>
<a id="tocSencoded_user_id"></a>
<a id="tocsencoded_user_id"></a>
<h2 id="tocS_encoded_user_id">encoded_user_id</h2>

```json
{
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|string|false|none|none|

<a id="schemaconnected_wallets_response"></a>
<a id="schema_connected_wallets_response"></a>
<a id="tocSconnected_wallets_response"></a>
<a id="tocsconnected_wallets_response"></a>
<h2 id="tocS_connected_wallets_response">connected_wallets_response</h2>

```json
{
  "properties": {
    "data": {
      "required": [
        "erc_wallets",
        "spl_wallets"
      ],
      "properties": {
        "erc_wallets": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "spl_wallets": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[connected_wallets](#schemaconnected_wallets)|false|none|none|

<a id="schemaconnected_wallets"></a>
<a id="schema_connected_wallets"></a>
<a id="tocSconnected_wallets"></a>
<a id="tocsconnected_wallets"></a>
<h2 id="tocS_connected_wallets">connected_wallets</h2>

```json
{
  "required": [
    "erc_wallets",
    "spl_wallets"
  ],
  "properties": {
    "erc_wallets": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "spl_wallets": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|erc_wallets|[string]|true|none|none|
|spl_wallets|[string]|true|none|none|

<a id="schemaget_supporters"></a>
<a id="schema_get_supporters"></a>
<a id="tocSget_supporters"></a>
<a id="tocsget_supporters"></a>
<h2 id="tocS_get_supporters">get_supporters</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "amount",
          "rank",
          "sender"
        ],
        "properties": {
          "rank": {
            "type": "integer"
          },
          "amount": {
            "type": "string"
          },
          "sender": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[supporter](#schemasupporter)]|false|none|none|

<a id="schemasupporter"></a>
<a id="schema_supporter"></a>
<a id="tocSsupporter"></a>
<a id="tocssupporter"></a>
<h2 id="tocS_supporter">supporter</h2>

```json
{
  "required": [
    "amount",
    "rank",
    "sender"
  ],
  "properties": {
    "rank": {
      "type": "integer"
    },
    "amount": {
      "type": "string"
    },
    "sender": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rank|integer|true|none|none|
|amount|string|true|none|none|
|sender|[user](#schemauser)|true|none|none|

<a id="schemaget_supporting"></a>
<a id="schema_get_supporting"></a>
<a id="tocSget_supporting"></a>
<a id="tocsget_supporting"></a>
<h2 id="tocS_get_supporting">get_supporting</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "amount",
          "rank",
          "receiver"
        ],
        "properties": {
          "rank": {
            "type": "integer"
          },
          "amount": {
            "type": "string"
          },
          "receiver": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[supporting](#schemasupporting)]|false|none|none|

<a id="schemasupporting"></a>
<a id="schema_supporting"></a>
<a id="tocSsupporting"></a>
<a id="tocssupporting"></a>
<h2 id="tocS_supporting">supporting</h2>

```json
{
  "required": [
    "amount",
    "rank",
    "receiver"
  ],
  "properties": {
    "rank": {
      "type": "integer"
    },
    "amount": {
      "type": "string"
    },
    "receiver": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rank|integer|true|none|none|
|amount|string|true|none|none|
|receiver|[user](#schemauser)|true|none|none|

<a id="schemaverify_token"></a>
<a id="schema_verify_token"></a>
<a id="tocSverify_token"></a>
<a id="tocsverify_token"></a>
<h2 id="tocS_verify_token">verify_token</h2>

```json
{
  "properties": {
    "data": {
      "required": [
        "email",
        "handle",
        "iat",
        "name",
        "sub",
        "userId",
        "verified"
      ],
      "properties": {
        "userId": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "handle": {
          "type": "string"
        },
        "verified": {
          "type": "boolean"
        },
        "profilePicture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            },
            "misc": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "sub": {
          "type": "string"
        },
        "iat": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[decoded_user_token](#schemadecoded_user_token)|false|none|none|

<a id="schemadecoded_user_token"></a>
<a id="schema_decoded_user_token"></a>
<a id="tocSdecoded_user_token"></a>
<a id="tocsdecoded_user_token"></a>
<h2 id="tocS_decoded_user_token">decoded_user_token</h2>

```json
{
  "required": [
    "email",
    "handle",
    "iat",
    "name",
    "sub",
    "userId",
    "verified"
  ],
  "properties": {
    "userId": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "handle": {
      "type": "string"
    },
    "verified": {
      "type": "boolean"
    },
    "profilePicture": {
      "properties": {
        "150x150": {
          "type": "string"
        },
        "480x480": {
          "type": "string"
        },
        "1000x1000": {
          "type": "string"
        },
        "misc": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "sub": {
      "type": "string"
    },
    "iat": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|email|string|true|none|none|
|name|string|true|none|none|
|handle|string|true|none|none|
|verified|boolean|true|none|none|
|profilePicture|[profilePicture](#schemaprofilepicture)|false|none|none|
|sub|string|true|none|none|
|iat|string|true|none|none|

<a id="schemaprofilepicture"></a>
<a id="schema_profilePicture"></a>
<a id="tocSprofilepicture"></a>
<a id="tocsprofilepicture"></a>
<h2 id="tocS_profilePicture">profilePicture</h2>

```json
{
  "properties": {
    "150x150": {
      "type": "string"
    },
    "480x480": {
      "type": "string"
    },
    "1000x1000": {
      "type": "string"
    },
    "misc": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|150x150|string|false|none|none|
|480x480|string|false|none|none|
|1000x1000|string|false|none|none|
|misc|string|false|none|none|

<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>
<h2 id="tocS_playlist_response">playlist_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "favorite_count",
          "id",
          "is_album",
          "playlist_name",
          "repost_count",
          "total_play_count",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "is_album": {
            "type": "boolean"
          },
          "playlist_name": {
            "type": "string"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "total_play_count": {
            "type": "integer"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[playlist](#schemaplaylist)]|false|none|none|

<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>
<h2 id="tocS_playlist">playlist</h2>

```json
{
  "required": [
    "favorite_count",
    "id",
    "is_album",
    "playlist_name",
    "repost_count",
    "total_play_count",
    "user"
  ],
  "properties": {
    "artwork": {
      "properties": {
        "150x150": {
          "type": "string"
        },
        "480x480": {
          "type": "string"
        },
        "1000x1000": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "description": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "is_album": {
      "type": "boolean"
    },
    "playlist_name": {
      "type": "string"
    },
    "repost_count": {
      "type": "integer"
    },
    "favorite_count": {
      "type": "integer"
    },
    "total_play_count": {
      "type": "integer"
    },
    "user": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artwork|[playlist_artwork](#schemaplaylist_artwork)|false|none|none|
|description|string|false|none|none|
|id|string|true|none|none|
|is_album|boolean|true|none|none|
|playlist_name|string|true|none|none|
|repost_count|integer|true|none|none|
|favorite_count|integer|true|none|none|
|total_play_count|integer|true|none|none|
|user|[user](#schemauser)|true|none|none|

<a id="schemaplaylist_artwork"></a>
<a id="schema_playlist_artwork"></a>
<a id="tocSplaylist_artwork"></a>
<a id="tocsplaylist_artwork"></a>
<h2 id="tocS_playlist_artwork">playlist_artwork</h2>

```json
{
  "properties": {
    "150x150": {
      "type": "string"
    },
    "480x480": {
      "type": "string"
    },
    "1000x1000": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|150x150|string|false|none|none|
|480x480|string|false|none|none|
|1000x1000|string|false|none|none|

<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>
<h2 id="tocS_playlist_tracks_response">playlist_tracks_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "duration",
          "favorite_count",
          "id",
          "play_count",
          "repost_count",
          "title",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "genre": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "mood": {
            "type": "string"
          },
          "release_date": {
            "type": "string"
          },
          "remix_of": {
            "properties": {
              "tracks": {
                "type": "array",
                "items": {
                  "required": [
                    "parent_track_id"
                  ],
                  "properties": {
                    "parent_track_id": {
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              }
            },
            "type": "object"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "tags": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "duration": {
            "type": "integer"
          },
          "downloadable": {
            "type": "boolean"
          },
          "play_count": {
            "type": "integer"
          },
          "permalink": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Track](#schematrack)]|false|none|none|

<a id="schemaplaylist_search_result"></a>
<a id="schema_playlist_search_result"></a>
<a id="tocSplaylist_search_result"></a>
<a id="tocsplaylist_search_result"></a>
<h2 id="tocS_playlist_search_result">playlist_search_result</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "favorite_count",
          "id",
          "is_album",
          "playlist_name",
          "repost_count",
          "total_play_count",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "is_album": {
            "type": "boolean"
          },
          "playlist_name": {
            "type": "string"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "total_play_count": {
            "type": "integer"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[playlist](#schemaplaylist)]|false|none|none|

<a id="schematrending_playlists_response"></a>
<a id="schema_trending_playlists_response"></a>
<a id="tocStrending_playlists_response"></a>
<a id="tocstrending_playlists_response"></a>
<h2 id="tocS_trending_playlists_response">trending_playlists_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "favorite_count",
          "id",
          "is_album",
          "playlist_name",
          "repost_count",
          "total_play_count",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "is_album": {
            "type": "boolean"
          },
          "playlist_name": {
            "type": "string"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "total_play_count": {
            "type": "integer"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[playlist](#schemaplaylist)]|false|none|none|

<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>
<h2 id="tocS_track_response">track_response</h2>

```json
{
  "properties": {
    "data": {
      "required": [
        "duration",
        "favorite_count",
        "id",
        "play_count",
        "repost_count",
        "title",
        "user"
      ],
      "properties": {
        "artwork": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "description": {
          "type": "string"
        },
        "genre": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "mood": {
          "type": "string"
        },
        "release_date": {
          "type": "string"
        },
        "remix_of": {
          "properties": {
            "tracks": {
              "type": "array",
              "items": {
                "required": [
                  "parent_track_id"
                ],
                "properties": {
                  "parent_track_id": {
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "favorite_count": {
          "type": "integer"
        },
        "tags": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "user": {
          "required": [
            "album_count",
            "followee_count",
            "follower_count",
            "handle",
            "id",
            "is_deactivated",
            "is_verified",
            "name",
            "playlist_count",
            "repost_count",
            "spl_wallet",
            "supporter_count",
            "supporting_count",
            "track_count"
          ],
          "properties": {
            "album_count": {
              "type": "integer"
            },
            "bio": {
              "type": "string"
            },
            "cover_photo": {
              "properties": {
                "640x": {
                  "type": "string"
                },
                "2000x": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "followee_count": {
              "type": "integer"
            },
            "follower_count": {
              "type": "integer"
            },
            "does_follow_current_user": {
              "type": "boolean"
            },
            "handle": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "is_verified": {
              "type": "boolean"
            },
            "location": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "playlist_count": {
              "type": "integer"
            },
            "profile_picture": {
              "properties": {
                "150x150": {
                  "type": "string"
                },
                "480x480": {
                  "type": "string"
                },
                "1000x1000": {
                  "type": "string"
                }
              },
              "type": "object"
            },
            "repost_count": {
              "type": "integer"
            },
            "track_count": {
              "type": "integer"
            },
            "is_deactivated": {
              "type": "boolean"
            },
            "erc_wallet": {
              "type": "string"
            },
            "spl_wallet": {
              "type": "string"
            },
            "supporter_count": {
              "type": "integer"
            },
            "supporting_count": {
              "type": "integer"
            }
          },
          "type": "object"
        },
        "duration": {
          "type": "integer"
        },
        "downloadable": {
          "type": "boolean"
        },
        "play_count": {
          "type": "integer"
        },
        "permalink": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Track](#schematrack)|false|none|none|

<a id="schematrack_search"></a>
<a id="schema_track_search"></a>
<a id="tocStrack_search"></a>
<a id="tocstrack_search"></a>
<h2 id="tocS_track_search">track_search</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "duration",
          "favorite_count",
          "id",
          "play_count",
          "repost_count",
          "title",
          "user"
        ],
        "properties": {
          "artwork": {
            "properties": {
              "150x150": {
                "type": "string"
              },
              "480x480": {
                "type": "string"
              },
              "1000x1000": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "description": {
            "type": "string"
          },
          "genre": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "mood": {
            "type": "string"
          },
          "release_date": {
            "type": "string"
          },
          "remix_of": {
            "properties": {
              "tracks": {
                "type": "array",
                "items": {
                  "required": [
                    "parent_track_id"
                  ],
                  "properties": {
                    "parent_track_id": {
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              }
            },
            "type": "object"
          },
          "repost_count": {
            "type": "integer"
          },
          "favorite_count": {
            "type": "integer"
          },
          "tags": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "user": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "duration": {
            "type": "integer"
          },
          "downloadable": {
            "type": "boolean"
          },
          "play_count": {
            "type": "integer"
          },
          "permalink": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Track](#schematrack)]|false|none|none|

<a id="schemaget_tips_response"></a>
<a id="schema_get_tips_response"></a>
<a id="tocSget_tips_response"></a>
<a id="tocsget_tips_response"></a>
<h2 id="tocS_get_tips_response">get_tips_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "amount",
          "created_at"
        ],
        "properties": {
          "amount": {
            "type": "string"
          },
          "sender": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "receiver": {
            "required": [
              "album_count",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "bio": {
                "type": "string"
              },
              "cover_photo": {
                "properties": {
                  "640x": {
                    "type": "string"
                  },
                  "2000x": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "followee_count": {
                "type": "integer"
              },
              "follower_count": {
                "type": "integer"
              },
              "does_follow_current_user": {
                "type": "boolean"
              },
              "handle": {
                "type": "string"
              },
              "id": {
                "type": "string"
              },
              "is_verified": {
                "type": "boolean"
              },
              "location": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "playlist_count": {
                "type": "integer"
              },
              "profile_picture": {
                "properties": {
                  "150x150": {
                    "type": "string"
                  },
                  "480x480": {
                    "type": "string"
                  },
                  "1000x1000": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "repost_count": {
                "type": "integer"
              },
              "track_count": {
                "type": "integer"
              },
              "is_deactivated": {
                "type": "boolean"
              },
              "erc_wallet": {
                "type": "string"
              },
              "spl_wallet": {
                "type": "string"
              },
              "supporter_count": {
                "type": "integer"
              },
              "supporting_count": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "created_at": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[tip](#schematip)]|false|none|none|

<a id="schematip"></a>
<a id="schema_tip"></a>
<a id="tocStip"></a>
<a id="tocstip"></a>
<h2 id="tocS_tip">tip</h2>

```json
{
  "required": [
    "amount",
    "created_at"
  ],
  "properties": {
    "amount": {
      "type": "string"
    },
    "sender": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    },
    "receiver": {
      "required": [
        "album_count",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "bio": {
          "type": "string"
        },
        "cover_photo": {
          "properties": {
            "640x": {
              "type": "string"
            },
            "2000x": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "followee_count": {
          "type": "integer"
        },
        "follower_count": {
          "type": "integer"
        },
        "does_follow_current_user": {
          "type": "boolean"
        },
        "handle": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_verified": {
          "type": "boolean"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "playlist_count": {
          "type": "integer"
        },
        "profile_picture": {
          "properties": {
            "150x150": {
              "type": "string"
            },
            "480x480": {
              "type": "string"
            },
            "1000x1000": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "repost_count": {
          "type": "integer"
        },
        "track_count": {
          "type": "integer"
        },
        "is_deactivated": {
          "type": "boolean"
        },
        "erc_wallet": {
          "type": "string"
        },
        "spl_wallet": {
          "type": "string"
        },
        "supporter_count": {
          "type": "integer"
        },
        "supporting_count": {
          "type": "integer"
        }
      },
      "type": "object"
    },
    "created_at": {
      "type": "string"
    }
  },
  "type": "object"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string|true|none|none|
|sender|[user](#schemauser)|false|none|none|
|receiver|[user](#schemauser)|false|none|none|
|created_at|string|true|none|none|

