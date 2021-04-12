import {SAVE_PRODUCTS} from "../actions/saveProductsAction";
import {MODIFY_PRODUCT} from "../actions/modifyProductAction";
  
  const initialState = {
    products:{}
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_PRODUCTS:
        return {
          ...state,
          products: action.payload,
       
        };
      case MODIFY_PRODUCT:
        let productsModified = state.products
       for(let key in state.products){
         if(Number(key) === Number(action.payload.id)){
            productsModified[key]=action.payload.data
         }
       }
        return {
          ...state,
          products: productsModified
       
        }; 
      default:
        return state;
    }
  };
  
  export default reducer;
  
  // return state.map((todo) =>
  // todo.id === action.payload ? {...todo, status:"InProgress"} : todo
  // );
  