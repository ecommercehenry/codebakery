import {SAVE_TOKEN,} from "../actions/saveToken";
  //import allProducts from "../Apollo/queries/allProducts";
  
  const initialState = {
    token:""
  };
  // SET_SEARCH
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_TOKEN:
        return  {...state, token: action.payload};
  
      default:
        return state;
    }
  };
  
  export default loginReducer;
  
  // return state.map((todo) =>
  // todo.id === action.payload ? {...todo, status:"InProgress"} : todo
  // );
  