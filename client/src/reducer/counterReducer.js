import { SET_QUANTITY_ORDERS_CARD_BACKEND } from '../actions/setQuantityOrdersCardBackend';

const initialState = {
    ordersInBacked: 0
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_QUANTITY_ORDERS_CARD_BACKEND:
            //console.log("iofjweofjweoij")
            return {...state, ordersInBacked:action.payload}
        default:
            return {...state}
    }

}

export default reducer