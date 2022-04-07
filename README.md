# Audius API Documentation

[https://audiusproject.github.io/api-docs](https://audiusproject.github.io/api-docs)


## Getting started:

### 1. Install deps:
```bash
gem install bundler
bundle install
npm install
```

### 2. Start server
```bash
# Runs the server on localhost:4567 and watches for changes
npm run start
```

### 3. Generate docs
```bash
# Runs with all options, including updating the example responses from prod
node ./swagger/index.js -e http://discoveryprovider.audius.co -f http://dn1_web-server_1:5000/v1/swagger.json -rpo

# Don't refresh the example responses, but refresh the swagger.json
node ./swagger/index.js -f http://dn1_web-server_1:5000/v1/swagger.json -rpo

# Don't refresh the swagger, but refresh the example responses (assumes example parameters are already inserted)
node ./swagger/index.js -e http://discoveryprovider.audius.co
```

Note: To build and inspect the output of the actual website (eg to put on <you>.audius.co), run `npm run build`


## Doc generation script options

The `./swagger/index.js` script has customizable options that inform how it runs
```
node ./swagger/index.js -h
```
```
Usage: index [options]

Options:
  -e, --generate-examples <url>  Generate example documentation from the given discovery node (default: false)
  -f, --fetch-swagger <url>      Fetch the swagger.json from a DN (default: false)
  -r, --insert-responses         Whether to pre-process the schema to insert example responses (default: false)
  -p, --insert-parameters        Whether to pre-process the schema to insert example parameters (default: false)
  -o, --rename-operations        Whether to pre-process the schema to rename select operation IDs to more human-friendly titles (default: false)
  -v, --verbose                  Whether to run widdershins with vebose option set to true (default: false)
  -h, --help                     display help for command
```

## Deploy (github pages):

IMPORTANT: Make sure you have generated the docs first!

```bash
> ./deploy.sh
```
