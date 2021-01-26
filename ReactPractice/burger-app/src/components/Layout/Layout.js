import React from 'react';

//?import css
import styles from './Layout.module.css';
//?import component
import Aux from '../../hoc/Auxiliary';
const layout = (props) => {
    return(
        <Aux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
        </Aux>
    );
}

export default layout;