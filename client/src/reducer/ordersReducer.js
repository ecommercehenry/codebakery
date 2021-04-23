import {
  SAVE_ORDERS,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  FILTER_ORDER,
  CHANGE_STATUS,
  FILTER_USERS,
  CLEAR_FILTER,
  CHANGE_PAGE,
  filterOrders,
} from "../actions/index";

const initialState = {
  orders: [],
  filterOrders: [],
  search: false,
  idError: 0,
  status: false,
  numPage: 0,
  renderPage:[],
};

const pagination= (modifyState) => {
  //va a preguntar si hay algo en filter orders
  //console.log ('modifystate', modifyState);
  if (modifyState.filterOrders.length > 0) {
    return modifyState?.filterOrders?.slice(modifyState.numPage, modifyState.numPage+10)
  } else {
    return modifyState?.orders?.slice(modifyState.numPage, modifyState.numPage+10)
  }

}

const reducer = (state = initialState, action) => {
  // let ordersModified = state.orders

  switch (action.type) {
    case SAVE_ORDERS:
      const data= action.payload?.map((o) => {
        let filter = {
          id: o.id,
          userId: o.userId,
          date: o.creation,
          price: o.lineal_order.map((u) => u).map((g) => g.price),
          cancelled: o.cancelled,
        };
        return filter;
      })
     // console.log('data', data);
      return {
        ...state,
        orders: data,
        renderPage: pagination({...state, orders:data}) 
      };

    case FILTER_ORDER:
      let searchOrder = state.orders.filter(
        //tuve que cambiar para emparejar con filtros //@ Lau
        (o) => o.id === Number(action.payload)
      );
     // console.log(searchOrder);
      if (searchOrder.length) {
        return {
          ...state,
          filterOrders: searchOrder,
          search: true,
        };
      } else {
        return {
          ...state,
          filterOrders: [],
          idError: action.payload,
          status: true,
        };
      }

    case FILTER_USERS:
      let searchUsers = state.orders.filter(
        //tuve que cambiar para emparejar con filtros //@ Lau
        (u) => u.userId === Number(action.payload)
      );
      if (searchUsers.length) {
        return {
          ...state,
          filterOrders: searchUsers,
          search: true,
        };
      } else {
        return {
          ...state,
          filterOrders: [],
          idError: action.payload,
          status: true,
        };
      }

    case PRICE_LOW_TO_HIGH:
      //getAllOrders.orders.map(e => e).map(u=> u.lineal_order).map(g => g.map(h => h.price))
      //console.log('stateorderSKLDMLSMD', state.orders)
      let filterlow;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //console.log('stateorder', state.orders)
        filterlow = state.filterOrders.sort(function (a, b) {
          if (a.price[0] > b.price[0]) {
            return 1;
          }
          if (a.price[0] < b.price[0]) {
            return -1;
          }
          return 0;
        });
      } else {
        filterlow = state.orders.sort(function (a, b) {
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
        filterOrders: filterlow,
        search: true,
      };

    case PRICE_HIGH_TO_LOW:
      let filterhigh;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //console.log('stateorder', state.orders)
        filterhigh = state.filterOrders.sort(function (a, b) {
          if (a.price[0] < b.price[0]) {
            return 1;
          }
          if (a.price[0] > b.price[0]) {
            return -1;
          }
          return 0;
        });
      } else {
        filterhigh = state.orders.sort(function (a, b) {
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
        filterOrders: filterhigh,
        search: true,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filterOrders: [],
        search: false,
        status: false,
      };

    case CHANGE_PAGE:
      const modifyState = {...state, numPage: action.payload}

      return {
        ...state,
        renderPage: pagination(modifyState),
        numPage: action.payload,
       
      };

    default:
      return state;
  }
};

export default reducer;
