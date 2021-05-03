import { SAVE_TOKEN } from "../actions/saveToken";

const initialState = {
  token: "",
  emailReducer: ""
};

const reducerToken = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token !== undefined ? action.payload.token : state.token ,
        emailReducer: action.payload.email !== undefined ? action.payload.email : state.emailReducer
      };
    default:
      return state;
  }
};

export default reducerToken;
