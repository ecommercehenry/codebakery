import React from "react";
import "./FormCategories.css";
import { useForm } from "react-hook-form";

const FormCategories = () => {
  const { register, handleSubmit } = useForm();

  // agregar la mutation pertinente

  return (
    <>
      <form
        className="form-container"
        onSubmit={handleSubmit((data) => {
          
        })}
      >
        <div className="input-container">
          <div className="file-input">
            <input type="file" id="file" className="file" />
            <label for="file">
              Upload Image
              <p className="file-name"></p>
            </label>
          </div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true, maxLength: 50 })}
            placeholder="Name"
          />
          <label>Categories</label>
          <select name="categories">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

          <div className="input-number-container">
            <label>Stock</label>
            <input
              className="input-number"
              type="number"
              name="stock"
              {...register("stock", { required: true, maxLength: 50 })}
              placeholder="Stock"
            />
            <label>Price</label>
            <input
              className="input-number"
              type="number"
              name="price"
              {...register("price", { required: true, maxLength: 50 })}
              placeholder="Price"
            />
          </div>
          <div>
            <button className="btn-submit" type="submit">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCategories;
