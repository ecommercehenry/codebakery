import React, { useState } from "react"
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct"
import './FormCRUD.css'
import Creatable from 'react-select/creatable';
import { useMutation, useQuery } from '@apollo/client';
import getAllCategories from "../../../Apollo/queries/getAllCategories";


function FormCRUD(props) {
   /* const { name, stock, categories, price, img, handlerOnClick,id } = props; */
  //  console.log("------------------------"+ props.stock)

  const { name, stock, categories2, price, img, handlerOnClick, id } = props;
  const categories = useQuery(getAllCategories);


  const [category,setCategory] = useState('');
  let [selected,setSelected] = useState('');


  const categoryHandler = (option,value) => {                        
    switch (option) {
        case 'options':
            setCategory(value)
    }
    setSelected([...value])
  }

  category && (selected = selected.map(elem=>elem.value));
  selected = selected.toString();

  // Sets every existing category as an option for select
  let options =  [];
  categories['data'] && categories['data']['getAllCategories'].map(elem=> options.push({label:elem.name,value:elem.name}))
  
  const [inputs, setInputs] = useState({    
    //como estado inicial toma de las props del componente padre TextCRUD
    name, 
    // description: "", -----> FRONT:-----> falta agregar descripcion del producto para poder editarla?
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

  const [modificar, { data, loading, error }] = useMutation(MODIFY_PRODUCT, {variables: {id: id, description: inputs.description, price: inputs.price, stock: inputs.stock, imagen:inputs.image}})
 
  function handlerSubmit(e){
    e.preventDefault()
    modificar()
  }
  
  return (
    <form 
    
    onSubmit={handlerSubmit}
    className="element-container">
      <div className="info-container">
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
        <Creatable
              onChange={value => categoryHandler('options',value)} 
              options={options}
              value={category}
              className="inputs"
              isMulti
          />
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
}

export default FormCRUD;
