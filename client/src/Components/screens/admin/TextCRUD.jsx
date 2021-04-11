
import React, { useEffect, useState } from "react"
// import allProducts from "../../../Apollo/queries/allProducts"
import './TextCRUD.css'
import FormCRUD from "./FormCRUD"

// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function TextCRUD({ img, name, stock, categories, price, key }) {
  const [show, setShow] = useState(true);

  //harcodeo pa que aparezca algo... 
  categories = [{id: 1, name:"postres "},{id: 2, name:"masas finas "} ]
  stock = 10
  //fin del hardcodeo.........
  function handlerOnClick() {
    setShow(!show);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", show);
  }

  return (
    <div className="product-container" onDoubleClick={handlerOnClick}>
      {show ? (
        <div className="element-container" id={key}>
          <div className="image-container">
            <p>Product</p>
            <img src={img} alt="" />
          </div>
          <div className="name-container">
            <p>Name</p>
            <p>{name}</p>
          </div>
          <div className="stock-container">
            <p>Stock</p>
            {stock}
          </div>
          <div className="category-container">
            <p>Categories</p>
            {categories.map((element) => (
              <span key={element.id}>{element.name}</span>
            ))}
          </div>
          <div className="price-container">
            <p>Price</p>
            <p>{price} </p>
          </div>
          <div className="edit-button">
            <p>edit</p>
          </div>
          <div className="remove-button">
            <p>remove</p>
          </div>
        </div>
      ) : (
        <FormCRUD
          key={key}
          img={img}
          name={name}
          stock={stock}
          categories={categories}
          price={price}
          handlerOnClick={handlerOnClick}
        />
      )}
    </div>
  );
}

export default TextCRUD;
