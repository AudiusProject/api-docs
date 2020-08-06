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
  '/users/{user_id}/tracks': require('./users.{user_id}.tracks.json')
}

const swagger = require('../swagger.json')

console.log(mapping['/users/search'])

Object.keys(mapping).forEach(key => {
  // Add example
  swagger["paths"][key]["get"]["responses"]["200"]["examples"] = {
    "application/json": mapping[key]
  }
  // Remove description
  delete swagger["paths"][key]["get"]["responses"]["200"]["description"]
})


console.log(JSON.stringify(swagger["paths"]["/users/search"]))

fs.writeFile('swagger/swagger.json', JSON.stringify(swagger), (err) => {
  if (err) throw err
  console.log('Updated swagger.json')
})
