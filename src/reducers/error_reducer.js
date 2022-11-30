import { ERROR, CLEAR_ERROR, INFO, CLEAR_INFO } from '../actions/types';

const INITIAL_STATE = { errorMessage: '', infoMessage: '', errorAction: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ERROR: {
      if (action.errorAction)
        return { ...state, errorMessage: action.payload, errorAction: action.errorAction };
      else
        return { ...state, errorMessage: action.payload, errorAction: null };
    }
    case CLEAR_ERROR: {
      return { ...state, errorMessage: '', errorAction: null };
    }
    case INFO: {
      console.log('error_reducer.js : INFO:: action.payload::', action.payload);
      return { ...state, infoMessage: action.payload };
    }
    case CLEAR_INFO: {
      return { ...state, infoMessage: '' };
    }
    default:
      return state;
  }
}
