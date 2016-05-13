var fs = require('fs');
var generators = require('./generator');

/**
 * Create or append an action file with API actions
 * @param  {[type]} settings   [description]
 * @param  {[type]} outputFile [description]
 * @return {[type]}            [description]
 */
function createAPIActionFile(settings, outputFile) {
  var writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

  console.log(' ' + settings['method_base']);

  try {
    var generatedActionFile = generators.createFullActionFile(settings);
    writeStream.write(generatedActionFile);

    var actionTypes = [
      'RequestAction',
      'SuccessAction',
      'FailureAction',
      'DispatcherFunction',
      'FetchFunction'
    ];

    actionTypes.forEach(actionType => {
      console.log('   ✓ '.green + `${settings['method_base']}${actionType}`.gray);
    });

    console.log('\n');
  } catch (e) {
    console.log('error', e);
  }

  writeStream.end();
}

module.exports = createAPIActionFile;
