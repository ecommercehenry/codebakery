export const SET_QUANTITY_ORDERS_CARD_BACKEND = "SET_QUANTITY_ORDERS_CARD_BACKEND";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const setQuantityOrdersCardBackend = (quantity) => {
  return {
    type: SET_QUANTITY_ORDERS_CARD_BACKEND,
    payload: quantity,
  };
};

export const removeItem = () => {
  return {
    type: REMOVE_ITEM
  };
};
