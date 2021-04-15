
import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/screens/home/container/Home';
import AdminPanel from './Components/screens/admin/container/AdminPanel';
import Catalogue from './Components/screens/catalogue/container/Catalogue';
import Cart from './Components/screens/cart/container/Cart';
import AboutUs from './Components/screens/aboutUs/container/AboutUs';
import FormCreateCategory from "./Components/FormCreateCategory/FormCreateCategory"
import FormCRUD from "./Components/screens/admin/FormCRUD"
import GlobalStyle from './Components/GlobalStyle';
import GuestCart from './Components/screens/cart/GuestCart';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/" component={NavBar}/> */}
      <Route path="/admin" component={AdminPanel}/>
      <Route path="/catalogue" component={Catalogue}/>
      <Route path="/cart" component={GuestCart}/>
      <Route path="/about-us" component={AboutUs}/>
      
      {/* Debo agregar al componente padre que corresponda @Chu */}
      <Route path="/admin/form" component={FormCRUD}/>

    </>
  );
}

export default App;
