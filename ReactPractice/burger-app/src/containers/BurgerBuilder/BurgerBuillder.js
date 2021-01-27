import React, { Component } from 'react'

import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';

export default class BurgerBuillder extends Component {
    render() {
        return (
            <Aux>   
                <Burger></Burger>
                
                <div>Burger Controls</div>
            </Aux>
        )
    }
}
