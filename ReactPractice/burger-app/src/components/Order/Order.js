import React from 'react';

import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({ 
            name: ingredientName,
            amount: props.ingredients[ingredientName],
        });
    }

    const ingredientsOutput = ingredients.map(ig => {
        return <span key ={ig.name} style={{textTransform:'capitalize', 
                                            display:'inline-block', 
                                            margin:'0 8px',
                                            border:'1px solid black',
                                            padding:'5px'}}>{ig.name} ({ig.amount}) </span>; 
    })
    return (
        <div className={styles.Order}>
            <p>ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;