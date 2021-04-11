import React, { useState } from 'react'
import SearchBar from '../../searchbar/SearchBar'
import Categories from '../categories/Categories'
import HomeButton from '../home&sort/homeButton/HomeButton'
import SortButton from '../home&sort/sortButton/SortButton'
import Grid from '../grid/Grid'
import "./Products.css"; 


const Products = () => {
    const [search, setSearch] = useState(false); 

    return (
        <div className='cardProduct'>
            <SearchBar setSearch={setSearch} />
            <Categories />
            <HomeButton />
            <SortButton />
            <Grid search={search} setSearch={setSearch}/>
        </div>
    )
}

export default Products
