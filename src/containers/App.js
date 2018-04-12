import { connect } from "react-redux";

import actions from "../actions";
import App from "../components/App";

const mapStateToProps = ({
  app: { issues: { isFetching, errFetching, pagination } }
}) => ({
  isFetchingIssues: isFetching,
  errFetchingIssues: errFetching,
  currentPage: pagination.next && pagination.next.page - 1
});

const mapDispatchToProps = dispatch => ({
  getIssues: () => dispatch(actions.issues.get())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
