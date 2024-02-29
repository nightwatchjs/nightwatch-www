const path = require('path');

const {
  NIGHTWATCH_VERSION = '3.4.1',
  BASE_URL = 'https://nightwatchjs.org',
  MD_DOCS_FOLDER =  path.join(__dirname, 'nightwatch-docs'),
  API_DOCS_FOLDER = path.join(__dirname, 'nightwatch/lib/api'),
  EXAMPLES_FOLDER = 'node_modules/nightwatch-examples/tests'
} = process.env;


console.log('API_DOCS_FOLDER', API_DOCS_FOLDER)
console.log('MD_DOCS_FOLDER', MD_DOCS_FOLDER)

module.exports = {
  directories: {
    includes: 'src/includes',
    layouts: 'src/pages',
    pages: MD_DOCS_FOLDER,
    api: API_DOCS_FOLDER
  },

  app_settings: {
    version: NIGHTWATCH_VERSION,
    baseUrl: BASE_URL,
    apiRepoUrl: 'https://github.com',
    githubRepo: 'nightwatchjs/nightwatch',
    docsRepoUrl: 'https://github.com/nightwatchjs/nightwatch-docs/blob/',
    docsRepoBranch: 'versions/3.0',
    mdFolder: MD_DOCS_FOLDER,
    apiFolder: API_DOCS_FOLDER,
    examples: {
      output_folder: 'public/__examples',
      source_folder: EXAMPLES_FOLDER
    }
  }
}
