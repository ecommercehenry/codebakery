import React from 'react';
import './App.css';
import FormCRUD from './Components/FormCRUD'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormCRUD/>
      </header>
    </div>
    // <>
    //    //<Home />  Home.jsx --- Hero, Searchbar, product, cardGRid
    //   //<Catalogue />
    //   //<Cart />
    //   //<AboutUs />
    //   //<Login />
    //   //<Sign up/>
      
    // </>
  );
}

export default App;
