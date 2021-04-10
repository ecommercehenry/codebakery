import React from 'react'
<<<<<<< HEAD
import NavBar from '../../navBar/NavBar';
=======
import NavBar from '../../navBar/NavBar'
import Products from "../../catalogue/products/container/Products.jsx";
import './Home.css'; 
>>>>>>> 40e401303ef15b56c1111ab15d6e69673489c6f7

const Home = () => {
    return (
        <>
        <NavBar color='black'/>
        <div className='home'>
          <div>
            <Products />
          </div>
        </div>
        </>
    )
}

export default Home;
