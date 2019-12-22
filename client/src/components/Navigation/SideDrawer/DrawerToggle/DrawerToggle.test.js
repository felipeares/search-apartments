import React from "react";

import { shallow } from "enzyme";
import DrawerToggle from "./DrawerToggle";

describe("DrawerToggle: rendering test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DrawerToggle />);
  });

  it("should render 4 divs. A main one and 3 to visualize", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });
});
