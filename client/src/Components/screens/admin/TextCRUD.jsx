import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import allProducts from "../../../Apollo/queries/allProducts"
import './TextCRUD.css'

// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"

function TextCRUD({show}) {

  // original
  const { data } = useQuery(allProducts);
  useEffect(() => {}, [data]);

  const [flag, setFlag] = useState(true)
  const clickHandler = (e) =>{
    e.preventDefault()
    if (flag === false){
      setFlag(true)
    }else{
      setFlag(false)
    }
    console.log(e)
      }
  return (
    <div className="product-container">
      {data ? (
        data.product.map((item) => (
          <div 
          className="element-container" 
          key={item.id}
          onClick={show}>
            <div className="image-container">
              <p>Product</p>
              <img src={item.image} alt=''/>
            </div>
            <div className="name-container">
              <p onClick={clickHandler}>Name</p>
              {flag ? <p>{item.name}</p> : <input type='text' value={item.name}></input>}
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
              <p >{item.price} </p>
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
