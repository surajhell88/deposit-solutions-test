import { connect } from "react-redux";

import actions from "../actions";
import App from "../components/App";

const mapStateToProps = ({ app: { issues: { isFetching, errFetching } } }) => ({
  isFetchingIssues: isFetching,
  errFetchingIssues: errFetching
});

const mapDispatchToProps = dispatch => ({
  getIssues: queryParams => dispatch(actions.issues.get(queryParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
