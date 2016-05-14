function readAction(action) {
  switch (action.type) {
    case 'api':
    return [
      `${action.constant_name}_REQUEST`,
      `${action.constant_name}_SUCCESS`,
      `${action.constant_name}_FAILURE`
    ];
    case 'transaction':
    case 'crud':
    return [
      `ADD_${action.constant_name}`,
      `UPDATE_${action.constant_name}`,
      `DELETE_${action.constant_name}`,
    ];
    case 'single':
    case 'default':
    default:
    return [action.constant];
  }
}

function createConstants(settings) {
  let constants = [];

  settings.actions.forEach(action => constants = constants.concat(readAction(action)));

  return constants;
}

module.exports = createConstants;
