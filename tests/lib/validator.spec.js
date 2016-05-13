const expect = require('expect');
const validator = require('../../src/lib/validator');

describe('settings validation', () => {
  var nonObjectSettings = [
    'string',
    3,
    false,
    null,
    undefined
  ];

  nonObjectSettings.forEach(setting => {
    it(`validates settings is an object for ${setting ? setting.toString() : setting}`, () => {
      expect(validator(setting)).toBe(false);
    });
  });

  it('validates settings for keys: actions and reducer', () => {
    const actionsWithoutReducer = {
      actions: null
    };
    const reducerWithoutActions = {
      reducer: null
    };

    expect(validator(actionsWithoutReducer)).toBe(false);
    expect(validator(reducerWithoutActions)).toBe(false);
  });
});
