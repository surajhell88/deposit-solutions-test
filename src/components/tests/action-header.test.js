import expect from "expect";
import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import ActionHeader from "../ActionHeader";

function setup(customProps) {
  const props = {
    ...customProps
  };
  const enzymeWrapper = mount(<ActionHeader {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("ActionHeader Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div.action-header").length).toBe(1);
    expect(enzymeWrapper.find("form.form-search").length).toBe(1);
    expect(enzymeWrapper.find("input.search-box").length).toBe(1);
  });
});
