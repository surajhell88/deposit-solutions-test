import React from "react";
import PropTypes from "prop-types";

import ActionHeader from "./ActionHeader";
import IssueList from "../containers/IssueList";
import AppFooter from "./AppFooter";

class App extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }
  render() {
    const { isFetchingIssues, errFetchingIssues } = this.props;
    return (
      <div className="app apply-flex justify-center">
        <div className="container">
          <ActionHeader />
          {isFetchingIssues ? (
            <div className="message-box apply-flex justify-center">
              <h3>Loading...</h3>
            </div>
          ) : errFetchingIssues ? (
            <div className="message-box apply-flex justify-center">
              <h3>Error while loading data</h3>
            </div>
          ) : (
            <IssueList />
          )}
          <AppFooter />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isFetchingIssues: PropTypes.bool,
  errFetchingIssues: PropTypes.bool,
  getIssues: PropTypes.func
};

App.defaultProps = {
  isFetchingIssues: false,
  errFetchingIssues: false,
  getIssues: () => {}
};

export default App;
