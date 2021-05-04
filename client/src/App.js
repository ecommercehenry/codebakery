import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./Components/screens/landing/Landing";
import AdminPanel from "./Components/screens/admin/container/AdminPanel";
import Catalogue from "./Components/screens/catalogue/container/Catalogue";
import Cart from "./Components/screens/cart/container/Cart";
import AboutUs from "./Components/screens/aboutUs/container/AboutUsGrid";
// import FormCRUD from "./Components/screens/admin/FormCRUD"
import Checkout from './Components/screens/cart/Checkout/Checkout'
import Stripe from "./Components/screens/cart/Checkout/Stripe"
import GlobalStyle from "./Components/GlobalStyle";
import UserAccount from "./Components/UserAcount/UserAccount";
import UserPanel from "./Components/screens/user/UserPanel"
import CreateUserAccount from "./Components/UserAcount/CreateUserAccount";
import TablaOrdenes from "./Components/screens/admin/ordenes/TablaOrdenes";
import { useLazyQuery } from "@apollo/client";
import VALIDATE_CREDENTIALS from "./Apollo/queries/validateCredentials";
import AddProductForm from "./Components/AddProductForm";
import Detail from "./Components/screens/detail/Detail";
import Promote from "./Components/screens/admin/Promote";
import BillCard from "./Components/BillCard/BillCard";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import UserReview from "./Components/screens/user/UserReview";  
import UserOrders from "./Components/screens/user/UserOrders";
import FormReview from "./Components/screens/reviews/FormReview";
import FormModify from "./Components/screens/reviews/FormModifyReview"

import Sucursales from './Components/Maps/Sucursales'

let token = localStorage.getItem("token");
let role = localStorage.getItem("role");

function App() {
  const [validateUser, { data }] = useLazyQuery(VALIDATE_CREDENTIALS);
  useEffect(() => {
    validateUser({ variables: { token: token, role: role } });
  }, [data, validateUser]);
  const isAuthenticated = data?.validateCredentials;

  if (isAuthenticated && role === "admin") {
    return (
      <>
        <GlobalStyle />
        <Switch>
          {/* {DEBEMOS ARREGLAR EL TEMA DEL RENDERIZADO DE LA RUTA DE AddProductForm - PODEMOS USAR Z-INDEX } 
        
        TAMBIÉN REVISAR EL TEMA DEL FORMCRUD DONDE RENDERIZA
        */}
          <Route exact path="/" component={Landing} />
          <Route path='/stores' component={Sucursales}/>
          <Route exact path="/admin/order/:id" component={BillCard} />
          <Route path="/admin" component={AdminPanel}></Route>
          <Route path="/catalogue" component={Catalogue} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/log-in" component={UserAccount} />
          <Route exact path="/sign-up" component={CreateUserAccount} />
          <Route exact path="/ordenes" component={TablaOrdenes} />
          {/* <Route path="/admin" component={FormCRUD} /> */}
          <Route path="/admin/add-product" component={AddProductForm} />
          <Route exact path="/catalogue/detail/:id" component={Detail} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route exact path="/promote" component={Promote} />
          <Route path="/*" component={() => "404 NOT FOUND"} />
        </Switch>
      </>
    );
  } else {
    
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route path='/stores' component={Sucursales}/>
          <Route path='/checkout' component={Checkout}/>
          <Route exact path="/" component={Landing} />
          <Route path="/catalogue" component={Catalogue} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout-stripe" component={Stripe} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/user/review/:id" component={UserReview} />
          <Route exact path="/user/addReview/:id" component={FormReview} />
          <Route exact path="/user/modify/review/:id" component={FormModify} />
          <Route exact path="/user/orders/:id" component={UserOrders} /> 
          <Route exact path="/user/:id/profile" component={UserPanel} /> 
          <Route exact path="/log-in" component={UserAccount} />
          <Route exact path="/sign-up" component={CreateUserAccount} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route exact path="/catalogue/detail/:id" component={Detail} />

          <Route path="/*" component={() => "404 NOT FOUND"} />
        </Switch>
      </>
    );
  }
}

export default App;
