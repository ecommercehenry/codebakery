// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React from "react"
import './FormCRUD.css'

function FormCRUD(props) {
  props = {
    name:"olla",
    stock: 2,
    categories: ["cat1", "cat2", "cat3"],
    price: 23.99,
    img: "URL"
  };

  const {name, stock, categories, price, img} = props

  
  return (
    <div className="F-element-container">
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} />
        <button onClick ="" >Edit Photo</button>
      </div>

      <div className="F-name-container">
      <span>Name</span>
      <input
        value = {name}
      />
        
      </div>
      <div className="F-stock-container">
       
        <p>Stock</p>
      <input
          value = {stock}
        />
        
      </div>
      <div className="F-category-container">
        <p>Categories</p>
        {categories.map(cat => <input value = {cat}/>)}
       
        
      </div>
      <div className="F-price-container">
        <p>Price</p>
        <input
          value = {price}
        />
      </div>
      <div className="F-edit-button">
        <button onClick="" >edit</button>
        
      </div>
      <div className="F-remove-button">
      <button onClick="" >cancel</button>
      </div>
    </div>
  );
  }

export default FormCRUD

