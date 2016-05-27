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
 * Add sample two action
 * @param  {object} data  data to add for sample two state
 * @return {object}       action for adding sample two
 */
export function addSampleTwo(data) {
  return {
    type: ADD_SAMPLE_TWO,
    data: data
  };
}

/**
 * Update sample two action
 * @param  {object} data    data to update for sample two state
 * @param  {number} index   position where sample two is in the state tree
 * @return {object}         action for updating sample two
 */
export function updateSampleTwo(data, index) {
  return {
    type: UPDATE_SAMPLE_TWO,
    data: data,
    index: index
  };
}

/**
 * Delete sample two action
 * @param  {number} index   position where sample two is in the state tree
 * @return {object}         action for delete sample two
 */
export function deleteSampleTwo(data, index) {
  return {
    type: DELETE_SAMPLE_TWO,
    index: index
  };
}

/**
 * Action creator for sample three
 * @param  {object} data    Data for sample three action
 * @return {object}         action for sample three
 */
export function sampleThreeAction(data) {
  return {
    type: SAMPLE_THREE_ACTION,
    data: data
  };
}
/**
 * Action generator for sample one request action
 * @return {object}         request action
 */
export function sampleOneRequestAction() {
  return {
    type: types.SAMPLE_ONE_REQUEST
  }
}

/**
 * Action generator for sample one success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleOneSuccessAction(data) {
  return {
    type: types.SAMPLE_ONE_SUCCESS,
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
    type: types.SAMPLE_ONE_FAILURE,
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
 * Add sample two action
 * @param  {object} data  data to add for sample two state
 * @return {object}       action for adding sample two
 */
export function addSampleTwo(data) {
  return {
    type: types.ADD_SAMPLE_TWO,
    data: data
  };
}

/**
 * Update sample two action
 * @param  {object} data    data to update for sample two state
 * @param  {number} index   position where sample two is in the state tree
 * @return {object}         action for updating sample two
 */
export function updateSampleTwo(data, index) {
  return {
    type: types.UPDATE_SAMPLE_TWO,
    data: data,
    index: index
  };
}

/**
 * Delete sample two action
 * @param  {number} index   position where sample two is in the state tree
 * @return {object}         action for delete sample two
 */
export function deleteSampleTwo(data, index) {
  return {
    type: types.DELETE_SAMPLE_TWO,
    index: index
  };
}

/**
 * Action creator for sample three
 * @param  {object} data    Data for sample three action
 * @return {object}         action for sample three
 */
export function sampleThreeAction(data) {
  return {
    type: types.SAMPLE_THREE_ACTION,
    data: data
  };
}
