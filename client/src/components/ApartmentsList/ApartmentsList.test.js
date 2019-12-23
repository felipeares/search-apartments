import React from "react";
import { shallow } from "enzyme";
import ApartmentsList from "./ApartmentsList";
import Apartment from "./Apartment/Apartment";

describe("ApartmentsList: rendering tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ApartmentsList apartments={[]} filters={[]} />);
  });

  it("should render a main ul with class ApartmentsList", () => {
    expect(wrapper.find("ul.ApartmentsList").length).toEqual(1);
  });

  it("should render N Apartment", () => {
    const n = 10;
    const apartments = Array(n).fill({});
    wrapper.setProps({ apartments: apartments });
    expect(wrapper.find(Apartment)).toHaveLength(n);
  });
});
