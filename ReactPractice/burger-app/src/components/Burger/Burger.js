import React from 'react';

import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //* map reduce function for props.ingredients

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // const temp = [...Array(props.ingredients[igKey])];
            // console.log(temp);
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey+i} type={igKey}/>
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
    console.log('[Burger.js]',transformedIngredients);
    
    if(transformedIngredients.length === 0){
        transformedIngredients = (<p> Please start adding ingredient </p>);
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;