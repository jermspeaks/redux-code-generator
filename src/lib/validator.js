/**
 * Validate settings object
 * @param  {object} settings YAML as JSON
 * @return {bool}            Validation of settings object
 */
function validateSettings(settings) {
  const validSettings = () => !!settings;
  const validSettingsType = () => typeof settings === 'object';
  const validSettingsKeys = () => !!settings.actions && !!settings.reducer;

  return validSettings() && validSettingsType() && validSettingsKeys();
};


module.exports = validateSettings;
