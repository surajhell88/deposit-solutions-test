import expect from "expect";
import sinon from "sinon";

import testUtil from "../../utils/test-util";
import AppFooter from "../AppFooter";

describe("AppFooter Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = testUtil(AppFooter);
    expect(enzymeWrapper.find("div.app-footer").length).toBe(1);
  });
});
