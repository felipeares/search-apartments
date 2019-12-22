import React from "react";
import { shallow } from "enzyme";
import SearchApartments from "./SearchApartments";

describe("SearchApartments: rendering tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchApartments
        searchFieldChanged={jest.fn()}
        filtersChanged={jest.fn()}
        searchField={""}
        searchHelperList={[]}
        filters={{}}
      />
    );
  });

  describe("SearchApartments: rendering tests", () => {
    it("should render a main div with class SearchApartments", () => {
      expect(wrapper.find("div.SearchApartments").length).toEqual(1);
    });
  });
});
