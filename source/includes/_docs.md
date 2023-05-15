

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
    "artist_pick_track_id": "D7KyD",
    "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
    "cover_photo": {
      "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
      "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
    },
    "followee_count": 26,
    "follower_count": 34503,
    "does_follow_current_user": false,
    "handle": "TeamBandL",
    "id": "nlGNe",
    "is_verified": true,
    "location": "Los Angeles, CA",
    "name": "Brownies & Lemonade",
    "playlist_count": 2,
    "profile_picture": {
      "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
      "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
      "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
    },
    "repost_count": 5,
    "track_count": 10,
    "is_deactivated": false,
    "is_available": true,
    "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
    "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
    "supporter_count": 9,
    "supporting_count": 0,
    "total_audio_balance": 3123
  }
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[user_response](#schemauser_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get User by Handle

<a id="opIdGet User by Handle"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/handle/rac?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/handle/rac?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/handle/rac?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/handle/rac',
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

r = requests.get('AUDIUS_API_HOST/v1/users/handle/rac', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/handle/rac', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/handle/rac?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/handle/rac", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/handle/{handle}`

Gets a single user by their handle

<h3 id="get-user-by-handle-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|handle|string|true|A User handle|
|user_id|string|false|The user ID of the user making the request|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": {
    "album_count": 1,
    "artist_pick_track_id": "bbzxO",
    "bio": "Grammy award winning recording artist",
    "cover_photo": {
      "640x": "https://creatornode3.audius.co/content/QmajqvB5WHRzkkE9dxgxoTcAoRwZ9Mnhd7ZSbZxyheQvzK/640x.jpg",
      "2000x": "https://creatornode3.audius.co/content/QmajqvB5WHRzkkE9dxgxoTcAoRwZ9Mnhd7ZSbZxyheQvzK/2000x.jpg"
    },
    "followee_count": 19,
    "follower_count": 64352,
    "does_follow_current_user": false,
    "handle": "RAC",
    "id": "nkwv1",
    "is_verified": true,
    "location": "Portland, OR",
    "name": "RAC",
    "playlist_count": 0,
    "profile_picture": {
      "150x150": "https://creatornode3.audius.co/content/QmeZmZsxNbZ6prX9yg6sa2pk4bPPRUfdYJPqqndRanUrsf/150x150.jpg",
      "480x480": "https://creatornode3.audius.co/content/QmeZmZsxNbZ6prX9yg6sa2pk4bPPRUfdYJPqqndRanUrsf/480x480.jpg",
      "1000x1000": "https://creatornode3.audius.co/content/QmeZmZsxNbZ6prX9yg6sa2pk4bPPRUfdYJPqqndRanUrsf/1000x1000.jpg"
    },
    "repost_count": 12,
    "track_count": 16,
    "is_deactivated": false,
    "is_available": true,
    "erc_wallet": "0x346dfbfaf04f40a7f4d327a4935ee98a5bdbd478",
    "spl_wallet": "2AXmXpWwbFTRWJWkmfjfKajapgAkQEQKkqxooBRZd5cf",
    "supporter_count": 23,
    "supporting_count": 1,
    "total_audio_balance": 114101
  }
}
```

<h3 id="get-user-by-handle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[user_response](#schemauser_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get AI Attributed Tracks by User Handle

<a id="opIdGet AI Attributed Tracks by User Handle"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed',
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

r = requests.get('AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/handle/phuture/tracks/ai_attributed", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/handle/{handle}/tracks/ai_attributed`

Gets the AI generated tracks attributed to a user using the user's handle

<h3 id="get-ai-attributed-tracks-by-user-handle-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|handle|string|true|A User handle|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|user_id|string|false|The user ID of the user making the request|
|sort|string|false|[Deprecated] Field to sort by<table class="inline"><tr><th>Available values:</th><td>date</td><td>plays</td></tr></table>|
|query|string|false|The filter query|
|sort_method|string|false|The sort method<table class="inline"><tr><th>Available values:</th><td>title</td><td>artist_name</td><td>release_date</td><td>last_listen_date</td><td>added_date</td><td>length</td><td>plays</td><td>reposts</td><td>saves</td><td>most_listens_by_user</td></tr></table>|
|sort_direction|string|false|The sort direction<table class="inline"><tr><th>Available values:</th><td>asc</td><td>desc</td></tr></table>|
|filter_tracks|string|false|Filter by unlisted or public tracks<table class="inline"><tr><th>Available values:</th><td>all</td><td>public</td><td>unlisted</td></tr></table>|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://creatornode2.audius.co/content/QmSQpJrsBM5Vjbifa4e6Xok3mEoyJ3k7YT9YTcM5bcuqDP/150x150.jpg",
        "480x480": "https://creatornode2.audius.co/content/QmSQpJrsBM5Vjbifa4e6Xok3mEoyJ3k7YT9YTcM5bcuqDP/480x480.jpg",
        "1000x1000": "https://creatornode2.audius.co/content/QmSQpJrsBM5Vjbifa4e6Xok3mEoyJ3k7YT9YTcM5bcuqDP/1000x1000.jpg"
      },
      "description": "Made with Boomy",
      "genre": "Electronic",
      "id": "wzwEM32",
      "track_cid": "Qme14CQbQPTK1snP8Gt3JSdGAHHdWFJAg25FnVue4s1oT7",
      "mood": "Sophisticated",
      "release_date": "Mon May 01 2023 17:17:23 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 1,
      "favorite_count": 2,
      "tags": "ai,aimusic",
      "title": "PhutureAI",
      "user": {
        "album_count": 0,
        "artist_pick_track_id": null,
        "bio": "Founder of Phuture Collective",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/content/QmbB1yiGWF7JpWfW42LbhWY27v7GMfLKuLE3fd84hFKDS7/640x.jpg",
          "2000x": "https://creatornode2.audius.co/content/QmbB1yiGWF7JpWfW42LbhWY27v7GMfLKuLE3fd84hFKDS7/2000x.jpg"
        },
        "followee_count": 8,
        "follower_count": 247,
        "does_follow_current_user": false,
        "handle": "synchronistic",
        "id": "LRNZL",
        "is_verified": false,
        "location": "Portland, OR",
        "name": "synchronistic",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/content/QmcBGJSkkWqfc1kx23jVuDfMenMS8u1ctPmm3A5VcLboSH/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/content/QmcBGJSkkWqfc1kx23jVuDfMenMS8u1ctPmm3A5VcLboSH/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/content/QmcBGJSkkWqfc1kx23jVuDfMenMS8u1ctPmm3A5VcLboSH/1000x1000.jpg"
        },
        "repost_count": 2,
        "track_count": 3,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x0b0e6bd939a6165a98ed8f4ea350a96d1127676f",
        "spl_wallet": "4eKrNigZuzvAR4rYBLFJMRSULA1Me9LSwygMjqzEYJGc",
        "supporter_count": 0,
        "supporting_count": 0,
        "total_audio_balance": 1
      },
      "duration": 67,
      "downloadable": false,
      "play_count": 1529,
      "permalink": "/synchronistic/phutureai",
      "is_streamable": true
    }
  ]
}
```

<h3 id="get-ai-attributed-tracks-by-user-handle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tracks_response](#schematracks_response)|
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
    "user_id": null
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
      "artist_pick_track_id": "D7KyD",
      "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
        "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
      },
      "followee_count": 26,
      "follower_count": 34503,
      "does_follow_current_user": false,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 10,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
      "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
      "supporter_count": 9,
      "supporting_count": 0,
      "total_audio_balance": null
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

## Verify ID Token

<a id="opIdVerify ID Token"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/verify_token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi&app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/verify_token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi&app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/verify_token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi&app_name=EXAMPLEAPP',
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
  'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi',  'app_name': 'EXAMPLEAPP'
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/verify_token?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi&app_name=EXAMPLEAPP");
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
  "data": {
    "userId": "1416115",
    "email": "isaactest451@gmail.com",
    "name": "testing12",
    "handle": "testtest451",
    "verified": false,
    "profilePicture": null,
    "sub": "1416115",
    "iat": "1656518333"
  }
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
curl AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets',
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

r = requests.get('AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/Wem1e/connected_wallets", data)
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
      "0x42b53313f643D2a8007a169C2eC973100A1F84C3"
    ],
    "spl_wallets": [
      "EF1zneAqA2mwjkD3Lj7sQnMhR2uorGqEHXNtAWfGdCu2"
    ]
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
      "favorite_item_id": "5O2pg",
      "favorite_type": "SaveType.track",
      "user_id": "nlGNe",
      "created_at": "2022-07-27 01:25:15"
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

## Get Followers

<a id="opIdGet Followers"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/followers?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/followers?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/followers?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/followers',
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

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/followers', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/followers', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/followers?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/followers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/followers`

