export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const REMOVE_ALL = "REMOVE_ALL";
export const CHANGE_QUANTITY = "CHANGE_QUANTITY";

export const addProductToCart = (args) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: args
    };
};

export const removeProductFromCart = (id) => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: id
    };
};

export const removeAll = () => {
    return {
        type: REMOVE_ALL
    };
};

export const changeQuantity = (id,newQuantity) => {
    return {
        type: CHANGE_QUANTITY,
        payload: {id,newQuantity}
    };
};