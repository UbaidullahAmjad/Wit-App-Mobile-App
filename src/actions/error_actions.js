import { ERROR, CLEAR_ERROR, INFO, CLEAR_INFO } from './types';
import store from '../store';

export const errorMessage = (message, action, object) => store.dispatch(errorHandler(message, action, object))

export const errorHandler = (error, action, object) => (dispatch, getState) => {
  try {
    dispatch({ type: ERROR, payload: error, ErrorObject: object, errorAction: action||null });
  } catch (e) {
    console.log('ERROR in errorHandler, (irony LOL):', e.message);
  }
};

export const clearError = () => (dispatch, getState) => {
  try {
    dispatch({ type: CLEAR_ERROR, payload: '' });
  } catch (e) {
    console.log('ERROR in ClearError:', e.message);
  }
};

export const infoMessage = (message) => store.dispatch(infoHandler(message))

export const infoHandler = (info) => (dispatch, getState) => {
  console.log('called infohandler');
  //let data=Object.assign({},{message:info})
  try {
    dispatch({ type: INFO, payload: info });
  } catch (e) {
    console.log('ERROR in infoHandler:', e.message);
  }
};

export const clearInfo = () => (dispatch, getState) => {
  try {
    dispatch({ type: CLEAR_INFO, payload: '' });
  } catch (e) {
    console.log('ERROR in clearInfo:', e.message);
  }
};

