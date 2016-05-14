const validations = require('./validations');

/**
 * Validate settings object
 * @param  {object} settings YAML as JSON
 * @return {bool}            Validation of settings object
 */
function validateSettings(settings) {
  validations.validSettings(settings) ? null : exitProcess('YAML settings not valid');
  validations.validSettingsType(settings) ? null : exitProcess('YAML settings not properly converted to an object');
  validations.validSettingsKeys(settings) ? null : exitProcess('Invalid keys. Must include Actions, Output, and Reducer');
  validations.validActionSettingsType(settings.actions) ? null : exitProcess('Invalid actions. Must be array');
  settings.actions.forEach(action => validations.validActionSettingsKeys(action) ? null : exitProcess('Invalid action settings for ${action.name}. Must include name and reducer'));
};

function exitProcess(error) {
  let errorMessage = `Invalid YAML Format: ${error}`;
  console.log(errorMessage.red);
  process.exit(0);
}

module.exports = validateSettings;
