import React, {useEffect, useState}  from 'react';
import { useQuery } from "@apollo/client"
import productsByCategoryName from '../../../../../Apollo/queries/productsByCategoryName';
import getData from '../../../../../Apollo/queries/productById';
// import  getAllCategories  from '../../../../../Apollo/queries/getAllCategories';

//import  productsByCategoryName from "../../Apollo/queries/productsByCategoryName"


const Categories = () => {

//const { data } = useQuery(productsByCategoryName);

//console.log('h',data);
const { data } = useQuery(productsByCategoryName);

//const {getcategories} = useQuery(getAllCategories);
//console.log('getCategories',getcategories)


useEffect(() => {
    //console.log(data)
    console.log(data)
  }, [data])

const [categories, setCategories]= useState();

//Query para pedir las categorias

//tenemos un query para pedir los productos por categorias
//cada categoria sera renderizada como un boton que al hacer clic llama a la query
//de productos por categorias(filtrado por categorias)

//caso BASE: Al presionar un btn ALL/TODOS, se hace un llamado a todos los productos


    return (
        <div>
            All, vegan, gluten free
        </div>
    )
}

export default Categories
