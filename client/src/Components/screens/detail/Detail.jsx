import React, { useEffect } from "react";
import "./DetailStyles.css";
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import getData from "../../../Apollo/queries/productById";
import { useQuery } from "@apollo/client";
import ButtonAddCart from "../../screens/catalogue/products/grid/ButtonAddCart";
import ProductReview from "../reviews/ProductReview"
import styled from 'styled-components'

const Detail = () => {
  let idCart = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 1000);

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const path = window.location.pathname;
  const id = parseInt(path.split("/").pop(), 10);
  let {status} = useSelector((state)=>state.theme);
  const { data } = useQuery(getData, { variables: { id } }); // <------
  useEffect(() => {}, [data]);

  return (
    <div className="detail-container" >
      <Link to="/catalogue" className="close-btn">
        X
      </Link>
      <StyledDetail className="detailCard" light={status}>
        {data?.productById ? (
          <>
            <div className="imageSide">
              {/*data && data.image && <img src={data.image} style={{maxWidth:"400px", width:"80%"}} alt=""/>*/}
              <img
                src={data?.productById.image}
                style={{ maxWidth: "100%", width: "80%", maxHeight: "100%" }}
                alt=""
              />
            </div>
            <div className="dataSide d-flex position-relative">
              <>
                <span className="title">{data?.productById.name}</span>
                <span className="price">${data?.productById.price}</span>
                <span className="description">
                  {data?.productById.description}
                </span>
                <div className="bottom-btns d-flex justify-content-center">
                  <ButtonAddCart id={parseInt(idCart.id)} />
                  <Link to="/cart" className="purple-btn">
                    <button className="purple-btn">Buy now</button>
                  </Link>
                </div>
              </>
            </div>
            <ProductReview id={parseInt(idCart.id)} />
          </>
        ) : (
          "loading..."
        )}
      </StyledDetail>
    </div>
  );
};

const StyledDetail = styled.div`
  background:${({light})=>light 
  ? 'white' 
  : '#222222'};
  color:${({light})=>light 
  ? 'inherit' 
  : 'white'};

.detail-container {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.76);
    z-index: 2;
    margin: 0 auto;
    right: auto;
    top: 0px;
    border: solid grey;
  }
  
  .detail-container .detailCard {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 90%;
    height: 80%;
    /* background-color: white; */
    margin: auto;
    border-radius: 40px;
  }
  
  .detail-container .detailCard .imageSide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 100%;
    width: 50%;
  }
  
  .detail-container .detailCard .dataSide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    position: relative;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: flex-start;
        -ms-flex-pack: flex-start;
            justify-content: flex-start;
    height: 100%;
    width: 50%;
    padding: 5%;
    padding-right: 10%;
  }
  
  .detail-container .close-btn {
    position: absolute;
    top: 2%;
    right: 2%;
    text-decoration: none;
    color: white;
    font-weight: 600;
    -webkit-transition: 300ms ease;
    transition: 300ms ease;
    z-index: 4;
  }

  .title{
      font-size: 1.5em;
      letter-spacing: 0;
      text-align: center;
  }

  .price{
      font-size: 1.3rem;
      color: #755588;
      font-weight: bold;
  }

  .description{
      font-size: 1.0rem;
      margin: 10% 0;
  }

.up-btns{
    width: 80%
}

.up-btns input {
    width: 40%;
    justify-content: space-evenly!important
}

.bottom-btns{
    margin-top: 4%;
    width: 100%;
    display: flex;
    justify-content: space-evenly !important;
}

.all-btn{
    bottom: 15%;
    width: 80%
}


.grey-btn{
    margin-left: 14px;
    display: block;
    height:  30px;
    width: fit-content!important;
    border-radius: 20px;
    border: none;
    background-color: #CECECE;
    text-decoration: none !important;
    color: black;
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0 5% 0.5% 5%; 
}

.cart-btn{
    background-size: 20px 20px;
}

.select-quantity{
    border-radius: 40px;
    border: solid 1px;
    border-color: #CECECE;
    padding: 2%;
}

.purple-btn {
    display: flex;
    width: fit-content !important;
    border-radius: 40px;
    border: none;
    background-color: #5e3f71;
    text-decoration: none !important;
    color: white;
    font-weight: bold;
    font-size: 1em;
    padding-bottom: 0.5%;
    padding: 0 1em 0 1em;
    transition: background-color 0.2s ease;
    width: fit-content;
    align-items: center;
  }

  .purple-btn:hover {
    background-color: #532c6b;
  }
`;

export default Detail;
