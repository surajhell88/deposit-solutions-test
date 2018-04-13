import React from "react";
import PropTypes from "prop-types";

import ActionHeader from "../containers/ActionHeader";
import IssueList from "../containers/IssueList";
import AppFooter from "./AppFooter";

class App extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }
  render() {
    const { isFetchingIssues, errFetchingIssues } = this.props;
    return (
      <div className="app">
        <div className="container">
          <ActionHeader />
          {isFetchingIssues ? (
            <div className="issues-loading">
              <h4>Loading...</h4>
            </div>
          ) : errFetchingIssues ? (
            <div className="issues-loading">
              <h4>Error while loading data</h4>
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
  getIssues: PropTypes.func,
  currentPage: PropTypes.number
};

export default App;
