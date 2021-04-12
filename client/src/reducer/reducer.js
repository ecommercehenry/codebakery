import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GUARDAR_PRODUCTOS,
} from "../actions";
//import allProducts from "../Apollo/queries/allProducts";

const initialState = {
  stateproducts: {},
  stateSearch: {},
  filterProduct: "",
  allProduct: [],
  search: false, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:

    if(action.payload && state.allProduct.length === 0){
        console.log('hola')
        return  {
            ...state,
            stateproducts: action.payload, 
            allProduct: action.payload,
            search: false 
        }
    }else{
        console.log('chao', action.payload)
        return{
            ...state,
            stateproducts: action.payload,
            search: false
        }
    }

    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        filterProduct: action.payload,
        search: true
      };

    case GUARDAR_PRODUCTOS:
      return {
        ...state,
        stateSearch: action.payload,
     
      };

    default:
      console.log(state);
      return state;
  }
};

export default reducer;

// return state.map((todo) =>
// todo.id === action.payload ? {...todo, status:"InProgress"} : todo
// );
