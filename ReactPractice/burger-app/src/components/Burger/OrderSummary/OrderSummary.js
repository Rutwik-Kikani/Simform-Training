import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Buttom from '../../Ui/Button/Button'
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform:'capitalize', fontWeight:'bold'}}>{ igKey }</span>
                            :{props.ingredients[igKey]}
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
            <Buttom btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Buttom>
        </Aux>
    );
};

export default orderSummary;