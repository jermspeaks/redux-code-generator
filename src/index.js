var colors = require('colors');
var fs = require('fs');
var yaml = require('js-yaml');

/**
 * Create initial splash page
 */
function createWelcomeSplash() {
  console.log('Welcome to the Redux Code Generator!');
}

/**
 * Read YAML File and exit out if no file passed
 */
function readYamlFile() {
  if (process.argv[2]) {
    var yamlFile = process.argv[2];
    var settings = loadYamlFile(yamlFile);
  } else {
    console.log('\nPlease provide an file'.underline.red);
    console.log('Proper format:');
    console.log('node src/index.js ./sample.yaml\n');
    process.exit(1);
  }
}

/**
 * Get YAML document, or throw exception on error
 * @param  {string} filePath File path for yaml setting file
 * @return {object}          Yaml file as json or error object
 */
function loadYamlFile(filePath) {

  try {
    var doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
    return e;
  }
}

function run() {
  createWelcomeSplash();
  readYamlFile();
}

run();
