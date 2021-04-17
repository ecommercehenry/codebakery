import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import allProducts from "../../../../../Apollo/queries/allProducts.js";
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

//Components
import ProductCard from './ProductCard';
//import "./grid.css";

const Grid = () => {
  
  let { stateproducts, filterProduct, allProduct, search } = useSelector((state) => state.reducer);
  let arr = []
  let dispatch = useDispatch();
  if(search === true){
    arr = allProduct.filter((element) => element.name === filterProduct) 
  }
  
  return (

    <StyledGrid>
      <>
        {
          search === false ?  
        (stateproducts && stateproducts?.length > 0
          ? stateproducts.map((element, i) => {
                return <ProductCard key={element.id} id={element.id} name={element.name} image={element.image} price={element.price}/>
            }) : "Cargando")
            : (arr.length > 0 ? arr.map((element, i ) => {
                return <ProductCard key={element.id} id={element.id} name={element.name} image={element.image} price={element.price}/>
            }): "No se encontraron Productos" 
            )
          }
      </>
    </StyledGrid>
  );
};

const media = {
  tablet: '@media(min-width:768px)',
  laptop: '@media(min-width:992px)',
  desktop: '@media(min-width:1200px)',
}

const StyledGrid = styled.div`
  //background:red;
  display:grid;
  grid-template-columns:repeat(1,1fr);
  grid-auto-rows:37vh;
  gap:4rem;
  height:auto;
  ${media.tablet}{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-auto-rows:40vh;
    gap:3rem;
  }
  ${media.laptop}{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:45vh;
    gap:4rem;
  }
`;

export default Grid;


      {/* {stateproducts && stateproducts?.length > 0
        ? stateproducts.map((element, i) => {
            if (filterProduct === "") {
              return (
                <div key={i}>
                  <span className="card" key={element.id}>
                    <img
                      src={element.image}
                      width="250"
                      height="200"
                      alt="No se encontro la imagen"
                    />
                    <h4 className="title">{element.name}</h4>
                    <p className="price">{element.price}</p>
                  </span>
                </div>
              );
            } else {
              if (element.name === filterProduct) {

                return (
                  <div key={i}>
                    <span className="card" key={element.id}>
                      <img
                        src={element.image}
                        width="250"
                        height="200"
                        alt="No se encontro la imagen"
                      />
                      <h4 className="title">{element.name}</h4>
                      <p className="price">{element.price}</p>
                    </span>
                  </div>
                );
              }
            }
          })
        : "No hay productos"} */}
