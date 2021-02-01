import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Buttom from '../../Ui/Button/Button';

class OrderSummary extends Component {
    
    componentDidUpdate(){
        // console.log('[OrderSummary.js] component updated');
    }
    
    render() {

        const ingredientsSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{igKey}</span>
                            :{this.props.ingredients[igKey]}
            </li>);
        })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Buttom btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Buttom>
                <Buttom btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Buttom>
            </Aux>
        );
    }
}

//*functional component
/** 
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{igKey}</span>
                            : {props.ingredients[igKey]}
            </li>);
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Buttom btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Buttom>
            <Buttom btnType="Success" clicked={purchaseContinued}>CONTINUE</Buttom>
        </Aux>
    );
};
*/
export default OrderSummary;