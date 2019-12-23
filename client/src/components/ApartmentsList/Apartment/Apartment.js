import React from "react";
import PropTypes from "prop-types";
import styles from "./Apartment.module.css";

const Apartment = props => (
  <li className={styles.Apartment}>
    <img alt={props.title} src={props.image} />
    <label>{props.price.toLocaleString("es-ES")} €</label>
    <p>{props.title}</p>
    <ul>
      <li>{props.size} m²</li>
      <li>|</li>
      <li>{props.rooms} habs.</li>
      <li>|</li>
      <li>{props.bathrooms} baños</li>
    </ul>
  </li>
);

Apartment.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default Apartment;
