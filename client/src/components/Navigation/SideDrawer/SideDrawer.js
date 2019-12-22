import React from "react";

import styles from "./SideDrawer.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const SideDrawer = props => {
  const attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.show) attachedClasses[1] = styles.Open;

  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.closeSideDrawer} />
      <div
        className={attachedClasses.join(" ")}
        onClick={props.closeSideDrawer}
      >
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
