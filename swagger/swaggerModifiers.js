const fs = require('fs')
const path = require('path')
const {
  operationIdMapping,
  paramMapping,
  routeOrdering,
  convertPathToFilename
} = require('./helpers')

const SWAGGER_PATH = path.resolve(__dirname, 'swagger.json')

const renameOperations = (swagger) => {
  Object.keys(operationIdMapping).forEach((key) => {
    swagger.paths[key].get.operationId = operationIdMapping[key]
  })
  return swagger
}

const reorderRoutes = (swagger) => {
  const tagNames = swagger.tags.map((tag) => {
    return tag.name
  })
  const tagGroups = tagNames.reduce((prev, tagName) => {
    prev[tagName] = []
    return prev
  }, {})
  Object.keys(routeOrdering).forEach((tag) => {
    routeOrdering[tag].forEach((route) => {
      tagGroups[tag].push([route, swagger.paths[route]])
      delete swagger.paths[route]
    })
  })
  Object.entries(swagger.paths).forEach((entry) => {
    const value = entry[1]
    tagGroups[value.get.tags[0]].push(entry)
  })
  const orderedRoutes = Object.values(tagGroups).reduce(
    (prevGroups, tagGroup) => {
      const flatGroup = tagGroup.reduce(
        (prevRoutes, [routeName, routeData]) => {
          const currGroup = {
            ...prevRoutes
          }
          currGroup[routeName] = routeData
          return currGroup
        },
        {}
      )
      return { ...prevGroups, ...flatGroup }
    },
    {}
  )
  swagger.paths = orderedRoutes
  return swagger
}
const insertParameters = (swagger) => {
  Object.keys(paramMapping).forEach((key) => {
    const methods = paramMapping[key]
    Object.keys(methods).forEach((method) => {
      const params = methods[method]
      Object.keys(params).forEach((param) => {
        swagger.paths[key][method].parameters.forEach((p) => {
          if (p.name === param) {
            p.example = params[param]
          }
        })
      })
    })
  })
  return swagger
}

const insertExamples = (swagger) => {
  Object.keys(swagger.paths).forEach((key) => {
    // Add example
    const filepath = path.resolve(
      __dirname,
      'examples',
      convertPathToFilename(key)
    )
    if (fs.existsSync(filepath)) {
      if (!swagger.paths[key].get.responses['200']) {
        swagger.paths[key].get.responses['200'] = {}
      }
      swagger.paths[key].get.responses['200'].examples = {
        'application/json': require(filepath)
      }
      // Remove description
      delete swagger.paths[key].get.responses['200'].description
    } else {
      console.warn(
        'Warning:',
        filepath,
        'does not exist so no response was inserted'
      )
    }
  })
  return swagger
}

const insertAppName = (swagger) => {
  Object.keys(swagger.paths).forEach((key) => {
    if (!swagger.paths[key].get.parameters) {
      swagger.paths[key].get.parameters = []
    }
    swagger.paths[key].get.parameters.push({
      name: 'app_name',
      in: 'query',
      type: 'string',
      description: 'Your app name',
      example: 'EXAMPLEAPP'
    })
  })
  return swagger
}

const writeSwaggerToFile = (swagger) => {
  try {
    fs.writeFileSync(SWAGGER_PATH, JSON.stringify(swagger))
    console.log('Successfully wrote', SWAGGER_PATH)
  } catch (e) {
    console.error('Failed to write swagger output:', e)
  }
}

const readSwaggerFromFile = () => {
  return require(SWAGGER_PATH)
}

module.exports = {
  insertExamples,
  insertParameters,
  insertAppName,
  renameOperations,
  reorderRoutes,
  writeSwaggerToFile,
  readSwaggerFromFile
}
