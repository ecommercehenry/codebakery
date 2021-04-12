import {SAVE_PRODUCTS} from "../actions/saveProductsAction";
  
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
  
      default:
        return state;
    }
  };
  
  export default reducer;
  
  // return state.map((todo) =>
  // todo.id === action.payload ? {...todo, status:"InProgress"} : todo
  // );
  