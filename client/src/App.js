import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/screens/home/container/Home";
import Admin from "./Components/screens/admin/container/Admin";
import Catalogue from "./Components/screens/catalogue/container/Catalogue";
import NavBar from "./Components/screens/navBar/NavBar";
import Cart from "./Components/screens/cart/container/Cart";
import AboutUs from "./Components/screens/aboutUs/container/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
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
