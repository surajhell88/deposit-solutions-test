import expect from "expect";
import { mount } from "enzyme";

import testUtil from "../../utils/test-util";
import ActionHeader from "../ActionHeader";

describe("ActionHeader Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = testUtil(ActionHeader, false);
    expect(enzymeWrapper.find("div.action-header").length).toBe(1);
    expect(enzymeWrapper.find("form.form-search").length).toBe(1);
    expect(enzymeWrapper.find("input.search-box").length).toBe(1);
  });
});
