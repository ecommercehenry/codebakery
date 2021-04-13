import React, { useEffect, useState } from "react";
// import allProducts from "../../../Apollo/queries/allProducts"
import './TextCRUD.css'
import FormCRUD from "./FormCRUD"
import { useSelector } from "react-redux";

// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

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
      <div className="product-container" onDoubleClick={handlerOnClick}>
        {show ? (
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
                
                <button>Edit</button>
              </div>
              
            </div>
          </div>
        ) : (
          <FormCRUD id={id} key={id} handlerOnClick={handlerOnClick} />
        )}
      </div>
    );
  } else {
    return "Loading";
  }
}

export default TextCRUD;
