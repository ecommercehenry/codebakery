import { applyMiddleware, createStore } from "redux"
import { persistStore } from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"


const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk)
))
// export const store = createStore(rootReducer,composeWithDevTools(
//   applyMiddleware(thunk)
// ))
export const persistor = persistStore(store);
export { store };
