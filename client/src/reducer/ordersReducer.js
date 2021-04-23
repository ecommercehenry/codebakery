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
  CHECKBOX_CHANGE,
  CLEAR_CHECKBOXES,
} from "../actions/index";
const initialState = {
  orders: [],
  filterOrders: [],
  search: false,
  idError: 0,
  status: false,
  numPage: 0,
  renderPage:[],
  filterStatus: [],
  UNPAID: false,
  PAID: false,
  SENT: false,
  RECEIVED: false,
  CANCELLED: false,
  ALL: false,
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

// recibe el estado actual y el checkbox que recien se acaba de cambiar
// debe devolver el arreglo q actualmente se está renderizando siltrado
// según todos los checkboxes
const filterByStatus = (currentState, actualCheck) =>{
  // const
  if(currentState.filterOrders.length > 0){
    return currentState.filterStatus.length > 0 ? 
    currentState.filterOrders.filter((order => currentState.filterStatus.includes(order.status.toUpperCase()))):
    currentState.filterOrders;
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
      let filterlow;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //console.log('stateorder', state.orders)
        filterlow = state.filterOrders.sort(function (a, b) {
          return a.price[0] - b.price[0];
        });
      } else {
        filterlow = state.orders.sort(function (a, b) {
          return a.price[0] - b.price[0]; 
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
          return b.price[0] - a.price[0]; 
        });
      } else {
        filterhigh = state.orders.sort(function (a, b) {
          return b.price[0] - a.price[0];
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

    case CHECKBOX_CHANGE:
      // crear función q filtre por los check que están en true
      // filterByStatus();
      const modificateFilterState = state.filterStatus.includes(action.payload) ? 
      state.filterStatus.filter(filter => filter !== action.payload):
      [...state.filterStatus, action.payload];
      const modificateState = {...state, 
        [action.payload]: state[action.payload] ? false: true,
        filterStatus: modificateFilterState,
      }
      // filterByStatus(modificateState)
      return {
        ...state,
        filterOrders: filterByStatus(modificateState),
        search: false,
        status: false,
        // switcheamos el valor de la propiedad del estado correspondiente
        [action.payload]: state[action.payload] ? false: true,
        filterStatus: modificateFilterState,
      }
    
    case CLEAR_CHECKBOXES:
      return {
        ...state,
        UNPAID: false,
        PAID: false,
        SENT: false,
        RECEIVED: false,
        CANCELLED: false,
        ALL: true,
        filterStatus: [],
        // search: false,
        // status: false,
      }
    default:
      return state;
  }
};

export default reducer;
