export const GET_ALL_PRODUCTS= 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'; 


export const getAllProducts = (productos) => {

    return {type: GET_ALL_PRODUCTS, payload: productos}

}

export const fetchByName = (product) => {

    return {
        type: GET_PRODUCT_BY_NAME,
        payload: product}
    
}

