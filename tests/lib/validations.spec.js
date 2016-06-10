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
    it(`invalidates settings with falsy value: ${setting}`, () => {
      expect(validations.validSettings(setting)).toBe(false);
    });
  });

  it('validates settings with a truthy value', () => {
    expect(validations.validSettings(true)).toBe(true);
  });

  const nonObjectSettings = [
    'string',
    3
  ];

  nonObjectSettings.forEach(setting => {
    it(`invalidates settings when a ${typeof setting} is not an object`, () => {
      expect(validations.validSettingsType(setting)).toBe(false);
    });
  });

  it('validates settings when an object is an object', () => {
    expect(validations.validSettingsType({})).toBe(true);
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
    it(`invalidates settings for missing ${mainKey.name} key`, () => {
      expect(validations.validSettingsKeys(mainKey.settings)).toBe(false);
    });
  });

  it('validates settings for having all valid keys', () => {
    const settings = {
      actions: {},
      output: {},
      reducer: {}
    };

    expect(validations.validSettingsKeys(settings)).toBe(true);
  });

  const nonArrayActionSettings = [
    'string',
    3,
    { foo: 'bar' }
  ];

  nonArrayActionSettings.forEach(action => {
    it(`invalidates action settings as an Array for ${action.toString()}`, () => {
      expect(validations.validActionSettingsType(action)).toBe(false);
    });
  });

  it('validates action settings as an Array', () => {
    expect(validations.validActionSettingsType([])).toBe(true);
  });

  const actionKeys = [{
    name: 'reducer',
    settings: {
      name: 'Valid Name'
    }
  }, {
    name: 'name',
    settings: {
      reducer: {}
    }
  }];

  actionKeys.forEach(actionKey => {
    it(`invalidates action settings for missing ${actionKey.name} key`, () => {
      expect(validations.validActionSettingsKeys(actionKey.settings)).toBe(false);
    });
  });

  it('validates action settings', () => {
    const actionSettings = {
      name: 'Valid Name',
      reducer: {}
    };

    expect(validations.validActionSettingsKeys(actionSettings)).toBe(true);
  });
});
