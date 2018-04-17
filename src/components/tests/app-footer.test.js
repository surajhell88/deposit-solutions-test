import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import AppFooter from "../AppFooter";

function setup(customProps) {
  const props = {
    ...customProps
  };
  const enzymeWrapper = shallow(<AppFooter {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("AppFooter Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div.app-footer").length).toBe(1);
  });
});
