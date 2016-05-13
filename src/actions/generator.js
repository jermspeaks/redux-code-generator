/**
 * Create request function for an action
 * @param  {object} settings Action settings
 * @return {string}          Request function generated
 */
function createRequestFunction(settings) {
  return `
/**
 * Action generator for ${settings.name} request action
 * @return {object}         request action
 */
export function ${settings['method_base']}RequestAction() {
  return {
    type: ${settings['constant_name']}_REQUEST
  }
}`;
}

/**
 * Create success function for an action
 * @param  {object} settings Action settings
 * @return {string}          Success function generated
 */
function createSuccessFunction(settings) {
  return `
/**
 * Action generator for ${settings.name} success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function ${settings['method_base']}SuccessAction(data) {
  return {
    type: ${settings['constant_name']}_SUCCESS,
    data: data
  }
}`;
}

/**
 * Create failure function for an action
 * @param  {object} settings Action settings
 * @return {string}          Failure function generated
 */
function createFailureFunction(settings) {
  return `
/**
 * Action generator for ${settings.name} failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function ${settings['method_base']}FailureAction(error) {
  return {
    type: ${settings['constant_name']}_FAILURE,
    error: error
  }
}`;
}

/**
 * Create action dispatcher function for action set
 * @param  {object} settings Action settings
 * @return {string}          Dispatcher function generated
 */
function createActionDispatcherFunction(settings) {
  const methodName = settings['grouped_method'] ? settings['grouped_method'] : `get${settings['method_base']}`;
  const fetchMethodName = settings['fetch_api_method'] ? settings['fetch_api_method'] : `fetch${settings['method_base']}`;

  return `
/**
 * Action dispatcher for ${settings.name} action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
export function ${methodName}(args) {
  return (dispatch) => {
    dispatch(${settings['method_base']}RequestAction());

    return ${fetchMethodName}(args)
      .then((res) => dispatch(${settings['method_base']}SuccessAction(res)))
      .catch((err) => dispatch(${settings['method_base']}FailureAction(err)));
  };
}`;
}

function createApiFetchFunction(settings) {
  const methodName = settings['fetch_api_method'] ? settings['fetch_api_method'] : `fetch${settings['method_base']}`;

  return `
/**
 * Fetch API for ${settings.name} action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function ${methodName}(args) {
  return api.actions.${settings['api_method']}.request();
}`;

}

module.exports = {
  createRequestFunction: createRequestFunction,
  createSuccessFunction: createSuccessFunction,
  createFailureFunction: createFailureFunction,
  createActionDispatcherFunction: createActionDispatcherFunction,
  createApiFetchFunction: createApiFetchFunction
};
