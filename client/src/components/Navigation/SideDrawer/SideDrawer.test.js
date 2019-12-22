import React from "react";

import { shallow } from "enzyme";

import SideDrawer from "./SideDrawer";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";

describe("SideDrawer: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideDrawer />);
  });

  it("should render a BackDrop", () => {
    expect(wrapper.find(BackDrop)).toHaveLength(1);
  });

  it("should render a Logo", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a NavigationItems", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it("should change class when show set to True", () => {
    wrapper.setProps({ show: false });
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("Open")
    ).toEqual(false);
    wrapper.setProps({ show: true });
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("Open")
    ).toEqual(true);
  });
});
