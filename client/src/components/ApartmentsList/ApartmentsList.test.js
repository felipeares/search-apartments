import React from "react";
import { shallow } from "enzyme";
import ApartmentsList from "./ApartmentsList";
import Apartment from "./Apartment/Apartment";

describe("ApartmentsList: rendering tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ApartmentsList apartments={[]} filters={[]} firstSearch={false} />
    );
  });

  it("should render a main ul with class ApartmentsList", () => {
    expect(wrapper.find("ul.ApartmentsList").length).toEqual(1);
  });

  it("should render N Apartment", () => {
    const n = 10;
    const apartments = Array(n).fill({
      id: 1,
      title: "",
      price: 0,
      size: 0,
      rooms: 0,
      bathrooms: 0,
      image: ""
    });
    wrapper.setProps({
      apartments: apartments
    });
    expect(wrapper.find(Apartment)).toHaveLength(n);
  });

  it("should display the welcome message only when no searches has been made", () => {
    // starts with firstSearch set to false
    expect(wrapper.find("li.NoApartmentsMessage").length).toEqual(1);
    wrapper.setProps({ firstSearch: true });
    expect(wrapper.find("li.NoApartmentsMessage").length).toEqual(0);
  });
});
