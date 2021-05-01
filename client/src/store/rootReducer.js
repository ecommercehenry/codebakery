import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localstorage as default storage
import productsReducer from "../reducer/productsReducer";
import reducer from "../reducer/reducer";
import cartReducer from "../reducer/cartReducer";
import themeReducer from "../reducer/themeReducer";
import loginReducer from "../reducer/loginReducer";
import ordersReducer from "../reducer/ordersReducer";
import counterReducer from "../reducer/counterReducer";
import reducerToken from "../reducer/resetPassword";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "theme", "reducerToken"],
};
const rootReducer = combineReducers({
  productsReducer: productsReducer,
  reducer: reducer,
  cart: cartReducer,
  theme: themeReducer,
  loginReducer: loginReducer,
  ordersReducer: ordersReducer,
  counterReducer: counterReducer,
  reducerToken: reducerToken,
});
export default persistReducer(persistConfig, rootReducer);
