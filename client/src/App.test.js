import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

describe("SearchApartments: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should have a Layout component", () => {
    expect(wrapper.find(Layout).length).toEqual(1);
  });

  it("should have a Switch component", () => {
    expect(wrapper.find(Switch).length).toEqual(1);
  });

  it("should have two routes", () => {
    expect(wrapper.find(Route).length).toEqual(2);
  });

  it("should have one redirection to root", () => {
    expect(wrapper.containsMatchingElement(<Redirect to="/" />)).toEqual(true);
  });
});
