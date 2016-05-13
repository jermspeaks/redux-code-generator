
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
 * Action generator for sample two request action
 * @return {object}         request action
 */
export function sampleTwoRequestAction() {
  return {
    type: SAMPLE_TWO_REQUEST
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

export function getSampleOneData(args) {
  return (dispatch) => {
    dispatch(sampleOneRequestAction());

    return fetchSampleOneData(args)
      .then((res) => dispatch(sampleOneSuccessAction(res)))
      .catch((err) => dispatch(sampleOneFailureAction(err)));
  };
}

export function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request({}, {
    body: JSON.stringify(postData)
  });
}

/**
 * Action generator for sample two success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleTwoSuccessAction(data) {
  return {
    type: SAMPLE_TWO_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample two failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleTwoFailureAction(error) {
  return {
    type: SAMPLE_TWO_FAILURE,
    error: error
  }
}

export function getSampleTwoData(args) {
  return (dispatch) => {
    dispatch(sampleTwoRequestAction());

    return fetchSampleTwoData(args)
      .then((res) => dispatch(sampleTwoSuccessAction(res)))
      .catch((err) => dispatch(sampleTwoFailureAction(err)));
  };
}

export function fetchSampleTwoData(args) {
  return api.actions.getSampleTwo.request({}, {
    body: JSON.stringify(postData)
  });
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
 * Action generator for sample two request action
 * @return {object}         request action
 */
export function sampleTwoRequestAction() {
  return {
    type: SAMPLE_TWO_REQUEST
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

export function getSampleOneData(args) {
  return (dispatch) => {
    dispatch(sampleOneRequestAction());

    return fetchSampleOneData(args)
      .then((res) => dispatch(sampleOneSuccessAction(res)))
      .catch((err) => dispatch(sampleOneFailureAction(err)));
  };
}

export function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}

/**
 * Action generator for sample two success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleTwoSuccessAction(data) {
  return {
    type: SAMPLE_TWO_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample two failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleTwoFailureAction(error) {
  return {
    type: SAMPLE_TWO_FAILURE,
    error: error
  }
}

export function getSampleTwoData(args) {
  return (dispatch) => {
    dispatch(sampleTwoRequestAction());

    return fetchSampleTwoData(args)
      .then((res) => dispatch(sampleTwoSuccessAction(res)))
      .catch((err) => dispatch(sampleTwoFailureAction(err)));
  };
}

export function fetchSampleTwoData(args) {
  return api.actions.getSampleTwo.request();
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
 * Action generator for sample two request action
 * @return {object}         request action
 */
export function sampleTwoRequestAction() {
  return {
    type: SAMPLE_TWO_REQUEST
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
 * @param  {object} args  error from API
 * @return {object}       Promise from API
 */
function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}

/**
 * Action generator for sample two success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleTwoSuccessAction(data) {
  return {
    type: SAMPLE_TWO_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample two failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleTwoFailureAction(error) {
  return {
    type: SAMPLE_TWO_FAILURE,
    error: error
  }
}

export function getSampleTwoData(args) {
  return (dispatch) => {
    dispatch(sampleTwoRequestAction());

    return fetchSampleTwoData(args)
      .then((res) => dispatch(sampleTwoSuccessAction(res)))
      .catch((err) => dispatch(sampleTwoFailureAction(err)));
  };
}

/**
 * Fetch API for sample two action
 * @param  {object} args  error from API
 * @return {object}       Promise from API
 */
function fetchSampleTwoData(args) {
  return api.actions.getSampleTwo.request();
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
 * Action generator for sample two request action
 * @return {object}         request action
 */
export function sampleTwoRequestAction() {
  return {
    type: SAMPLE_TWO_REQUEST
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
 * Action generator for sample two success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleTwoSuccessAction(data) {
  return {
    type: SAMPLE_TWO_SUCCESS,
    data: data
  }
}

/**
 * Action generator for sample two failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleTwoFailureAction(error) {
  return {
    type: SAMPLE_TWO_FAILURE,
    error: error
  }
}

/**
 * Action dispatcher for sample two action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
export function getSampleTwoData(args) {
  return (dispatch) => {
    dispatch(sampleTwoRequestAction());

    return fetchSampleTwoData(args)
      .then((res) => dispatch(sampleTwoSuccessAction(res)))
      .catch((err) => dispatch(sampleTwoFailureAction(err)));
  };
}

/**
 * Fetch API for sample two action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function fetchSampleTwoData(args) {
  return api.actions.getSampleTwo.request();
}
