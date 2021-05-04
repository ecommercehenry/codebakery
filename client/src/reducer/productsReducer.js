import {SAVE_PRODUCTS} from "../actions/saveProductsAction";
import {MODIFY_PRODUCT} from "../actions/modifyProductAction";
import { ADD_CATEGORY_TO_PRODUCT } from "../actions/addCategoryToProductAction";
  
  const initialState = {
    products: {}
  };
  const reducer = (state = initialState, action) => {
    let productsModified = state.products
    switch (action.type) {
      case SAVE_PRODUCTS:
        return {
          ...state,
          products: action.payload,
       
        };
      case MODIFY_PRODUCT:
       for(let key in state.products){
         if(Number(key) === Number(action.payload.id)){
            productsModified[key]=action.payload.data 
         }
       }
        return {
          ...state,
          products: productsModified
       
        }; 
      case ADD_CATEGORY_TO_PRODUCT:
        for(let key in state.products){
          if(Number(key) === Number(action.payload.id)){
             productsModified[key]={...productsModified[key], categories:[...productsModified[key].categories, action.payload.category]}
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
  