<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api">API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Audius V1 API

Base URLs:

* <a href="/v1">/v1</a>

<h1 id="api-users">users</h1>

User related operations

## get_search_result

<a id="opIdget_search_result"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/users/search?query=string

```

```http
GET /v1/users/search?query=string HTTP/1.1

```

```javascript

fetch('/v1/users/search?query=string',
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

result = RestClient.get '/v1/users/search',
  params: {
  'query' => 'string'
}

p JSON.parse(result)

```

```python
import requests

r = requests.get('/v1/users/search', params={
  'query': 'string'
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
    $response = $client->request('GET','/v1/users/search', array(
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
URL obj = new URL("/v1/users/search?query=string");
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
    req, err := http.NewRequest("GET", "/v1/users/search", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/search`

<h3 id="get_search_result-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|

<h3 id="get_search_result-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_user

<a id="opIdget_user"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/users/{user_id} \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/users/{user_id} HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/users/{user_id}',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/users/{user_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/users/{user_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/users/{user_id}', array(
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
URL obj = new URL("/v1/users/{user_id}");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/users/{user_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}`

*Fetch a single user*

<h3 id="get_user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "album_count": 0,
    "bio": "string",
    "blockhash": "string",
    "blocknumber": 0,
    "cover_photo": "string",
    "cover_photo_sizes": "string",
    "created_at": "string",
    "creator_node_endpoint": "string",
    "current_user_followee_follow_count": 0,
    "does_current_user_follow": true,
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "handle_lc": "string",
    "id": "string",
    "is_creator": true,
    "is_current": true,
    "is_verified": true,
    "location": "string",
    "metadata_multihash": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": "string",
    "profile_picture_sizes": "string",
    "repost_count": 0,
    "track_blocknumber": 0,
    "track_count": 0,
    "updated_at": "string",
    "wallet": "string"
  },
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[user_response](#schemauser_response)|

<aside class="success">
This operation does not require authentication
</aside>

## get_favorited_tracks

<a id="opIdget_favorited_tracks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/users/{user_id}/favorites \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/users/{user_id}/favorites HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/users/{user_id}/favorites',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/users/{user_id}/favorites',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/users/{user_id}/favorites', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/users/{user_id}/favorites', array(
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
URL obj = new URL("/v1/users/{user_id}/favorites");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/users/{user_id}/favorites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/favorites`

*Fetch favorited tracks for a user*

<h3 id="get_favorited_tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "save_item_id": "string",
      "save_type": "string",
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_favorited_tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[favorites_response](#schemafavorites_response)|

<aside class="success">
This operation does not require authentication
</aside>

## get_track_list

<a id="opIdget_track_list"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/users/{user_id}/tracks \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/users/{user_id}/tracks HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/users/{user_id}/tracks',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/users/{user_id}/tracks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/users/{user_id}/tracks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/users/{user_id}/tracks', array(
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
URL obj = new URL("/v1/users/{user_id}/tracks");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/users/{user_id}/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{user_id}/tracks`

*Fetch a list of tracks for a user*

<h3 id="get_track_list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|user_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "cover_art": "string",
      "cover_art_sizes": "string",
      "create_date": "string",
      "created_at": "string",
      "credits_splits": "string",
      "description": "string",
      "download": {
        "cid": "string",
        "is_downloadable": true,
        "required_follow": true
      },
      "field_visibility": {
        "mood": true,
        "tags": true,
        "genre": true,
        "share": true,
        "play_count": true,
        "remixes": true
      },
      "file_type": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "genre": "string",
      "has_current_user_reposted": true,
      "has_current_user_saved": true,
      "id": "string",
      "is_current": true,
      "is_delete": true,
      "is_unlisted": true,
      "isrc": "string",
      "iswc": "string",
      "length": 0,
      "license": "string",
      "metadata_multihash": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": 0
          }
        ]
      },
      "repost_count": 0,
      "route_id": "string",
      "save_count": 0,
      "stem_of": {
        "category": "string",
        "parent_track_id": 0
      },
      "tags": "string",
      "title": "string",
      "track_segments": [
        {
          "duration": 0,
          "multihash": "string"
        }
      ],
      "updated_at": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "blockhash": "string",
        "blocknumber": 0,
        "cover_photo": "string",
        "cover_photo_sizes": "string",
        "created_at": "string",
        "creator_node_endpoint": "string",
        "current_user_followee_follow_count": 0,
        "does_current_user_follow": true,
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "handle_lc": "string",
        "id": "string",
        "is_creator": true,
        "is_current": true,
        "is_verified": true,
        "location": "string",
        "metadata_multihash": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": "string",
        "profile_picture_sizes": "string",
        "repost_count": 0,
        "track_blocknumber": 0,
        "track_count": 0,
        "updated_at": "string",
        "wallet": "string"
      },
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_track_list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[tracks_response](#schematracks_response)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-playlists">playlists</h1>

Playlist related operations

## get_playlist

<a id="opIdget_playlist"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/playlists/{playlist_id} \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/playlists/{playlist_id} HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/playlists/{playlist_id}',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/playlists/{playlist_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/playlists/{playlist_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/playlists/{playlist_id}', array(
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
URL obj = new URL("/v1/playlists/{playlist_id}");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/playlists/{playlist_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}`

*Fetch a playlist*

<h3 id="get_playlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|playlist_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "description": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "has_current_user_reposted": true,
      "has_current_user_saved\ttrue": true,
      "id": "string",
      "is_album": true,
      "is_current": true,
      "is_delete": true,
      "is_private": true,
      "playlist_contents": {
        "track_ids": [
          {
            "time": 0,
            "track": 0
          }
        ]
      },
      "playlist_id": 0,
      "playlist_image_multihash": "string",
      "playlist_image_sizes_multihash": "string",
      "playlist_name": "string",
      "repost_count": 0,
      "save_count": 0,
      "upc": "string",
      "updated_at": "string",
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_playlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[playlist_response](#schemaplaylist_response)|

<aside class="success">
This operation does not require authentication
</aside>

## get_playlist_tracks

<a id="opIdget_playlist_tracks"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/playlists/{playlist_id}/tracks \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/playlists/{playlist_id}/tracks HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/playlists/{playlist_id}/tracks',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/playlists/{playlist_id}/tracks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/playlists/{playlist_id}/tracks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/playlists/{playlist_id}/tracks', array(
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
URL obj = new URL("/v1/playlists/{playlist_id}/tracks");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/playlists/{playlist_id}/tracks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /playlists/{playlist_id}/tracks`

*Fetch tracks within a playlist*

<h3 id="get_playlist_tracks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|playlist_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "cover_art": "string",
      "cover_art_sizes": "string",
      "create_date": "string",
      "created_at": "string",
      "credits_splits": "string",
      "description": "string",
      "download": {
        "cid": "string",
        "is_downloadable": true,
        "required_follow": true
      },
      "field_visibility": {
        "mood": true,
        "tags": true,
        "genre": true,
        "share": true,
        "play_count": true,
        "remixes": true
      },
      "file_type": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "genre": "string",
      "has_current_user_reposted": true,
      "has_current_user_saved": true,
      "id": "string",
      "is_current": true,
      "is_delete": true,
      "is_unlisted": true,
      "isrc": "string",
      "iswc": "string",
      "length": 0,
      "license": "string",
      "metadata_multihash": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": 0
          }
        ]
      },
      "repost_count": 0,
      "route_id": "string",
      "save_count": 0,
      "stem_of": {
        "category": "string",
        "parent_track_id": 0
      },
      "tags": "string",
      "title": "string",
      "track_segments": [
        {
          "duration": 0,
          "multihash": "string"
        }
      ],
      "updated_at": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "blockhash": "string",
        "blocknumber": 0,
        "cover_photo": "string",
        "cover_photo_sizes": "string",
        "created_at": "string",
        "creator_node_endpoint": "string",
        "current_user_followee_follow_count": 0,
        "does_current_user_follow": true,
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "handle_lc": "string",
        "id": "string",
        "is_creator": true,
        "is_current": true,
        "is_verified": true,
        "location": "string",
        "metadata_multihash": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": "string",
        "profile_picture_sizes": "string",
        "repost_count": 0,
        "track_blocknumber": 0,
        "track_count": 0,
        "updated_at": "string",
        "wallet": "string"
      },
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_playlist_tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[playlist_tracks_response](#schemaplaylist_tracks_response)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-tracks">tracks</h1>

Track related operations

## get_track

<a id="opIdget_track"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/tracks/{track_id} \
  -H 'Accept: application/json' \
  -H 'X-Fields: string'

```

```http
GET /v1/tracks/{track_id} HTTP/1.1

Accept: application/json
X-Fields: string

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-Fields':'string'
};

