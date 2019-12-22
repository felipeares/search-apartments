import React from "react";

import { shallow } from "enzyme";
import NavigationItem from "./NavigationItem";
import { NavLink } from "react-router-dom";

describe("NavigationItem: rendering test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItem link={""} />);
  });

  it("should render a list item", () => {
    expect(wrapper.find("li").length).toEqual(1);
  });

  it("should render one NavLink element", () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });
});
