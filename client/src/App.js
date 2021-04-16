import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Landing from './Components/screens/landing/Landing';
import AdminPanel from './Components/screens/admin/container/AdminPanel';
import Catalogue from './Components/screens/catalogue/container/Catalogue';
import Cart from './Components/screens/cart/container/Cart';
import AboutUs from './Components/screens/aboutUs/container/AboutUs';
// import FormCreateCategory from "./Components/FormCreateCategory/FormCreateCategory"

// import FormCRUD from "./Components/screens/admin/FormCRUD"
import GlobalStyle from './Components/GlobalStyle';
// import Login from './Components/screens/login/login';
import UserAccount from "./Components/UserAcount/UserAccount";
import CreateUserAccount from "./Components/UserAcount/CreateUserAccount";
import TablaOrdenes from "./Components/screens/admin/ordenes/TablaOrdenes"

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

      
      {/* ruta provisoria, a acomodar en el adminPanel al dar click en "Orders"     */}
      <Route path="/ordenes" component={TablaOrdenes} />

    </>
  );
}

export default App;
