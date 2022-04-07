require('isomorphic-fetch')
const fs = require('fs').promises
const path = require('path')
const { convert } = require('widdershins/lib/index')
const { convertPathToFilename } = require('./helpers')

const OUTPUT_DIR = path.resolve(__dirname, 'examples/')

const setupData = (data) => {
  data.operationUniqueSlug = data.method.slug
  data.operation = data.method.operation
  data.methodUpper = data.method.verb.toUpperCase()
  data.url = data.utils.slashes(data.baseUrl + data.method.path)
  data.parameters = data.operation.parameters
  data.enums = []
  data.utils.fakeProdCons(data)
  data.utils.fakeBodyParameter(data)
  data.utils.mergePathParameters(data)
  data.utils.getParameters(data)
}

const getContentType = (operation, statusCode) => {
  let content = operation.responses[`${statusCode}`]
  content = content ? content.content : null
  content = Object.keys(content || {})
  content = content.length > 0 ? content[0] : null
  return content
}

const fetchAndSaveExample = async (urlToFetch, filename, operation) => {
  const res = await fetch(urlToFetch)
  let content = await res.text()
  const contentType = getContentType(operation, res.status)
  if (!contentType || contentType === 'application/json') {
    try {
      const json = JSON.parse(content)
      console.log('Parsing as JSON', urlToFetch)
      if (Array.isArray(json.data)) {
        // Shorten lists
        json.data = json.data.slice(0, 1)
      }
      content = JSON.stringify(json, null, 2)
      const filePath = path.resolve(OUTPUT_DIR, filename)
      console.log('Writing to', filePath)
      await fs.writeFile(filePath, content, 'utf-8')
    } catch (e) {
      console.warn('Skipping output for', urlToFetch, "as it's not JSON")
    }
  } else {
    console.warn('Skipping output for', urlToFetch, "as it's not JSON")
  }
}

const generateExamples = async (swagger, baseUrl) => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const toFetch = []
  await convert(swagger, {
    templateCallback: (templateName, stage, data) => {
      data.baseUrl = data.baseUrl.replace('AUDIUS_API_HOST', baseUrl)
      if (templateName === 'main' && stage === 'post') {
        for (const resource in data.resources) {
          data.resource = data.resources[resource]
          for (const method in data.resource.methods) {
            data.method = data.resource.methods[method]
            setupData(data)
            const operation = data.operation
            const urlToFetch = data.baseUrl + data.requiredUriExample
            const filename = convertPathToFilename(data.method.path)
            console.log('Fetching', urlToFetch)
            toFetch.push(fetchAndSaveExample(urlToFetch, filename, operation))
          }
        }
      }
      return data
    }
  })
  await Promise.all(toFetch)
}

module.exports = {
  generateExamples
}
