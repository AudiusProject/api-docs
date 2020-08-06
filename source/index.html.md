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
  - python: Python
  - php: PHP
  - java: Java
  - ruby: Ruby
  - go: Go

includes:
  - docs
---


<script type="text/javascript">
(function() {
  const set = async () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const host = sample((await (await fetch('https://api.audius.co')).json()).data)
    // document.body.innerHTML = document.body.innerHTML.replace(/%HOST%/g, host)
    function walkText(node) {
      if (node.nodeType == 3) {
        node.data = node.data.replace(/%HOST%/g, host)
      }
      if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
          walkText(node.childNodes[i]);
        }
      }
    }
    walkText(document.body);
  }
  set()
})()
</script>

<br />
<br />

# Audius API Docs

🚧 Under Construction! 🚧

The Audius API is entirely free to use. We ask that you adhere to the guidelines in this doc and always credit artists.


## Selecting a Host

> Code samples

```shell
curl https://api.audius.co
```

```http
GET https://api.audius.co HTTP/1.1
```

```javascript

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
const host = await fetch('https://api.audius.co')
  .then(r => r.json())
  .then(j => j.data)
  .then(d => sample(d))

```

```python
import random
import requests

host = random.choice((requests.get('https://api.audius.co')).json()['data'])
```

Audius is a decentralized music streaming service. In order to use the API, you must first select an API endpoint (Discovery Service) by picking from the list of endpoints returned by:

[https://api.audius.co](https://api.audius.co)

Once you've selected a host, all API requests can be sent directly to it. We recommend selecting a host each time your application starts up as availability may change over time.

For the following documention, we've selected one for you:

` %HOST% `

If you're interested in running a service of your own, see our [Stakers guide](https://audius.org/stakers.html).
