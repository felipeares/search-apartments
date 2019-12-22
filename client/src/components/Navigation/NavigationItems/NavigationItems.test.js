import React from "react";

import { shallow } from "enzyme";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

describe("NavigationItems: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render a list", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should render two  <NavigationItem /> elements", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
