export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GUARDAR_PRODUCTOS = "GUARDAR_PRODUCTOS";
export const SET_SEARCH = "SET_SEARCH";
export const FILTER_ORDER = "FILTER_ORDER";
export const FILTER_USERS = "FILTER_USERS";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const SAVE_ORDERS = "SAVE_ORDERS";
export const PRICE_LOW_TO_HIGH = "PRICE_LOW_TO_HIGH";
export const PRICE_HIGH_TO_LOW = "PRICE_HIGH_TO_LOW";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CHECKBOX_CHANGE = "CHECKBOX_CHANGE";
export const CLEAR_CHECKBOXES = "CLEAR_CHECKBOXES";

export const setSearch = () => {
  return {
    type: SET_SEARCH,
    payload: false,
  };
};

export const guardarProductos = (data) => {
  return {
    type: GUARDAR_PRODUCTOS,
    payload: data,
  };
};

export const getAllProducts = (productos) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: productos,
  };
};

export const fetchByName = (product) => {
  return {
    type: GET_PRODUCT_BY_NAME,
    payload: product,
  };
};

export const getAllOrders = (ordenes) => {
  return {
    type: GET_ALL_ORDERS,
    payload: ordenes,
  };
};

export const filterOrders = (orderId) => {
  return {
    type: FILTER_ORDER,
    payload: orderId,
  };
};

export const filterUsers = (usersId) => {
  return {
    type: FILTER_USERS,
    payload: usersId,
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};

export const saveOrders = (ordenes) => {
  return {
    type: SAVE_ORDERS,
    payload: ordenes,
  };
};

export const pricetolow = () => {
  return {
    type: PRICE_LOW_TO_HIGH,
  };
};

export const pricetohigh = () => {
  return {
    type: PRICE_HIGH_TO_LOW,
  };
};

export const changedStatus = () => {
  return {
    type: CHANGE_STATUS,
  };
};

export const checkboxChange = (id) => {
  return {
    type: CHECKBOX_CHANGE,
    payload: id
  }
}

export const clearCheckboxes = () => {
  return { type : CLEAR_CHECKBOXES }
}