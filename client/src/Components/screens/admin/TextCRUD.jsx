import React, { useEffect, useState } from "react";
// import allProducts from "../../../Apollo/queries/allProducts"
// import './TextCRUD.css'
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import FormCRUD from "./FormCRUD";
import { useSelector } from "react-redux";
import styled from "styled-components";

function TextCRUD({ id }) {
  const product = useSelector((state) => state.productsReducer.products[id]);
  const [show, setShow] = useState(true);
  function handlerOnClick() {
    setShow(!show);
  }

  {
    /* <div className="product-container-edit" onDoubleClick={handlerOnClick}>
      {show ? (
        <div className="element-container" id={id}>
           */
  }

  if (product) {
    return (
      <>
        {show ? (
          <StyledTextCRUD onDoubleClick={handlerOnClick}>
            <div className="element-container" id={id}>
              <div className="info-container">
                <div className="image-container">
                  <span>Product</span>
                  <img src={product.image} alt="" />
                </div>
                <div className="name-container">
                  <span>Name</span>
                  <p>{product.name}</p>
                </div>
                <div className="stock-container">
                  <span>Stock</span>
                  <p>{product.stock}</p>
                </div>
                <div className="category-container">
                  <span>Categories</span>
                  <div className="container-mapeo">
                    {product.categories.map((element) => (
                      <p key={element.id}>{element.name}</p>
                    ))}
                  </div>
                </div>
                <div className="price-container">
                  <span>Price</span>
                  <p>{product.price} </p>
                </div>
                <div className="edit-button">
                  <button onClick={handlerOnClick}>Edit</button>
                </div>
              </div>
            </div>
          </StyledTextCRUD>
        ) : (
          <FormCRUD id={id} key={id} handlerOnClick={handlerOnClick} />
        )}
      </>
    );
  } else {
    return "Loading";
  }
}

export default TextCRUD;

const StyledTextCRUD = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.5rem;
  height: 100%;

  .element-container {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(236, 227, 250);
    border-radius: 40px;
  }
  .element-container span {
    font-weight: 700;
    color: rgb(123, 87, 156);
  }
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
  .name-container {
    width: 250px;
    height: 80px;
    overflow: hidden;
  }
  .name-container p {
    margin: 0;
    color: grey;
    font-weight: 500;
  }

  .stock-container {
    width: 5rem;
    height: 80px;
  }
  .stock-container p {
    display: flex;
    justify-content: center;
    color: grey;
    font-weight: 500;
  }
  .category-container {
    margin-left: 50px;
    width: 10rem;
    height: 80px;
    overflow: hidden;
  }
  .container-mapeo {
    display: flex;
    flex-direction: column;
    color: grey;
    font-weight: 500;
  }
  .container-mapeo p {
    margin-bottom: 0;
  }
  .price-container {
    width: 7rem;
    height: 80px;
  }
  .price-container p {
    display: flex;
    justify-content: flex-start;
    color: grey;
    font-weight: 500;
  }

  .info-container {
    height: 80%;
    width: 90%;
    display: flex;
    align-items: flex-start;
  }
  .edit-button {
    width: 5rem;
    height: 80px;
    padding: 0.5rem;
    margin-top: 20px;
    margin-left: 20px;
  }

  .edit-button button {
    border-radius: 30px;
    color: rgb(78, 160, 78);
    padding: 4px;
    background-color: rgba(117, 250, 161, 0.328);
  }
  .edit-button button:hover {
    border-radius: 30px;
    color: rgb(78, 160, 78);
    padding: 6px;
    color: rgb(232, 208, 243);
    background-color: rgb(55, 10, 85);
  }
`;
