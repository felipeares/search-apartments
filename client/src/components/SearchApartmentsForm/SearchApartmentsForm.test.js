import React from "react";
import { shallow } from "enzyme";
import SearchApartmentsForm from "./SearchApartmentsForm";

describe("SearchApartmentsForm: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchApartmentsForm
        searchFieldChanged={jest.fn()}
        filtersChanged={jest.fn()}
        searchField={""}
        searchHelperList={[]}
        filters={{}}
      />
    );
  });

  it("should render a main div with class SearchApartments", () => {
    expect(wrapper.find("div.SearchApartments").length).toEqual(1);
  });
});
