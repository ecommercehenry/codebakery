import { GET_ALL_USERS_WITH_DETAILS } from "../actions/index";
import { ORDER_ASC_BY_NAME,  ORDER_DESC_BY_NAME, SEARCH_BY_NAME } from "../actions/index"

const initialState = {
  dataUserAdmin: [],
  dataToRender: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_WITH_DETAILS: 
      if (Array.isArray(action.payload)) {
        var data = [...action.payload]
        return {
            ...state,
            dataUserAdmin: data.sort((a, b) => {
                return b.id - a.id
              }),
            dataToRender: data.sort((a, b) => {
                return a.id - b.id
              }),
      } 
    } else {
          return {
              ...state,
              dataUserAdmin: action.payload,
              dataToRender: action.payload
          }
      }
    case ORDER_ASC_BY_NAME:
        return {
            ...state,
            dataUserAdmin: state.dataUserAdmin.sort(function(a, b) {
              return a.name.localeCompare(b.name)}),
            dataToRender: state.dataUserAdmin.sort(function(a, b) {
                return a.name.localeCompare(b.name)
        })
    }
    case ORDER_DESC_BY_NAME:
        return {
            ...state,
            dataUserAdmin: state.dataUserAdmin.sort(function(a, b) {
              return b.name.localeCompare(a.name)}),
            dataToRender: state.dataUserAdmin.sort(function(a, b) {
                return b.name.localeCompare(a.name)
        })
    }
    case SEARCH_BY_NAME:
        if(action.payload === "all") {
            return {
                ...state,
                dataToRender: state.dataUserAdmin
            }
        } else {
            return {
                ...state,
                dataToRender: state.dataUserAdmin.filter(obj => obj.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
    default:
      return state;
  }
};

export default reducer;
