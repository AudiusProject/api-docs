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
  '/users/{id}/followers': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/following': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/related': {
    get: {
      id: 'nlGNe'
    }
  },
  '/users/{id}/subscribers': {
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
      id: 'Wem1e'
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
  '/users/handle/{handle}': {
    get: {
      handle: 'rac'
    }
  },
  '/users/handle/{handle}/tracks/ai_attributed': {
    get: {
      handle: 'phuture'
    }
  },
  '/users/verify_token': {
    get: {
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJrZWNjYWsyNTYifQ.eyJ1c2VySWQiOjE0MTYxMTUsImVtYWlsIjoiaXNhYWN0ZXN0NDUxQGdtYWlsLmNvbSIsIm5hbWUiOiJ0ZXN0aW5nMTIiLCJoYW5kbGUiOiJ0ZXN0dGVzdDQ1MSIsInZlcmlmaWVkIjpmYWxzZSwic3ViIjoxNDE2MTE1LCJpYXQiOjE2NTY1MTgzMzN9.MHhkZmYyYWY5ZThmNDAxZDUyZDlhNjUxNGRiOTg0ZjM5YjFhOTZkYmNmZmViZjMzZjNkNmEzMTk4OTVlZWE2MTZjNjg0NWIwOGEyOGQ4MTA4OTEyMTc4ZDU0ODRhZGU4M2I1Yzg4ZTUwM2Y3OGYzMDYzZjYxMmQxZDQwYTYwMGZmZDFi'
    }
  },
  '/users/{id}/supporters': {
    get: {
      id: 'lzkyZ'
    }
  },
  '/users/{id}/supporting': {
    get: {
      id: 'aW8mr'
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
  '/users/{id}/connected_wallets': "Get User's Connected Wallets",
  '/users/verify_token': 'Verify ID Token'
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
