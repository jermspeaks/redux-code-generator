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
function ${settings['method_base']}RequestAction() {
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
function ${settings['method_base']}SuccessAction(data) {
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
function ${settings['method_base']}FailureAction(error) {
  return {
    type: ${settings['constant_name']}_FAILURE,
    error: error
  }
}`;
}

module.exports = {
  createRequestFunction: createRequestFunction,
  createSuccessFunction: createSuccessFunction,
  createFailureFunction: createFailureFunction
};
