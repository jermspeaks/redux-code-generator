var colors = require('colors');
var figlet = require('figlet');
var fs = require('fs');
var yaml = require('js-yaml');
var actionGenerator = require('./action-generator');
/**
 * Create initial splash page
 */
function createWelcomeSplash() {
  console.log(figlet.textSync('Redux Generator', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }).cyan);
  // console.log('Welcome to the Redux Code Generator!'.cyan);
}

/**
 * Read YAML File and exit out if no file passed
 */
function readYamlFile() {
  if (process.argv[2]) {
    const yamlFile = process.argv[2];
    return loadYamlFile(yamlFile);
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
    let doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    // console.log(doc);
    return doc;
  } catch (e) {
    console.log(e);
    return e;
  }
}

function run() {
  createWelcomeSplash();
  const settings = readYamlFile();

  if (settings) {
    // If there are actions, generate them in single file
    if (settings.actions) {
      let templateString = '';

      console.log('            ACTIONS             '.green);
      console.log('------------------------------- '.green);

      settings.actions.forEach(action => {
        templateString += actionGenerator.createRequestFunction(action);
        templateString += '\n';
        templateString += actionGenerator.createSuccessFunction(action);
        templateString += '\n';
        templateString += actionGenerator.createFailureFunction(action);
      });
      console.log(templateString);
    }

    // If there is a reducer, generate them in single file
    if (settings.reducer) {
      console.log('            REDUCERS            '.green);
      console.log('------------------------------- '.green);
      console.log('\n\n');
      console.log('TBA');
      console.log('\n\n');
    }
  }
}

run();
