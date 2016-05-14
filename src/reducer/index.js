var fs = require('fs');
var writeFile = require('./writeFile');

function createReducerFile(settings, outputFile) {
  console.log('REDUCERS GENERATED'.green);

  settings.actions.forEach(action => {
    try {
      switch (action.type) {
      case 'api':
        writeFile.createAPIReducerFile(action, settings.output['reducer_file']);
        return;
      case 'transaction':
      case 'crud':
        writeFile.createCRUDReducerFile(action, settings.output['reducer_file']);
        console.log('\n');
        return;
      case 'default':
      case 'single':
      default:
        writeFile.createSingleReducerFile(action, settings.output['reducer_file']);
        console.log('\n');
        return;
      }
    } catch (e) {
      console.log(e.toString().red);
    }
  });
}