All users that follow the provided user

<h3 id="get-followers-parameters">Query Parameters</h3>

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
      "album_count": 0,
      "artist_pick_track_id": null,
      "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audius",
      "cover_photo": {
        "640x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
        "2000x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
      },
      "followee_count": 856,
      "follower_count": 1525903,
      "does_follow_current_user": false,
      "handle": "Audius",
      "id": "eJ57D",
      "is_verified": true,
      "location": "SF & LA",
      "name": "Audius",
      "playlist_count": 6,
      "profile_picture": {
        "150x150": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
      },
      "repost_count": 3489,
      "track_count": 0,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
      "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
      "supporter_count": 215,
      "supporting_count": 4,
      "total_audio_balance": 16150
    }
  ]
}
```

<h3 id="get-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[followers_response](#schemafollowers_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Following

<a id="opIdGet Following"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/following?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/following?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/following?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/following',
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

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/following', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/following', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/following?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/following", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/following`

All users that the provided user follows

<h3 id="get-following-parameters">Query Parameters</h3>

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
      "album_count": 0,
      "artist_pick_track_id": null,
      "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audius",
      "cover_photo": {
        "640x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
        "2000x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
      },
      "followee_count": 856,
      "follower_count": 1525903,
      "does_follow_current_user": false,
      "handle": "Audius",
      "id": "eJ57D",
      "is_verified": true,
      "location": "SF & LA",
      "name": "Audius",
      "playlist_count": 6,
      "profile_picture": {
        "150x150": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
      },
      "repost_count": 3489,
      "track_count": 0,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
      "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
      "supporter_count": 215,
      "supporting_count": 4,
      "total_audio_balance": 16150
    }
  ]
}
```

<h3 id="get-following-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[following_response](#schemafollowing_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Related Users

<a id="opIdGet Related Users"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/related?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/related?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/related?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/related',
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

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/related', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/related', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/related?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/related", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/related`

Gets a list of users that might be of interest to followers of this user.

<h3 id="get-related-users-parameters">Query Parameters</h3>

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
      "album_count": 0,
      "artist_pick_track_id": null,
      "bio": "we are here for now. \n\ninquiries: joey@keel.la",
      "cover_photo": {
        "640x": "https://creatornode3.audius.co/content/QmZFh4413dNdy8RCg6bAx7jLeqMKxVHbKPdq18rG4JhPg1/640x.jpg",
        "2000x": "https://creatornode3.audius.co/content/QmZFh4413dNdy8RCg6bAx7jLeqMKxVHbKPdq18rG4JhPg1/2000x.jpg"
      },
      "followee_count": 8,
      "follower_count": 39042,
      "does_follow_current_user": false,
      "handle": "LouisTheChild",
      "id": "LxQm2",
      "is_verified": true,
      "location": "Chicago, IL",
      "name": "Louis The Child",
      "playlist_count": 0,
      "profile_picture": {
        "150x150": "https://creatornode3.audius.co/content/Qmat15zauKpvWK83WiYiQLJ7LHXTEDViXFAUZayC1AFN5v/150x150.jpg",
        "480x480": "https://creatornode3.audius.co/content/Qmat15zauKpvWK83WiYiQLJ7LHXTEDViXFAUZayC1AFN5v/480x480.jpg",
        "1000x1000": "https://creatornode3.audius.co/content/Qmat15zauKpvWK83WiYiQLJ7LHXTEDViXFAUZayC1AFN5v/1000x1000.jpg"
      },
      "repost_count": 1,
      "track_count": 94,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x0fd1293443c366bc433d85c94be56ca8117d0ef6",
      "spl_wallet": "4V5UASoUDPSMRNU1AJ8vNh2kC7y1DXoMnaoehXCxNZsk",
      "supporter_count": 4,
      "supporting_count": 0,
      "total_audio_balance": 12
    }
  ]
}
```

<h3 id="get-related-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[related_artist_response](#schemarelated_artist_response)|
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
          "150x150": "https://creatornode3.audius.co/content/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/150x150.jpg",
          "480x480": "https://creatornode3.audius.co/content/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/480x480.jpg",
          "1000x1000": "https://creatornode3.audius.co/content/QmWGQf6CnFJJ4he13eDF2vZwDyoaWcHL3HziQyaSPwVFd3/1000x1000.jpg"
        },
        "description": null,
        "genre": "Electronic",
        "id": "y7XX7",
        "track_cid": "QmXFnuP57woE7ZZ3HTkWggXuzZL13SJVLiL7rVE9qSFTyf",
        "mood": "Other",
        "release_date": "Sun Mar 28 2021 11:52:35 GMT-0700",
        "remix_of": {
          "tracks": null
        },
        "repost_count": 46,
        "favorite_count": 100,
        "tags": null,
        "title": "PAULINE HERR @ BROWNIES & LEMONADE OPEN AUX 1/30",
        "user": {
          "album_count": 1,
          "artist_pick_track_id": "JbQN0",
          "bio": "producer, singer, human\n\nsocials: @paulineherr",
          "cover_photo": {
            "640x": "https://creatornode3.audius.co/content/QmZXwdQDq5QDJW3W17g4n4zXVjaDGDbvuzsMWqhis61W7h/640x.jpg",
            "2000x": "https://creatornode3.audius.co/content/QmZXwdQDq5QDJW3W17g4n4zXVjaDGDbvuzsMWqhis61W7h/2000x.jpg"
          },
          "followee_count": 144,
          "follower_count": 41573,
          "does_follow_current_user": false,
          "handle": "paulineherr",
          "id": "eGEam",
          "is_verified": true,
          "location": "Burbank, CA",
          "name": "Pauline Herr",
          "playlist_count": 1,
          "profile_picture": {
            "150x150": "https://creatornode3.audius.co/content/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/150x150.jpg",
            "480x480": "https://creatornode3.audius.co/content/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/480x480.jpg",
            "1000x1000": "https://creatornode3.audius.co/content/QmbqwCk1axAdXk9iFfeU48iu1P73ChUA3kxpeg7PJBRHsC/1000x1000.jpg"
          },
          "repost_count": 155,
          "track_count": 35,
          "is_deactivated": false,
          "is_available": true,
          "erc_wallet": "0xf568ab060acd91fe4861e52136deb08ca1f26574",
          "spl_wallet": "3DeyiqjmCAtqPUzGX6MQP2C62kKRANy7LFvcBzUEHqPc",
          "supporter_count": 8,
          "supporting_count": 0,
          "total_audio_balance": 131
        },
        "duration": 1708,
        "downloadable": false,
        "play_count": 958,
        "permalink": "/paulineherr/pauline-herr-brownies-lemonade-open-aux-130-316935",
        "is_streamable": true
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

## Get Subscribers

<a id="opIdGet Subscribers"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/nlGNe/subscribers?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/nlGNe/subscribers?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/nlGNe/subscribers?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/nlGNe/subscribers',
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

r = requests.get('AUDIUS_API_HOST/v1/users/nlGNe/subscribers', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/nlGNe/subscribers', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/nlGNe/subscribers?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/nlGNe/subscribers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{id}/subscribers`

