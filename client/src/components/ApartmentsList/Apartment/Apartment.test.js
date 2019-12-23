import React from "react";
import { shallow } from "enzyme";
import Apartment from "./Apartment";

describe("Apartment: rendering tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Apartment
        title={""}
        price={0}
        size={0}
        rooms={0}
        bathrooms={0}
        image={""}
      />
    );
  });

  it("should render a main li with class Apartment", () => {
    expect(wrapper.find("li.Apartment").length).toEqual(1);
  });
});
