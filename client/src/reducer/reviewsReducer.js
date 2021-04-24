import { ADD_REVIEWS, PRODUCT_REVIEW } from "../actions/reviews"; 

const initialState = {
    reviews: [],
    productReviews: {}
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_REVIEWS:
        return {
          ...state,
          reviews: action.payload,
        }
        case PRODUCT_REVIEW: 
          return {
            ...state, 
            productReviews: action.payload
          }
      default:
        return state;
    }
  };
  
  export default reviewsReducer;