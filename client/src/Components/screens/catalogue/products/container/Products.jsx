import React from 'react'
import SearchBar from '../../searchbar/SearchBar'
import Categories from '../categories/Categories'
import HomeButton from '../home&sort/homeButton/HomeButton'
import SortButton from '../home&sort/sortButton/SortButton'
import Grid from '../grid/Grid'
//import "./Products.css"; 

const Products = () => {
    console.log('lucas')
    return (
        <div className='cardProduct'>
            <SearchBar />
            <Categories />
            <HomeButton />
            <SortButton />
            <Grid />
        </div>
    )
}

export default Products
