import React from "react";
import PropTypes from "prop-types";

const IssueList = ({ listOfIssues }) => (
  <ul className="issue-list">
    {listOfIssues.map((issue, i) => (
      <li key={i} className="issue-item">
        <div className="issue-status">{issue.status}</div>
        <div className="issue-text">{issue.description}</div>
        {issue.noOfComments !== 0 && (
          <div className="issue-comments">
            <div className="float-right">{issue.noOfComments}</div>
          </div>
        )}
      </li>
    ))}
  </ul>
);

IssueList.propTypes = {
  listOfIssues: PropTypes.arrayOf(PropTypes.object)
};

export default IssueList;
