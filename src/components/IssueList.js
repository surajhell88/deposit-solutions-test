import React from "react";
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
            <div className="issue-status">{issue.state}</div>
            <div className="issue-text">{issue.title}</div>
            {issue.noOfComments !== 0 && (
              <div className="issue-comments">
                <div className="float-right">{issue.comments}</div>
              </div>
            )}
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
