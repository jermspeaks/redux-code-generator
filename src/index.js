var yaml = require('js-yaml');
var fs = require('fs');

function createWelcomeSplash() {
  console.log('Welcome to the Redux Code Generator!');
}

function readYamlFile() {
  if (process.argv[2]) {
    console.log(process.argv[2]);
    // Get document, or throw exception on error
    try {
      var doc = yaml.safeLoad(fs.readFileSync('./sample.yaml', 'utf8'));
      console.log(doc);
    } catch (e) {
      console.log(e);
    }

  } else {
    console.log('Please provide an file\n');
    console.log('Proper format:');
    console.log('node src/index.js ./sample.yaml\n');
    process.exit(1);
  }
}

function run() {
  createWelcomeSplash();
  readYamlFile();
}

run();
