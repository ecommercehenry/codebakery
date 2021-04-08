import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/screens/home/container/Home';
import Admin from './Components/screens/admin/container/Admin';


function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/admin" component={Admin}/>
    </>
  );
}

export default App;
