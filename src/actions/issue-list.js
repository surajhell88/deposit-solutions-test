import parseLinkHeader from "parse-link-header";

import constants from "../constants";
import api from "../utils/api";

const { ACTIONS: { ISSUES }, END_POINTS, QUERY_PARAMS } = constants;

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

export const get = (page = 1, query = "") => dispatch => {
  dispatch(fetching(true));
  const pageParams = `page=${page}&per_page=25`;
  let endpoint = `${
    END_POINTS.ISSUES
  }?q=${query}+${QUERY_PARAMS}&${pageParams}`;
  return api(endpoint).then(response => {
    const { data, headers, ok } = response;
    dispatch(fetching(false));
    if (ok) {
      const parsedLink = parseLinkHeader(headers.get("Link"));
      dispatch(recieved(data.items, { ...parsedLink, currentPage: page }));
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
