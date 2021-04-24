export const ADD_CATEGORY_TO_PRODUCT = "ADD_CATEGORY_TO_PRODUCT";


export const addCategoryToProductAction = (id, category) => {
    
  return {
    type: ADD_CATEGORY_TO_PRODUCT,
    payload: {id,category},
  };
};

