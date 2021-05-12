import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GUARDAR_PRODUCTOS,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  SET_SEARCH,
  CHANGE_GRID_PAGE
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
  numPage: 0,
};

const sortByPrice = (arr, sort) =>{
  return sort === '' ? arr: sort === 'HIGH_TO_LOW' ? [...arr].sort((a,b) => {
    // console.log((b.price * (b.discount === 0 ? 1 : b.discount/100)) , (a.price * (a.discount === 0 ? 1 : a.discount/100)))
    return (b.price * (b.discount === 0 ? 1 : b.discount/100)) - (a.price * (a.discount === 0 ? 1 : a.discount/100));
  }): [...arr].sort((a,b) => {
    return (a.price * (a.discount === 0 ? 1 : a.discount/100)) - (b.price * (b.discount === 0 ? 1 : b.discount/100));
  });

}

const pagination = (modifyState) => {
  //va a preguntar si hay algo en filter orders
  return modifyState?.allProduct?.slice(modifyState.numPage, modifyState.numPage+10)
  // if (modifyState.filterOrders.length > 0) {
  //   return modifyState?.filterOrders?.slice(modifyState.numPage, modifyState.numPage+10)
  // } else {
  //   return modifyState?.orders?.slice(modifyState.numPage, modifyState.numPage+10)
  // }

}

// SET_SEARCH
const reducer = (state = initialState, action) => {
  let sortArr = [], paginateArr = [], searchArr = [];
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: false };
    case GET_ALL_PRODUCTS:
      // los productos cambian según la categoría buscada por lo que debemos tomar en cuenta 
      // los filtros de orden y de requerirse el de busqueda
      // se ordenan los productos segun el criterio(por precio)
      // se debe solventar problema de carga de daros fallida
      // if (action.payload?.length > 0) console.log(pagination(sortByPrice(action.payload, state.sort)), '00000')
      sortArr = action.payload?.length > 0 ? sortByPrice(action.payload, state.sort): action.payload;
      // console.log(sortArr, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
      paginateArr =  sortArr?.length > 0 ? pagination({...state, allProduct: sortArr}): sortArr;
      return state.search === false ? 
      {
        ...state,
        stateproducts: action.payload,
        allProduct: sortArr,
        productsToRender: paginateArr,
        search: false,
      } :
      {
        ...state,
        stateproducts: action.payload,
        allProduct: action.payload,
        productsToRender: pagination({
          ...state,
          allProduct: sortArr?.filter((element) => 
            element.name.toLowerCase().includes(state.filterProduct))
          }),
      }

    case GET_PRODUCT_BY_NAME:
      // filtramos de una vez la data en stateproducts(todos los productos)
      // y pasamos el filtado a productsToRender para renderizar en el componente
      // si search es true
      sortArr = sortByPrice([...state.stateproducts], state.sort);
      if(action.payload !== '' && !Array.isArray(action.payload)){
        searchArr = [...sortArr].filter((element) => 
        element.name.toLowerCase().includes(action.payload.toLowerCase()));
        return {
          ...state,
          filterProduct: action.payload,
          allProduct: searchArr,
          productsToRender: pagination({...state, allProduct: searchArr}),
          search: true,
        }
      }
      return {
        ...state,
        // inicialmente llega un array al reducer (se debe corregir)
        filterProduct : Array.isArray(action.payload) ? '':action.payload.toLowerCase(),
        allProduct: [...sortArr],
        productsToRender: pagination({...state, allProduct: [...sortArr]}),
        search: false,
      }

    case GUARDAR_PRODUCTOS:
      return {
        ...state,
        stateSearch: action.payload,
      };
    
    case PRICE_HIGH_TO_LOW:
      sortArr = sortByPrice([...state.allProduct], 'HIGH_TO_LOW')
      // console.log(sortArr[0])

      return {
        ...state,
        sort: 'HIGH_TO_LOW',
        allProduct: sortArr,
        productsToRender: pagination({...state, allProduct: sortArr})
      }

    case PRICE_LOW_TO_HIGH:
      sortArr = sortArr = sortByPrice([...state.allProduct], 'LOW_TO_HIGH')
      return {
        ...state,
        sort: 'LOW_TO_HIGH',
        allProduct: sortArr,
        productsToRender: pagination({...state, allProduct: sortArr})
      }
    
    case CHANGE_GRID_PAGE:
      // console.log(action.payload, 'tatstattstatstas')
      const modifyState = {...state, numPage: action.payload};
      return { ...state, numPage: action.payload, productsToRender: pagination(modifyState) }

    default:
      return state;
  }
};

export default reducer; 

// return state.map((todo) =>
// todo.id === action.payload ? {...todo, status:"InProgress"} : todo
// );
