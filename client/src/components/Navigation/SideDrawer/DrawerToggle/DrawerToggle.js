import React from "react";

import styles from "./DrawerToggle.module.css";

const DrawerToggle = props => (
  <div className={styles.DrawerToggle} onClick={props.toggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
