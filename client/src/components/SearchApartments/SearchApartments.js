import React from "react";
import styles from "./SearchApartments.module.css";
import PropTypes from "prop-types";

const SearchApartments = props => {
  return (
    <div className={styles.SearchApartments}>
      <div>SEARCH</div>
      <div>FILTERS</div>
    </div>
  );
};

SearchApartments.propTypes = {
  searchFieldChanged: PropTypes.func.isRequired,
  filtersChanged: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
  searchHelperList: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
};

export default SearchApartments;
