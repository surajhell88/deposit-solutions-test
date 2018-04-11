import React from "react";

const listOfIssues = [
  {
    status: "open",
    description: "Issue Text 1",
    noOfComments: 2
  },
  {
    status: "closed",
    description: "Issue Text 2",
    noOfComments: 0
  },
  {
    status: "open",
    description: "Issue Text 3",
    noOfComments: 1
  }
];

const IssueList = () => (
  <ul className="issue-list">
    {listOfIssues.map((issue, i) => (
      <li key={i} class="issue-item">
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

export default IssueList;
