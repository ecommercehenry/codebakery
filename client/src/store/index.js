import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer"
const rootReducer = combineReducers({
  productsReducer,
  reducer
})
const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))

export default store;