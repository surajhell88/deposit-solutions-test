import React from "react";
import { shallow, mount } from "enzyme";

export default (Component, isShallow = true, customProps = {}) => {
  const props = {
    ...customProps
  };
  const component = <Component {...props} />;
  const enzymeWrapper = isShallow ? shallow(component) : mount(component);
  return {
    props,
    enzymeWrapper
  };
};
