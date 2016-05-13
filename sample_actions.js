/**
 * Action generator for sample one request action
 * @return {object}         request action
 */
export function sampleOneRequestAction() {
  return {
    type: SAMPLE_ONE_REQUEST
  }
}
/**
 * Action generator for sample one success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleOneSuccessAction(data) {
  return {
    type: SAMPLE_ONE_SUCCESS,
    data: data
  }
}
/**
 * Action generator for sample one failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleOneFailureAction(error) {
  return {
    type: SAMPLE_ONE_FAILURE,
    error: error
  }
}
/**
 * Action dispatcher for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
export function getSampleOneData(args) {
  return (dispatch) => {
    dispatch(sampleOneRequestAction());

    return fetchSampleOneData(args)
      .then((res) => dispatch(sampleOneSuccessAction(res)))
      .catch((err) => dispatch(sampleOneFailureAction(err)));
  };
}
/**
 * Fetch API for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}
/**
 * Action generator for sample one request action
 * @return {object}         request action
 */
export function sampleOneRequestAction() {
  return {
    type: SAMPLE_ONE_REQUEST
  }
}

/**
 * Action generator for sample one success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleOneSuccessAction(data) {
  return {
    type: SAMPLE_ONE_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample one failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleOneFailureAction(error) {
  return {
    type: SAMPLE_ONE_FAILURE,
    error: error
  }
}

/**
 * Action dispatcher for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
export function getSampleOneData(args) {
  return (dispatch) => {
    dispatch(sampleOneRequestAction());

    return fetchSampleOneData(args)
      .then((res) => dispatch(sampleOneSuccessAction(res)))
      .catch((err) => dispatch(sampleOneFailureAction(err)));
  };
}

/**
 * Fetch API for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}

/**
 * Action generator for sample one request action
 * @return {object}         request action
 */
export function sampleOneRequestAction() {
  return {
    type: SAMPLE_ONE_REQUEST
  }
}

/**
 * Action generator for sample one success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleOneSuccessAction(data) {
  return {
    type: SAMPLE_ONE_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample one failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleOneFailureAction(error) {
  return {
    type: SAMPLE_ONE_FAILURE,
    error: error
  }
}

/**
 * Action dispatcher for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
export function getSampleOneData(args) {
  return (dispatch) => {
    dispatch(sampleOneRequestAction());

    return fetchSampleOneData(args)
      .then((res) => dispatch(sampleOneSuccessAction(res)))
      .catch((err) => dispatch(sampleOneFailureAction(err)));
  };
}

/**
 * Fetch API for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}

