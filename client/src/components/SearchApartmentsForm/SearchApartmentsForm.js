import React from "react";
import styles from "./SearchApartmentsForm.module.css";
import PropTypes from "prop-types";

import Spinner from "../UI/Spinner/Spinner";

const SearchApartmentsForm = props => {
  // generate a helper box with cities so the user can pick one
  // will appear when the searchHelperList is non empty
  // on item ckicked should select the word clicked
  let helperList = "";
  if (props.searchHelperList.length > 0) {
    helperList = (
      <ul className={styles.searchHelperList}>
        {props.searchHelperList.map(word => {
          return (
            <li onClick={() => props.selectFromHelper(word)} key={word}>
              {word}
            </li>
          );
        })}
      </ul>
    );
  }

  // display filters depending on the showFilters prop
  let filters = "";
  if (props.showFilters) {
    filters = (
      <ul className={styles.FiltersList}>
        {props.filters.map(filter => (
          <li key={filter.name}>
            <h3>{filter.name}</h3>
            <select
              onChange={event => {
                props.filtersChanged(event, filter.name, "min");
              }}
            >
              {filter.minValues.map(({ value, text }) => (
                <option key={text} value={value}>
                  {text}
                </option>
              ))}
            </select>
            <select
              onChange={event => {
                props.filtersChanged(event, filter.name, "max");
              }}
            >
              {filter.maxValues.map(({ value, text }) => (
                <option key={text} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.SearchApartmentsForm}>
      <form className={styles.SearchForm}>
        <input value={props.searchField} onChange={props.searchFieldChanged} />
        <button onClick={props.searchFieldSubmit}>
          {props.loading ? <Spinner /> : "OK"}
        </button>
      </form>
      {helperList}

      <div className={styles.Filters}>
        {filters}
        <button className={styles.ToggleButton} onClick={props.toggleFilters}>
          {props.showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
        </button>
      </div>
    </div>
  );
};

SearchApartmentsForm.propTypes = {
  searchFieldChanged: PropTypes.func.isRequired,
  searchHelperList: PropTypes.array.isRequired,
  selectFromHelper: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
  searchFieldSubmit: PropTypes.func.isRequired,

  loading: PropTypes.bool.isRequired,

  filters: PropTypes.array.isRequired,
  filtersChanged: PropTypes.func.isRequired,
  toggleFilters: PropTypes.func.isRequired,
  showFilters: PropTypes.bool.isRequired
};

export default SearchApartmentsForm;
