import expect from "expect";
import React from "react";
import { shallow } from "enzyme";

import IssueList from "../IssueList";

function setup(customProps) {
  const props = {
    ...customProps
  };
  const enzymeWrapper = shallow(<IssueList {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

const dummyIssue = {
  title: "Dummy Title",
  comments: 2
};

const dummyIssueWithNoComments = {
  title: "Dummy Title",
  comments: 0
};

const listOfIssues = [dummyIssue];

describe("IssueList Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup({ listOfIssues });
    expect(enzymeWrapper.find("ul.issue-list").length).toBe(1);
    expect(enzymeWrapper.find("div.issue-text").text()).toBe(dummyIssue.title);
    expect(
      enzymeWrapper
        .find("div.issue-comments")
        .text()
        .trim()
    ).toBe(dummyIssue.comments + "");
  });
  it("should render no data", () => {
    const { enzymeWrapper } = setup({ listOfIssues: [] });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("No Issues Found");
  });
  it("should render with no comments", () => {
    const { enzymeWrapper } = setup({
      listOfIssues: [dummyIssueWithNoComments]
    });
    expect(enzymeWrapper.find("div.issue-comments").length).toBe(0);
  });
});
