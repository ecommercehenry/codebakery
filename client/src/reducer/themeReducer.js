import { CHANGE_THEME } from "../actions/themeActions";

const initialState = {
  status: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, status: !state.status };

    default:
      return state;
  }
};

export default reducer;
