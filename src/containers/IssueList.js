import { connect } from "react-redux";

import IssueList from "../components/IssueList";

function mapStateToProps(
  { app: { issues: { data: listOfIssues } } },
  ownProps
) {
  return {
    listOfIssues,
    ...ownProps
  };
}

export default connect(mapStateToProps)(IssueList);
