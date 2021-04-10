export const GET_ALL_PRODUCTS= 'GET_ALL_PRODUCTS';

export const getAllProducts = (productos) => {

    return {type: GET_ALL_PRODUCTS, payload: productos}

}

