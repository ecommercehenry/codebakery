export const MODIFY_PRODUCT = "MODIFY_PRODUCT";


export const modifyProduct = (id, data) => {
  return {
    type: MODIFY_PRODUCT,
    payload: {id,data},
  };
};

