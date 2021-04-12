import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import allProducts from "../../../../../Apollo/queries/allProducts.js";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

//Components
import ProductCard from './ProductCard';
//import "./grid.css";


// {
//     query getAllProducts{
//         product{
//           id
//           name
//         }
//       }

// }
// Debo correjir por que trae los datos pero productos sale undefined; 
const Grid = ({id}) => {
      const { data } = useQuery(allProducts)
      console.log(data)
      useEffect(() => {
    }, [data])

  return (

    <StyledGrid>
      {
      data?.product.map((product) => (
        <ProductCard id={product.id} name={product.name} image={product.image}/>
      ))
      }
    </StyledGrid>
  );
};

const StyledGrid = styled.div`
  //background:red;
  width:100%;
  height: auto;
  display:flex;
  padding:0rem 4rem;
  flex-wrap:wrap;
  justify-content:space-between;
`;

export default Grid;
