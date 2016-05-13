var fs = require('fs');
var writeFile = require('./writeFile');

function actionsController(settings) {
  console.log('ACTIONS GENERATED'.green);

  settings.actions.forEach(action => {
    try {
      switch (action.type) {
      case 'api':
        writeFile.createAPIActionFile(action, settings.output['action_file']);
        return;
      case 'transaction':
      case 'crud':
        console.log('Todo: Create CRUD operations actions'.yellow);
        console.log('\n');
        return;
      case 'default':
      case 'single':
      default:
        console.log('Todo: Create single action'.yellow);
        console.log('\n');
        return;
      }
    } catch (e) {
      console.log(e.toString().red);
    }
  });

}

module.exports = actionsController;