All users that subscribe to the provided user

<h3 id="get-subscribers-parameters">Query Parameters</h3>

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
      "album_count": 1,
      "artist_pick_track_id": "QVkPv",
      "bio": "🌞👄🌞\noak",
      "cover_photo": {
        "640x": "https://blockchange-audius-content-03.bdnodes.net/content/QmUk61QDUTzhNqjnCAWipSp3jnMmXBmtTUC2mtF5F6VvUy/640x.jpg",
        "2000x": "https://blockchange-audius-content-03.bdnodes.net/content/QmUk61QDUTzhNqjnCAWipSp3jnMmXBmtTUC2mtF5F6VvUy/2000x.jpg"
      },
      "followee_count": 1543,
      "follower_count": 8276,
      "does_follow_current_user": false,
      "handle": "rayjacobson",
      "id": "7eP5n",
      "is_verified": false,
      "location": "chik fil yay!!",
      "name": "raymont",
      "playlist_count": 8,
      "profile_picture": {
        "150x150": "https://blockchange-audius-content-03.bdnodes.net/content/QmYRHAJ4YuLjT4fLLRMg5STnQA4yDpiBmzk5R3iCDTmkmk/150x150.jpg",
        "480x480": "https://blockchange-audius-content-03.bdnodes.net/content/QmYRHAJ4YuLjT4fLLRMg5STnQA4yDpiBmzk5R3iCDTmkmk/480x480.jpg",
        "1000x1000": "https://blockchange-audius-content-03.bdnodes.net/content/QmYRHAJ4YuLjT4fLLRMg5STnQA4yDpiBmzk5R3iCDTmkmk/1000x1000.jpg"
      },
      "repost_count": 3891,
      "track_count": 17,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x7d273271690538cf855e5b3002a0dd8c154bb060",
      "spl_wallet": "EXfHYvqN7GTeQa7aiRhq4UMMZBC9PmUXmskgCH7BSaTn",
      "supporter_count": 8,
      "supporting_count": 110,
      "total_audio_balance": 205
    }
  ]
}
```

<h3 id="get-subscribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[subscribers_response](#schemasubscribers_response)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Server error|None|

## Get Supporters

<a id="opIdGet Supporters"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/users/lzkyZ/supporters?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/lzkyZ/supporters?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/lzkyZ/supporters?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/lzkyZ/supporters',
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

r = requests.get('AUDIUS_API_HOST/v1/users/lzkyZ/supporters', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/lzkyZ/supporters', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/lzkyZ/supporters?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/lzkyZ/supporters", data)
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
  "data": [
    {
      "rank": 1,
      "amount": "6000000000000000000",
      "sender": {
        "album_count": 0,
        "artist_pick_track_id": "G0RNQ8w",
        "bio": "Bebig Music is a record label part of treinta3tres records dedicated to dance commercial music.\nBebig Music is Dance!\nbebigmusic@gmail.com",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/content/QmQRATHCJEiwsCu4f1rGjPefF8fcwYnGzv2wuiKFnA3hv2/640x.jpg",
          "2000x": "https://creatornode2.audius.co/content/QmQRATHCJEiwsCu4f1rGjPefF8fcwYnGzv2wuiKFnA3hv2/2000x.jpg"
        },
        "followee_count": 58,
        "follower_count": 81,
        "does_follow_current_user": false,
        "handle": "bebigmusic",
        "id": "aW8mr",
        "is_verified": false,
        "location": "Barcelona",
        "name": "Bebig Music",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/content/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/content/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/content/QmXrmgMy5fwfr6q6ucU4qkvwkq8cvFXfbms32NNctZDmoB/1000x1000.jpg"
        },
        "repost_count": 81,
        "track_count": 12,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0xcdc88b59fc7f2ea01ff6781bae25c1a59a2378cd",
        "spl_wallet": "3EDj16wey6nfw26LhEXTyVmCnvvAMw4ruHfc76kWKkq8",
        "supporter_count": 0,
        "supporting_count": 1,
        "total_audio_balance": 0
      }
    }
  ]
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
curl AUDIUS_API_HOST/v1/users/aW8mr/supporting?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/users/aW8mr/supporting?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/users/aW8mr/supporting?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/users/aW8mr/supporting',
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

r = requests.get('AUDIUS_API_HOST/v1/users/aW8mr/supporting', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/users/aW8mr/supporting', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/users/aW8mr/supporting?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/users/aW8mr/supporting", data)
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
  "data": [
    {
      "rank": 1,
      "amount": "6000000000000000000",
      "receiver": {
        "album_count": 9,
        "artist_pick_track_id": "oPRA7",
        "bio": "house music\ntreinta3tres@gmail.com",
        "cover_photo": {
          "640x": "https://creatornode2.audius.co/content/QmRUUUoeJmhbpvqSr9d34Gb71zk7xZkNtswHdixzhMkXYG/640x.jpg",
          "2000x": "https://creatornode2.audius.co/content/QmRUUUoeJmhbpvqSr9d34Gb71zk7xZkNtswHdixzhMkXYG/2000x.jpg"
        },
        "followee_count": 12,
        "follower_count": 103,
        "does_follow_current_user": false,
        "handle": "treinta3tres",
        "id": "lzkyZ",
        "is_verified": false,
        "location": "Barcelona",
        "name": "treinta3tres",
        "playlist_count": 3,
        "profile_picture": {
          "150x150": "https://creatornode2.audius.co/content/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/150x150.jpg",
          "480x480": "https://creatornode2.audius.co/content/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/480x480.jpg",
          "1000x1000": "https://creatornode2.audius.co/content/QmdJJf81jjRhpmrj2JzeMEzDNbPKfrUWkECE3NjfWnLDMr/1000x1000.jpg"
        },
        "repost_count": 24,
        "track_count": 71,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0xa18d959231ca5728fefbf7b45ddc87f44e0832db",
        "spl_wallet": "3Mm5mdBT3jtRifHpxBfJavRXyfM4G4kbV7KKrX2nj12M",
        "supporter_count": 2,
        "supporting_count": 0,
        "total_audio_balance": 21
      }
    }
  ]
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
|sort|string|false|[Deprecated] Field to sort by<table class="inline"><tr><th>Available values:</th><td>date</td><td>plays</td></tr></table>|
|query|string|false|The filter query|
|sort_method|string|false|The sort method<table class="inline"><tr><th>Available values:</th><td>title</td><td>artist_name</td><td>release_date</td><td>last_listen_date</td><td>added_date</td><td>length</td><td>plays</td><td>reposts</td><td>saves</td><td>most_listens_by_user</td></tr></table>|
|sort_direction|string|false|The sort direction<table class="inline"><tr><th>Available values:</th><td>asc</td><td>desc</td></tr></table>|
|filter_tracks|string|false|Filter by unlisted or public tracks<table class="inline"><tr><th>Available values:</th><td>all</td><td>public</td><td>unlisted</td></tr></table>|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "track_cid": "QmeeTjhUvwQRtNYQwiC7Uebuhi4p9mNQNESb3AFaJCYqNz",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 430,
      "favorite_count": 977,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "user": {
        "album_count": 0,
        "artist_pick_track_id": "D7KyD",
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 34503,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 9,
        "supporting_count": 0,
        "total_audio_balance": 3123
      },
      "duration": 5265,
      "downloadable": false,
      "play_count": 355660,
      "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725",
      "is_streamable": true
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
        "150x150": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot & new tracks on Audius! Prepare to buckle in for a trip through various genres featuring artists you love and new artists you are about to discover.",
      "permalink": "/Audius/playlist/hot-new-on-audius-🔥",
      "id": "DOPRl",
      "is_album": false,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count": 1776,
      "favorite_count": 1243059,
      "total_play_count": 129814,
      "user": {
        "album_count": 0,
        "artist_pick_track_id": null,
        "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audius",
        "cover_photo": {
          "640x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
          "2000x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
        },
        "followee_count": 856,
        "follower_count": 1525903,
        "does_follow_current_user": false,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "Audius",
        "playlist_count": 6,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
          "480x480": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
          "1000x1000": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
        },
        "repost_count": 3489,
        "track_count": 0,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
        "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
        "supporter_count": 215,
        "supporting_count": 4,
        "total_audio_balance": 16150
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
        "150x150": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/150x150.jpg",
        "480x480": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/480x480.jpg",
        "1000x1000": "https://usermetadata.audius.co/content/Qmc7RFzLGgW3DUTgKK49LzxEwe3Lmb47q85ZwJJRVYTXPr/1000x1000.jpg"
      },
      "description": "All the latest hot & new tracks on Audius! Prepare to buckle in for a trip through various genres featuring artists you love and new artists you are about to discover.",
      "permalink": "/Audius/playlist/hot-new-on-audius-🔥",
      "id": "DOPRl",
      "is_album": false,
      "playlist_name": "Hot & New on Audius 🔥",
      "repost_count": 1776,
      "favorite_count": 1243059,
      "total_play_count": 129802,
      "user": {
        "album_count": 0,
        "artist_pick_track_id": null,
        "bio": "The official Audius account!\n\nCreating a decentralized and open-source streaming music platform controlled by artists, fans, & developers.\n\nhttps://discord.gg/audius\nhttps://t.me/audius",
        "cover_photo": {
          "640x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/640x.jpg",
          "2000x": "https://usermetadata.audius.co/content/QmSeB4DY1qBtp9hbnmMwnkGepRY6tRrNQcgZU2oNk4SK1q/2000x.jpg"
        },
        "followee_count": 856,
        "follower_count": 1525903,
        "does_follow_current_user": false,
        "handle": "Audius",
        "id": "eJ57D",
        "is_verified": true,
        "location": "SF & LA",
        "name": "Audius",
        "playlist_count": 6,
        "profile_picture": {
          "150x150": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/150x150.jpg",
          "480x480": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/480x480.jpg",
          "1000x1000": "https://usermetadata.audius.co/content/QmNjJv1wQf2DJq3GNXjXzSL8UXFUGXfchg4NhL7UpbnF1f/1000x1000.jpg"
        },
        "repost_count": 3487,
        "track_count": 0,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x3256bd2d0b1984e7df4fa525017ad9ba48470760",
        "spl_wallet": "D1WXgUS2pnrVQTEqSGy2t2oxowahUL8Pw2Qy64CvTi79",
        "supporter_count": 215,
        "supporting_count": 4,
        "total_audio_balance": null
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
        "150x150": "https://audius-content-12.cultur3stake.com/content/Qmf53YjSDjsu1w7sYian2tJcNpzvwQZWN8uS3ajBZUTEVZ/150x150.jpg",
        "480x480": "https://audius-content-12.cultur3stake.com/content/Qmf53YjSDjsu1w7sYian2tJcNpzvwQZWN8uS3ajBZUTEVZ/480x480.jpg",
        "1000x1000": "https://audius-content-12.cultur3stake.com/content/Qmf53YjSDjsu1w7sYian2tJcNpzvwQZWN8uS3ajBZUTEVZ/1000x1000.jpg"
      },
      "description": "The first installment of Pala Chrome's 'You Stay High' remix EP is out now featuring:\n\nalex martian\nfreeloadr\nDust Of Apollon\nGabriel Earwood\n2chills\n\nArtworks by 6amsunset.",
      "permalink": "/kumocollective/playlist/pala-chrome-you-stay-high-remix-pack-part-1",
      "id": "5123bEX",
      "is_album": false,
      "playlist_name": "Pala Chrome - You Stay High REMIX PACK (part 1)",
      "repost_count": 18,
      "favorite_count": 27,
      "total_play_count": 1845,
      "user": {
        "album_count": 6,
        "artist_pick_track_id": "WNYwG6Z",
        "bio": "Record label from Italy, established in 2017. \n\nas free as a cloud ☁️\n\nVisit the KUMOverse\nhttps://kumocollective.com",
        "cover_photo": {
          "640x": "https://audius-content-12.cultur3stake.com/content/Qme9kcC1xNmRWYsfmzqXYiahUrAb5uuqrT1Lf48VU27goY/640x.jpg",
          "2000x": "https://audius-content-12.cultur3stake.com/content/Qme9kcC1xNmRWYsfmzqXYiahUrAb5uuqrT1Lf48VU27goY/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 13558,
        "does_follow_current_user": false,
        "handle": "kumocollective",
        "id": "Lj0ae",
        "is_verified": false,
        "location": "Amsterdam",
        "name": "KUMO Collective",
        "playlist_count": 32,
        "profile_picture": {
          "150x150": "https://audius-content-12.cultur3stake.com/content/QmWd4zNC8hEfTScBDi5YSHf6YV6ETUbstoDynXMGsoHX6Q/150x150.jpg",
          "480x480": "https://audius-content-12.cultur3stake.com/content/QmWd4zNC8hEfTScBDi5YSHf6YV6ETUbstoDynXMGsoHX6Q/480x480.jpg",
          "1000x1000": "https://audius-content-12.cultur3stake.com/content/QmWd4zNC8hEfTScBDi5YSHf6YV6ETUbstoDynXMGsoHX6Q/1000x1000.jpg"
        },
        "repost_count": 533,
        "track_count": 134,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x62b166e2d2c8882e5e624ba1d6eba939424fc3f7",
        "spl_wallet": "5f5AkVbVPFDCVXBr1fcZ7kYaahQEXYYTFuxJ6RDvjeHS",
        "supporter_count": 12,
        "supporting_count": 0,
        "total_audio_balance": 1271
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
        "150x150": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmZJ9dKg4S1BRnRiHPUpoDCjKtTxtg8Nhgei2vTkgNyQ1h/150x150.jpg",
        "480x480": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmZJ9dKg4S1BRnRiHPUpoDCjKtTxtg8Nhgei2vTkgNyQ1h/480x480.jpg",
        "1000x1000": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmZJ9dKg4S1BRnRiHPUpoDCjKtTxtg8Nhgei2vTkgNyQ1h/1000x1000.jpg"
      },
      "description": "Louis Futon “David Blaine” Out Now: https://stem.ffm.to/davidblaine\n\nLouis Futon Merch, Tour Dates, and more... \nhttps://louisfutonbeats.com/\n\nSubscribe to Louis Futon\nhttps://bit.ly/LouisFutonYouTube\n\nFollow Louis Futon\nhttps://instagram.com/louisfutonbeats\nhttps://twitter.com/louisfutonbeats\nhttps://tiktok.com/@notlouisfuton\nhttps://facebook.com/Louisfutonbeats\nhttps://www.twitch.tv/louisfutontv\n\nJoin the community\nhttps://discord.gg/geshyzwA\n\n#LouisFuton #DavidBlaine\n\nMixed/Mastered byJacob Weinstein \nCo-written by Ariel Shrum\nSax, bass clarinet & flute by Hailey Niswanger",
      "genre": "Electronic",
      "id": "7dm4zrr",
      "track_cid": "QmWwMTU6rjCp2t3xtjjLUXSF85bxJkxQesrcrSd8fJ5P2d",
      "mood": "Sensual",
      "release_date": "Fri May 05 2023 10:10:02 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 54,
      "favorite_count": 100,
      "tags": "louisfuton,davidblaine",
      "title": "Louis Futon - David Blaine",
      "user": {
        "album_count": 2,
        "artist_pick_track_id": null,
        "bio": "Management: eric@jet-mgmt.com",
        "cover_photo": {
          "640x": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmWWPNRrzgasSoGt4SZceuukFf8FbJR8mzsgtYpDNRWkwf/640x.jpg",
          "2000x": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmWWPNRrzgasSoGt4SZceuukFf8FbJR8mzsgtYpDNRWkwf/2000x.jpg"
        },
        "followee_count": 15,
        "follower_count": 2239,
        "does_follow_current_user": false,
        "handle": "louisfutonbeats",
        "id": "n098k",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Louis Futon",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmeRrmABZJTGGqQsTo19FkvepEHoZPsmkabGPcLxxfXx2q/150x150.jpg",
          "480x480": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmeRrmABZJTGGqQsTo19FkvepEHoZPsmkabGPcLxxfXx2q/480x480.jpg",
          "1000x1000": "https://blockdaemon-audius-content-06.bdnodes.net/content/QmeRrmABZJTGGqQsTo19FkvepEHoZPsmkabGPcLxxfXx2q/1000x1000.jpg"
        },
        "repost_count": 10,
        "track_count": 50,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x4ef00cc32ce488af3ec291a89549712b2dd14f2e",
        "spl_wallet": "1hfVnihF2p6F6n22easszN3wpn5efVaDGTDFsUxmJ9V",
        "supporter_count": 6,
        "supporting_count": 0,
        "total_audio_balance": 62
      },
      "duration": 197,
      "downloadable": true,
      "play_count": 24254,
      "permalink": "/louisfutonbeats/louis-futon-david-blaine",
      "is_streamable": true
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
      "150x150": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
      "480x480": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
      "1000x1000": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
    },
    "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
    "genre": "Electronic",
    "id": "D7KyD",
    "track_cid": "QmeeTjhUvwQRtNYQwiC7Uebuhi4p9mNQNESb3AFaJCYqNz",
    "mood": "Fiery",
    "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
    "remix_of": {
      "tracks": null
    },
    "repost_count": 430,
    "favorite_count": 977,
    "tags": "baauer,partyfavor,browniesandlemonade,live",
    "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
    "user": {
      "album_count": 0,
      "artist_pick_track_id": "D7KyD",
      "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
      "cover_photo": {
        "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
        "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
      },
      "followee_count": 26,
      "follower_count": 34503,
      "does_follow_current_user": false,
      "handle": "TeamBandL",
      "id": "nlGNe",
      "is_verified": true,
      "location": "Los Angeles, CA",
      "name": "Brownies & Lemonade",
      "playlist_count": 2,
      "profile_picture": {
        "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
        "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
        "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
      },
      "repost_count": 5,
      "track_count": 10,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
      "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
      "supporter_count": 9,
      "supporting_count": 0,
      "total_audio_balance": 3123
    },
    "duration": 5265,
    "downloadable": false,
    "play_count": 355660,
    "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725",
    "is_streamable": true
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
        "150x150": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "track_cid": "QmeeTjhUvwQRtNYQwiC7Uebuhi4p9mNQNESb3AFaJCYqNz",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 430,
      "favorite_count": 977,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "user": {
        "album_count": 0,
        "artist_pick_track_id": "D7KyD",
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 34503,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 9,
        "supporting_count": 0,
        "total_audio_balance": 3123
      },
      "duration": 5265,
      "downloadable": false,
      "play_count": 355660,
      "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725",
      "is_streamable": true
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
        "150x150": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/150x150.jpg",
        "480x480": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/480x480.jpg",
        "1000x1000": "https://audius.prod.capturealpha.io/content/QmVJjA6zXhDZn3BjcjYa33P9NDiPZj7Vyq9TCx1bHjvHmG/1000x1000.jpg"
      },
      "description": "@baauer b2b @partyfavor live set at Brownies & Lemonade Block Party LA at The Shrine on 7.3.19.",
      "genre": "Electronic",
      "id": "D7KyD",
      "track_cid": "QmeeTjhUvwQRtNYQwiC7Uebuhi4p9mNQNESb3AFaJCYqNz",
      "mood": "Fiery",
      "release_date": "Mon Sep 23 2019 12:35:10 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 430,
      "favorite_count": 977,
      "tags": "baauer,partyfavor,browniesandlemonade,live",
      "title": "Paauer | Baauer B2B Party Favor | B&L Block Party LA (Live Set)",
      "user": {
        "album_count": 0,
        "artist_pick_track_id": "D7KyD",
        "bio": "Makin' moves & keeping you on your toes.\nlinktr.ee/browniesandlemonade",
        "cover_photo": {
          "640x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/640x.jpg",
          "2000x": "https://audius.prod.capturealpha.io/content/QmcVZH5C2ygxoVS4ihPBJrkFrS1Ua6YJB5srNtXafPzihZ/2000x.jpg"
        },
        "followee_count": 26,
        "follower_count": 34503,
        "does_follow_current_user": false,
        "handle": "TeamBandL",
        "id": "nlGNe",
        "is_verified": true,
        "location": "Los Angeles, CA",
        "name": "Brownies & Lemonade",
        "playlist_count": 2,
        "profile_picture": {
          "150x150": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/150x150.jpg",
          "480x480": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/480x480.jpg",
          "1000x1000": "https://audius.prod.capturealpha.io/content/QmU9L4beAM96MpiNqqVTZdiDiCRTeBku1AJCh3NXrE5PxV/1000x1000.jpg"
        },
        "repost_count": 5,
        "track_count": 10,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x8bc337e467cec1e7b05e54c7d1f90814a78d259e",
        "spl_wallet": "WXBYqzejMr5qxmuDrvVTDQopr7vdZt5szsoSSb3EvQH",
        "supporter_count": 9,
        "supporting_count": 0,
        "total_audio_balance": null
      },
      "duration": 5266,
      "downloadable": false,
      "play_count": 355659,
      "permalink": "/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725",
      "is_streamable": true
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
        "150x150": "https://creatornode3.audius.co/content/QmY7uocBHuSyW3aWuzZ6MeHNod8ph4TmStJJa2v4KXCdXe/150x150.jpg",
        "480x480": "https://creatornode3.audius.co/content/QmY7uocBHuSyW3aWuzZ6MeHNod8ph4TmStJJa2v4KXCdXe/480x480.jpg",
        "1000x1000": "https://creatornode3.audius.co/content/QmY7uocBHuSyW3aWuzZ6MeHNod8ph4TmStJJa2v4KXCdXe/1000x1000.jpg"
      },
      "description": "PBJ with NITTI out now!! ",
      "genre": "Electronic",
      "id": "2o8qVY6",
      "track_cid": "QmVbmiJQ5vHB5RfTGWDrUdHUrd4aTKVV4SpCx48aBoPdS6",
      "mood": "Energizing",
      "release_date": "Mon May 08 2023 06:37:27 GMT-0700",
      "remix_of": {
        "tracks": null
      },
      "repost_count": 33,
      "favorite_count": 58,
      "tags": "henryfong,nitti,pbj,basshouse",
      "title": "Henry Fong & NITTI - PBJ",
      "user": {
        "album_count": 0,
        "artist_pick_track_id": "y8Nvx",
        "bio": "DJ/Producer",
        "cover_photo": {
          "640x": "https://creatornode3.audius.co/content/QmSADrMwcqUFHjnuh3r3aWGgZjYFYovfsUxDDtxYwWHsv2/640x.jpg",
          "2000x": "https://creatornode3.audius.co/content/QmSADrMwcqUFHjnuh3r3aWGgZjYFYovfsUxDDtxYwWHsv2/2000x.jpg"
        },
        "followee_count": 19,
        "follower_count": 511,
        "does_follow_current_user": false,
        "handle": "henryfong",
        "id": "nolY2",
        "is_verified": true,
        "location": "Los Angeles",
        "name": "Henry Fong",
        "playlist_count": 1,
        "profile_picture": {
          "150x150": "https://creatornode3.audius.co/content/QmaxRd8YNYzzhU1gkzfaX3vCucNHfyZTiUKCTRtv9QCUjh/150x150.jpg",
          "480x480": "https://creatornode3.audius.co/content/QmaxRd8YNYzzhU1gkzfaX3vCucNHfyZTiUKCTRtv9QCUjh/480x480.jpg",
          "1000x1000": "https://creatornode3.audius.co/content/QmaxRd8YNYzzhU1gkzfaX3vCucNHfyZTiUKCTRtv9QCUjh/1000x1000.jpg"
        },
        "repost_count": 2,
        "track_count": 12,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x106a6b57ca0731cf57bf4fc7ef6b6bd447f5f5dd",
        "spl_wallet": "3WZRg5pbFLP4ey7RhF4n95hR4WnGJTAq6KZBrfmwxBct",
        "supporter_count": 7,
        "supporting_count": 0,
        "total_audio_balance": 133
      },
      "duration": 222,
      "downloadable": false,
      "play_count": 13424,
      "permalink": "/henryfong/henry-fong-nitti-pbj",
      "is_streamable": true
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

## Get Underground Trending Tracks

<a id="opIdGet Underground Trending Tracks"></a>

> Code Sample

```shell
curl AUDIUS_API_HOST/v1/tracks/trending/underground?app_name=EXAMPLEAPP 
 

