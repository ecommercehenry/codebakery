import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./store/index"
import { getCurrentDomainApi } from "./config/currentDomain"
import 'bootstrap/dist/css/bootstrap.css'

// cliente apollo
const token = localStorage.getItem('token');
const role = localStorage.getItem('role');
const client = new ApolloClient({
  uri: `${getCurrentDomainApi()}/graphql`,
  cache: new InMemoryCache(),
  headers: {authtoken:token, authrole: role}
})

ReactDOM.render(
  <ApolloProvider client = {client}>
    <Provider store={store} >
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
