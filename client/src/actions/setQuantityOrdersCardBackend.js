export const SET_QUANTITY_ORDERS_CARD_BACKEND = "SET_QUANTITY_ORDERS_CARD_BACKEND";

export const setQuantityOrdersCardBackend = (quantity) => {
  return {
    type: SET_QUANTITY_ORDERS_CARD_BACKEND,
    payload: quantity,
  };
};

