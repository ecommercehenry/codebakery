import React, { useState } from "react"
import { useMutation } from "@apollo/client";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct"
import './FormCRUD.css'

function FormCRUD(props) {
   const { name, stock, categories, price, img, handlerOnClick,id } = props;
  //  console.log("------------------------"+ props.stock)

  
  const [inputs, setInputs] = useState({    
    //como estado inicial toma de las props del componente padre TextCRUD
    name, 
    description: "",
    category: categories,
    stock,
    price,
    image: img,
  });
  function inputHandler(e){
    setInputs({ 
      ...inputs, 
      [e.target.name]: e.target.value 
    });
  }

  const [modificar, { data, loading, error }] = useMutation(MODIFY_PRODUCT)
 
 /**
   * When edit button is clicked
   */
  function submitHandler(e){
    e.preventDefault();
    modificar({variables: 
      {
        id, 
        data:
        {
          name:inputs.name, 
          price:inputs.price , 
          stock:inputs.stock , 
          image:inputs.image}
        }
      }
      )

  };
  
  return (
    <form 
    onSubmit={submitHandler}    
    className="F-element-container">
      <div className="F-image-container">
        <label>Product</label>
        <img src={img} alt="imagen" />
        <button type="file">Edit Photo</button>
      </div>

      <div className="F-name-container">
        <label>Name</label>
        <input 
          value={inputs.name} 
          name="name"
          onChange={inputHandler}  
        />
      </div>
      <div className="F-stock-container">
        <label>Stock</label>
        <input 
          type="number"
          value={inputs.stock}         
          name="stock"
          onChange={inputHandler}  
       />
      </div>

      <div className="F-category-container">
        <label>Categories</label>
        <div className="F-categories">
          {categories.map((cat) => (
            <>
              {/* <input value = {cat}/> */}
              <span>
                {cat.name}
                <button> x </button>
              </span>
            </>
          ))}
          <button> add </button>
        </div>
      </div>
      <div className="F-price-container">
        <label>Price</label>
        <input 
           value={inputs.price}          
           name="price"
           type="number"
           onChange={inputHandler} />
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

