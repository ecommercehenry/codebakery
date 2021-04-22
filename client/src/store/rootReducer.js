import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localstorage as default storage
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer";
import cartReducer from "../reducer/cartReducer";
import loginReducer from "../reducer/loginReducer";
import ordersReducer from "../reducer/ordersReducer";
import reviewsReducer from "../reducer/reviewsReducer"; 

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    productsReducer: productsReducer,
    reducer: reducer,
    cart:cartReducer,
    loginReducer:loginReducer,
    ordersReducer:ordersReducer,
    reviewsReducer
  })
export default persistReducer(persistConfig,rootReducer);
