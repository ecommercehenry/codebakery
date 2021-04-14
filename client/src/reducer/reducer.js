import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GUARDAR_PRODUCTOS,
  SET_SEARCH,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART
} from "../actions";
//import allProducts from "../Apollo/queries/allProducts";

const initialState = {
  stateproducts: {},
  stateSearch: {},
  filterProduct: "",
  allProduct: [],
  search: false,
  itemsToCart:[],
};
// SET_SEARCH
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return  {...state, search: false};
    case GET_ALL_PRODUCTS:

    if(action.payload && state.allProduct.length === 0){
        return  {
            ...state,
            stateproducts: action.payload, 
            allProduct: action.payload,
            search: false 
        }
    }else{
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

    case ADD_PRODUCT_TO_CART:
      let id = action.payload;
      let cart = state.itemsToCart;
      
      if(typeof id !== 'number'){
        cart.push(id)
      }else{
        if(cart.length===0){
            cart.push({id:id,quantity:1})   
        }else{
          let found = cart.find(obj=>obj.id===id)
          if(found === undefined){
              cart.push({id:id,quantity:1})
          }else{
              found.quantity++
          }
        }
      }
      return {...state,itemsToCart:cart}
      //return state.itemsToCart=cart;

    case REMOVE_PRODUCT_TO_CART:
      return {...state,itemsToCart:state.itemsToCart.filter(elem=>elem.id !== action.payload)}
      //return  {...state, itemsToCart: false};

    default:
      return state;
  }
};

export default reducer;

// return state.map((todo) =>
// todo.id === action.payload ? {...todo, status:"InProgress"} : todo
// );
