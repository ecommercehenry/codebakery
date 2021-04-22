import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct";
// import './FormCRUD.css'
import { useDispatch, useSelector } from "react-redux";
import { modifyProduct } from "../../../actions/modifyProductAction";
import { addCategoryToProductAction } from "../../../actions/addCategoryToProductAction";
import styled from "styled-components";
import { HiOutlinePencil, HiOutlineSave, HiOutlineX } from "react-icons/hi";

function FormCRUD({ id, handlerOnClick }) {
  const product = useSelector((state) => state.productsReducer.products[id]);
  const [newCategory, setNewCategory] = useState(false);
  const [valueNewCategory, setValueNewCategory] = useState("");
  function onChangeNewCategory(e) {
    setValueNewCategory(e.target.value);
  }
  function submitNewCategory() {
    setInputs(...inputs);
  }
  const [inputs, setInputs] = useState({
    name: product.name,
    description: product.description,
    categories: product.categories,
    stock: product.stock,
    price: product.price,
    image: product.image,
  });
  const dispatch = useDispatch();
  function inputHandler(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  const [modificar, { data, loading, error }] = useMutation(MODIFY_PRODUCT);
  useEffect(() => {
    if (data && !loading) {
      dispatch(modifyProduct(id, data.modifyProduct));
    }
  }, [data]);
  /**
   * When edit button is clicked
   */
  function submitHandler(e) {
    e.preventDefault();
    modificar({
      variables: {
        id,
        data: {
          name: inputs.name,
          price: Number(inputs.price),
          stock: Number(inputs.stock),
          image: inputs.image,
          categories: inputs.categories.map((c) => c.name),
        },
      },
    });
    alert("producto modificado!");
    handlerOnClick();
  }

  if (inputs) {
    return (
      <StyledFormCRUD onSubmit={submitHandler}>
        <div className="F-element-container" id={id}>
        <div className="F-info-container">
          <div className="F-image-container">
            <label>Product</label>
            <img src={product.image} alt="imagen" />
          </div>

          <div className="F-name-container">
            <label>Name</label>
            <textarea value={inputs.name} name="name" onChange={inputHandler} />
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
                  <p>
                    {cat.name}
                    <button
                      onClick={() => {
                        setInputs({
                          ...inputs,
                          categories: inputs.categories.filter(
                            (ca) => ca.name !== cat.name
                          ),
                        });
                      }}
                    >
                      {" "}
                      x{" "}
                    </button>
                  </p>
                </div>
              ))}
              {newCategory ? (
                <div className="newCategory">
                  <label>New category</label>
                  <input
                    value={valueNewCategory}
                    name="newCategory"
                    onChange={onChangeNewCategory}
                  />
                  <button
                    onClick={() => {
                      setInputs({
                        ...inputs,
                        categories: [
                          ...inputs.categories,
                          { name: valueNewCategory },
                        ],
                      });
                      setValueNewCategory("");
                      setNewCategory(false);
                    }}
                  >
                    Add new category
                  </button>
                </div>
              ) : (
                <button onClick={() => setNewCategory(true)}> add </button>
              )}
            </div>
          </div>
          <div className="F-price-container">
            <label>Price</label>
            <input
              value={inputs.price}
              name="price"
              type="number"
              onChange={inputHandler}
            />
          </div>

          <div className="F-button">
            <div id="save-side">
              <span style={{color:"green"}}>Save</span>
              <button type="submit" id="save" > 
                <HiOutlineSave  size="1.8rem" color="green" />
              </button>
            </div>

            <div id="close-side">
              <span style={{color:"red"}}>Close</span>
              <button className="cancel" onClick={handlerOnClick} id="close">
                <HiOutlineX size="1.8rem" color="red" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </StyledFormCRUD>
    );
  } else {
    return "loading";
  }
}

export default FormCRUD;

const StyledFormCRUD = styled.form`

  margin: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(236, 227, 250);
  border-radius: 40px;
  margin-top: 1.5rem;

  .F-element-container {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(236, 227, 250);
    border-radius: 40px;
  }
  .F-element-container span {
    font-weight: 700;
    color: rgb(123, 87, 156);
  }
  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 30px;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }

  .F-info-container {
    height: 80%;
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  label {
    font-weight: 700;
    color: rgb(123, 87, 156);
  }

  .F-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-right: 2rem;
  }
  .F-image-container button {
    border-radius: 18px;
    border: none;
    background-color: rgb(87, 46, 126);
    color: rgb(226, 213, 238);
  }
  .chargeImage {
    max-width: 2rem;
  }

  .F-name-container {
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 100%;
  }
  .F-name-container textarea {
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    border-radius: 1.5rem;
    border: 1.5px solid;
    border-color: grey;
    width: 18vw;
    height: 80%;
    text-overflow: ellipsis;
    background-color: rgb(236, 227, 250);
  }
  .F-stock-container {
    display: flex;
    flex-direction: column;
    width: 5rem;
    height: 100%;
  }
  .F-stock-container input {
    margin-top: 0.5rem;
    width: 80%;
    height: 4rem;
    border: 1.5px solid;
    border-color: grey;
    border-radius: 1.5rem;
    background-color: rgb(236, 227, 250);
    text-align: center;
  }
  .F-category-container {
    width: 10rem;
  }
  .F-categories {
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    border: 1.5px solid grey;
    border-radius: 35px;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .F-categories p {
    background-color: rgb(87, 46, 126);
    color: rgb(203, 181, 224);
    font-size: 0.7rem;
    width: fit-content;
    margin: 0;
    margin-top: 3px;
    margin-right: 3px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    padding: 3px;
    align-items: center;
  }
  .F-categories p button {
    background-color: rgb(126, 96, 155);
    border: none;
    color: beige;
  }
  .F-category-container button {
    border-radius: 15px;
    padding: 1px;
    margin-left: 6px;
    height: fit-content;
    background-color: rgba(128, 128, 128, 0.363);
    border: none;
    padding: 6px;
  }
  .newCategory input {
    border: 1.5px solid;
    border-color: grey;
    border-radius: 1.5rem;
    background-color: rgb(203, 181, 224);
  }
  .newCategory button {
    border: 1.5px solid;
    border-color: grey;
    border-radius: 1.5rem;
    background-color: rgb(40, 19, 59);
    color: rgb(199, 177, 219);
    padding: 6px;
    margin-top: 2px;
  }

  .F-price-container {
    display: flex;
    flex-direction: column;
    width: 5rem;
  }
  .F-price-container input {
    margin-top: 0.5rem;
    width: 100%;
    height: 4rem;
    padding: 10px;
    border: 1.5px solid;
    border-color: grey;
    border-radius: 1.5rem;
    background-color: rgb(236, 227, 250);
  }
  .F-button {
    height: 100%;
    display: flex;
    align-self: center;
    justify-self: center;

    #save-side{
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 1rem;

      #save{
        margin: auto;
        box-shadow: none;
        transform: none;
        padding-bottom: 0.2rem;
      }
    }

    #close-side{
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;

      #close{
        margin: auto;
      }
    }

    button{
      width: fit-content;
      padding: 0;
      background: transparent;
      border: none;
      margin: 0;
    }
  }
`;
