import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL,
    CHANGE_QUANTITY
} from '../actions/cartActions'

const initialState = {
    itemsToCart: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT_TO_CART:
            let id = action.payload;
            let cart = state.itemsToCart;

            if(typeof id !== "number") {
                cart.push(id);
            }else{
                if (cart.length === 0) {
                    cart.push({ id: id, quantity: 1 });
                }else{
                    let found = cart.find((obj) => obj.id === id);
                    if (found === undefined) {
                        cart.push({ id: id, quantity: 1 });
                    }else{
                        found.quantity++;
                    }
                }
            }
            return { ...state, itemsToCart: cart };

        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                itemsToCart: state.itemsToCart.filter(
                (elem) => elem.id !== action.payload
                ),
            };
        
        case REMOVE_ALL:
            return { ...state, itemsToCart: []};
            
        case CHANGE_QUANTITY    :
            state.itemsToCart.forEach(item=>{
                if(item.id===action.payload.id){
                    item.quantity=action.payload.newQuantity;
                }
            })
            return {...state};

        default:
            return state;
    }
};

export default reducer;