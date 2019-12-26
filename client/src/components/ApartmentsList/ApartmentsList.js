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
          return false;
        }
      }
      return true;
    })
    .map(a => {
      return (
        <Apartment
          key={a._id}
          title={a.title}
          price={a.price}
          size={a.size}
          rooms={a.rooms}
          bathrooms={a.bathrooms}
          image={a.image}
        />
      );
    });

  // build the search message
  // when no search has been made it should display the welcoming message
  let message = (
    <li className={styles.NoApartmentsMessage}>
      <h2>¡Hola!</h2>
      Busca una ciudad y te mostraremos las propiedades listadas
    </li>
  );
  if (props.firstSearch) {
    message = (
      <li className={styles.ResultsMessage}>
        Se encontraron <b>{apartments.length}</b> resultados
      </li>
    );
  }

  return (
    <ul className={styles.ApartmentsList}>
      {message}
      {apartments}
    </ul>
  );
};

ApartmentsList.propTypes = {
  apartments: PropTypes.array.isRequired,
  filters: PropTypes.array.isRequired,
  firstSearch: PropTypes.bool.isRequired
};

export default ApartmentsList;
