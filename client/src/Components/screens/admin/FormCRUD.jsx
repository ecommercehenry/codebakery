import React, { useEffect, useState } from "react"
import { useMutation } from "@apollo/client";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct"
import './FormCRUD.css'
import { useDispatch, useSelector } from "react-redux";
import { modifyProduct } from "../../../actions/modifyProductAction";
import {addCategoryToProductAction} from "../../../actions/addCategoryToProductAction"

function FormCRUD({id, handlerOnClick}) {
  const product = useSelector(state => state.productsReducer.products[id])
  const [newCategory, setNewCategory] = useState(false)
  const [valueNewCategory, setValueNewCategory] = useState("")
  function onChangeNewCategory(e){
    setValueNewCategory(e.target.value)
  }
  function submitNewCategory(){
    setInputs(...inputs, )
  }
  const [inputs, setInputs] = useState({    
    name:product.name, 
    description: product.description,
    categories: product.categories,
    stock: product.stock,
    price: product.price,
    image: product.image,
  });
  const dispatch = useDispatch()
  function inputHandler(e){
    setInputs({ 
      ...inputs, 
      [e.target.name]: e.target.value 
    });
  }
  const [modificar, { data, loading, error }] = useMutation(MODIFY_PRODUCT)
  useEffect(()=>{
    if(data && !loading){
      dispatch(modifyProduct(id,data.modifyProduct))
    }
  },[data])
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
          price:Number(inputs.price) , 
          stock:Number(inputs.stock) , 
          image:inputs.image,
          categories:inputs.categories.map(c=>c.name)}
        }
      }
    )
    alert("producto modificado!")

  };
  
  if(inputs){
    return (
      <form 
      onSubmit={submitHandler}    
      className="containerForm">
        <div className="info-container">
        <div className="F-image-container">
          <label>Product</label>
          <img src={product.image} alt="imagen" />
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
            {inputs.categories.map((cat, i) => (
              <div key={i}>
                <span>
                  {cat.name}
                  <button onClick={()=>{
                    setInputs({...inputs, categories:inputs.categories.filter(ca=>ca.name !== cat.name)})
                  }}> x </button>
                </span>
              </div>
            ))}
            {newCategory? <div className="F-price-container">
                    <label>New category</label>
                    <input 
                      value={valueNewCategory}          
                      name="newCategory"
                      onChange={onChangeNewCategory} />
                    <button onClick={()=>{
                       setInputs({...inputs, categories:[...inputs.categories, {name:valueNewCategory}]})
                       setValueNewCategory("")
                       setNewCategory(false)
                    }}>Add new category</button>
                  </div> : <button onClick={()=>setNewCategory(true)}> add </button>}
            
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
        </div>
      </form>
    );
  }else{
    return "loading"
  }
}

export default FormCRUD;
