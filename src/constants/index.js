export default Object.freeze({
  ACTIONS: {
    ISSUES: {
      TOGGLE_FETCHING: "issue-list-toggle-fetch",
      ERROR_FETCHING: "issue-list-error-fetching",
      RECIEVED: "issue-list-recieved"
    }
  },
  END_POINTS: {
    ISSUES: "/search/issues"
  },
  QUERY_PARAMS: "type:issue+repo:angular/angular.js+is:open"
});
