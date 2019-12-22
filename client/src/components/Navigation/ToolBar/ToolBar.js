import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import Logo from "../../Logo/Logo";

import styles from "./ToolBar.module.css";

const ToolBar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle toggle={props.toggleSideDrawer} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default ToolBar;
