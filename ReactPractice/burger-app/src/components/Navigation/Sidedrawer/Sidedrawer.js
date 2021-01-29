import React from "react";

import styles from "./Sidedrawer.module.css";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../Ui/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = (props) => {
    let attechedStyles = [styles.Sidedrawer, styles.Close];
    if (props.open) {
        attechedStyles = [styles.Sidedrawer, styles.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attechedStyles.join(" ")}>
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

export default sideDrawer;
