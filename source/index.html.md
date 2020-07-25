---
title: Audius API Docs

toc_footers:
  - <a href='https://audius.co'>Audius App</a>
  - <a href='https://github.com/AudiusProject'>github.com/AudiusProject</a>
  - <a href='https://audius.org'>audius.org</a>

search: true

language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go

includes:
  - docs
---

<br />
<br />

# Audius API Docs

### TODO: Flesh out

Audius is a decentralized music streaming protocol.

In order to begin API use, you must first select an API host by visiting

[https://api.audius.co](https://api.audius.co)

### TODO: Include iFrame example here

All subsequent requests can be made to `<host>/`, for example `<host>/v1/tracks/abc`

> Code samples

```shell
curl -X GET https://api.audius.co
```

```python
host = random.choice((requests.get('https://api.audius.co')).json()['data'])
```