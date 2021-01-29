import React, { Component } from 'react';

import styles from './Layout.module.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
class Layout extends Component{
    state = {
        showSideDrawer: false,
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return{showSideDrawer:  !this.state.showSideDrawer};
        });
    }
    render(){
        return(
            <Aux>
            {/* <div> Toolbar, SideDrawer, Backdrop</div> */}
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <Sidedrawer closed={this.sideDrawerClosedHandler}
                        open={this.state.showSideDrawer}/>
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
    
        );
    }
} 

export default Layout;