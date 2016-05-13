/**
 * Create request function for an action
 * @param  {object} settings Action settings
 * @return {string}          Request function generated
 */
function createRequestFunction(settings) {
  return `/**
 * Action generator for ${settings.name} request action
 * @return {object}         request action
 */
export function ${settings['method_base']}RequestAction() {
  return {
    type: ${settings['constant_name']}_REQUEST
  }
}\n`;
}

/**
 * Create success function for an action
 * @param  {object} settings Action settings
 * @return {string}          Success function generated
 */
function createSuccessFunction(settings) {
  return `/**
 * Action generator for ${settings.name} success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function ${settings['method_base']}SuccessAction(data) {
  return {
    type: ${settings['constant_name']}_SUCCESS,
    data: data
  }
}\n`;
}

/**
 * Create failure function for an action
 * @param  {object} settings Action settings
 * @return {string}          Failure function generated
 */
function createFailureFunction(settings) {
  return `/**
 * Action generator for ${settings.name} failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function ${settings['method_base']}FailureAction(error) {
  return {
    type: ${settings['constant_name']}_FAILURE,
    error: error
  }
}\n`;
}

/**
 * Create action dispatcher function for action set
 * @param  {object} settings Action settings
 * @return {string}          Dispatcher function generated
 */
function createActionDispatcherFunction(settings) {
  const methodName = settings['grouped_method'] ? settings['grouped_method'] : `get${settings['method_base']}`;
  const fetchMethodName = settings['fetch_api_method'] ? settings['fetch_api_method'] : `fetch${settings['method_base']}`;

  return `/**
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
}\n`;
}

/**
 * Create fetch function for Redux API methods
 * @param  {object} settings Action settings
 * @return {string}          Fetch function generated
 */
function createApiFetchFunction(settings) {
  const methodName = settings['fetch_api_method'] ? settings['fetch_api_method'] : `fetch${settings['method_base']}`;

  return `/**
 * Fetch API for ${settings.name} action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function ${methodName}(args) {
  return api.actions.${settings['api_method']}.request();
}\n`;
}

/**
 * Creates full API action file
 * @param  {object} settings Action settings
 * @return {string}          file text as string
 */
function createFullAPIActionFile(settings) {
  return createRequestFunction(settings) + '\n' +
    createSuccessFunction(settings) + '\n' +
    createFailureFunction(settings) + '\n' +
    createActionDispatcherFunction(settings) + '\n' +
    createApiFetchFunction(settings) + '\n';
}

function createMiddleMethodBase(base) {
  return base.slice(0, 1).toUpperCase() + base.slice(1);
}

/**
 * Creates add action function as a string
 * @param  {object} settings Action settings
 * @return {string}          Add function generated
 */
function createAddActionFunction(settings) {
  const methodBase = createMiddleMethodBase(settings['method_base']);

  return `/**
 * Add ${settings.name} action
 * @param  {object} data  data to add for ${settings.name} state
 * @return {object}       action for adding ${settings.name}
 */
export function add${methodBase}(data) {
  return {
    type: ADD_${settings['constant_name']},
    data: data
  };
}\n`;
}

/**
 * Creates update action function as a string
 * @param  {object} settings Action settings
 * @return {string}          Update function generated
 */
function createUpdateActionFunction(settings) {
  const methodBase = createMiddleMethodBase(settings['method_base']);

  return `/**
 * Update ${settings.name} action
 * @param  {object} data    data to update for ${settings.name} state
 * @param  {number} index   position where ${settings.name} is in the state tree
 * @return {object}         action for updating ${settings.name}
 */
export function update${methodBase}(data, index) {
  return {
    type: UPDATE_${settings['constant_name']},
    data: data,
    index: index
  };
}\n`;
}

/**
 * Creates delete action function as a string
 * @param  {object} settings Action settings
 * @return {string}          Delete function generated
 */
function createDeleteActionFunction(settings) {
  const methodBase = createMiddleMethodBase(settings['method_base']);

  return `/**
 * Delete ${settings.name} action
 * @param  {number} index   position where ${settings.name} is in the state tree
 * @return {object}         action for delete ${settings.name}
 */
export function delete${methodBase}(data, index) {
  return {
    type: DELETE_${settings['constant_name']},
    index: index
  };
}\n`;
}

/**
 * Creates full CRUD action file
 * @param  {object} settings Action settings
 * @return {string}          file text as string
 */
function createFullCRUDActionFile(settings) {
  return createAddActionFunction(settings) + '\n' +
    createUpdateActionFunction(settings) + '\n' +
    createDeleteActionFunction(settings) + '\n';
}

/**
 * Creates single action function as a string
 * @param  {object} settings Action settings
 * @return {string}          Single function generated
 */
function createSingleAction(settings) {
  return `/**
 * Action creator for ${settings.name}
 * @param  {object} data    Data for ${settings.name} action
 * @return {object}         action for ${settings.name}
 */
export function ${settings.method}(data) {
  return {
    type: ${settings.constant},
    data: data
  };
}\n`;
}

module.exports = {
  createRequestFunction: createRequestFunction,
  createSuccessFunction: createSuccessFunction,
  createFailureFunction: createFailureFunction,
  createActionDispatcherFunction: createActionDispatcherFunction,
  createApiFetchFunction: createApiFetchFunction,
  createFullAPIActionFile: createFullAPIActionFile,
  createAddActionFunction: createAddActionFunction,
  createUpdateActionFunction: createUpdateActionFunction,
  createDeleteActionFunction: createDeleteActionFunction,
  createFullCRUDActionFile: createFullCRUDActionFile,
  createSingleAction: createSingleAction
};
