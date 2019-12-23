import React from "react";
import PropTypes from "prop-types";
import styles from "./Apartment.module.css";

const Apartment = props => (
  <li className={styles.Apartment}>
    <img alt={props.title} src={props.image} />
    <p>{props.title}</p>
    <p>{props.price}</p>
    <p>{props.size}</p>
    <p>{props.rooms}</p>
    <p>{props.bathrooms}</p>
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
