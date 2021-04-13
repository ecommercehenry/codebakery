import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import loginReducer from "../reducer/loginReducer";
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer"
const rootReducer = combineReducers({
  productsReducer,
  reducer,
  loginReducer
})
const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;
