import React, { useEffect }  from 'react';
import {Link} from 'react-router-dom';
import { useQuery } from "@apollo/client";
import GET_BY_PRODUCT from "../../../../../Apollo/queries/getByProduct"; 


//styles
import styled from "styled-components";

//Components
import ButtonAddCart from "./ButtonAddCart";

const ProductCard = ({id,name,image, price, stock}) => {
        const { data } = useQuery(GET_BY_PRODUCT, {
            variables: { id: id },
          })
     
           if(data){
              if(data.product){
                data.product.map((e) => {
                    if(e.stock < 0){
                        document.getElementById(id).setAttribute("disabled","disabled");
                    }
                })
              }
        
          }
    return (
        <StyledCard>
            <Link to={`/catalogue/detail/${id}`} className='link'>
                <div className="image">
                    <img src={image} alt={name}/>
                </div>
                <div className="name"><span>{name}</span></div>
                <div className="price"><span>$ {price}</span></div>
            </Link>
            <div className="btn">
                        <ButtonAddCart id={id}/>)
                       </div> 
            </StyledCard>
            
        
    )
}

const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const StyledCard = styled.div`
  //background:green;
  //width:23vw;
  height: 20rem;
  margin: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //padding: 0 2rem;
  ${media.tablet} {
    //background:red;
    //margin:1rem;
    //border:1px solid yellow;
    height: 22rem;
    margin: 2rem 2rem;
  }
  .link {
    width: 100%;
    height: 80%;
    text-decoration: none;
    color: inherit;
    //background:yellow;
    .image {
      width: 100%;
      height: 72%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .name {
      width: 100%;
      height: 28%;
      display: flex;
      justify-content: center;
      align-items: center;
      //background:lightblue;
      font-size: calc(0.8rem + 6 * ((100vw - 320px) / 680));
      span {
        text-align: center;
      }
      ${media.tablet} {
        font-size: calc(0.6rem + 6 * ((100vw - 320px) / 680));
      }
      ${media.laptop} {
        font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
      }
    }
  }

  .btn {
    //background:green;
    //background:violet;
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ProductCard;
