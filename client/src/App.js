import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/screens/home/container/Home';
import AdminPanel from './Components/screens/admin/container/AdminPanel';
import Catalogue from './Components/screens/catalogue/container/Catalogue';
import NavBar from './Components/screens/navBar/NavBar';
import Cart from './Components/screens/cart/container/Cart';
import AboutUs from './Components/screens/aboutUs/container/AboutUs';
//import Grid from './Components/screens/catalogue/products/grid/Grid';      <Route path="/grid" component={Grid}/>

import FormEditCrud from "./Components/FormEditCRUD"
import GlobalStyle from './Components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/" component={NavBar}/> */}
      <Route path="/admin" component={AdminPanel}/>
      <Route path="/catalogue" component={Catalogue}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/about-us" component={AboutUs}/>
      
      {/* Debo agregar al componente padre que corresponda @Chu */}
      <Route path="/form-edit-crud" component={FormEditCrud}/>

    </>
  );
}

export default App;
