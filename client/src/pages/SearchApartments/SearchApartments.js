import React, { Component } from "react";
import styles from "./SearchApartments.module.css";
import axios from "../../axios";

import SearchApartmentsForm from "../../components/SearchApartmentsForm/SearchApartmentsForm";
import ApartmentsList from "../../components/ApartmentsList/ApartmentsList";

class SearchApartments extends Component {
  state = {
    searchField: "",
    searchHelperList: [],
    firstSearch: false,
    filters: [
      {
        id: "price",
        name: "Precio",
        type: "range",
        minValues: [
          { value: 0, text: "Precio Mínimo" },
          { value: 100000, text: "100.000€" },
          { value: 200000, text: "200.000€" },
          { value: 300000, text: "300.000€" },
          { value: 400000, text: "400.000€" },
          { value: 500000, text: "500.000€" },
          { value: 1000000, text: "1.000.000€" },
          { value: 5000000, text: "5.000.000€" }
        ],
        maxValues: [
          { value: 10000000, text: "Precio Máximo" },
          { value: 100000, text: "100.000€" },
          { value: 200000, text: "200.000€" },
          { value: 300000, text: "300.000€" },
          { value: 400000, text: "400.000€" },
          { value: 500000, text: "500.000€" },
          { value: 1000000, text: "1.000.000€" },
          { value: 5000000, text: "5.000.000€" }
        ],
        selected: [0, 10000000]
      },
      {
        id: "size",
        name: "Tamaño",
        type: "range",
        minValues: [
          { value: 0, text: "Tamaño Mínimo" },
          { value: 20, text: "20 m2" },
          { value: 60, text: "60 m2" },
          { value: 100, text: "100 m2" },
          { value: 150, text: "150 m2" },
          { value: 250, text: "250 m2" },
          { value: 500, text: "500 m2" }
        ],
        maxValues: [
          { value: 2000, text: "Tamaño Máximo" },
          { value: 60, text: "60 m2" },
          { value: 100, text: "100 m2" },
          { value: 150, text: "150 m2" },
          { value: 250, text: "250 m2" },
          { value: 500, text: "500 m2" },
          { value: 1000, text: "1.000 m2" },
          { value: 1500, text: "1.500 m2" }
        ],
        selected: [0, 2000]
      },
      {
        id: "rooms",
        name: "Habitaciones",
        type: "range",
        minValues: [
          { value: 0, text: "Hab Mínimo" },
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" }
        ],
        maxValues: [
          { value: 20, text: "Hab Máximo" },
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
          { value: 10, text: "10" }
        ],
        selected: [0, 20]
      },
      {
        id: "bathrooms",
        name: "Baños",
        type: "range",
        minValues: [
          { value: 0, text: "Baños Mínimo" },
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" }
        ],
        maxValues: [
          { value: 20, text: "Baños Máximo" },
          { value: 1, text: "1" },
          { value: 2, text: "2" },
          { value: 3, text: "3" },
          { value: 4, text: "4" },
          { value: 5, text: "5" },
          { value: 10, text: "10" }
        ],
        selected: [0, 20]
      }
    ],
    showFilters: false,
    loading: false,
    apartments: []
  };

  // ASYNC AJAX calls
  searchApartmentsForCity = word => {
    // prevent search if loading
    if (this.state.loading) return;

    // set loading
    this.setState({ loading: true, searchHelperList: [] });

    // fetch
    // start async search
    axios
      .get("/apartments/search/" + encodeURI(word))
      .then(response => {
        this.setState({
          apartments: response.data,
          loading: false,
          firstSearch: true
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ apartments: [], loading: false });
      });
  };

  searchCitiesNaemsStartingWith = word => {
    // prevent search if loading
    if (this.state.loading) return;

    // start async search
    axios
      .get("/cities/search/" + encodeURI(word))
      .then(response => {
        this.setState({ searchHelperList: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Search Form Handlers
  searchFieldChangedHandler = event => {
    // get the new value (left trimed)
    const newValue = event.target.value.replace(/^\s+/, "");

    // search async for cities names if length is 2
    if (newValue.length === 2) {
      this.searchCitiesNaemsStartingWith(newValue);

      // update the new value
      this.setState({ searchField: newValue });
    } else if (newValue.length < 2) {
      // update value and clean text box helper
      this.setState({ searchField: newValue, searchHelperList: [] });
    } else {
      // only update value
      this.setState({ searchField: newValue });
    }
  };

  searchFieldSubmitHandler = event => {
    event.preventDefault();

    // prevent if no city is writen
    if (this.state.searchField.trim().length === 0) return;

    // start searching for new apartments
    const word = this.state.searchField;
    this.searchApartmentsForCity(word);
  };

  selectFromHelperHandler = word => {
    // set the new value
    this.setState({ searchField: word });

    // start searching for new apartments
    this.searchApartmentsForCity(word);
  };

  // filters Handlers
  filtersChangedHandler = (event, filterName, type) => {
    // get the new value
    const newValue = parseInt(event.target.value);

    // get the key from the filters
    const filterKey = this.state.filters.findIndex(
      filter => filter.name === filterName
    );

    // create a new filter state from tha last one
    const newFilters = [...this.state.filters];

    // update the current filter
    newFilters[filterKey].selected = [...newFilters[filterKey].selected];
    if (type === "min") {
      newFilters[filterKey].selected[0] = newValue;
    } else if (type === "max") {
      newFilters[filterKey].selected[1] = newValue;
    }

    // set the new state
    this.setState({ filters: newFilters });
  };

  toggleFiltersHandler = () => {
    this.setState(prevState => {
      return { showFilters: !prevState.showFilters };
    });
  };

  render() {
    return (
      <div className={styles.SearchApartments}>
        <SearchApartmentsForm
          searchField={this.state.searchField}
          searchFieldChanged={this.searchFieldChangedHandler}
          searchFieldSubmit={this.searchFieldSubmitHandler}
          searchHelperList={this.state.searchHelperList}
          selectFromHelper={this.selectFromHelperHandler}
          loading={this.state.loading}
          filtersChanged={this.filtersChangedHandler}
          filters={this.state.filters}
          toggleFilters={this.toggleFiltersHandler}
          showFilters={this.state.showFilters}
        />
        <ApartmentsList
          apartments={this.state.apartments}
          filters={this.state.filters}
          firstSearch={this.state.firstSearch}
        />
      </div>
    );
  }
}

export default SearchApartments;
