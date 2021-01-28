import React from 'react';

import styles from './Sidedrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = () => {
    return (
        <div className={styles.Sidedrawer} >
            <div className={styles.Logo}>
                 <Logo/>    
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>
            
        </div>
    );
};

export default sideDrawer;