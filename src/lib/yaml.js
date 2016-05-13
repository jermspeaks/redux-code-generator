var fs = require('fs');
var yaml = require('js-yaml');

/**
 * Get YAML document, or throw exception on error
 * @param  {string} filePath File path for yaml setting file
 * @return {object}          Yaml file as json or error object
 */
function loadYamlFile(filePath) {

  try {
    let doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    // console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
    return e;
  }
}

module.exports = loadYamlFile;
