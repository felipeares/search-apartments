import React from "react";
import { shallow } from "enzyme";
import Aux from "./Aux";

describe("Aux: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Aux>
        <p>some childrens</p>
      </Aux>
    );
  });

  it("should render the childrens", () => {
    expect(wrapper.html()).toEqual("<p>some childrens</p>");
  });
});
