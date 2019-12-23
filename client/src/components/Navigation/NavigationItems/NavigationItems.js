import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./NavigationItems.module.css";

const navigationItems = () => {
  let navigation = [
    <NavigationItem key="home" link="/">
      Inicio
    </NavigationItem>,
    <NavigationItem key="orders" link="/another">
      Contacto
    </NavigationItem>
  ];

  return <ul className={styles.NavigationItems}>{navigation}</ul>;
};

export default navigationItems;
