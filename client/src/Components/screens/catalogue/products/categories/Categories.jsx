import React, {useEffect, useState}  from 'react';
import {useSelector, useDispatch} from "react-redux";
import { useQuery } from "@apollo/client";
import productsByCategoryName from '../../../../../Apollo/queries/productsByCategoryName';
// import getData from '../../../../../Apollo/queries/productById';
import getAllCategories from '../../../../../Apollo/queries/getAllCategories';
import allProducts from '../../../../../Apollo/queries/allProducts';
import { getAllProducts, setSearch } from '../../../../../actions';
import styles from './Categories.module.css';

const Categories = () => {
    //Iniciamos el estado en all para que se rendericen todos los productos
    const [name, setName] = React.useState('All');
    // console.log(name, 'arsrrarsras')
    //Obtenemos productos por nombre de categoria (apolo client)
    let  products = useQuery(productsByCategoryName, {
        variables: { name: name },
    });
    products = products?.data?.getProductByCategoryName ? products.data.getProductByCategoryName :products.data;
    // console.log(products, 'aysyyaysyays')
    //Obtenemos el estado global de los productos de redux
    const {stateproducts}= useSelector(state =>  state);
    const dispatch= useDispatch();
    //Obtenemos todos los productos de apolo client 
    let todosproductos=useQuery(allProducts);

    if(name === 'All'){
    
     products= todosproductos?.data?.product ? todosproductos.data.product :products;
    } 

    //Obtenemos todas las categorias de apolo client
    const categories = useQuery(getAllCategories);

    // useEffect(()=>{
    //     console.log('u')
    // },[])

    //Se envia la acción para actualizar los productos que se renderizan
    useEffect(() => {
        // console.log('lo que sea');
        dispatch(getAllProducts(products));
        // console.log('otra vz');
    }, [products]);

    //tenemos un query para pedir los productos por categorias
    //cada categoria sera renderizada como un boton que al hacer clic llama a la query
    //de productos por categorias(filtrado por categorias)
    //caso BASE: Al presionar un btn ALL/TODOS, se hace un llamado a todos los productos
    const handleClick = (e) =>{
        // accion para modificar el estado del booleano 'search'
        dispatch(setSearch());
        setName(e.target.name);
    }

    return (
        <div className={styles.categories}>
            <button  name = 'All' onClick={handleClick}>All</button>

           {
               categories?.data?.getAllCategories.map((cate, i)  =>(
                   <div key ={i}>
                   <button name = {cate.name} onClick={handleClick}>
                       {cate.name}
                    </button>
                    </div>
               ))
           }
           {/* {    
               stateproducts && stateproducts?.length>0 ? stateproducts.map((product, i ) =>(
                 <div key={i}>{product.name}</div>
               ) ): 'No hay productos'
           }  */}
           
        </div>
    )
}

export default Categories
