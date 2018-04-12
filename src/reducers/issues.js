import constants from "../constants";

const {
  ACTIONS: { ISSUES: { TOGGLE_FETCHING, ERROR_FETCHING, RECIEVED } }
} = constants;

const issues = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ERROR_FETCHING:
      return {
        ...state,
        errFetching: action.errFetching
      };
    case RECIEVED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default issues;
