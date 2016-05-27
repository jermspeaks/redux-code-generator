#! /usr/bin/env node

var colors = require('colors');
var actionsController = require('./actions/index');
var createConstants = require('./lib/constantsCreator');
var figlet = require('figlet');
var fs = require('fs');
var loadYamlFile = require('./lib/yaml');
var validator = require('./lib/validator');
var writeConstants = require('./lib/writeConstants');

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
 * Modify settings object for controllers
 * @param  {object} settings YAML settings as JSON
 * @return                   modified settings for controllers
 */
function modifySettings(settings) {
  // Create additional items for settings
  const constants = createConstants(settings);

  return Object.assign({}, settings, {
    constants: constants
  });
}

/**
 * Logic for handling settings object
 * @param  {object} settings YAML settings as JSON
 */
function settingsController(settings) {
  // Validate settings object
  validator(settings);

  // Modify settings for controllers
  const modifiedSettings = modifySettings(settings);

  // Write actions
  actionsController(modifiedSettings);

  // Write reducers
  // reducerController(modifiedSettings);

  // Write Constants
  writeConstants(modifiedSettings);
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
