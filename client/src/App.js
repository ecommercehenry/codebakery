import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/screens/home/container/Home";
import Admin from "./components/screens/admin/container/Admin";
import Catalogue from "./components/screens/catalogue/container/Catalogue";
import NavBar from "./components/screens/navBar/NavBar";
import Cart from "./components/screens/cart/container/Cart";
import AboutUs from "./components/screens/aboutUs/container/AboutUs";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/" component={NavBar} />
      <Route path="/admin" component={Admin} />
      <Route path="/catalogue" component={Catalogue} />
      <Route path="/cart" component={Cart} />
      <Route path="/about-us" component={AboutUs} />
    </>
  );
}

export default App;
