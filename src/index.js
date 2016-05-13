var colors = require('colors');
var createActionFile = require('./actions/index');
var figlet = require('figlet');
var fs = require('fs');
var loadYamlFile = require('./lib/yaml');

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

function run() {
  createWelcomeSplash();
  const settings = readYamlFile();

  if (settings) {
    // If there are actions, generate them in single file
    if (settings.actions) {
      console.log('ACTIONS GENERATED'.green);
      settings.actions.forEach(action => {
        try {
          createActionFile(action, settings.output['action_file']);
        } catch (e) {
          console.log(e.toString().red);
        }
      });
      // console.log(templateString);
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

run();
