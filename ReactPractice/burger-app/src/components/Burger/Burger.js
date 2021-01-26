import React from 'react';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

import styles from './Burger.module.css';

const burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerBuilder type="bread-top"/>
            <BurgerBuilder type="cheese"/>
            <BurgerBuilder type="meat"/>
            <BurgerBuilder type="bread-bottom"/>
        </div>
    );
};

export default burger;