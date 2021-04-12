// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React, {useState} from "react"
import './FormCRUD.css'
import Creatable from 'react-select/creatable';
import { useMutation, useQuery } from '@apollo/client';
import getAllCategories from "../../../Apollo/queries/getAllCategories";


function FormCRUD(props) {
  // props = {
  //   name: "olla",
  //   stock: 2,
  //   categories: ["cat1", "cat2", "cat3"],
  //   price: 23.99,
  //   img: "URL",
  // };

  const { name, stock, categories2, price, img, handlerOnClick } = props;
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

  return (
    <form 
    
    className="element-container">
      <div className="info-container">
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} alt="imagen" />
        <button onClick="">Edit Photo</button>
      </div>

      <div className="F-name-container">
        <p>Name</p>
        <textarea value={name} />
      </div>
      <div className="F-stock-container">
        <p>Stock</p>
        <input type="number" value={stock} />
      </div>

      <div className="categories">
          <label>Categories</label>
          <Creatable
              onChange={value => categoryHandler('options',value)} 
              options={options}
              value={category}
              className="inputs"
              isMulti
          />
      </div>
      <div className="F-price-container">
        <p>Price</p>
        <input type="number" value={price} />
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

export default FormCRUD

