export const ADD_REVIEWS = "ADD_REVIEWS";
export const PRODUCT_REVIEW = "PRODUCT_REVIEW" 

export const addReview = (args) => {
    return {
        type: ADD_REVIEWS,
        payload: args
    };
};
export const productReview = (id) => {
    return {
        type: PRODUCT_REVIEW, 
        payload: id
    }
}