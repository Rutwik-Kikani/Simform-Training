import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => {
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:ingName,
    }
}

export const removeIngredient = (ingName) => {
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:ingName,
    }
}

export const setIngregients = (ingredients) => {
    return{
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    }
}
export const fetchIngredientsFail = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}
export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngregients(res.data));
            }).catch( err => {
                dispatch(fetchIngredientsFail());
            });
    
    }
}