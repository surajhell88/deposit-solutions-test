import expect from "expect";
import { shallow } from "enzyme";

import testUtil from "../../utils/test-util";
import IssueList from "../IssueList";

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
    const { enzymeWrapper } = testUtil(IssueList, true, { listOfIssues });
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
    const { enzymeWrapper } = testUtil(IssueList, true, { listOfIssues: [] });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("No Issues Found");
  });
  it("should render with no comments", () => {
    const { enzymeWrapper } = testUtil(IssueList, true, {
      listOfIssues: [dummyIssueWithNoComments]
    });
    expect(enzymeWrapper.find("div.issue-comments").length).toBe(0);
  });
});
