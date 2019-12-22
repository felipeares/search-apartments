import React from "react";

import logoImage from "../../assets/images/logo.png";

import styles from "./Logo.module.css";

const logo = props => (
  <div className={styles.Logo} style={{ height: props.height }}>
    <img src={logoImage} alt="logo" />
  </div>
);

export default logo;
