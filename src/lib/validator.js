/**
 * Validate settings object
 * @param  {object} settings YAML as JSON
 * @return {bool}            Validation of settings object
 */
function validateSettings(settings) {
  const validSettings = () => !!settings;
  const validSettingsType = () => typeof settings === 'object';
  const validSettingsKeys = () => !!settings.actions && !!settings.reducer;

  validSettings() ? null : exitProcess('YAML settings not valid');
  validSettingsType() ? null : exitProcess('YAML settings not properly converted to an object');
  validSettingsKeys() ? null : exitProcess('Forgot Actions or Reducer key');
};

function exitProcess(error) {
  let errorMessage = `Invalid YAML Format: ${error}`;
  console.log(errorMessage.red);
  process.exit(0);
}

module.exports = validateSettings;