fetch('/v1/tracks/{track_id}',
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
  'Accept' => 'application/json',
  'X-Fields' => 'string'
}

result = RestClient.get '/v1/tracks/{track_id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-Fields': 'string'
}

r = requests.get('/v1/tracks/{track_id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-Fields' => 'string',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/tracks/{track_id}', array(
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
URL obj = new URL("/v1/tracks/{track_id}");
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
        "X-Fields": []string{"string"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/v1/tracks/{track_id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}`

*Fetch a track*

<h3 id="get_track-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Fields|header|string(mask)|false|An optional fields mask|
|track_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "blockhash": "string",
    "blocknumber": 0,
    "cover_art": "string",
    "cover_art_sizes": "string",
    "create_date": "string",
    "created_at": "string",
    "credits_splits": "string",
    "description": "string",
    "download": {
      "cid": "string",
      "is_downloadable": true,
      "required_follow": true
    },
    "field_visibility": {
      "mood": true,
      "tags": true,
      "genre": true,
      "share": true,
      "play_count": true,
      "remixes": true
    },
    "file_type": "string",
    "followee_reposts": [
      {
        "blockhash": "string",
        "blocknumber": 0,
        "created_at": "string",
        "is_current": true,
        "is_delete": true,
        "repost_item_id": 0,
        "repost_type": "string",
        "user_id": 0
      }
    ],
    "followee_saves": [
      {
        "blockhash": "string",
        "blocknumber": 0,
        "created_at": "string",
        "is_current": true,
        "is_delete": true,
        "save_item_id": "string",
        "save_type": "string",
        "user_id": "string"
      }
    ],
    "genre": "string",
    "has_current_user_reposted": true,
    "has_current_user_saved": true,
    "id": "string",
    "is_current": true,
    "is_delete": true,
    "is_unlisted": true,
    "isrc": "string",
    "iswc": "string",
    "length": 0,
    "license": "string",
    "metadata_multihash": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": 0
        }
      ]
    },
    "repost_count": 0,
    "route_id": "string",
    "save_count": 0,
    "stem_of": {
      "category": "string",
      "parent_track_id": 0
    },
    "tags": "string",
    "title": "string",
    "track_segments": [
      {
        "duration": 0,
        "multihash": "string"
      }
    ],
    "updated_at": "string",
    "user": {
      "album_count": 0,
      "bio": "string",
      "blockhash": "string",
      "blocknumber": 0,
      "cover_photo": "string",
      "cover_photo_sizes": "string",
      "created_at": "string",
      "creator_node_endpoint": "string",
      "current_user_followee_follow_count": 0,
      "does_current_user_follow": true,
      "followee_count": 0,
      "follower_count": 0,
      "handle": "string",
      "handle_lc": "string",
      "id": "string",
      "is_creator": true,
      "is_current": true,
      "is_verified": true,
      "location": "string",
      "metadata_multihash": "string",
      "name": "string",
      "playlist_count": 0,
      "profile_picture": "string",
      "profile_picture_sizes": "string",
      "repost_count": 0,
      "track_blocknumber": 0,
      "track_count": 0,
      "updated_at": "string",
      "wallet": "string"
    },
    "user_id": "string"
  },
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}
```

<h3 id="get_track-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[track_response](#schematrack_response)|

<aside class="success">
This operation does not require authentication
</aside>

## get_track_stream

<a id="opIdget_track_stream"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /v1/tracks/{track_id}/stream

```

```http
GET /v1/tracks/{track_id}/stream HTTP/1.1

```

```javascript

fetch('/v1/tracks/{track_id}/stream',
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

result = RestClient.get '/v1/tracks/{track_id}/stream',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/v1/tracks/{track_id}/stream')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/v1/tracks/{track_id}/stream', array(
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
URL obj = new URL("/v1/tracks/{track_id}/stream");
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
    req, err := http.NewRequest("GET", "/v1/tracks/{track_id}/stream", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /tracks/{track_id}/stream`

*Redirect to track mp3*

<h3 id="get_track_stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|track_id|path|string|true|none|

<h3 id="get_track_stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_user_response">user_response</h2>
<!-- backwards compatibility -->
<a id="schemauser_response"></a>
<a id="schema_user_response"></a>
<a id="tocSuser_response"></a>
<a id="tocsuser_response"></a>

```json
{
  "data": {
    "album_count": 0,
    "bio": "string",
    "blockhash": "string",
    "blocknumber": 0,
    "cover_photo": "string",
    "cover_photo_sizes": "string",
    "created_at": "string",
    "creator_node_endpoint": "string",
    "current_user_followee_follow_count": 0,
    "does_current_user_follow": true,
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "handle_lc": "string",
    "id": "string",
    "is_creator": true,
    "is_current": true,
    "is_verified": true,
    "location": "string",
    "metadata_multihash": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": "string",
    "profile_picture_sizes": "string",
    "repost_count": 0,
    "track_blocknumber": 0,
    "track_count": 0,
    "updated_at": "string",
    "wallet": "string"
  },
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[user](#schemauser)|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "album_count": 0,
  "bio": "string",
  "blockhash": "string",
  "blocknumber": 0,
  "cover_photo": "string",
  "cover_photo_sizes": "string",
  "created_at": "string",
  "creator_node_endpoint": "string",
  "current_user_followee_follow_count": 0,
  "does_current_user_follow": true,
  "followee_count": 0,
  "follower_count": 0,
  "handle": "string",
  "handle_lc": "string",
  "id": "string",
  "is_creator": true,
  "is_current": true,
  "is_verified": true,
  "location": "string",
  "metadata_multihash": "string",
  "name": "string",
  "playlist_count": 0,
  "profile_picture": "string",
  "profile_picture_sizes": "string",
  "repost_count": 0,
  "track_blocknumber": 0,
  "track_count": 0,
  "updated_at": "string",
  "wallet": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|album_count|integer|true|none|none|
|bio|string|false|none|none|
|blockhash|string|true|none|none|
|blocknumber|integer|true|none|none|
|cover_photo|string|false|none|none|
|cover_photo_sizes|string|false|none|none|
|created_at|string|true|none|none|
|creator_node_endpoint|string|false|none|none|
|current_user_followee_follow_count|integer|true|none|none|
|does_current_user_follow|boolean|true|none|none|
|followee_count|integer|true|none|none|
|follower_count|integer|true|none|none|
|handle|string|true|none|none|
|handle_lc|string|true|none|none|
|id|string|true|none|none|
|is_creator|boolean|true|none|none|
|is_current|boolean|true|none|none|
|is_verified|boolean|true|none|none|
|location|string|false|none|none|
|metadata_multihash|string|true|none|none|
|name|string|true|none|none|
|playlist_count|integer|true|none|none|
|profile_picture|string|false|none|none|
|profile_picture_sizes|string|false|none|none|
|repost_count|integer|true|none|none|
|track_blocknumber|integer|true|none|none|
|track_count|integer|true|none|none|
|updated_at|string|true|none|none|
|wallet|string|true|none|none|

<h2 id="tocS_version_metadata">version_metadata</h2>
<!-- backwards compatibility -->
<a id="schemaversion_metadata"></a>
<a id="schema_version_metadata"></a>
<a id="tocSversion_metadata"></a>
<a id="tocsversion_metadata"></a>

```json
{
  "service": "string",
  "version": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_tracks_response">tracks_response</h2>
<!-- backwards compatibility -->
<a id="schematracks_response"></a>
<a id="schema_tracks_response"></a>
<a id="tocStracks_response"></a>
<a id="tocstracks_response"></a>

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "cover_art": "string",
      "cover_art_sizes": "string",
      "create_date": "string",
      "created_at": "string",
      "credits_splits": "string",
      "description": "string",
      "download": {
        "cid": "string",
        "is_downloadable": true,
        "required_follow": true
      },
      "field_visibility": {
        "mood": true,
        "tags": true,
        "genre": true,
        "share": true,
        "play_count": true,
        "remixes": true
      },
      "file_type": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "genre": "string",
      "has_current_user_reposted": true,
      "has_current_user_saved": true,
      "id": "string",
      "is_current": true,
      "is_delete": true,
      "is_unlisted": true,
      "isrc": "string",
      "iswc": "string",
      "length": 0,
      "license": "string",
      "metadata_multihash": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": 0
          }
        ]
      },
      "repost_count": 0,
      "route_id": "string",
      "save_count": 0,
      "stem_of": {
        "category": "string",
        "parent_track_id": 0
      },
      "tags": "string",
      "title": "string",
      "track_segments": [
        {
          "duration": 0,
          "multihash": "string"
        }
      ],
      "updated_at": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "blockhash": "string",
        "blocknumber": 0,
        "cover_photo": "string",
        "cover_photo_sizes": "string",
        "created_at": "string",
        "creator_node_endpoint": "string",
        "current_user_followee_follow_count": 0,
        "does_current_user_follow": true,
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "handle_lc": "string",
        "id": "string",
        "is_creator": true,
        "is_current": true,
        "is_verified": true,
        "location": "string",
        "metadata_multihash": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": "string",
        "profile_picture_sizes": "string",
        "repost_count": 0,
        "track_blocknumber": 0,
        "track_count": 0,
        "updated_at": "string",
        "wallet": "string"
      },
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Track](#schematrack)]|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

<h2 id="tocS_Track">Track</h2>
<!-- backwards compatibility -->
<a id="schematrack"></a>
<a id="schema_Track"></a>
<a id="tocStrack"></a>
<a id="tocstrack"></a>

```json
{
  "blockhash": "string",
  "blocknumber": 0,
  "cover_art": "string",
  "cover_art_sizes": "string",
  "create_date": "string",
  "created_at": "string",
  "credits_splits": "string",
  "description": "string",
  "download": {
    "cid": "string",
    "is_downloadable": true,
    "required_follow": true
  },
  "field_visibility": {
    "mood": true,
    "tags": true,
    "genre": true,
    "share": true,
    "play_count": true,
    "remixes": true
  },
  "file_type": "string",
  "followee_reposts": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "repost_item_id": 0,
      "repost_type": "string",
      "user_id": 0
    }
  ],
  "followee_saves": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "save_item_id": "string",
      "save_type": "string",
      "user_id": "string"
    }
  ],
  "genre": "string",
  "has_current_user_reposted": true,
  "has_current_user_saved": true,
  "id": "string",
  "is_current": true,
  "is_delete": true,
  "is_unlisted": true,
  "isrc": "string",
  "iswc": "string",
  "length": 0,
  "license": "string",
  "metadata_multihash": "string",
  "mood": "string",
  "release_date": "string",
  "remix_of": {
    "tracks": [
      {
        "parent_track_id": 0
      }
    ]
  },
  "repost_count": 0,
  "route_id": "string",
  "save_count": 0,
  "stem_of": {
    "category": "string",
    "parent_track_id": 0
  },
  "tags": "string",
  "title": "string",
  "track_segments": [
    {
      "duration": 0,
      "multihash": "string"
    }
  ],
  "updated_at": "string",
  "user": {
    "album_count": 0,
    "bio": "string",
    "blockhash": "string",
    "blocknumber": 0,
    "cover_photo": "string",
    "cover_photo_sizes": "string",
    "created_at": "string",
    "creator_node_endpoint": "string",
    "current_user_followee_follow_count": 0,
    "does_current_user_follow": true,
    "followee_count": 0,
    "follower_count": 0,
    "handle": "string",
    "handle_lc": "string",
    "id": "string",
    "is_creator": true,
    "is_current": true,
    "is_verified": true,
    "location": "string",
    "metadata_multihash": "string",
    "name": "string",
    "playlist_count": 0,
    "profile_picture": "string",
    "profile_picture_sizes": "string",
    "repost_count": 0,
    "track_blocknumber": 0,
    "track_count": 0,
    "updated_at": "string",
    "wallet": "string"
  },
  "user_id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|true|none|none|
|blocknumber|integer|true|none|none|
|cover_art|string|false|none|none|
|cover_art_sizes|string|false|none|none|
|create_date|string|false|none|none|
|created_at|string|false|none|none|
|credits_splits|string|false|none|none|
|description|string|false|none|none|
|download|[download_metadata](#schemadownload_metadata)|false|none|none|
|field_visibility|[field_visibility](#schemafield_visibility)|false|none|none|
|file_type|string|false|none|none|
|followee_reposts|[[repost](#schemarepost)]|true|none|none|
|followee_saves|[[favorite](#schemafavorite)]|true|none|none|
|genre|string|false|none|none|
|has_current_user_reposted|boolean|true|none|none|
|has_current_user_saved|boolean|true|none|none|
|id|string|true|none|none|
|is_current|boolean|true|none|none|
|is_delete|boolean|true|none|none|
|is_unlisted|boolean|true|none|none|
|isrc|string|false|none|none|
|iswc|string|false|none|none|
|length|integer|false|none|none|
|license|string|false|none|none|
|metadata_multihash|string|true|none|none|
|mood|string|false|none|none|
|release_date|string|false|none|none|
|remix_of|[remix_parent](#schemaremix_parent)|false|none|none|
|repost_count|integer|true|none|none|
|route_id|string|true|none|none|
|save_count|integer|true|none|none|
|stem_of|[stem_parent](#schemastem_parent)|false|none|none|
|tags|string|false|none|none|
|title|string|true|none|none|
|track_segments|[[track_segment](#schematrack_segment)]|false|none|none|
|updated_at|string|false|none|none|
|user|[user](#schemauser)|true|none|none|
|user_id|string|true|none|none|

<h2 id="tocS_download_metadata">download_metadata</h2>
<!-- backwards compatibility -->
<a id="schemadownload_metadata"></a>
<a id="schema_download_metadata"></a>
<a id="tocSdownload_metadata"></a>
<a id="tocsdownload_metadata"></a>

```json
{
  "cid": "string",
  "is_downloadable": true,
  "required_follow": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cid|string|false|none|none|
|is_downloadable|boolean|true|none|none|
|required_follow|boolean|true|none|none|

<h2 id="tocS_field_visibility">field_visibility</h2>
<!-- backwards compatibility -->
<a id="schemafield_visibility"></a>
<a id="schema_field_visibility"></a>
<a id="tocSfield_visibility"></a>
<a id="tocsfield_visibility"></a>

```json
{
  "mood": true,
  "tags": true,
  "genre": true,
  "share": true,
  "play_count": true,
  "remixes": true
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mood|boolean|false|none|none|
|tags|boolean|false|none|none|
|genre|boolean|false|none|none|
|share|boolean|false|none|none|
|play_count|boolean|false|none|none|
|remixes|boolean|false|none|none|

<h2 id="tocS_repost">repost</h2>
<!-- backwards compatibility -->
<a id="schemarepost"></a>
<a id="schema_repost"></a>
<a id="tocSrepost"></a>
<a id="tocsrepost"></a>

```json
{
  "blockhash": "string",
  "blocknumber": 0,
  "created_at": "string",
  "is_current": true,
  "is_delete": true,
  "repost_item_id": 0,
  "repost_type": "string",
  "user_id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|true|none|none|
|blocknumber|integer|true|none|none|
|created_at|string|true|none|none|
|is_current|boolean|true|none|none|
|is_delete|boolean|true|none|none|
|repost_item_id|integer|true|none|none|
|repost_type|string|true|none|none|
|user_id|integer|true|none|none|

<h2 id="tocS_favorite">favorite</h2>
<!-- backwards compatibility -->
<a id="schemafavorite"></a>
<a id="schema_favorite"></a>
<a id="tocSfavorite"></a>
<a id="tocsfavorite"></a>

```json
{
  "blockhash": "string",
  "blocknumber": 0,
  "created_at": "string",
  "is_current": true,
  "is_delete": true,
  "save_item_id": "string",
  "save_type": "string",
  "user_id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|true|none|none|
|blocknumber|integer|true|none|none|
|created_at|string|true|none|none|
|is_current|boolean|true|none|none|
|is_delete|boolean|true|none|none|
|save_item_id|string|true|none|none|
|save_type|string|true|none|none|
|user_id|string|true|none|none|

<h2 id="tocS_remix_parent">remix_parent</h2>
<!-- backwards compatibility -->
<a id="schemaremix_parent"></a>
<a id="schema_remix_parent"></a>
<a id="tocSremix_parent"></a>
<a id="tocsremix_parent"></a>

```json
{
  "tracks": [
    {
      "parent_track_id": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracks|[[track_element](#schematrack_element)]|false|none|none|

<h2 id="tocS_track_element">track_element</h2>
<!-- backwards compatibility -->
<a id="schematrack_element"></a>
<a id="schema_track_element"></a>
<a id="tocStrack_element"></a>
<a id="tocstrack_element"></a>

```json
{
  "parent_track_id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parent_track_id|integer|true|none|none|

<h2 id="tocS_stem_parent">stem_parent</h2>
<!-- backwards compatibility -->
<a id="schemastem_parent"></a>
<a id="schema_stem_parent"></a>
<a id="tocSstem_parent"></a>
<a id="tocsstem_parent"></a>

```json
{
  "category": "string",
  "parent_track_id": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|none|
|parent_track_id|integer|true|none|none|

<h2 id="tocS_track_segment">track_segment</h2>
<!-- backwards compatibility -->
<a id="schematrack_segment"></a>
<a id="schema_track_segment"></a>
<a id="tocStrack_segment"></a>
<a id="tocstrack_segment"></a>

```json
{
  "duration": 0,
  "multihash": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration|number|true|none|none|
|multihash|string|true|none|none|

<h2 id="tocS_favorites_response">favorites_response</h2>
<!-- backwards compatibility -->
<a id="schemafavorites_response"></a>
<a id="schema_favorites_response"></a>
<a id="tocSfavorites_response"></a>
<a id="tocsfavorites_response"></a>

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "save_item_id": "string",
      "save_type": "string",
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[favorite](#schemafavorite)]|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

<h2 id="tocS_playlist_response">playlist_response</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist_response"></a>
<a id="schema_playlist_response"></a>
<a id="tocSplaylist_response"></a>
<a id="tocsplaylist_response"></a>

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "description": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "has_current_user_reposted": true,
      "has_current_user_saved\ttrue": true,
      "id": "string",
      "is_album": true,
      "is_current": true,
      "is_delete": true,
      "is_private": true,
      "playlist_contents": {
        "track_ids": [
          {
            "time": 0,
            "track": 0
          }
        ]
      },
      "playlist_id": 0,
      "playlist_image_multihash": "string",
      "playlist_image_sizes_multihash": "string",
      "playlist_name": "string",
      "repost_count": 0,
      "save_count": 0,
      "upc": "string",
      "updated_at": "string",
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[playlist](#schemaplaylist)]|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

<h2 id="tocS_playlist">playlist</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist"></a>
<a id="schema_playlist"></a>
<a id="tocSplaylist"></a>
<a id="tocsplaylist"></a>

```json
{
  "blockhash": "string",
  "blocknumber": 0,
  "created_at": "string",
  "description": "string",
  "followee_reposts": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "repost_item_id": 0,
      "repost_type": "string",
      "user_id": 0
    }
  ],
  "followee_saves": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "created_at": "string",
      "is_current": true,
      "is_delete": true,
      "save_item_id": "string",
      "save_type": "string",
      "user_id": "string"
    }
  ],
  "has_current_user_reposted": true,
  "has_current_user_saved\ttrue": true,
  "id": "string",
  "is_album": true,
  "is_current": true,
  "is_delete": true,
  "is_private": true,
  "playlist_contents": {
    "track_ids": [
      {
        "time": 0,
        "track": 0
      }
    ]
  },
  "playlist_id": 0,
  "playlist_image_multihash": "string",
  "playlist_image_sizes_multihash": "string",
  "playlist_name": "string",
  "repost_count": 0,
  "save_count": 0,
  "upc": "string",
  "updated_at": "string",
  "user_id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blockhash|string|true|none|none|
|blocknumber|integer|true|none|none|
|created_at|string|false|none|none|
|description|string|false|none|none|
|followee_reposts|[[repost](#schemarepost)]|false|none|none|
|followee_saves|[[favorite](#schemafavorite)]|false|none|none|
|has_current_user_reposted|boolean|true|none|none|
|has_current_user_saved	true|boolean|true|none|none|
|id|string|true|none|none|
|is_album|boolean|true|none|none|
|is_current|boolean|true|none|none|
|is_delete|boolean|true|none|none|
|is_private|boolean|true|none|none|
|playlist_contents|[playlist_contents](#schemaplaylist_contents)|true|none|none|
|playlist_id|integer|true|none|none|
|playlist_image_multihash|string|false|none|none|
|playlist_image_sizes_multihash|string|false|none|none|
|playlist_name|string|true|none|none|
|repost_count|integer|true|none|none|
|save_count|integer|true|none|none|
|upc|string|false|none|none|
|updated_at|string|false|none|none|
|user_id|string|true|none|none|

<h2 id="tocS_playlist_contents">playlist_contents</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist_contents"></a>
<a id="schema_playlist_contents"></a>
<a id="tocSplaylist_contents"></a>
<a id="tocsplaylist_contents"></a>

```json
{
  "track_ids": [
    {
      "time": 0,
      "track": 0
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|track_ids|[[playlist_track](#schemaplaylist_track)]|false|none|none|

<h2 id="tocS_playlist_track">playlist_track</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist_track"></a>
<a id="schema_playlist_track"></a>
<a id="tocSplaylist_track"></a>
<a id="tocsplaylist_track"></a>

```json
{
  "time": 0,
  "track": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|time|integer|true|none|none|
|track|integer|true|none|none|

<h2 id="tocS_playlist_tracks_response">playlist_tracks_response</h2>
<!-- backwards compatibility -->
<a id="schemaplaylist_tracks_response"></a>
<a id="schema_playlist_tracks_response"></a>
<a id="tocSplaylist_tracks_response"></a>
<a id="tocsplaylist_tracks_response"></a>

```json
{
  "data": [
    {
      "blockhash": "string",
      "blocknumber": 0,
      "cover_art": "string",
      "cover_art_sizes": "string",
      "create_date": "string",
      "created_at": "string",
      "credits_splits": "string",
      "description": "string",
      "download": {
        "cid": "string",
        "is_downloadable": true,
        "required_follow": true
      },
      "field_visibility": {
        "mood": true,
        "tags": true,
        "genre": true,
        "share": true,
        "play_count": true,
        "remixes": true
      },
      "file_type": "string",
      "followee_reposts": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "repost_item_id": 0,
          "repost_type": "string",
          "user_id": 0
        }
      ],
      "followee_saves": [
        {
          "blockhash": "string",
          "blocknumber": 0,
          "created_at": "string",
          "is_current": true,
          "is_delete": true,
          "save_item_id": "string",
          "save_type": "string",
          "user_id": "string"
        }
      ],
      "genre": "string",
      "has_current_user_reposted": true,
      "has_current_user_saved": true,
      "id": "string",
      "is_current": true,
      "is_delete": true,
      "is_unlisted": true,
      "isrc": "string",
      "iswc": "string",
      "length": 0,
      "license": "string",
      "metadata_multihash": "string",
      "mood": "string",
      "release_date": "string",
      "remix_of": {
        "tracks": [
          {
            "parent_track_id": 0
          }
        ]
      },
      "repost_count": 0,
      "route_id": "string",
      "save_count": 0,
      "stem_of": {
        "category": "string",
        "parent_track_id": 0
      },
      "tags": "string",
      "title": "string",
      "track_segments": [
        {
          "duration": 0,
          "multihash": "string"
        }
      ],
      "updated_at": "string",
      "user": {
        "album_count": 0,
        "bio": "string",
        "blockhash": "string",
        "blocknumber": 0,
        "cover_photo": "string",
        "cover_photo_sizes": "string",
        "created_at": "string",
        "creator_node_endpoint": "string",
        "current_user_followee_follow_count": 0,
        "does_current_user_follow": true,
        "followee_count": 0,
        "follower_count": 0,
        "handle": "string",
        "handle_lc": "string",
        "id": "string",
        "is_creator": true,
        "is_current": true,
        "is_verified": true,
        "location": "string",
        "metadata_multihash": "string",
        "name": "string",
        "playlist_count": 0,
        "profile_picture": "string",
        "profile_picture_sizes": "string",
        "repost_count": 0,
        "track_blocknumber": 0,
        "track_count": 0,
        "updated_at": "string",
        "wallet": "string"
      },
      "user_id": "string"
    }
  ],
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Track](#schematrack)]|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

<h2 id="tocS_track_response">track_response</h2>
<!-- backwards compatibility -->
<a id="schematrack_response"></a>
<a id="schema_track_response"></a>
<a id="tocStrack_response"></a>
<a id="tocstrack_response"></a>

```json
{
  "data": {
    "blockhash": "string",
    "blocknumber": 0,
    "cover_art": "string",
    "cover_art_sizes": "string",
    "create_date": "string",
    "created_at": "string",
    "credits_splits": "string",
    "description": "string",
    "download": {
      "cid": "string",
      "is_downloadable": true,
      "required_follow": true
    },
    "field_visibility": {
      "mood": true,
      "tags": true,
      "genre": true,
      "share": true,
      "play_count": true,
      "remixes": true
    },
    "file_type": "string",
    "followee_reposts": [
      {
        "blockhash": "string",
        "blocknumber": 0,
        "created_at": "string",
        "is_current": true,
        "is_delete": true,
        "repost_item_id": 0,
        "repost_type": "string",
        "user_id": 0
      }
    ],
    "followee_saves": [
      {
        "blockhash": "string",
        "blocknumber": 0,
        "created_at": "string",
        "is_current": true,
        "is_delete": true,
        "save_item_id": "string",
        "save_type": "string",
        "user_id": "string"
      }
    ],
    "genre": "string",
    "has_current_user_reposted": true,
    "has_current_user_saved": true,
    "id": "string",
    "is_current": true,
    "is_delete": true,
    "is_unlisted": true,
    "isrc": "string",
    "iswc": "string",
    "length": 0,
    "license": "string",
    "metadata_multihash": "string",
    "mood": "string",
    "release_date": "string",
    "remix_of": {
      "tracks": [
        {
          "parent_track_id": 0
        }
      ]
    },
    "repost_count": 0,
    "route_id": "string",
    "save_count": 0,
    "stem_of": {
      "category": "string",
      "parent_track_id": 0
    },
    "tags": "string",
    "title": "string",
    "track_segments": [
      {
        "duration": 0,
        "multihash": "string"
      }
    ],
    "updated_at": "string",
    "user": {
      "album_count": 0,
      "bio": "string",
      "blockhash": "string",
      "blocknumber": 0,
      "cover_photo": "string",
      "cover_photo_sizes": "string",
      "created_at": "string",
      "creator_node_endpoint": "string",
      "current_user_followee_follow_count": 0,
      "does_current_user_follow": true,
      "followee_count": 0,
      "follower_count": 0,
      "handle": "string",
      "handle_lc": "string",
      "id": "string",
      "is_creator": true,
      "is_current": true,
      "is_verified": true,
      "location": "string",
      "metadata_multihash": "string",
      "name": "string",
      "playlist_count": 0,
      "profile_picture": "string",
      "profile_picture_sizes": "string",
      "repost_count": 0,
      "track_blocknumber": 0,
      "track_count": 0,
      "updated_at": "string",
      "wallet": "string"
    },
    "user_id": "string"
  },
  "latest_chain_block": 0,
  "latest_indexed_block": 0,
  "owner_wallet": 0,
  "signature": "string",
  "success": true,
  "timestamp": "string",
  "version": {
    "service": "string",
    "version": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Track](#schematrack)|false|none|none|
|latest_chain_block|integer|true|none|none|
|latest_indexed_block|integer|true|none|none|
|owner_wallet|integer|true|none|none|
|signature|string|true|none|none|
|success|boolean|true|none|none|
|timestamp|string|true|none|none|
|version|[version_metadata](#schemaversion_metadata)|true|none|none|

