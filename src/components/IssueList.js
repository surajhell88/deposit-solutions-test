import React from "react";
import PropTypes from "prop-types";

const IssueList = ({ listOfIssues }) => (
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

IssueList.propTypes = {
  listOfIssues: PropTypes.arrayOf(PropTypes.object)
};

export default IssueList;
