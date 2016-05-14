/**
 * Generate API reducer function
 * @param  {object} settings reducer settings
 * @return {string}          generated api reducer
 */
function createAPIReducer(settings) {
  return `const initialState = {
    data: [],
    error: '',
    requesting: false,
    requested: false
};

export function ${settings.name}(state = initialState, action) {
  switch (action.type) {
  case types.${settings['base_constant']}_REQUEST:
    return Object.assign({}, state, {
      requesting: true,
      requested: false
    });
  case types.${settings['base_constant']}_SUCCESS:
    return Object.assign({}, state, {
      requesting: false,
      requested: true,
      data: state.data.concat(action.data)
    });
  case types.${settings['base_constant']}_FAILURE:
    return Object.assign({}, state, {
      requesting: false,
      requested: true,
      error: action.error
    });
  default:
    return state;
  }
}`;
}

module.exports = {
  createAPIReducer: createAPIReducer
};
