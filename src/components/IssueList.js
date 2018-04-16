import React, { Fragment } from "react";
import PropTypes from "prop-types";

const IssueList = ({ listOfIssues }) => {
  let issueList = (
    <div className="issues-loading">
      <h4>No Issues Found</h4>
    </div>
  );
  if (listOfIssues.length) {
    issueList = (
      <ul className="issue-list">
        {listOfIssues.map((issue, i) => (
          <li key={i} className="issue-item">
            <div className="issue-container">
              <div className="issue-status">
                <i className="far fa-exclamation-circle" />
              </div>
              <div className="issue-text">{issue.title}</div>
              <div className="issue-comments float-right">
                {issue.comments > 0 && (
                  <Fragment>
                    <i className="far fa-comment-alt" />
                    &nbsp;
                    {issue.comments}
                  </Fragment>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return issueList;
};

IssueList.propTypes = {
  listOfIssues: PropTypes.arrayOf(PropTypes.object)
};

export default IssueList;
