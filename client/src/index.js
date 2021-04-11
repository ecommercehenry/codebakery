import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { Provider } from 'react-redux';
import { store } from "./store"



// cliente apollo
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
<ApolloProvider client = {client}>
<Provider store={store} >
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
  </Provider>
  </ApolloProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
