import expect from "expect";
import React from "react";
import { shallow } from "enzyme";

import App from "../app";

function setup() {
  const props = {
    getIssues: () => {}
  };
  const enzymeWrapper = shallow(<App {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("App Component", () => {
  const { enzymeWrapper } = setup();
  it("should render self", () => {
    expect(enzymeWrapper.find("div.app").length).toBe(1);
  });
});
