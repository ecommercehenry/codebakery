import {getAllOrders} from "../actions";

  const initialState = {
    orders:[],
    filterOrders:[],
    search: false,
  };

  const reducer = (state = initialState, action) => {
    // let ordersModified = state.orders
    
    switch (action.type) {
      case "SAVE_ORDERS":
        return {
          ...state,
          orders: action.payload
       
        };
    //   case MODIFY_ORDER:
    //    for(let key in state.orders){
    //      if(Number(key) === Number(action.payload.id)){
    //         productsModified[key]=action.payload.data
    //      }
    //    }
    //     return {
    //       ...state,
    //       orders: productsModified
       
    //     }; 
      
      default:
        return state;
    }
  };
  
  export default reducer;
  
  
  