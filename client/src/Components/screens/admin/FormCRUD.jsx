// import { useQuery } from "@apollo/client"
// import getData from "../Apollo/queries/productById"
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import React, { useState } from "react";
import "./FormCRUD.css";
import { useForm } from "react-hook-form";

function FormCRUD(props) {
  const { register, handleSubmit } = useForm();
  const { name, stock, categories, price, img } = props;

  const onSubmit = (data) => console.log(data);

  return (
    <form className="F-element-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="F-image-container">
        <p>Product</p>
        <img src={img} alt="imagen" />
        <button onClick="">Edit Photo</button>
      </div>

      <div className="F-name-container">
        <p>Name</p>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder={name}
        />
      </div>
      <div className="F-stock-container">
        <p>Stock</p>
        <input type="number" {...register("stock", { required: true })} />
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
        <input type="number" {...register("price", { required: true })} />
      </div>
      <div className="F-edit-button">
        <button type="submit">edit</button>
      </div>
      <div className="F-remove-button">
        <button onClick="">cancel</button>
      </div>
    </form>
  );
}

export default FormCRUD;
