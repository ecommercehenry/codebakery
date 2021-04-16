import React, { useEffect } from "react"
import "./App.css"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import Landing from "./Components/screens/landing/Landing"
import AdminPanel from "./Components/screens/admin/container/AdminPanel"
import Catalogue from "./Components/screens/catalogue/container/Catalogue"
import Cart from "./Components/screens/cart/container/Cart"
import AboutUs from "./Components/screens/aboutUs/container/AboutUs"
import FormCreateCategory from "./Components/FormCreateCategory/FormCreateCategory"

import FormCRUD from "./Components/screens/admin/FormCRUD"
import GlobalStyle from "./Components/GlobalStyle"
import Login from "./Components/screens/login/login"
import UserAccount from "./Components/UserAcount/UserAccount"
import CreateUserAccount from "./Components/UserAcount/CreateUserAccount"
import ProtectedRoute from "./Components/Protected/ProtectedRoute"
import Hola from "./Components/Hola"
import { useLazyQuery, useQuery } from "@apollo/client"
import VALIDATE_CREDENTIALS from "./Apollo/queries/validateCredentials"

// Hola
// ProtectedRoute
let token = localStorage.getItem("token")
let role = localStorage.getItem("role")

function App() {
  const [validateUser, { data, loading }] = useLazyQuery(VALIDATE_CREDENTIALS)
  useEffect(() => {
    validateUser({ variables: { token: token, role: role } })
  }, [data])
  const isAuthenticated = data?.validateCredentials
  console.log("autenticado", isAuthenticated)
  if (isAuthenticated && role === "admin") {
    return (
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route path="/" component={NavBar}/> */}
          <Route exact path="/admin" component={AdminPanel}></Route>
          {/* <ProtectedRoute exact path="/add-product" component={Hola}> </ProtectedRoute> */}

          {/* <Route path="/admin" component={AdminPanel} /> */}
          <Route exact path="/catalogue" component={Catalogue} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/log-in" component={UserAccount} />
          <Route exact path="/sign-up" component={CreateUserAccount} />

          {/* Debo agregar al componente padre que corresponda @Chu */}
          <Route exact path="/admin/form" component={FormCRUD} />
          <Route path="/*" component={() => "404 NOT FOUND"} />
        </Switch>
      </>
    )
  } else {
    return (
      <>
        <Switch>
        <Route exact path="/" component={Landing} />
          <Route exact path="/catalogue" component={Catalogue} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/log-in" component={UserAccount} />
          <Route exact path="/sign-up" component={CreateUserAccount} />
          <Route path="/*" component={() => "404 NOT FOUND"} />
        </Switch>
      </>
    )
  }
}

export default App
