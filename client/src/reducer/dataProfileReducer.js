import { CLEAR_DATA_USER_PROFILE, SAVE_DATA_PROFILE } from "../actions/dataProfileActions";

const initialState = {
    name: '',
    token: '',
    email: '',
    role: '',
    id: null,
    twoFA : false,
}

const dataProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE_DATA_PROFILE:
        return  action.payload ? {...state, 
            name: action.payload.name,
            token: action.payload.token,
            email: action.payload.email,
            role: action.payload.role,
            id : action.payload.id,
            twoFA: action.payload.twoFA
        }: {...state};
      case CLEAR_DATA_USER_PROFILE:
        return {...state,
          name: '',
          token: '',
          email: '',
          role: '',
          id : null,
        }
      default:
        return state;
    }
  };
  
  export default dataProfileReducer;