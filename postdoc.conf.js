const path = require('path');

const {
  NIGHTWATCH_VERSION = '3.0.1',
  BASE_URL = 'https://nightwatchjs.org',
  MD_DOCS_FOLDER = 'node_modules/nightwatch-docs',
  API_DOCS_FOLDER = 'node_modules/nightwatch/lib/api',
  EXAMPLES_FOLDER = 'node_modules/nightwatch-examples/tests'
} = process.env;


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
    docsRepoBranch: 'versions/2.0',
    mdFolder: path.resolve(MD_DOCS_FOLDER),
    apiFolder: path.resolve(API_DOCS_FOLDER),
    examples: {
      output_folder: 'public/__examples',
      source_folder: EXAMPLES_FOLDER
    }
  }
}