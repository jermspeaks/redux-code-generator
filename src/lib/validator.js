const validations = require('./validations');

/**
 * Validate settings object
 * @param  {object} settings YAML as JSON
 * @return {bool}            Validation of settings object
 */
function validateSettings(settings) {
  validations.validSettings(settings) ? null : exitProcess('YAML settings not valid');
  validations.validSettingsType(settings) ? null : exitProcess('YAML settings not properly converted to an object');
  validations.validSettingsKeys(settings) ? null : exitProcess('Forgot Actions or Reducer key');
};

function exitProcess(error) {
  let errorMessage = `Invalid YAML Format: ${error}`;
  console.log(errorMessage.red);
  process.exit(0);
}

module.exports = validateSettings;
