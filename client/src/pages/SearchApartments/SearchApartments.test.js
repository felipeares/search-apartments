import React from "react";
import { shallow } from "enzyme";
import SearchApartments from "./SearchApartments";
import SearchApartmentsForm from "../../components/SearchApartmentsForm/SearchApartmentsForm";

describe("SearchApartments: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchApartments />);
  });

  it("should have only a main div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a SearchApartmentsForm", () => {
    expect(wrapper.find(SearchApartmentsForm)).toHaveLength(1);
  });
});
