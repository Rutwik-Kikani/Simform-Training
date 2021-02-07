import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/Ui/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Ui/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionCreators from '../../store/actions/index'


//4...
class BurgerBuillder extends Component {
    constructor(props) {
        super(props);
        this.state ={
            purchasable: false,
        }
    }

    componentDidMount(){
        //5...
        this.props.onInitIngredients();
    }

    //* updatePurchaseState(ingredients){....} also works fine!! //
    //* you are not using 'this' inside this method so, you can use both syntax
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
        // this.setState({purchasable: sum > 0}) ;       
        return sum>0;
    }

    
    //2...

    //3...
    
    //*purchaseHandler(){...} is not worked as updatePerchaseState why !! \
    //* using 'this' inside the method that's why there this value is undefind. 
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    //1...
    purchaseContinueHandler = () => {
        //6...
        this.props.onInitPurchase();
        this.props.history.push({pathname:'/checkout',});
    }

    render() {
        const disabledInfo = {
            ...this.props.ings
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        } //create this kind of {meat: true, salad: false,...}

        let orderSummary = null;
        let burger = this.props.error ? <p style={{textAlign:'center'}}>Ingredients can't be loaded!</p> : <Spinner />;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings}></Burger>
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled = {disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price}/> 
                </Aux>
            );
            orderSummary = <OrderSummary 
                ingredients={this.props.ings}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                price={this.props.price}/>;
        }
        // if(this.state.loading){
        //     orderSummary = <Spinner/>
        // }
        return (
            <Aux>   
                <Model show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                   {orderSummary}     
                </Model>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch(actionCreators.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actionCreators.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actionCreators.initIngredients()),
        onInitPurchase: () => dispatch(actionCreators.purchaseInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuillder,axios));

/*---------------------------------------------------------------------------------------------------------------------------------------------*/
/**
 * 1.
 * purchaseContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, 
            customer:{
                name:'Rutwik',
                address:{
                    street: 'TestStreet1',
                    zipcode:'364002',
                    country:'india'
                },
                email:'dummydummy@gmail.com',
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false, purchasing: false })
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            });
    }

    2.
    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount+1    
    //     const updatedIngredient = {
    //         ...this.state.ingredients,
    //     };
    //     updatedIngredient[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
    //     this.updatePurchaseState(updatedIngredient);
    // }

    3.
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount <= 0){
    //         return;
    //     }
    //     const updatedCount = oldCount-1    
    //     const updatedIngredient = {
    //         ...this.state.ingredients,
    //     };
    //     updatedIngredient[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICE[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredient});
    //     this.updatePurchaseState(updatedIngredient);
    // }

    4.
//     const INGREDIENT_PRICE = {
//     salad:0.5,
//     cheese:0.4,
//     meat:1.3,
//     bacon:0.7
// };
    
    5.
    // console.log(this.props);
        // axios.get('/ingredients.json')
        //     .then(res => {
        //         this.setState({ ingredients: res.data });
        //     }).catch( err => {
        //         this.setState({ error : true });
        //     });

    6.
    // let queryParams = [];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ings[i]));
        // }
        // queryParams.push('price='+this.props.price);
        // const queryString= queryParams.join('&');
        
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search:'?'+queryString,
        // });

    7.

    this.state ={
            // ingredients:null,
            // totalPrice:4,
            // purchasable: false,
            // purchasing:false,
            // loading: false,
            // error: false,
        }
 *  
 */