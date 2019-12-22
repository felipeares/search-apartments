import React from "react";
import { shallow } from "enzyme";
import SearchApartmentsForm from "./SearchApartmentsForm";

describe("SearchApartmentsForm: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchApartmentsForm
        searchFieldChanged={jest.fn()}
        searchFieldSubmit={jest.fn()}
        selectFromHelper={jest.fn()}
        searchField={""}
        searchHelperList={[]}
        loading={false}
        filters={[]}
        filtersChanged={jest.fn()}
        toggleFilters={jest.fn()}
        showFilters={false}
      />
    );
  });

  it("should render a main div with class SearchApartmentsForm", () => {
    expect(wrapper.find("div.SearchApartmentsForm").length).toEqual(1);
  });

  it("should render a form with class SearchForm", () => {
    expect(wrapper.find("form.SearchForm").length).toEqual(1);
  });

  it("should render a helper box when searchHelperList is not empty", () => {
    wrapper.setProps({ searchHelperList: ["a", "b"] });
    expect(wrapper.find("ul.searchHelperList li").length).toEqual(2);
  });
});
