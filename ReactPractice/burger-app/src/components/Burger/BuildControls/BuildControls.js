import React from 'react';

import styles from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {lable:'Salad',type:'salad'},
    {lable:'Bacon',type:'bacon'},
    {lable:'Cheese',type:'cheese'},
    {lable:'Meat',type:'meat'},
];


const  buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p>
                <strong>Current Price: {props.price.toFixed(2)}</strong>
            </p>
            {controls.map(ctrl => {
               return <BuildControl 
                        key={ctrl.lable} 
                        lable={ctrl.lable}
                        added={() => props.ingredientAdded(ctrl.type)}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}/>
            })}
            <p>
                <button className={styles.OrderButton}
                        disabled={!props.purchasable}>ORDER NOW</button>
            </p>
        </div>
    );
};

export default buildControls;