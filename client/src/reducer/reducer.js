import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GUARDAR_PRODUCTOS,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  SET_SEARCH
} from "../actions";
//import allProducts from "../Apollo/queries/allProducts";

const initialState = {
  stateproducts: [],
  stateSearch: {},
  filterProduct: "", 
  allProduct: [],
  productsToRender: [],
  search: false,
};
// SET_SEARCH
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: false };
    case GET_ALL_PRODUCTS:
      // los productos cambian según la categoría buscada por lo que debemos tomar en cuenta 
      // los filtros de orden y de requerirse el de busqueda
      // console.log(action.payload, 'ttttttt')
      return {
        ...state,
        stateproducts: action.payload,
        allProduct: action.payload,
        productsToRender: action.payload,
        search: false,
      }
      // dejar estos comentarios hasta que se apruebe definitivamente el pull
      // if (action.payload && state.allProduct.length === 0) {
      //   return {
      //     ...state,
      //     stateproducts: action.payload,
      //     allProduct: action.payload,
      //     search: false,
      //   };
      // } else {
      //   return {
      //     ...state,
      //     stateproducts: action.payload,
      //     search: false,
      //   };
      // }

    case GET_PRODUCT_BY_NAME:
      // filtramos de una vez la data en stateproducts(todos los productos)
      // y pasamos el filtado a productsToRender para renderizar en el componente
      // si search es true
      return {
        ...state,
        filterProduct: action.payload,
        productsToRender: [...state.stateproducts].filter((element) => 
        element.name.toLowerCase().includes(action.payload.toLowerCase())),
        search: true,
      };

    case GUARDAR_PRODUCTOS:
      return {
        ...state,
        stateSearch: action.payload,
      };
    
    case PRICE_HIGH_TO_LOW:
      return {
        ...state,
        productsToRender: [...state.productsToRender].sort((a,b) => {
            return b.price - a.price
          }),
      }

    case PRICE_LOW_TO_HIGH:
      return {
        ...state,
        productsToRender: [...state.productsToRender].sort((a,b) => {
          return a.price - b.price;
        }),
      }

    default:
      return state;
  }
};

export default reducer;

// return state.map((todo) =>
// todo.id === action.payload ? {...todo, status:"InProgress"} : todo
// );
