require('isomorphic-fetch')
const fs = require('fs')
const path = require('path')
const { program } = require('commander')
const { convert } = require('widdershins/lib/index')
const { generateExamples } = require('./generateExamples')
const {
  insertParameters,
  insertExamples,
  renameOperations,
  reorderRoutes,
  writeSwaggerToFile,
  readSwaggerFromFile,
  insertAppName
} = require('./swaggerModifiers')

const DEFAULT_SWAGGER_LOCATION = 'http://dn1_web-server_1:5000/v1/swagger.json'
const DEFAULT_BASE_URL = 'https://discoveryprovider.audius.co'

program
  .option(
    '-e, --generate-examples [url]',
    'Generate example documentation from the given discovery node',
    false
  )
  .option(
    '-f, --fetch-swagger [url]',
    'Fetch the swagger.json from a DN',
    false
  )
  .option(
    '-r, --insert-responses',
    'Whether to pre-process the schema to insert example responses',
    false
  )
  .option(
    '-p, --insert-parameters',
    'Whether to pre-process the schema to insert example parameters',
    false
  )
  .option(
    '-o, --rename-operations',
    'Whether to pre-process the schema to rename select operation IDs to more human-friendly titles',
    false
  )
  .option(
    '-v, --verbose',
    'Whether to run widdershins with vebose option set to true',
    false
  )

program.parse()

const options = program.opts()

const main = async (options) => {
  let swagger = {}
  if (options.fetchSwagger) {
    const swaggerUrl =
      options.fetchSwagger === true
        ? DEFAULT_SWAGGER_LOCATION
        : options.fetchSwagger
    console.log('Fetching swagger from', swaggerUrl)
    const res = await fetch(swaggerUrl)
    const json = await res.json()
    json.basePath = `AUDIUS_API_HOST${json.basePath}`
    swagger = json
  } else {
    console.log('Reading swagger.json...')
    swagger = readSwaggerFromFile()
  }

  if (options.insertParameters) {
    console.log('Inserting app_name query parameter...')
    swagger = insertAppName(swagger)
    console.log('Inserting example parameters...')
    swagger = insertParameters(swagger)
  }
  if (options.generateExamples) {
    const baseUrl =
      options.generateExamples === true
        ? DEFAULT_BASE_URL
        : options.generateExamples
    console.log('Generating response examples from', baseUrl)
    await generateExamples(swagger, baseUrl)
  }
  if (options.insertResponses) {
    console.log('Inserting response examples...')
    swagger = insertExamples(swagger)
  }
  if (options.renameOperations) {
    console.log('Renaming operations...')
    swagger = renameOperations(swagger)
  }

  console.log('Reordering routes...')
  swagger = reorderRoutes(swagger)

  console.log('Saving swagger.json...')
  writeSwaggerToFile(swagger)
  console.log('Generating docs...')
  const doc = await convert(swagger, {
    omitHeader: true,
    codeSamples: true,
    tocSummary: false,
    user_templates: path.resolve(__dirname, 'templates'),
    verbose: options.verbose
  })
  const filePath = path.resolve(__dirname, '../source/includes/_docs.md')
  console.log('Saving output to', filePath)
  fs.writeFileSync(filePath, doc)
  console.log('Done!')
}

main(options)
