import React, { Component } from 'react'

import Aux from '../../hoc/Auxiliary';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/Ui/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};
export default class BurgerBuillder extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice:4,
            purchasable: false,
            purchasing:false,
        }
    }

    //* updatePurchaseState(ingredients){....} also works fine!! //
    //* you are not using this inside this method so, you can use both syntax
    //* try to print out 'this' value in both syntax and look inside it see the difference.
    updatePurchaseState(ingredients){
        // console.log(this)
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0);
        this.setState({purchasable: sum > 0}) ;       
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1    
        const updatedIngredient = {
            ...this.state.ingredients,
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount-1    
        const updatedIngredient = {
            ...this.state.ingredients,
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    //*purchaseHandler(){...} is not worked as updatePerchaseState why !! \
    //* using 'this' inside the method that's why there this value is undefind. 
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        alert('You Continued purchase!');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        } //create this kind of {meat: true, salad: false,...}

        return (
            <Aux>   
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}/>
                </Model>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        )
    }
}
