import {SAVE_ORDERS, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW} from "../actions/index";

  const initialState = {
    orders:[],
    filterOrders:[],
    search: false,
    sortbyPrice:[],
    sort:false
  };

  const reducer = (state = initialState, action) => {
    // let ordersModified = state.orders
    

    switch (action.type) {
      case SAVE_ORDERS:
        return {
          ...state,
          orders: action.payload
       
        };
        case FILTER_ORDER:
      return {
        ...state,
        filterOrders: state.orders.filter(
          (o) => o.id === Number(action.payload)
        ),
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
    
    case PRICE_LOW_TO_HIGH:

      //getAllOrders.orders.map(e => e).map(u=> u.lineal_order).map(g => g.map(h => h.price))

      //console.log('stateorderSKLDMLSMD', state.orders)
      let filterlow;
      if (state.orders.length>0 && state.filterOrders.length>0){
        //console.log('stateorder', state.orders)
          filterlow=state.filterOrders.orders.map(o => {
              let filter = {
                  id: o.id,
                  userId: o.userId,
                  date:o.creation,
                  price:o.lineal_order.map(u=> u).map(g => g.price),
                  cancelled: o.cancelled
                }
                return filter;
          
          })

        filterlow=filterlow.sort(function (a, b) {
              if (a.price[0] > b.price[0]) {
                return 1;
              }
              if (a.price[0] < b.price[0]) {
                return -1;
              }
              return 0;
            });
      } else {

        filterlow=state.orders.orders.map(o => {
          let filter = {
             id: o.id,
             userId: o.userId,
             date:o.creation,
             price:o.lineal_order.map(u=> u).map(g => g.price),
             cancelled: o.cancelled
           }
           return filter;
         
         })
         filterlow=filterlow.sort(function (a, b) {
           if (a.price[0] > b.price[0]) {
             return 1;
           }
           if (a.price[0] < b.price[0]) {
             return -1;
           }
           return 0;
         });
      }
       
       
        return {
          ...state,
          sortbyPrice:filterlow,
          sort:true
       
        };

        case PRICE_HIGH_TO_LOW:
        
          let filterhigh;
            if (state.orders.length>0 && state.filterOrders.length>0){
              //console.log('stateorder', state.orders)
                filterhigh=state.filterOrders.orders.map(o => {
                    let filter = {
                        id: o.id,
                        userId: o.userId,
                        date:o.creation,
                        price:o.lineal_order.map(u=> u).map(g => g.price),
                        cancelled: o.cancelled
                      }
                      return filter;
                
                })

              filterhigh=filterhigh.sort(function (a, b) {
                    if (a.price[0] < b.price[0]) {
                      return 1;
                    }
                    if (a.price[0] > b.price[0]) {
                      return -1;
                    }
                    return 0;
                  });
            } else {

              filterhigh=state.orders.orders.map(o => {
                let filter = {
                   id: o.id,
                   userId: o.userId,
                   date:o.creation,
                   price:o.lineal_order.map(u=> u).map(g => g.price),
                   cancelled: o.cancelled
                 }
                 return filter;
               
               })
               filterhigh=filterhigh.sort(function (a, b) {
                 if (a.price[0] < b.price[0]) {
                   return 1;
                 }
                 if (a.price[0] > b.price[0]) {
                   return -1;
                 }
                 return 0;
               });
            }
           
            return {
              ...state,
              sortbyPrice:filterhigh,
              sort:true
           
            };
        default:
        return state;
    }
  };
  
  export default reducer;
  
  
  
