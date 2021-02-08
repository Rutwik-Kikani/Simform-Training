import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients:null,
    totalPrice:4,
    error: false,
    building: false,
}

const INGREDIENT_PRICE = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
};

const addIngredient = (state, action) => {const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName]+1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = { 
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice+INGREDIENT_PRICE[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName]-1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = { 
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice+INGREDIENT_PRICE[action.ingredientName],
        building: true,
    }
    return updateObject(state, updatedState);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        },
        totalPrice:4,
        error:false,
        building:false,
    });
}

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error:true});
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
            //1.
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
            //2.
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            // console.log('[resucer.js] default called');
            return state;
    }
}

export default reducer;

/******************************************************************************* 
 * 1.
  // return{
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
            //     },
            //     totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
            // }
   2.
   return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
            }     
    3.
    return{
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice:4,
                error:false,
            }
    4.
    return{
            //     ...state,
            //     error: true,
            // }
 * 
 * 
*/