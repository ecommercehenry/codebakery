// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React, { useState } from "react";
import "./FormCRUD.css";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct"
import { useMutation, useQuery } from '@apollo/client';

// import getAllCategories from "../../Apollo/queries/getAllCategories";
// import styled from 'styled-components';
import Creatable from 'react-select/creatable';//para colocar categorias

function FormCRUD(props) {
  const { name, stock,description, categories, price, img, handlerOnClick, id } = props;
  const [modificar, { data, loading, error }] = useMutation(MODIFY_PRODUCT)
  const [category, setCategory] = useState("");
  let [selected, setSelected] = useState("");
  const [preview, setPreview] = useState("");
  const [info, setInfo] = useState({
    name, //como estado inicial toma de las props del componente padre TextCRUD
    description,
    category: categories,
    stock,
    price,
    image: img,
  });
  
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
          name:info.name, 
          description: info.description, 
          price: info.price, 
          stock: info.stock, 
          image:info.image}
        }
      }
      )

  };


  const imageHandler = (e) => {
    const image = e.target.files[0];
    previewImage(image);
  };
  const previewImage = (image) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
      setInfo({ ...info, image: fileReader.result });
    };
  };

  const inputHandler = (e) => {
    return setInfo({ ...info, [e.target.name]: e.target.value });
  };
  //--------------------
  const categoryHandler = (option, value) => {
    switch (option) {
      case "options":
        setCategory(value);
    }
    setSelected([...value]);
  };
  category && (selected = selected.map((elem) => elem.value));
  selected = selected.toString();
  let options = [];
  categories["data"] &&
    categories["data"]["getAllCategories"].map((elem) =>
      options.push({ label: elem.name, value: elem.name })
    );
  //-----------------
  return (
    <form onSubmit={submitHandler} className="F-element-container">
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} alt="imagen" />
        <div className="chargeImage">
          <input type="file" name="image-product" onChange={imageHandler} />
        </div>

        <div className="F-name-container">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={inputHandler}
          />
        </div>

        <div className="F-name-container">
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            name="description"
            value={info.description}
            onChange={inputHandler}
          />
        </div>

        <div className="F-stock-container">
          <label>Stock</label>
          <input
            name="stock"
            type="number"
            // placeholder={stock}
            value={info.stock}
            onChange={inputHandler}
          />
        </div>

        <div className="F-price-container">
          <p>Price</p>
          <input
            name="price"
            type="number"
            // placeholder={price}
            value={info.price}
            onChange={inputHandler}
          />
        </div>

        {/* <div className="categories">
          <label>Categories</label>
          <Creatable
            onChange={(value) => categoryHandler("options", value)}
            options={options}
            value={category}
            className="inputs"
            isMulti
          />
        </div> */}

        <div className="F-edit-button">
          <button type="submit">edit</button>
        </div>
        <div className="F-remove-button">
          <button onClick={handlerOnClick}>cancel</button>
        </div>
      </div>
    </form>
  );
}

export default FormCRUD;
