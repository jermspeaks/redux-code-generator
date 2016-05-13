var actionGenerator = require('./action-generator');
var colors = require('colors');
var figlet = require('figlet');
var fs = require('fs');
var yaml = require('js-yaml');
/**
 * Create initial splash page
 */
function createWelcomeSplash() {
  console.log(figlet.textSync('Redux Generator', {
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }).gray);
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

function createActionFile(settings, outputFile) {
  var writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

  function writeGenerator(generator, actionType) {
    writeStream.write(generator(settings));
    console.log('   ✓ '.green + `${settings['method_base']}${actionType}`.gray);
  }

  console.log(' ' + settings['method_base']);

  writeGenerator(actionGenerator.createRequestFunction, 'RequestAction');
  writeGenerator(actionGenerator.createSuccessFunction, 'SuccessAction');
  writeGenerator(actionGenerator.createFailureFunction, 'FailureAction');

  writeStream.end();
}

function createReducerFile(settings, outputFile) {
  console.log('TBA');
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
