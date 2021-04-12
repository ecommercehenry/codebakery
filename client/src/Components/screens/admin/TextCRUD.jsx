import React, { useEffect, useState } from "react";
// import allProducts from "../../../Apollo/queries/allProducts"
import './TextCRUD.css'
import FormCRUD from "./FormCRUD"
import { useSelector } from "react-redux";

// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function TextCRUD({ id }) {
  const product = useSelector(state => state.productsReducer.products[id])
  const [show, setShow] = useState(true);
  function handlerOnClick() {
    setShow(!show);
  }

  {/* <div className="product-container-edit" onDoubleClick={handlerOnClick}>
      {show ? (
        <div className="element-container" id={id}>
           */}

  if(product){
    return (
      <div className="product-container" onDoubleClick={handlerOnClick}>
        {show ? (
          <div className="element-container" id={id}>
            <div className="info-container">
            <div className="image-container">
              <p>Product</p>
              <img src={product.image} alt="" />
            </div>
            <div className="name-container">
              <p>Name</p>
              <p>{product.name}</p>
            </div>
            <div className="stock-container">
              <p>Stock</p>
              <p>{product.stock}</p>
            </div>
            <div className="category-container">
              <p>Categories</p>
              {product.categories.map((element) => (
                <span key={element.id}>{element.name}</span>
              ))}
            </div>
            <div className="price-container">
              <p>Price</p>
              <p>{product.price} </p>
            </div>
            <div className="edit-button">
              <p>edit</p>
            </div>
            <div className="remove-button">
              <p>remove</p>
              </div>
            </div>
          </div>
        ) : (
          <FormCRUD
            id={id}
            key={id}
            handlerOnClick={handlerOnClick}
          />
        )}
      </div>
    );
  }else{
    return "Loading"
  }
}

export default TextCRUD;
