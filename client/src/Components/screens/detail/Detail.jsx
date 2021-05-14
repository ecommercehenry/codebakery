import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getData from "../../../Apollo/queries/productById";
import { useQuery } from "@apollo/client";
import ButtonAddCart from "../../screens/catalogue/products/grid/ButtonAddCart";
import ProductReview from "../reviews/ProductReview";
import styled from "styled-components";


const Detail = ({ refetchCatalogue }) => {
  let idCart = useParams();

  const path = window.location.pathname;
  const id = parseInt(path.split("/").pop(), 10);
  let { status } = useSelector((state) => state.theme);
  const { data } = useQuery(getData, {
    variables: { id },
    fetchPolicy: "no-cache",
  });
  
  useEffect(() =>{
    let button = document.getElementsByClassName(idCart.id)
    if (data) {
      if (data.productById) {
        if (data.productById.stock <= 0) {
          if (button){
            button[0].innerHtml = "Sin Stock"
            button[1].innerHtml = "Sin Stock"
            button[0].innerText = "Sin Stock"
            button[1].innerText = "Sin Stock"
          }
        }
      }
    }
  })

  return (
    <StyledDetailModal className="detail-container">
      <Link to="/catalogue" className="close-btn">
        X
      </Link>
      <StyledDetail className="detailCard" light={status}>
        {data?.productById ? (
          <>
          <div className="detail-content-scroll">
          <div className="detail-content">
            <div className="imageSide">
              <img
                src={data?.productById.image}
                style={{ maxWidth: "100%", width: "80%", maxHeight: "100%" }}
                alt=""
              />
            </div>
            <div className="dataSide d-flex position-relative">
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span className="title">{data?.productById.name}</span>
                  <span className="price">${data?.productById.price}</span>
                </div>
                <span className="description">
                  {data?.productById.description}
                </span>
                <div className="bottom-btns d-flex justify-content-center">
                  <ButtonAddCart
                    className={idCart.id}
                    id={parseInt(idCart.id)}
                    refetchCatalogue={refetchCatalogue}
                  />
                </div>
              </>
            </div>
            <ProductReview id={parseInt(idCart.id)} />
            </div>
            </div>
          </>
        ) : (
          "loading..."
        )}
      </StyledDetail>
    </StyledDetailModal>
  );
};

const StyledDetailModal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.705);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: all 0.3s;

  .close-btn {
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
`;
const StyledDetail = styled.div`
  background: ${({ light }) => (light ? "white" : "#222222")};
  color: ${({ light }) => (light ? "inherit" : "white")};
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 80vh;
  /* background-color: white;  */
  margin: auto;
  border-radius: 40px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  overflow-y: auto;

  .detail-content-scroll{
    display: block;
    width: 100%;
  }

  .detail-content{
    display: flex;
    width: 100%;
    align-items: center;
  }

  .imageSide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }

  .dataSide {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: 5%;
    padding-right: 10%;
  }

  .title {
    font-size: 1.5em;
    letter-spacing: 0;
    text-align: center;
  }

  .price {
    margin-top: 1rem;
    font-size: 1.3rem;
    color: #755588;
    font-weight: bold;
  }

  .description {
    font-size: 1rem;
    margin: 10% 0;
  }

  .up-btns {
    width: 80%;
  }

  .up-btns input {
    width: 40%;
    justify-content: space-evenly !important;
  }

  .bottom-btns {
    margin-top: 4%;
    width: 100%;
    display: flex;
    justify-content: space-evenly !important;
  }

  .all-btn {
    bottom: 15%;
    width: 80%;
  }

  .grey-btn {
    margin-left: 14px;
    display: block;
    height: 30px;
    width: fit-content !important;
    border-radius: 20px;
    border: none;
    background-color: #cecece;
    text-decoration: none !important;
    color: black;
    font-weight: bold;
    font-size: 0.9rem;
    padding: 0 5% 0.5% 5%;
  }

  .cart-btn {
    background-size: 20px 20px;
  }

  .select-quantity {
    border-radius: 40px;
    border: solid 1px;
    border-color: #cecece;
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
    height: 100%;
  }

  .purple-btn:hover {
    background-color: #532c6b;
  }

  @media(max-width: 900px){
    .detail-content-scroll{
      height: 100%;
    }

    .detail-content{
      flex-direction: column;

      .imageSide{
        width: 70%
      }

      .dataSide{
        
        width: 100%;
      }
    }
  }
`;

export default Detail;
