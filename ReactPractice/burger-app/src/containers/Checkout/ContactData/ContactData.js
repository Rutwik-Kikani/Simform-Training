import React, { Component } from "react";
import{connect} from 'react-redux';
import axios from '../../../axios-orders';

import Button from "../../../components/Ui/Button/Button";
import Spinner from "../../../components/Ui/Spinner/Spinner";
import Input from '../../../components/Ui/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import * as actionCreators from '../../../store/actions/index';

import styles from "./ContactData.module.css";
class ContactData extends Component {
    state = {
        orderForm:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name',
                },
                value:'',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },        
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street',
                },
                value:'',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            zipcode: {
                elementType:'input',
                elementConfig:{
                    type:'number',
                    placeholder:'ZIP Code',
                },
                value:'',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 6,
                },
                valid: false,
                touched: false,
            },
            country: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country',
                },
                value:'',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Email',
                },
                value:'',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            deliveryMethod:  {
                elementType:'select',
                elementConfig:{
                    options:[
                        {value: 'fastest', displayValue:'Fastest'},
                        {value: 'cheapest', displayValue:'Cheapest'},
                    ]
                },
                value:'fastest',
                validation: {},
                valid: true,
            },
        },
        formIsValid: false,
        // loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        // this.setState({ loading: true });
        const formData = {};

        for(let formEleIdentifier in this.state.orderForm){
            formData[formEleIdentifier] = this.state.orderForm[formEleIdentifier].value
        }
        
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId,
        };

        this.props.onOrderBurger(order, this.props.token);
        //
    };
    
    checkValidity(value, rules){
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value);
        const updatedOrderForm = { 
            ...this.state.orderForm
        }

        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        // console.log(updatedFormElement);

        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        // console.log(formIsValid);
        

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }
        let form = (<form onSubmit={this.orderHandler}>
            {
                formElementsArray.map(formElement => {
                    return (<Input 
                              key={formElement.id}    
                              elementType={formElement.config.elementType}
                              elementConfig={formElement.config.elementConfig}
                              invalid={!formElement.config.valid}
                              shouldValidate={formElement.config.validation}
                              touched={formElement.config.touched}
                              value={formElement.config.value}
                              changed={(event) => this.inputChangedHandler(event, formElement.id)} />)
                })
            }
            <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>
                ORDER
            </Button>
        </form>);

        if(this.props.loading){
            form = <Spinner/>
        }

        return (
            <div className={styles.ContactData}>
                <h4>Enter your data here</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onOrderBurger : (orderData, token) => dispatch(actionCreators.purchaseBurger(orderData, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));


/*----------------------------------------------------*/
/**
 * 1.
 * // axios
        //     .post("/orders.json", order)
        //     .then((res) => {
        //         this.setState({ loading: false });
        //         this.props.history.push('/');
        //     })
        //     .catch((error) => {
        //         this.setState({ loading: false });
        //     });
 */