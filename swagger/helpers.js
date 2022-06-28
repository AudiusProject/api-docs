const paramMapping = {
  '/playlists/search': {
    get: {
      query: 'Hot & New'
    }
  },
  '/playlists/{playlist_id}': {
    get: {
      playlist_id: 'DOPRl'
    }
  },
  '/playlists/{playlist_id}/tracks': {
    get: {
      playlist_id: 'DOPRl'
    }
  },
  '/tracks': {
    get: {
      permalink:
        '/TeamBandL/paauer-|-baauer-b2b-party-favor-|-bl-block-party-la-live-set-725'
    }
  },
  '/tracks/search': {
    get: {
      query: 'baauer b2b'
    }
  },
  '/tracks/{track_id}': {
    get: {
      track_id: 'D7KyD'
    }
  },
  '/tracks/{track_id}/stream': {
    get: {
      track_id: 'D7KyD'
    }
  },
  '/users/search': {
    get: {
      query: 'Brownies'
    }
  },
  '/users/{id}': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/favorites': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/tracks': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/connected_wallets': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/tags': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/reposts': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/id': {
    get: {
      associated_wallet: '0x087F08462BbD30fC1775bBA3E58821F4CaD47b6b'
    }
  },
  '/resolve': {
    get: {
      url: 'https://audius.co/camouflybeats/hypermantra-86216'
    }
  }
}

const operationIdMapping = {
  '/users/{id}/tracks': "Get User's Tracks",
  '/users/{id}/favorites': "Get User's Favorite Tracks",
  '/users/{id}/reposts': "Get User's Reposts",
  '/users/{id}/tags': "Get User's Most Used Track Tags",
  '/users/{id}/connected_wallets': "Get User's Connected Wallets"
}

const routeOrdering = {
  tracks: ['/tracks/{track_id}', '/tracks'],
  users: ['/users/{id}'],
  playlists: ['/playlists/{playlist_id}']
}

const convertPathToFilename = (path) => {
  return path.substring(1).replace(/\//g, '.') + '.json'
}

module.exports = {
  paramMapping,
  operationIdMapping,
  routeOrdering,
  convertPathToFilename
}
