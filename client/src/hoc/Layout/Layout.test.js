import React from "react";

import { shallow } from "enzyme";
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Layout from "./Layout";

describe("Layout: rendering test", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Layout>
        <p>some childrens</p>
      </Layout>
    );
  });

  it("should render a ToolBar", () => {
    expect(wrapper.find(ToolBar)).toHaveLength(1);
  });

  it("should render a SideDrawer", () => {
    expect(wrapper.find(SideDrawer)).toHaveLength(1);
  });

  it("should render a main element", () => {
    expect(wrapper.find("main")).toHaveLength(1);
  });

  it("main element should render the childrens", () => {
    expect(
      wrapper
        .find("main")
        .children()
        .html()
    ).toEqual("<p>some childrens</p>");
  });

  it("should set the state of showSideDrawer to false when sideDrawerCloseHandler called", () => {
    wrapper.setState({ showSideDrawer: true });
    wrapper.instance().sideDrawerCloseHandler();
    expect(wrapper.state().showSideDrawer).toEqual(false);
  });

  it("should set the state of showSideDrawer to true when sideDrawerOpenHandler called", () => {
    wrapper.setState({ showSideDrawer: false });
    wrapper.instance().sideDrawerOpenHandler();
    expect(wrapper.state().showSideDrawer).toEqual(true);
  });

  it("should toggle of sideToggleHandler when sideToggleHandler called", () => {
    const prev_showSideDrawer = wrapper.state().showSideDrawer;
    wrapper.instance().sideToggleHandler();
    expect(wrapper.state().showSideDrawer).toEqual(!prev_showSideDrawer);
  });
});
