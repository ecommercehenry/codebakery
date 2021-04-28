import {
  SAVE_ORDERS,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  FILTER_ORDER,
  FILTER_USERS,
  CLEAR_FILTER,
  CHANGE_PAGE,
  CHECKBOX_CHANGE,
  CLEAR_CHECKBOXES,
  FILTER_NAME,
} from "../actions/index";

const initialState = {
  orders: [],
  filterOrders: [], //tiene ordenes de busqueda dependiendo el filtro
  statusOrders: [],
  search: false,
  idError: 0,
  status: false,
  numPage: 0,
  renderPage:[],
  filterStatus: [],
  CANCELLED: false,
  ALL: false,
};

const pagination= (modifyState) => {
  //va a preguntar si hay algo en filter orders
  //console.log ('modifystate', modifyState);
  //console.log('uhiajssm',modifyState)
  if (modifyState.filterOrders.length > 0) {
   // console.log('lo q sea');
    return modifyState?.filterOrders?.slice(modifyState.numPage, modifyState.numPage+10)
  } else {
    return modifyState?.orders?.slice(modifyState.numPage, modifyState.numPage+10)
  }

}

// recibe el estado actual y el checkbox que recien se acaba de cambiar
// debe devolver el arreglo q actualmente se está renderizando siltrado
// según todos los checkboxes
const filterByStatus = (currentState) =>{
  // const
  // console.log(currentState, 'aysyayyays')
  if(currentState.filterOrders.length > 0){
    // console.log('primero')
    return currentState.filterStatus.length > 0 ? 
    currentState.filterOrders.filter((order => 
      (currentState.filterStatus.includes(order.status.toUpperCase()) && !order.cancelled) || 
      (currentState.filterStatus.includes('CANCELLED') && order.cancelled) )):
    currentState.filterOrders;
  } else{
    // console.log('seg', currentState.orders.filter((order => currentState.filterStatus.includes(order.status.toUpperCase()))))
    return currentState.filterStatus.length > 0 ? 
    currentState.orders.filter((order => 
      (currentState.filterStatus.includes(order.status.toUpperCase()) && !order.cancelled) || 
      (currentState.filterStatus.includes('CANCELLED') && order.cancelled) )):
    currentState.orders;
    // currentState.orders.filter((order => currentState.filterStatus.includes(order.status.toUpperCase())));
  }
}

const reducer = (state = initialState, action) => {
  // let ordersModified = state.orders
  let modifyFilterOrders;
  switch (action.type) {
    case SAVE_ORDERS:
      const data= action.payload?.map((o) => {
        let filter = {
          id: o.id,
          userId: o.userId,
          date: o.creation,
          status: o.status,
          price: o.lineal_order.map((u) => u).map((g) => g.price),
          cancelled: o.cancelled,
          name: o.name
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
      modifyFilterOrders = filterByStatus({...state, filterOrders: searchOrder});
      if (searchOrder.length) {
        return {
          ...state,
          filterOrders: searchOrder,
          search: true,
          // renderPage:searchOrder
          statusOrders: modifyFilterOrders,
          renderPage: modifyFilterOrders.length === 0 ? [] : pagination({...state, filterOrders: modifyFilterOrders})
        };
      } else {
        return {
          ...state,
          filterOrders: [],
          renderPage:[],
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
        // debemos preguntar si hay algun filtro en filterStatus
        modifyFilterOrders = filterByStatus({...state, filterOrders: searchUsers});
        // actualizamos filterOerders con la busqueda completa, luego filtramos 
        // por status y se lo pasamos a renderPage
        return {
          ...state,
          filterOrders: searchUsers,
          search: true,
          statusOrders: modifyFilterOrders,
          renderPage: modifyFilterOrders.length === 0 ? [] : pagination({...state, filterOrders: modifyFilterOrders})
        };
      } else {
        return {
          ...state,
          filterOrders: [],
          statusOrders: [],
          renderPage: pagination({...state, filterOrders: [], statusOrders: []}),
          idError: action.payload,
          search: false,
          status: true,
        };
      }

    case FILTER_NAME:
      let searchName = state.orders.filter(
        //tuve que cambiar para emparejar con filtros //@ Lau
        (u) => u.name === action.payload
      );
      modifyFilterOrders = filterByStatus({...state, filterOrders: searchName});
      if (searchName.length) {
        return {
          ...state,
          filterOrders: searchName,
          search: true,
          statusOrders: modifyFilterOrders,
          renderPage: modifyFilterOrders.length === 0 ? [] : pagination({...state, filterOrders: modifyFilterOrders}),
        };
      } else {
        return {
          ...state,
          filterOrders: [],
          statusOrders: [],
          renderPage: pagination({...state, filterOrders: [], statusOrders: []}),
          idError: action.payload,
          status: true,
          search: false,
        };
      }

    case PRICE_LOW_TO_HIGH:
      let filterlow;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //
        filterlow = state.filterOrders.sort(function (a, b) {
          return a.price[0] - b.price[0];
        });
      } else {
        filterlow = state.orders.sort(function (a, b) {
          return a.price[0] - b.price[0]; 
        });
      }
      modifyFilterOrders = filterByStatus({...state, filterOrders: filterlow});
      return {
        ...state,
        filterOrders: filterlow,
        statusOrders: modifyFilterOrders,
        renderPage: pagination({ ...state, filterOrders: modifyFilterOrders }),
        search: true,
      };

    case PRICE_HIGH_TO_LOW:
      let filterhigh;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //
        filterhigh = state.filterOrders.sort(function (a, b) {
          return b.price[0] - a.price[0]; 
        });
      } else {
        filterhigh = state.orders.sort(function (a, b) {
          return b.price[0] - a.price[0];
        });
      }
      modifyFilterOrders = filterByStatus({...state, filterOrders: filterhigh});
      return {
        ...state,
        filterOrders: filterhigh,
        statusOrders: modifyFilterOrders,
        renderPage: pagination({...state, filterOrders: modifyFilterOrders }),
        search: true,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filterOrders: [],
        filterStatus: [],
        renderPage: pagination({...state, filterOrders:[]}),
        search: false,
        status: false,
      };

    case CHANGE_PAGE:
      const modifyState = {...state, numPage: action.payload};
      return {
        ...state,
        renderPage: pagination(modifyState),
        numPage: action.payload,
       
      };

    case CHECKBOX_CHANGE:
      // crear función q filtre por los check que están en true
      // filterByStatus();
      const modificateFilterStatus = state.filterStatus.includes(action.payload) ? 
      state.filterStatus.filter(filter => filter !== action.payload):
      [...state.filterStatus, action.payload];
      const modificateState = {...state,
        filterStatus: modificateFilterStatus,
        filterOrders: filterByStatus({...state, filterStatus: modificateFilterStatus})
      };
      // console.log(modificateState)
      return {
        ...state,
        statusOrders: filterByStatus({...state, filterStatus: modificateFilterStatus}),
        renderPage: modificateState.filterOrders.length > 0? pagination(modificateState): [],
        filterStatus: modificateFilterStatus,
      }
    
    case CLEAR_CHECKBOXES:

      return {
        ...state,
        statusOrders: [],
        renderPage: pagination({...state}),
        CANCELLED: false,
        ALL: true,
        filterStatus: [],
      }
    default:
      return state;
  }
};

export default reducer;
