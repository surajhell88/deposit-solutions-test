import parseLinkHeader from "parse-link-header";

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

export const recieved = (payload, metaData) => ({
  type: ISSUES.RECIEVED,
  payload,
  metaData
});

export const get = (page = 1) => dispatch => {
  dispatch(fetching(true));
  return api(`${END_POINTS.ISSUES}?page=${page}&per_page=20`).then(response => {
    const { data, headers } = response;
    dispatch(fetching(false));
    if (data.length) {
      const parsedLink = parseLinkHeader(headers.get("Link"));
      dispatch(recieved(data, { ...parsedLink, currentPage: page }));
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
