import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import App from "../app";

function setup(customProps) {
  const props = {
    ...customProps
  };
  const enzymeWrapper = shallow(<App {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("App Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div.app").length).toBe(1);
  });
  it("should call getIssues", () => {
    const getIssues = sinon.spy();
    const { enzymeWrapper } = setup({ getIssues });
    expect(getIssues.callCount).toBe(1);
  });
  it("should render loading state", () => {
    const isFetchingIssues = true;
    const { enzymeWrapper } = setup({ isFetchingIssues });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("Loading...");
  });
  it("should render error state", () => {
    const errFetchingIssues = true;
    const { enzymeWrapper } = setup({ errFetchingIssues });
    const messageBox = enzymeWrapper.find("div.message-box");
    expect(messageBox.length).toBe(1);
    expect(messageBox.find("h3").text()).toBe("Error while loading data");
  });
});
