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

  it("should display the price", () => {
    const price = 100000;
    wrapper.setProps({ price: price });
    expect(
      wrapper
        .find("li.Apartment")
        .first()
        .text()
    ).toMatch(price.toLocaleString("es-ES") + " €");
  });

  it("should display the size", () => {
    const size = 123;
    wrapper.setProps({ size: size });
    expect(
      wrapper
        .find("li.Apartment")
        .first()
        .text()
    ).toMatch(size.toString() + " m");
  });

  // ... TODO rooms, bathrooms, image and title
});
