import expect from "expect";
import sinon from "sinon";

import testUtil from "../../utils/test-util";
import App from "../app";

describe("App Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = testUtil(App);
    expect(enzymeWrapper.find("div.app").length).toBe(1);
  });
  it("should call getIssues", () => {
    const getIssues = sinon.spy();
    const { enzymeWrapper } = testUtil(App, true, { getIssues });
    expect(getIssues.callCount).toBe(1);
  });
  it("should render loading state", () => {
    const isFetchingIssues = true;
    const { enzymeWrapper } = testUtil(App, true, { isFetchingIssues });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("Loading...");
  });
  it("should render error state", () => {
    const errFetchingIssues = true;
    const { enzymeWrapper } = testUtil(App, true, { errFetchingIssues });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("Error while loading data");
  });
});
