import constants from "../constants";
import api from "../utils/api";

const { ACTIONS: { ISSUES }, END_POINTS } = constants;

export const fetching = flag => ({
  type: ISSUES.TOGGLE_FETCHING,
  isFetching: flag
});

export const errFetching = flag => ({
  type: ISSUES.ERROR_FETCHING,
  errFetching: flag
});

export const recieved = payload => ({
  type: ISSUES.RECIEVED,
  payload
});

export const get = queryParams => dispatch => {
  dispatch(fetching(true));
  return api(`${END_POINTS.ISSUES}?${queryParams}`).then(response => {
    // TODO: logger call
    dispatch(fetching(false));
    if (response.length) {
      dispatch(recieved(response));
    } else {
      dispatch(errFetching(true));
    }
  });
};

export default {
  fetching,
  errFetching,
  recieved,
  get
};
