const validSettings = settings => !!settings;
const validSettingsType = settings => typeof settings === 'object';
const validSettingsKeys = settings => !!settings.actions && !!settings.output && !!settings.reducer;

module.exports = {
  validSettings: validSettings,
  validSettingsType: validSettingsType,
  validSettingsKeys: validSettingsKeys
}
