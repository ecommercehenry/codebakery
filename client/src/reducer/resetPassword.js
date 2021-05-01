import { SEND_TOKEN } from "../actions/index";

const initialState = {
  token: "",
};

const reducerToken = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TOKEN:
      console.log("state.token:", state.token, "action.payload reducer:", action.payload)
      return {
        ...state,
        token: action.payload !== undefined ? action.payload : state.token 
      };
    default:
      return state;
  }
};

export default reducerToken;
