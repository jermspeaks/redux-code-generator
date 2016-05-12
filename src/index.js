var yaml = require('js-yaml');
var fs = require('fs');
var colors = require('colors');

function createWelcomeSplash() {
  console.log('Welcome to the Redux Code Generator!');
}

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

function loadYamlFile(filePath) {
  // Get document, or throw exception on error
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
