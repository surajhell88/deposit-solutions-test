import { connect } from "react-redux";

import actions from "../actions";
import ActionHeader from "../components/ActionHeader";

const mapDispatchToProps = dispatch => ({
  searchIssues: query => dispatch(actions.issues.get(1, query))
});

export default connect(null, mapDispatchToProps)(ActionHeader);
