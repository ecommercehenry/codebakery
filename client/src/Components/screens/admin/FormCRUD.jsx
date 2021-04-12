// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React from "react"
import './FormCRUD.css'

function FormCRUD(props) {
  // props = {
  //   name: "olla",
  //   stock: 2,
  //   categories: ["cat1", "cat2", "cat3"],
  //   price: 23.99,
  //   img: "URL",
  // };

  const { name, stock, categories, price, img, handlerOnClick } = props;

  return (
    <form 
    
    className="element-container">
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} alt="imagen" />
        <button onClick="">Edit Photo</button>
      </div>

      <div className="F-name-container">
        <p>Name</p>
        <input value={name} />
      </div>
      <div className="F-stock-container">
        <p>Stock</p>
        <input value={stock} />
      </div>

      <div className="F-category-container">
        <p>Categories</p>
        <div className="F-categories">
          {categories.map((cat) => (
            <>
              {/* <input value = {cat}/> */}
              <span>
                {cat}
                <button> x </button>
              </span>
            </>
          ))}
          <button onClick=""> add </button>
        </div>
      </div>
      <div className="F-price-container">
        <p>Price</p>
        <input value={price} />
      </div>
      <div className="F-edit-button">
        <button type="submit" >edit</button>
      </div>
      <div className="F-remove-button">
        <button onClick={handlerOnClick}>cancel</button>
      </div>
    </form>
  );
}

export default FormCRUD

