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

function settingsController(settings) {
  if (settings) {
    // Validate settings object

    // If there are actions, generate them in single file
    if (settings.actions) {
      actionsController(settings);
    }

    // If there is a reducer, generate them in single file
    // if (settings.reducer) {
    //   try {
    //     console.log('REDUCER GENERATED'.green);
    //     console.log('\n\n');
    //     console.log('TBA');
    //     console.log('\n\n');
    //   } catch (e) {
    //     console.log(e.toString().red);
    //   }
    // }
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
