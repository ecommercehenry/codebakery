import React from "react"
import TextCRUD from "./TextCRUD"
import { useQuery } from "@apollo/client"
import  { useEffect } from "react"
import allProducts from "../../../Apollo/queries/allProducts"
import {useDispatch} from "react-redux"
import {saveProducts} from "../../../actions/saveProductsAction"
import styled from 'styled-components';

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
        <StyledListCRUD >
          {data ? (
            data.product.map((item) => {
              return <TextCRUD
                  id ={item.id}
                  key= {item.id}
              />                    
           })
          ) : (
            <p>loading...</p>
          )}
          
        </StyledListCRUD>
      );
}
export default ListCRUD;

const StyledListCRUD = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;
margin-top: 0.5rem;
height: 100%;`;