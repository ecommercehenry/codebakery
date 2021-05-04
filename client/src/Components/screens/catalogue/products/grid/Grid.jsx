import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
//Components 
import ProductCard from './ProductCard';

const Grid = () => {
  let {status} = useSelector((state)=>state.theme);
  let { stateproducts, filterProduct, allProduct, search, productsToRender } = useSelector((state) => state.reducer);
  // let arr = [];
  // if(search === true){
  //   arr = allProduct.filter((element) => 
  //     element.name.toLowerCase().includes(filterProduct.toLowerCase()))
  //      //con includes la busq ya no pide exactitud en el string. @Lizen
  // }
  

  return (
    <StyledGrid light={status}>
      <>
        {
          search ? (productsToRender?.length > 0 ? productsToRender.map((element) => {
            return <ProductCard key={element.id} id={element.id} name={element.name} 
                    image={element.image} price={element.price} />
          }) : "No se encontraron Productos"): (productsToRender?.length > 0 ? productsToRender.map((element) => {
            return <ProductCard key={element.id} id={element.id} name={element.name} 
                    image={element.image} price={element.price} />
          }): 'Cargando...')
        }
        {/* {
          search === false ?
            (stateproducts && stateproducts?.length > 0
              ? stateproducts.map((element) => {
                return <ProductCard key={element.id} id={element.id} name={element.name} image={element.image} price={element.price} />
              }) : "Cargando")
            : (productsToRender.length > 0 ? productsToRender.map((element) => {
              return <ProductCard key={element.id} id={element.id} name={element.name} image={element.image} price={element.price} />
            }) : "No se encontraron Productos"
            )
        } */}
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
  background: ${({ light }) => (light ? "transparent" : "#222222")};
  color: ${({ light }) => (light ? "inherit" : "white")};
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
