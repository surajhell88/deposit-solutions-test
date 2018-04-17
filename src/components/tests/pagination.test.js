import expect from "expect";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import Pagination from "../Pagination";

function setup(customProps) {
  const props = {
    ...customProps
  };
  const enzymeWrapper = shallow(<Pagination {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("Pagination Component", () => {
  it("should render self", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("div.pagination").length).toBe(1);
  });
  it("should render prev and next buttons", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find("button.pg-btn-prev").length).toBe(1);
    expect(enzymeWrapper.find("button.pg-btn-next").length).toBe(1);
  });
  it("should render 3 buttons with page numbers", () => {
    const totalPages = 3;
    const { enzymeWrapper } = setup({
      totalPages
    });
    expect(enzymeWrapper.find("button.pg-btn-number").length).toBe(totalPages);
  });
  it("should have button with text 2 as selected", () => {
    const currentPage = 2;
    const { enzymeWrapper } = setup({
      totalPages: 3,
      currentPage
    });
    const selectedBtn = enzymeWrapper.find("button.pg-btn-number.selected");
    expect(selectedBtn.length).toBe(1);
    expect(selectedBtn.text()).toBe(currentPage + "");
  });
  it("should not render ellipses when totalPages less than 5", () => {
    const { enzymeWrapper } = setup({
      totalPages: 3
    });
    expect(enzymeWrapper.find("button.pg-btn-ellipses").length).toBe(0);
  });
  it("should render ellipses when totalPages more than 5", () => {
    const { enzymeWrapper } = setup({
      totalPages: 6
    });
    expect(enzymeWrapper.find("button.pg-btn-ellipses").length).toBe(1);
  });
  it("should call newPage when page button is clicked", () => {
    const newPage = sinon.spy();
    const { enzymeWrapper } = setup({
      totalPages: 6,
      newPage
    });
    const nextPage = enzymeWrapper.find("button.pg-btn-next");
    nextPage.simulate("click");
    expect(newPage.callCount).toBe(1);
  });
  it("should have prev disabled on first page", () => {
    const { enzymeWrapper } = setup({
      totalPages: 6,
      currentPage: 1
    });
    const disabledPrevBtn = enzymeWrapper.find("button.pg-btn-prev.disabled");
    expect(disabledPrevBtn.length).toBe(1);
  });
  it("should have next disabled on last page", () => {
    const { enzymeWrapper } = setup({
      totalPages: 6,
      currentPage: 6
    });
    const disabledPrevBtn = enzymeWrapper.find("button.pg-btn-next.disabled");
    expect(disabledPrevBtn.length).toBe(1);
  });
});
