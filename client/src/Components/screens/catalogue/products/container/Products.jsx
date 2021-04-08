import React from 'react'
import SearchBar from '../../searchbar/SearchBar'
import Categories from '../categories/Categories'
import HomeButton from '../home&sort/homeButton/HomeButton'
import SortButton from '../home&sort/sortButton/SortButton'
import Grid from '../grid/Grid'

const Products = () => {
    return (
        <div>
            <SearchBar />
            <Categories />
            <HomeButton />
            <SortButton />
            <Grid />
        </div>
    )
}

export default Products
