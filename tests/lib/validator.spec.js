const expect = require('expect');
const validations = require('../../src/lib/validations');

describe('YAML settings validations', () => {
  const falsyValues = [
    false,
    null,
    undefined,
    ''
  ];

  falsyValues.forEach(setting => {
    it(`validates settings as a truthy value with ${setting}`, () => {
      expect(validations.validSettings(setting)).toBe(false);
    });
  });

  const nonObjectSettings = [
    'string',
    3
  ];

  nonObjectSettings.forEach(setting => {
    it(`validates settings is an object for ${setting.toString()}`, () => {
      expect(validations.validSettingsType(setting)).toBe(false);
    });
  });

  const mainKeys = [{
    name: 'reducer',
    settings: {
      actions: {},
      output: {}
    }
  }, {
    name: 'output',
    settings: {
      actions: {},
      reducer: {}
    }
  }, {
    name: 'actions',
    settings: {
      output: {},
      reducer: {}
    }
  }];

  mainKeys.forEach(mainKey => {
    it(`validates settings for missing ${mainKey.name} key`, () => {
      expect(validations.validSettingsKeys(mainKey.settings)).toBe(false);
    });
  });
});
