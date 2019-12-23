import React from "react";
import styles from "./ApartmentsList.module.css";
import PropTypes from "prop-types";
import Apartment from "./Apartment/Apartment";

const ApartmentsList = props => {
  // build a filter object to filter the apartments
  // ex: {Precio: [0, 100000], Tamaño: [100, 200], ...}
  const fo = {};
  props.filters.forEach(filter => {
    fo[filter.id] = filter.selected;
  });

  // map and filter the apartments list
  const apartments = props.apartments
    .filter(a => {
      for (let filter_key of Object.keys(fo)) {
        if (
          a[filter_key] < fo[filter_key][0] ||
          a[filter_key] > fo[filter_key][1]
        ) {
          console.log(
            a[filter_key] +
              " < " +
              fo[filter_key][0] +
              " || " +
              a[filter_key] +
              " > " +
              fo[filter_key][1]
          );
          return false;
        }
      }
      return true;
    })
    .map(a => {
      return (
        <Apartment
          key={a.id}
          title={a.title}
          price={a.price}
          size={a.size}
          rooms={a.rooms}
          bathrooms={a.bathrooms}
          image={a.image}
        />
      );
    });
  console.log(apartments);

  return <ul className={styles.ApartmentsList}>{apartments}</ul>;
};

ApartmentsList.propTypes = {
  apartments: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired
};

export default ApartmentsList;
