import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Landing from './Components/screens/landing/Landing';
import AdminPanel from './Components/screens/admin/container/AdminPanel';
import Catalogue from './Components/screens/catalogue/container/Catalogue';
import Cart from './Components/screens/cart/container/Cart';
import AboutUs from './Components/screens/aboutUs/container/AboutUs';
import FormCreateCategory from "./Components/FormCreateCategory/FormCreateCategory"

import FormCRUD from "./Components/screens/admin/FormCRUD"
import GlobalStyle from './Components/GlobalStyle';
import Login from './Components/screens/login/login';
import UserAccount from "./Components/UserAcount/UserAccount";
import CreateUserAccount from "./Components/UserAcount/CreateUserAccount";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Route exact path="/" component={Landing}/>
      {/* <Route path="/" component={NavBar}/> */}
      <Route path="/admin" component={AdminPanel} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/cart" component={Cart} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/log-in" component={UserAccount} />
      <Route path="/sign-up" component={CreateUserAccount} />

      {/* Debo agregar al componente padre que corresponda @Chu */}
      <Route path="/admin/form" component={FormCRUD} />
    </>
  );
}

export default App;
