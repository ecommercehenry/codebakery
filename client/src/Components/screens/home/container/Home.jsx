import React from "react";
import Products from "../../catalogue/products/container/Products.jsx";
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
