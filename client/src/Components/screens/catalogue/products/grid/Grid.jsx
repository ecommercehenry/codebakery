import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
//Components 
import ProductCard from './ProductCard';
import GET_BY_PRODUCT from "../../../../../Apollo/queries/getByProduct"


const Grid = ({ orderId, refetchCatalogue }) => {
  let { status } = useSelector((state) => state.theme);
  let { search, productsToRender } = useSelector(
    (state) => state.reducer
  );
  
  const { data } = useQuery(GET_BY_PRODUCT, {});


  useEffect(() => {
    if (data) {
      if (data.product) {
        data.product.forEach((e) => {
          if (e.stock <= 0) {
            let boton = document.getElementById(`${e.id}`);
            if (boton != null) {
              boton.innerHTML = "Sin Stock";
            }
          }
        });
      }
    }
  }, [data]);


  return (

    <StyledGrid light={status}>
      <>
        {

          search ? 
          (productsToRender?.length > 0 ? 
            productsToRender.map((element) => {
            return <ProductCard 
            refetchCatalogue={refetchCatalogue}
            orderId={orderId} 
            key={element.id} 
            id={element.id} 
            name={element.name}
            image={element.image} 
            price={element.price}
            discount= {element.discount} />
          }) : 
          "No se encontraron Productos") : 
          (productsToRender?.length > 0 ? 
            productsToRender.map((element) => 
              (element.stock !== 0 ? (
            <ProductCard 
            refetchCatalogue={refetchCatalogue}
            orderId={orderId}
            key={element.id} 
            id={element.id} 
            name={element.name}
            image={element.image} 
            price={element.price}
            discount= {element.discount} /> )
            : "")
          ) : !productsToRender ? 'Cargando...': "No se encontraron Productos" )
        }
      </>
    </StyledGrid>
  );
};

const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const StyledGrid = styled.div`
  background: ${({ light }) =>
  (light ? 
  "transparent" :
  "#222222")};
  color: ${({ light }) =>
  (light ? 
  "inherit" : 
  "white")};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 37vh;
  gap: 4rem;
  height: auto;
  ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 40vh;
    gap: 3rem;
  }
  ${media.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 55vh;
    gap: 4rem;
  }
`;

export default Grid;
