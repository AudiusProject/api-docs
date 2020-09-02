const fs = require('fs')

const mapping = {
  '/playlists/search': require('./playlists.search.json'),
  '/playlists/{playlist_id}': require('./playlists.{playlist_id}.json'),
  '/playlists/{playlist_id}/tracks': require('./playlists.{playlist_id}.tracks.json'),
  '/tracks/search': require('./tracks.search.json'),
  '/tracks/trending': require('./tracks.trending.json'),
  '/tracks/{track_id}': require('./tracks.{track_id}.json'),
  '/users/search': require('./users.search.json'),
  '/users/{user_id}': require('./users.{user_id}.json'),
  '/users/{user_id}/favorites': require('./users.{user_id}.favorites.json'),
  '/users/{user_id}/tracks': require('./users.{user_id}.tracks.json'),
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
  '/users/{user_id}': {
    'get': {
      'user_id': 'nlGNe'
    }
  },
  '/users/{user_id}/favorites': {
    'get': {
      'user_id': 'nlGNe'
    }
  },
  '/users/{user_id}/tracks': {
    'get': {
      'user_id': 'nlGNe'
    }
  },
  '/resolve': {
    'get': {
      'url': 'https://audius.co/camouflybeats/hypermantra-86216'
    }
  }
}

const swagger = require('../swagger.json')

console.log(mapping['/users/search'])

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


console.log(JSON.stringify(swagger["paths"]["/users/search"]))

fs.writeFile('swagger/swagger.json', JSON.stringify(swagger), (err) => {
  if (err) throw err
  console.log('Updated swagger.json')
})
