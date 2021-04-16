import {applyMiddleware, combineReducers, createStore} from "redux"
import { persistStore } from 'redux-persist';
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import loginReducer from "../reducer/loginReducer";
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer"
import ordersReducer from "../reducer/ordersReducer"

const rootReducer = combineReducers({
  productsReducer,
  reducer,
  loginReducer,
  ordersReducer
})

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))
import rootReducer from "./rootReducer"

export const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk)
))
export const persistor = persistStore(store);
export default {store,persistor};
