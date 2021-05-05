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
  stateproducts: [], // productos filtrados por categorias, inicialmente tiene todos los productos
  stateSearch: {}, // No hay descripción (se puede eliminar!!??)
  filterProduct: "", // entrada del input de busqueda dinámica
  allProduct: [], // no hay descripción (se puede eliminar!!??)
  productsToRender: [],// productos a renderizar(despues de haber aplicado los filtros y criterios)
  search: false, // boleanos flag para busqueda y ordenado respectivamente
  sort : '',
};

const sortByPrice = (arr, sort) =>{
  // console.log(arr[0], sort, 'ooooooooooooooo')
  return sort === '' ? arr: sort === 'HIGH_TO_LOW' ? [...arr].sort((a,b) => {
    return b.price - a.price;
  }): [...arr].sort((a,b) => {
    return a.price - b.price;
  });

}
// SET_SEARCH
const reducer = (state = initialState, action) => {
  let sortArr = []
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: false };
    case GET_ALL_PRODUCTS:
      // los productos cambian según la categoría buscada por lo que debemos tomar en cuenta 
      // los filtros de orden y de requerirse el de busqueda
      // se ordenan los productos segun el criterio(por precio)
      // se debe solventar problema de carga de daros fallida
      sortArr = action.payload?.length > 0 ? sortByPrice(action.payload, state.sort): action.payload;
      return state.search === false ? 
      {
        ...state,
        stateproducts: action.payload,
        // allProduct: action.payload,
        productsToRender: sortArr,
        search: false,
      } :
      {
        ...state,
        stateproducts: action.payload,
        // allProduct: action.payload,
        productsToRender: sortArr.filter((element) => 
        element.name.toLowerCase().includes(state.filterProduct)),
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
      sortArr = sortByPrice([...state.stateproducts], state.sort);
      if(action.payload !== '' && !Array.isArray(action.payload)){
        
        // console.log(action.payload, 'entrada')
        return {
          ...state,
          filterProduct: action.payload,
          productsToRender: [...sortArr].filter((element) => 
          element.name.toLowerCase().includes(action.payload.toLowerCase())),
          search: true,
        }
      }
      return {
        ...state,
        // inicialmente llega un array al reducer (se debe corregir)
        filterProduct : Array.isArray(action.payload) ? '':action.payload.toLowerCase(),
        productsToRender: [...sortArr],
        search: false,
      }

    case GUARDAR_PRODUCTOS:
      return {
        ...state,
        stateSearch: action.payload,
      };
    
    case PRICE_HIGH_TO_LOW:
      return {
        ...state,
        sort: 'HIGH_TO_LOW',
        productsToRender: [...state.productsToRender].sort((a,b) => {
            return b.price - a.price
          }),
      }

    case PRICE_LOW_TO_HIGH:
      return {
        ...state,
        sort: 'LOW_TO_HIGH',
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
