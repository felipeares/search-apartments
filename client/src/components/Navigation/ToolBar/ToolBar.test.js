import React from "react";

import { shallow } from "enzyme";

import ToolBar from "./ToolBar";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

describe("ToolBar: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ToolBar />);
  });

  it("should render a DrawerToggle", () => {
    expect(wrapper.find(DrawerToggle)).toHaveLength(1);
  });

  it("should render a Logo", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a NavigationItems", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });
});