```

```http
GET AUDIUS_API_HOST/v1/tracks/trending/underground?app_name=EXAMPLEAPP HTTP/1.1

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('AUDIUS_API_HOST/v1/tracks/trending/underground?app_name=EXAMPLEAPP',
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

result = RestClient.get 'AUDIUS_API_HOST/v1/tracks/trending/underground',
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

r = requests.get('AUDIUS_API_HOST/v1/tracks/trending/underground', params={
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
    $response = $client->request('GET','AUDIUS_API_HOST/v1/tracks/trending/underground', array(
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
URL obj = new URL("AUDIUS_API_HOST/v1/tracks/trending/underground?app_name=EXAMPLEAPP");
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
    req, err := http.NewRequest("GET", "AUDIUS_API_HOST/v1/tracks/trending/underground", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/trending/underground`

Gets the top 100 trending underground tracks on Audius

<h3 id="get-underground-trending-tracks-parameters">Query Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|---|---|
|offset|integer|false|The number of items to skip. Useful for pagination (page number * limit)|
|limit|integer|false|The number of items to fetch|
|app_name|string|false|Your app name|

> Example Response

```json
{
  "data": [
    {
      "artwork": {
        "150x150": "https://audius-content-1.cultur3stake.com/content/QmNwXj3vESow9b1hvessexnuiHhAA8Bhwzycf2UWsQXHGW/150x150.jpg",
        "480x480": "https://audius-content-1.cultur3stake.com/content/QmNwXj3vESow9b1hvessexnuiHhAA8Bhwzycf2UWsQXHGW/480x480.jpg",
        "1000x1000": "https://audius-content-1.cultur3stake.com/content/QmNwXj3vESow9b1hvessexnuiHhAA8Bhwzycf2UWsQXHGW/1000x1000.jpg"
      },
      "description": null,
      "genre": "Electronic",
      "id": "MYvY63X",
      "track_cid": "QmWXgp758zKWd4KtmQJwTaLnGR2oGubVhZH7qjiu7Vwi6f",
      "mood": "Empowering",
      "release_date": null,
      "remix_of": {
        "tracks": null
      },
      "repost_count": 14,
      "favorite_count": 31,
      "tags": "bass,dubstep,trap,beats,downtempo",
      "title": "04_Mindex - Wormhole",
      "user": {
        "album_count": 1,
        "artist_pick_track_id": "gQRgZ",
        "bio": "Storytelling Bass Music",
        "cover_photo": {
          "640x": "https://audius-content-1.cultur3stake.com/content/QmQGJeLf73YymgeL9nrtDgSrM255ownEAw8pKupbCbVHFj/640x.jpg",
          "2000x": "https://audius-content-1.cultur3stake.com/content/QmQGJeLf73YymgeL9nrtDgSrM255ownEAw8pKupbCbVHFj/2000x.jpg"
        },
        "followee_count": 12,
        "follower_count": 419,
        "does_follow_current_user": false,
        "handle": "mindex",
        "id": "n6OJl",
        "is_verified": false,
        "location": "Austin, TX",
        "name": "MINDEX",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://audius-content-1.cultur3stake.com/content/QmPFsokU1XFz9aKfyd1x2jqZjrJyiPNrXVN6SKf4fkdqBx/150x150.jpg",
          "480x480": "https://audius-content-1.cultur3stake.com/content/QmPFsokU1XFz9aKfyd1x2jqZjrJyiPNrXVN6SKf4fkdqBx/480x480.jpg",
          "1000x1000": "https://audius-content-1.cultur3stake.com/content/QmPFsokU1XFz9aKfyd1x2jqZjrJyiPNrXVN6SKf4fkdqBx/1000x1000.jpg"
        },
        "repost_count": 1,
        "track_count": 11,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x6f69411eb84a058ec4df2f8da426c420ddbede06",
        "spl_wallet": "FQavSBuMGzsavG2M2WbeGWpFDyZwiC4y1XmXeBw13mSw",
        "supporter_count": 3,
        "supporting_count": 0,
        "total_audio_balance": 7
      },
      "duration": 219,
      "downloadable": false,
      "play_count": 5557,
      "permalink": "/mindex/04_mindex-wormhole",
      "is_streamable": true
    }
  ]
}
```

<h3 id="get-underground-trending-tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[tracks_response](#schematracks_response)|

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
|user_signature|string|false|Optional - signature from the requesting user's wallet.|
|user_data|string|false|Optional - data which was used to generate the optional signature argument.|
|premium_content_signature|string|false|Optional - premium content signature for this track which was previously generated by a registered DN.|
|filename|string|false|Optional - Filename in case user is trying to download track.|
|app_name|string|false|Your app name|

#### Detailed descriptions

**user_signature**: Optional - signature from the requesting user's wallet.
        This is needed to authenticate the user and verify access in case the track is premium.

**premium_content_signature**: Optional - premium content signature for this track which was previously generated by a registered DN.
        This is so that track access won't have to be check; instead, we check that the user which generated the
        user signature and the user for whom the DN signed are the same.

**filename**: Optional - Filename in case user is trying to download track.
        This is needed by the CN in order to set the Content-Disposition response header.

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
      "amount": "3000000000000000000",
      "sender": {
        "album_count": 0,
        "artist_pick_track_id": null,
        "bio": "Comunidad de habla Hispana de Audius. Comparte tu música en tus redes sociales y etiquétanos https://linktr.ee/audiusspanish\n\nhttps://discord.com/channels/557662127305785361/862740191046533170",
        "cover_photo": {
          "640x": "https://blockdaemon-audius-content-04.bdnodes.net/content/QmdQcjCgPa5N1Jb2JrqsFZcHYAR1RGd9YJuiswc4WyHDg9/640x.jpg",
          "2000x": "https://blockdaemon-audius-content-04.bdnodes.net/content/QmdQcjCgPa5N1Jb2JrqsFZcHYAR1RGd9YJuiswc4WyHDg9/2000x.jpg"
        },
        "followee_count": 283,
        "follower_count": 97,
        "does_follow_current_user": false,
        "handle": "AudiusSpanishCommunity",
        "id": "Y99y7Jq",
        "is_verified": false,
        "location": "Latin America & Spain",
        "name": "Audius Español 🎧",
        "playlist_count": 3,
        "profile_picture": {
          "150x150": "https://blockdaemon-audius-content-04.bdnodes.net/content/QmWSefzBeuv98mTCKz6sMYdhrLEJDXYzdptQ2RyrNs5EWH/150x150.jpg",
          "480x480": "https://blockdaemon-audius-content-04.bdnodes.net/content/QmWSefzBeuv98mTCKz6sMYdhrLEJDXYzdptQ2RyrNs5EWH/480x480.jpg",
          "1000x1000": "https://blockdaemon-audius-content-04.bdnodes.net/content/QmWSefzBeuv98mTCKz6sMYdhrLEJDXYzdptQ2RyrNs5EWH/1000x1000.jpg"
        },
        "repost_count": 92,
        "track_count": 0,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x2225f4d82ae264d247f2821e3be5d0a3e3fcd2a7",
        "spl_wallet": "F1xQ7nYN1h5PL2biNGoTsChMHBKgprvPE7Frr6kBLadb",
        "supporter_count": 5,
        "supporting_count": 51,
        "total_audio_balance": 191
      },
      "receiver": {
        "album_count": 0,
        "artist_pick_track_id": null,
        "bio": "Electronic Music Artist From  Buenos Aires - Argentina (Minimal - Tech House)\n\nRoad to Music Decentralization ♥",
        "cover_photo": {
          "640x": "https://audius-content-7.figment.io/content/QmYRKtSfYVPWJYezhKhA4WzAMuqpQDPZcR3DVfdzkvHWaM/640x.jpg",
          "2000x": "https://audius-content-7.figment.io/content/QmYRKtSfYVPWJYezhKhA4WzAMuqpQDPZcR3DVfdzkvHWaM/2000x.jpg"
        },
        "followee_count": 1131,
        "follower_count": 1024,
        "does_follow_current_user": false,
        "handle": "xguidosantiago",
        "id": "dEY9m",
        "is_verified": false,
        "location": "",
        "name": "Guido Santiago",
        "playlist_count": 0,
        "profile_picture": {
          "150x150": "https://audius-content-7.figment.io/content/QmUC1ddv4sd3qw5GgRSTDw5HUdDs8QPngZ195Zk9RXHvXB/150x150.jpg",
          "480x480": "https://audius-content-7.figment.io/content/QmUC1ddv4sd3qw5GgRSTDw5HUdDs8QPngZ195Zk9RXHvXB/480x480.jpg",
          "1000x1000": "https://audius-content-7.figment.io/content/QmUC1ddv4sd3qw5GgRSTDw5HUdDs8QPngZ195Zk9RXHvXB/1000x1000.jpg"
        },
        "repost_count": 1,
        "track_count": 5,
        "is_deactivated": false,
        "is_available": true,
        "erc_wallet": "0x53fde452fc2d54f523da5dcde511948109c71bff",
        "spl_wallet": "FZg7NYCsfFLBeXbdm1xXoTsBUCPZ6brZnJvDzP41Ndze",
        "supporter_count": 1,
        "supporting_count": 0,
        "total_audio_balance": 5
      },
      "created_at": "2023-05-15 22:31:02"
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
      "150x150": "https://audius-content-1.cultur3stake.com/content/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/150x150.jpg",
      "480x480": "https://audius-content-1.cultur3stake.com/content/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/480x480.jpg",
      "1000x1000": "https://audius-content-1.cultur3stake.com/content/QmRSVdvMkVnV4UhGNQzNm8pJLLsGwQXyZkCp1dAMYfZx9d/1000x1000.jpg"
    },
    "description": "HYPERMANTRA.\n1 play, 7 chapters, no breaks.\n\nget it here: http://tiny.cc/hypermantra\n\npremiered on Ä Live 8/22.\n\ncredits: ilian, the salsoul orchestra, brian bennett, 100% pure poison, you & explosion band, yuji ohno, frank ocean.",
    "genre": "Electronic",
    "id": "V4W8r",
    "track_cid": "QmcPiBC9eszbYnFaBTxWW1njhWrhYGb2GyfsmsrALNvgcK",
    "mood": "Yearning",
    "release_date": "Mon Aug 24 2020 21:08:36 GMT+0200",
    "remix_of": {
      "tracks": null
    },
    "repost_count": 78,
    "favorite_count": 173,
    "tags": null,
    "title": "HYPERMANTRA",
    "user": {
      "album_count": 0,
      "artist_pick_track_id": null,
      "bio": "kawaii bounce 🌟\n\nmy sample pack: gum.co/camocandybox1\n\nheader by paprikaworm",
      "cover_photo": {
        "640x": "https://audius-content-1.cultur3stake.com/content/QmRf3uh9tS8EbV59ArZwJN8UnpsjMyRyp2LVrpU7K1DYm2/640x.jpg",
        "2000x": "https://audius-content-1.cultur3stake.com/content/QmRf3uh9tS8EbV59ArZwJN8UnpsjMyRyp2LVrpU7K1DYm2/2000x.jpg"
      },
      "followee_count": 208,
      "follower_count": 17635,
      "does_follow_current_user": false,
      "handle": "camouflybeats",
      "id": "nd6JD",
      "is_verified": true,
      "location": "",
      "name": "camoufly",
      "playlist_count": 5,
      "profile_picture": {
        "150x150": "https://audius-content-1.cultur3stake.com/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/150x150.jpg",
        "480x480": "https://audius-content-1.cultur3stake.com/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/480x480.jpg",
        "1000x1000": "https://audius-content-1.cultur3stake.com/content/QmP7RZkooL73JNMDSQ34TYYARzmYD8Xd9onA7kh7U5h3PR/1000x1000.jpg"
      },
      "repost_count": 162,
      "track_count": 80,
      "is_deactivated": false,
      "is_available": true,
      "erc_wallet": "0xa65a69a3c38b55b9a3f83266bcc36fe6950cd85f",
      "spl_wallet": "2bnJKYk6WnseedNWkDEACmS5563uxLCrSRAsQqora947",
      "supporter_count": 32,
      "supporting_count": 0,
      "total_audio_balance": 3496
    },
    "duration": 1741,
    "downloadable": false,
    "play_count": 12927,
    "permalink": "/camouflybeats/hypermantra-86216",
    "is_streamable": true
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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
    "erc_wallet",
    "followee_count",
    "follower_count",
    "handle",
    "id",
    "is_available",
    "is_deactivated",
    "is_verified",
    "name",
    "playlist_count",
    "repost_count",
    "spl_wallet",
    "supporter_count",
    "supporting_count",
    "total_audio_balance",
    "track_count"
  ],
  "properties": {
    "album_count": {
      "type": "integer"
    },
    "artist_pick_track_id": {
      "type": "string"
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
    "is_available": {
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
    },
    "total_audio_balance": {
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
|artist_pick_track_id|string|false|none|none|
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
|is_available|boolean|true|none|none|
|erc_wallet|string|true|none|none|
|spl_wallet|string|true|none|none|
|supporter_count|integer|true|none|none|
|supporting_count|integer|true|none|none|
|total_audio_balance|integer|true|none|none|

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
          "track_cid": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
          },
          "is_streamable": {
            "type": "boolean"
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
    "track_cid": {
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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
    },
    "is_streamable": {
      "type": "boolean"
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
|track_cid|string|false|none|none|
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
|is_streamable|boolean|false|none|none|

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
          "created_at",
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
|data|[[favorite](#schemafavorite)]|false|none|none|

<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>
<h2 id="tocS_favorite">favorite</h2>

```json
{
  "required": [
    "created_at",
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
|favorite_item_id|string|true|none|none|
|favorite_type|string|true|none|none|
|user_id|string|true|none|none|
|created_at|string|true|none|none|

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
          "erc_wallet",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_available",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "total_audio_balance",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "artist_pick_track_id": {
            "type": "string"
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
          "is_available": {
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
          },
          "total_audio_balance": {
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

<a id="schemasubscribers_response"></a>
<a id="schema_subscribers_response"></a>
<a id="tocSsubscribers_response"></a>
<a id="tocssubscribers_response"></a>
<h2 id="tocS_subscribers_response">subscribers_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "album_count",
          "erc_wallet",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_available",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "total_audio_balance",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "artist_pick_track_id": {
            "type": "string"
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
          "is_available": {
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
          },
          "total_audio_balance": {
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

<a id="schemafollowers_response"></a>
<a id="schema_followers_response"></a>
<a id="tocSfollowers_response"></a>
<a id="tocsfollowers_response"></a>
<h2 id="tocS_followers_response">followers_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "album_count",
          "erc_wallet",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_available",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "total_audio_balance",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "artist_pick_track_id": {
            "type": "string"
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
          "is_available": {
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
          },
          "total_audio_balance": {
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

<a id="schemafollowing_response"></a>
<a id="schema_following_response"></a>
<a id="tocSfollowing_response"></a>
<a id="tocsfollowing_response"></a>
<h2 id="tocS_following_response">following_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "album_count",
          "erc_wallet",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_available",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "total_audio_balance",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "artist_pick_track_id": {
            "type": "string"
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
          "is_available": {
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
          },
          "total_audio_balance": {
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

<a id="schemarelated_artist_response"></a>
<a id="schema_related_artist_response"></a>
<a id="tocSrelated_artist_response"></a>
<a id="tocsrelated_artist_response"></a>
<h2 id="tocS_related_artist_response">related_artist_response</h2>

```json
{
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "required": [
          "album_count",
          "erc_wallet",
          "followee_count",
          "follower_count",
          "handle",
          "id",
          "is_available",
          "is_deactivated",
          "is_verified",
          "name",
          "playlist_count",
          "repost_count",
          "spl_wallet",
          "supporter_count",
          "supporting_count",
          "total_audio_balance",
          "track_count"
        ],
        "properties": {
          "album_count": {
            "type": "integer"
          },
          "artist_pick_track_id": {
            "type": "string"
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
          "is_available": {
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
          },
          "total_audio_balance": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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
          "permalink": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
    "permalink": {
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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
|permalink|string|false|none|none|
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
          "track_cid": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
          },
          "is_streamable": {
            "type": "boolean"
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
          "permalink": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
          "permalink": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
        "track_cid": {
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
            "erc_wallet",
            "followee_count",
            "follower_count",
            "handle",
            "id",
            "is_available",
            "is_deactivated",
            "is_verified",
            "name",
            "playlist_count",
            "repost_count",
            "spl_wallet",
            "supporter_count",
            "supporting_count",
            "total_audio_balance",
            "track_count"
          ],
          "properties": {
            "album_count": {
              "type": "integer"
            },
            "artist_pick_track_id": {
              "type": "string"
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
            "is_available": {
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
            },
            "total_audio_balance": {
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
        },
        "is_streamable": {
          "type": "boolean"
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
          "track_cid": {
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
          },
          "is_streamable": {
            "type": "boolean"
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
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "receiver": {
            "required": [
              "album_count",
              "erc_wallet",
              "followee_count",
              "follower_count",
              "handle",
              "id",
              "is_available",
              "is_deactivated",
              "is_verified",
              "name",
              "playlist_count",
              "repost_count",
              "spl_wallet",
              "supporter_count",
              "supporting_count",
              "total_audio_balance",
              "track_count"
            ],
            "properties": {
              "album_count": {
                "type": "integer"
              },
              "artist_pick_track_id": {
                "type": "string"
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
              "is_available": {
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
              },
              "total_audio_balance": {
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
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
          "type": "integer"
        }
      },
      "type": "object"
    },
    "receiver": {
      "required": [
        "album_count",
        "erc_wallet",
        "followee_count",
        "follower_count",
        "handle",
        "id",
        "is_available",
        "is_deactivated",
        "is_verified",
        "name",
        "playlist_count",
        "repost_count",
        "spl_wallet",
        "supporter_count",
        "supporting_count",
        "total_audio_balance",
        "track_count"
      ],
      "properties": {
        "album_count": {
          "type": "integer"
        },
        "artist_pick_track_id": {
          "type": "string"
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
        "is_available": {
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
        },
        "total_audio_balance": {
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

