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
            <div className="message-box">
              <h3>Loading...</h3>
            </div>
          ) : errFetchingIssues ? (
            <div className="message-box">
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
  getIssues: PropTypes.func,
  currentPage: PropTypes.number
};

export default App;
