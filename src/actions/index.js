var fs = require('fs');
var generators = require('./generator');

function createActionFile(settings, outputFile) {
  var writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

  function writeGeneratorToFile(generator, actionType) {
    writeStream.write(generator(settings) + '\n');
    console.log('   ✓ '.green + `${settings['method_base']}${actionType}`.gray);
  }

  console.log(' ' + settings['method_base']);

  writeGeneratorToFile(generators.createRequestFunction, 'RequestAction');
  writeGeneratorToFile(generators.createSuccessFunction, 'SuccessAction');
  writeGeneratorToFile(generators.createFailureFunction, 'FailureAction');
  writeGeneratorToFile(generators.createActionDispatcherFunction, 'DispatcherFunction');
  writeGeneratorToFile(generators.createApiFetchFunction, 'FetchFunction');
  writeStream.end();

  console.log('\n');
}

module.exports = createActionFile;
