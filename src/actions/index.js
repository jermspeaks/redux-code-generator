var fs = require('fs');
var writeFile = require('./writeFile');

function actionsController(settings) {
  console.log('Writing Actions'.green);

  settings.actions.forEach(action => {
    try {
      switch (action.type) {
      case 'api':
        writeFile.createAPIActionFile(action, settings.output['action_file']);
        return;
      case 'transaction':
      case 'crud':
        writeFile.createCRUDActionFile(action, settings.output['action_file']);
        return;
      case 'default':
      case 'single':
      default:
        writeFile.createSingleActionFile(action, settings.output['action_file']);
        return;
      }
    } catch (e) {
      console.log(e.toString().red);
    }
  });
}

module.exports = actionsController;
