var fs = require('fs');
var generators = require('./generator');

/**
 * Create or append an action file with API actions
 * @param  {[type]} settings   [description]
 * @param  {[type]} outputFile [description]
 * @return {[type]}            [description]
 */
function createAPIActionFile(settings, outputFile) {
  // Create write stream that will create or append a file
  var writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

  console.log(' ' + settings['method_base']);

  try {
    var generatedActionFile = generators.createFullAPIActionFile(settings);
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

function createCRUDActionFile(settings, outputFile) {
  // Create write stream that will create or append a file
  var writeStream = fs.createWriteStream(outputFile, { flags: 'a' });

  console.log(' ' + settings['method_base']);

  try {
    var generatedActionFile = generators.createFullCRUDActionFile(settings);
    writeStream.write(generatedActionFile);

    var actionTypes = [
      'AddAction',
      'UpdateAction',
      'DeleteAction'
    ];

    actionTypes.forEach(actionType => {
      console.log('   ✓ '.green + `${settings['method_base']}${actionType}`.gray);
    });

    console.log('\n');
  } catch (e) {
    console.log('error', e);
  }

  writeStream.end();
  return;
}

function createSingleActionFile(settings, outputFile) {
  console.log('Todo: Create single action'.yellow);
  return;
}


module.exports = {
  createAPIActionFile: createAPIActionFile,
  createCRUDActionFile: createCRUDActionFile,
  createSingleActionFile: createSingleActionFile
};
