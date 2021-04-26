import { SET_QUANTITY_ORDERS_CARD_BACKEND,REMOVE_ITEM } from '../actions/setQuantityOrdersCardBackend';

const initialState = {
    ordersInBacked: 0
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_QUANTITY_ORDERS_CARD_BACKEND:
            return {...state, ordersInBacked:action.payload}
        case REMOVE_ITEM:
            return {...state, ordersInBacked:state.ordersInBacked-1}
        default:
            return {...state}
    }

}

export default reducer