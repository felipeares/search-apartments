import React from "react";
import { shallow } from "enzyme";
import AnotherPage from "./AnotherPage";

describe("AnotherPage: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AnotherPage />);
  });

  it("should have only a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have a paragraph p with under construction message", () => {
    expect(wrapper.find("div > p").text()).toMatch(/en construcción/);
  });
});
