import { useQuery } from "@apollo/client"
import React, { useEffect } from "react"
import allProducts from "../../../Apollo/queries/allProducts"
import './TextCRUD.css'
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function TextCRUD() {

  // original
  const { data } = useQuery(allProducts);

  useEffect(() => {}, [data]);

  const clickHandler = (e) =>{
    e.preventDefault()
    console.log(e)
      }
  return (
    <div className="product-container">
      {data ? (
        data.product.map((item) => (
          <div className="element-container" key={item.id}>
            <div className="image-container">
              <p>Product</p>
              <img src={item.image} alt=''/>
            </div>
            <div className="name-container">
              <p>Name</p>
              {item.name}
            </div>
            <div className="stock-container">
              <p>Stock</p>
              {item.stock}
            </div>
            <div className="category-container">
              <p>Categories</p>
              { item.categories.map(element => <p key={element.id}>{element.name}</p>)}
            </div>
            <div className="price-container" >
              <p>Price</p>
              <p onClick={clickHandler}>{item.price} </p>
            </div>
            <div className="edit-button">
              <p >edit</p>
            </div>
            <div className="remove-button">
              <p>remove</p>
            </div>
          </div>
        ))
      ) : (
        <p>loading</p>
      )}
      
    </div>
  );
}

export default TextCRUD;
