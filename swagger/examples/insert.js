const fs = require('fs')

const mapping = {
  '/playlists/search': require('./playlists.search.json'),
  '/playlists/trending': require('./playlists.trending.json'),
  '/playlists/{playlist_id}': require('./playlists.{playlist_id}.json'),
  '/playlists/{playlist_id}/tracks': require('./playlists.{playlist_id}.tracks.json'),
  '/tracks/search': require('./tracks.search.json'),
  '/tracks': require('./tracks.json'),
  '/tracks/trending': require('./tracks.trending.json'),
  '/tracks/{track_id}': require('./tracks.{track_id}.json'),
  '/users/search': require('./users.search.json'),
  '/users/{id}': require('./users.{user_id}.json'),
  '/users/{id}/favorites': require('./users.{user_id}.favorites.json'),
  '/users/{id}/reposts': require('./users.{user_id}.reposts.json'),
  '/users/{id}/tracks': require('./users.{user_id}.tracks.json'),
  '/users/id': require('./users.id.json'),
  '/users/{id}/connected_wallets': require('./users.{user_id}.connected_wallets.json'),
  '/users/{id}/tags': require('./users.{user_id}.tags.json'),
  '/resolve': require('./resolve.json')
}

const paramMapping = {
  '/playlists/search': {
    'get': {
      'query': 'Hot & New'
    }
  },
  '/playlists/{playlist_id}': {
    'get': {
      'playlist_id': 'DOPRl'
    }
  },
  '/playlists/{playlist_id}/tracks': {
    'get': {
      'playlist_id': 'DOPRl'
    }
  },
  '/tracks': {
    'get': {
      'permalink': '/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725'
    }
  },
  '/tracks/search': {
    'get': {
      'query': 'baauer b2b'
    }
  },
  '/tracks/{track_id}': {
    'get': {
      'track_id': 'D7KyD'
    }
  },
  '/tracks/{track_id}/stream': {
    'get': {
      'track_id': 'D7KyD'
    }
  },
  '/users/search': {
    'get': {
      'query': 'Brownies'
    }
  },
  '/users/{id}': {
    'get': {
      'id': 'nlGNe'
    }
  },
  '/users/{id}/favorites': {
    'get': {
      'id': 'nlGNe'
    }
  },
  '/users/{id}/tracks': {
    'get': {
      'id': 'nlGNe'
    }
  },
  '/users/{id}/connected_wallets': {
    'get': {
      'id': 'nlGNe'
    }
  },
  '/users/id': {
    'get': {
      'associated_wallet': '0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b'
    }
  },
  '/resolve': {
    'get': {
      'url': 'https://audius.co/camouflybeats/hypermantra-86216'
    }
  }
}

const operationIdMapping = {
  '/users/{id}/tracks': 'Get User\'s Tracks',
  '/users/{id}/favorites': 'Get User\'s Favorite Tracks',
  '/users/{id}/reposts': 'Get User\'s Reposts',
  '/users/{id}/tags': 'Get User\'s Most Used Track Tags',
  '/users/{id}/connected_wallets': 'Get User\'s Connected Wallets'
}

const swagger = require('../swagger.json')

Object.keys(mapping).forEach(key => {
  if (key === '/resolve') {
    swagger["paths"][key]["get"]["responses"]["302"]["examples"] = {
      "text/plain": mapping[key].data
    }
  } else {
    // Add example
    swagger["paths"][key]["get"]["responses"]["200"]["examples"] = {
      "application/json": mapping[key]
    }
    // Remove description
    delete swagger["paths"][key]["get"]["responses"]["200"]["description"]
  }
})

Object.keys(paramMapping).forEach(key => {
  const methods = paramMapping[key]

  Object.keys(methods).forEach(method => {

    const params = methods[method]
    Object.keys(params).forEach(param => {
      
      swagger["paths"][key][method]["parameters"].forEach(p => {
        if (p.name === param) {
          p.example = params[param]
        }
      })
    })
  })
})

Object.keys(operationIdMapping).forEach(key => {
  swagger["paths"][key]["get"]["operationId"] = operationIdMapping[key]
})

fs.writeFile('swagger/swagger.json', JSON.stringify(swagger), (err) => {
  if (err) throw err
  console.log('Updated swagger.json')
})
