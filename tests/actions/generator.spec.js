const expect = require('expect');
const generator = require('../../src/actions/generator');

describe('action generators', () => {
  describe('API actions', () => {
    const settings = {
      name: 'sample one',
      method_base: 'sampleOne',
      constant_name: 'SAMPLE_ONE',
      grouped_method: 'getSampleOneData',
      fetch_api_method: 'fetchSampleOneData',
      api_method: 'getSampleOne'
    };

    describe('createRequestFunction', () => {
      it('generates a proper request function', () => {
        var generatedString = `/**
 * Action generator for sample one request action
 * @return {object}         request action
 */
export function sampleOneRequestAction() {
  return {
    type: SAMPLE_ONE_REQUEST
  }
}\n`;
        expect(generator.createRequestFunction(settings)).toEqual(generatedString);
      });

    });

    describe('createSuccessFunction', () => {
      it('generates a proper success function', () => {
        var generatedString = `/**
 * Action generator for sample one success action
 * @param  {object} data    API response
 * @return {object}         success action
 */
export function sampleOneSuccessAction(data) {
  return {
    type: SAMPLE_ONE_SUCCESS,
    data: data
  }
}\n`;
        expect(generator.createSuccessFunction(settings)).toEqual(generatedString);
      });
    });

    describe('createFailureFunction', () => {
      it('generates a proper failure function', () => {
        var generatedString = `/**
 * Action generator for sample one failure action
 * @param  {string|object} error    error from API
 * @return {object}                 failure action
 */
export function sampleOneFailureAction(error) {
  return {
    type: SAMPLE_ONE_FAILURE,
    error: error
  }
}\n`;
        expect(generator.createFailureFunction(settings)).toEqual(generatedString);
      });
    });

    describe('createActionDispatcherFunction', () => {
      it('generates a proper dispatcher function', () => {
        var generatedString = `/**
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
}\n`;
        expect(generator.createActionDispatcherFunction(settings)).toEqual(generatedString);
      });
    });

    describe('createApiFetchFunction', () => {
      it('generates a proper fetch function', () => {
        var generatedString = `/**
 * Fetch API for sample one action
 * @param  {object} args  settings for API
 * @return {object}       Promise from API
 */
function fetchSampleOneData(args) {
  return api.actions.getSampleOne.request();
}\n`;
        expect(generator.createApiFetchFunction(settings)).toEqual(generatedString);
      });
    });
  });

  describe('CRUD actions', () => {
    const settings = {
      name: 'sample two',
      type: 'transaction',
      method_base: 'sampleTwo',
      constant_name: 'SAMPLE_TWO'
    };

    describe('createAddActionFunction', () => {
      it('generates a proper add action function', () => {
        var generatedString = `/**
 * Add sample two action
 * @param  {object} data  data to add for sample two state
 * @return {object}       action for adding sample two
 */
export function addSampleTwo(data) {
  return {
    type: ADD_SAMPLE_TWO,
    data: data
  };
}\n`;
        expect(generator.createAddActionFunction(settings)).toEqual(generatedString);
      });
    });

    describe('createUpdateActionFunction', () => {
      it('generates a proper update action function', () => {
        var generatedString = `/**
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
}\n`;
        expect(generator.createUpdateActionFunction(settings)).toEqual(generatedString);
      });
    });

    describe('createDeleteActionFunction', () => {
      it('generates a proper delete action function', () => {
        var generatedString = `/**
 * Delete sample two action
 * @param  {number} index   position where sample two is in the state tree
 * @return {object}         action for delete sample two
 */
export function deleteSampleTwo(data, index) {
  return {
    type: DELETE_SAMPLE_TWO,
    index: index
  };
}\n`;
        expect(generator.createDeleteActionFunction(settings)).toEqual(generatedString);

      });
    });
  });

  describe('createSingleAction', () => {
    it('generates a proper single action function', () => {
      const settings = {
        name: 'sample three',
        type: 'single',
        method: 'sampleThreeAction',
        constant: 'SAMPLE_THREE_ACTION'
      };
      var generatedString = `/**
 * Action creator for sample three
 * @param  {object} data    Data for sample three action
 * @return {object}         action for sample three
 */
export function sampleThreeAction(data) {
  return {
    type: SAMPLE_THREE_ACTION,
    data: data
  };
}\n`;
      expect(generator.createSingleAction(settings)).toEqual(generatedString);

    });
  });

});
