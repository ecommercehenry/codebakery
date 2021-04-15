export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GUARDAR_PRODUCTOS = "GUARDAR_PRODUCTOS";
export const SET_SEARCH = 'SET_SEARCH'; 
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART";

export const setSearch = () => {
  return {
    type: SET_SEARCH,
    payload: false
  }
}

export const guardarProductos = (data) => {
  return {
    type: GUARDAR_PRODUCTOS,
    payload: data,
  };
};

export const getAllProducts = (productos) => {
  return { 
      type: GET_ALL_PRODUCTS, 
      payload: productos 
    };
};

export const fetchByName = (product) => {
  return {
    type: GET_PRODUCT_BY_NAME,
    payload: product,
  };
};

export const addProductToCart = (args) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: args
  };
};

export const removeProductFromCart = (id) => {
  return {
    type: REMOVE_PRODUCT_TO_CART,
    payload: id
  };
};