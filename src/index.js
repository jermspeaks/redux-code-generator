var colors = require('colors');
var actionsController = require('./actions/index');
var figlet = require('figlet');
var fs = require('fs');
var loadYamlFile = require('./lib/yaml');
var validator = require('./lib/validator');

/**
 * Create initial splash page
 */
function createWelcomeSplash() {
  console.log(figlet.textSync('Redux Generator', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }).gray);
}

/**
 * Logic for handling settings object
 * @param  {object} settings YAML settings as JSON
 */
function settingsController(settings) {
  // Validate settings object
  const validSettings = validator(settings);

  if (validSettings) {
    actionsController(settings);
    // reducerController(settings);
    // constantsController(settings);
  }
}

/**
 * App run function
 */
function run() {
  createWelcomeSplash();

  // Yaml file found. Load file and load it
  if (process.argv[2]) {
    const yamlFile = process.argv[2];
    const settings = loadYamlFile(yamlFile);
    settingsController(settings);
  } else {
    // Yaml file not found. Exit application
    console.log('\nPlease provide an file'.underline.red);
    console.log('Proper format:');
    console.log('node src/index.js ./sample.yaml\n');
    process.exit(1);
  }
}

run();
