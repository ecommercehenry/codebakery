import {
  SAVE_ORDERS,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
  FILTER_ORDER,
  CHANGE_STATUS,
  FILTER_USERS,
} from "../actions/index";

const initialState = {
  orders: [],
  ordersRender: [], //agrego estado para emparejar a el que recibo en filtro
  filterOrders: [],
  search: false,
  sortbyPrice: [],
  sort: false,
};

const reducer = (state = initialState, action) => {
  // let ordersModified = state.orders

  switch (action.type) {
    case SAVE_ORDERS:
      return {
        ...state,
        orders: action.payload,
        ordersRender: action.payload?.map((o) => {
          let filter = {
            id: o.id,
            userId: o.userId,
            date: o.creation,
            price: o.lineal_order.map((u) => u).map((g) => g.price),
            cancelled: o.cancelled,
          };
          return filter;
        }),
      };

    case FILTER_ORDER:
      let searchOrder = state.ordersRender.filter(
        //tuve que cambiar para emparejar con filtros //@ Lau
        (o) => o.id === Number(action.payload)
      );
      if (searchOrder.length) {
        return {
          ...state,
          filterOrders: searchOrder,
          search: true,
          sort: false, // agregado@ Lau
        };
      }

    case FILTER_USERS:
      let searchUsers = state.ordersRender.filter(
        //tuve que cambiar para emparejar con filtros //@ Lau
        (u) => u.userId === Number(action.payload)
      );
      if (searchUsers.length) {
        return {
          ...state,
          filterOrders: searchUsers,
          search: true,
          sort: false, // agregado@ Lau
        };
      }

    case PRICE_LOW_TO_HIGH:
      //getAllOrders.orders.map(e => e).map(u=> u.lineal_order).map(g => g.map(h => h.price))
      //console.log('stateorderSKLDMLSMD', state.orders)
      let filterlow;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //console.log('stateorder', state.orders)
        filterlow = state?.filterOrders?.map((o) => {
          // console.log("oooooooooooooo", o)
          let filter = {
            id: o.id,
            userId: o.userId,
            date: o.creation,
            price: o.lineal_order.map((u) => u).map((g) => g.price),
            cancelled: o.cancelled,
          };
          return filter;
        });

        filterlow = filterlow.sort(function (a, b) {
          if (a.price[0] > b.price[0]) {
            return 1;
          }
          if (a.price[0] < b.price[0]) {
            return -1;
          }
          return 0;
        });
      } else {
        filterlow = state.orders.map((o) => {
          let filter = {
            id: o.id,
            userId: o.userId,
            date: o.creation,
            price: o.lineal_order.map((u) => u).map((g) => g.price),
            cancelled: o.cancelled,
          };
          return filter;
        });
        filterlow = filterlow.sort(function (a, b) {
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
        sortbyPrice: filterlow,
        sort: true,
        search: false, //@ Lau
      };

    case PRICE_HIGH_TO_LOW:
      let filterhigh;
      if (state.orders.length > 0 && state.filterOrders.length > 0) {
        //console.log('stateorder', state.orders)
        filterhigh = state.filterOrders.orders.map((o) => {
          let filter = {
            id: o.id,
            userId: o.userId,
            date: o.creation,
            price: o.lineal_order.map((u) => u).map((g) => g.price),
            cancelled: o.cancelled,
          };
          return filter;
        });

        filterhigh = filterhigh.sort(function (a, b) {
          if (a.price[0] < b.price[0]) {
            return 1;
          }
          if (a.price[0] > b.price[0]) {
            return -1;
          }
          return 0;
        });
      } else {
        filterhigh = state.orders.map((o) => {
          let filter = {
            id: o.id,
            userId: o.userId,
            date: o.creation,
            price: o.lineal_order.map((u) => u).map((g) => g.price),
            cancelled: o.cancelled,
          };
          return filter;
        });
        filterhigh = filterhigh.sort(function (a, b) {
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
        sortbyPrice: filterhigh,
        sort: true,
      };

    case CHANGE_STATUS:
      return {
        ...state,
        search: false,
      };

    default:
      return state;
  }
};

export default reducer;
