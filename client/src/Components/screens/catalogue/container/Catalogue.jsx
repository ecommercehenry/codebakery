import React from 'react';
import {Route, Link} from 'react-router-dom'
import NavBar from '../../navBar/NavBar';
import Hero from '../hero/Hero';
import Products from '../products/container/Products';
import Detail from '../../detail/Detail.jsx'

const Catalogue = () => {
    return (
        <>
            <NavBar color='white'/>
            <Hero />
            <Products />
            <Link to="/catalogue/detail/1">Producto</Link>
            <Route path="/catalogue/detail/:id" >
                <Detail></Detail>
            </Route>
        </>
    )
}

export default Catalogue
