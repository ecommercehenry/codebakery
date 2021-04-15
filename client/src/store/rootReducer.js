import {combineReducers} from "redux"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' //localstorage as default storage
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer";
import cartReducer from "../reducer/cartReducer";

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    productsReducer: productsReducer,
    reducer: reducer,
    cart:cartReducer
  })
export default persistReducer(persistConfig,rootReducer);