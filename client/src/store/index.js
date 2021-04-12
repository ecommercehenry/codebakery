import { createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer/reducer.js';
import thunk from "redux-thunk";


  export const store = createStore(reducer,
    compose(applyMiddleware(thunk), (typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined" ?
      window.devToolsExtension() :
      f => f
  )))