import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initalState = {
    orders: [],
    loading: false,
    purchased: false,
}

const reducer = (state = initalState ,action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});
            //1.
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state,{loading:true});
            //2.
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, {id: action.orderId});
            return updateObject(state, {
                loading: false,
                orders: state.orders.concat(newOrder),
                purchased: true,
            })
            //3.
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false, })
            //4.
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, { loading: true })
            //5.
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                orders: action.orders,
                loading: false,
            })
            // 6.
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false, })
            //7.
        default:
            return state;
    }
}

export default reducer;

/**************************************************************************** 
 * 1.
 * return{
                ...state,
                purchased: false,
            }

    2.
    return{
                ...state,
                loading: true,
            }
    3.
    // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId,
            // }
            // return{
            //     ...state,
            //     loading: false,
            //     orders: state.orders.concat(newOrder),
            //     purchased: true,
            // }
    4.
    return{
                ...state,
                loading: false,
            }
    5.
    return{
                ...state,
                loading: true,
            }
    6.
    return{
            //     ...state,
            //     orders: action.orders,
            //     loading: false,
            // }
    7.
    return{
                ...state,
                loading: false,
            }
 * 
*/
