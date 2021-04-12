import React from "react"
import TextCRUD from "./TextCRUD"
import { useQuery } from "@apollo/client"
import  { useEffect, useState } from "react"
import allProducts from "../../../Apollo/queries/allProducts"
import {useDispatch} from "react-redux"
import {saveProducts} from "../../../actions/saveProductsAction"
function ListCRUD(){
    const { data , loading } = useQuery(allProducts);
    const dispatch = useDispatch()
    useEffect(()=>{
      if(!loading){
        dispatch(saveProducts(data.product))
      }
    },[data])
    // console.log("esto es lo que usa ListCRUD...",data)
    return (
        <div className="product-container">
          {data ? (
            data.product.map((item) => {
              return <TextCRUD
                  id ={item.id}
                  key= {item.id}
                  img ={item.image}
                  name= {item.name}
                  description = {item.description}
                  stock = {item.stock}
                  categories = {item.categories}
                  price = {item.price}
              />                    
           })
          ) : (
            <p>loading...</p>
          )}
          
        </div>
      );
}
export default ListCRUD;