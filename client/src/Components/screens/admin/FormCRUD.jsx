import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import MODIFY_PRODUCT from "../../../Apollo/mutations/modifyProduct";
// import './FormCRUD.css'
import { useDispatch, useSelector } from "react-redux";
import { modifyProduct } from "../../../actions/modifyProductAction";
import allProducts from "../../../Apollo/queries/allProducts";
// import { addCategoryToProductAction } from "../../../actions/addCategoryToProductAction";
import styled from "styled-components";
import { HiOutlineSave, HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";

import '../../../Assets/toast.css'


toast.configure()

function FormCRUD({ id, handlerOnClick }) {
  const product = useSelector((state) => state.productsReducer.products[id]);
  const [newCategory, setNewCategory] = useState(false);
  const [valueNewCategory, setValueNewCategory] = useState("");
  function onChangeNewCategory(e) {
    setValueNewCategory(e.target.value);
  }
  const [inputs, setInputs] = useState({
    name: product.name,
    description: product.description,
    categories: product.categories,
    stock: product.stock,
    price: product.price,
    discount: product.discount,
    image: product.image,
  });
  const dispatch = useDispatch();
  function inputHandler(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  const [modificar, { data, loading }] = useMutation(MODIFY_PRODUCT,
    {
      refetchQueries: [{ query: allProducts }],
    });


  useEffect(() => {
    if (data) {
      dispatch(modifyProduct(id, data.modifyProduct));
    }
  }, [data,dispatch,loading, id]);
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
          discount: inputs.discount
        },
      },
    });
    toast("producto modificado!");
    handlerOnClick();
  }

  if (inputs) {
    return (
      
        <StyledFormCRUD>
          <td width="5%">
            <img src={product.image} alt="imagen" style={{width: "4rem", marginLeft: "0.5rem"}}/>
          </td>

          <td width="30%">
            <textarea value={inputs.name} name="name" onChange={inputHandler} />
          </td>

          <td width="25%">
            <div className="cat-container">
              {inputs.categories.map((cat, i) => (
                  <span className="cat-tag">
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
                  </span>
               /*  </div> */
              ))}
              {newCategory ? (
                <>
                <div id="cat-input">
                  <input
                    id="new-cat"
                    value={valueNewCategory}
                    name="newCategory"
                    onChange={onChangeNewCategory}
                  ></input>
                  <button
                    id="add-new-cat"
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
                    Add
                  </button>
                  </div>
                  </>
              ) : (
                <button className="add-btn"onClick={() => setNewCategory(true)}> Add new category</button>
              )}
              </div>
          </td>
          <td width="10%">
            <input
              type="number"
              value={inputs.stock}
              name="stock"
              min="0"
              onChange={inputHandler}
            />
          </td>
          <td width="10%">
            <input
              value={inputs.price}
              name="price"
              type="number"
              min="0"
              onChange={inputHandler}
            />
          </td>

          <td width="5%" id="buttons">
            <div>
              <button onClick={submitHandler} id="save" style={{background: "none", width: "fit-content"}}> 
                <HiOutlineSave  size="1.5rem" color="green" />
              </button>
              <button onClick={handlerOnClick} id="close">
                <HiOutlineX size="1.5rem" color="red" />
              </button>
            </div>
          </td>
        </StyledFormCRUD>
        
    );
  } else {
    return "loading";
  }
}

export default FormCRUD;

const StyledFormCRUD = styled.tr`
tbody{
  display: table;
  overflow-y: scroll;
  height: 83vh;
  width: 100%;
}

#cat-input{
  margin-top: 0.4em;
  height: 2em;
  max-width: 90%;
  min-width: 40%;
  display: flex;
  border-radius: 10px;
  border: 1px solid gray;

  #new-cat{
  min-width: 40%;
  border: none;
  border-radius: 10px;
  padding-left: 0.5em;

  &:focus{
    outline: none;
  }
  }

  #add-new-cat{
  height: 100%;
  background:#a36cc390;
  border:none;
  border-radius: 10px;
  padding: 0 0.5em;
}
}



.add-btn{
  margin: 0.5em;
  background:#a36cc390;
  border:none;
  border-radius: 10px;
  padding: 0 0.5em
}



.cat-container{
  display: flex;
  flex-wrap: wrap;

  .cat-tag{
  display: flex;
  width: fit-content;
  align-items: center;
  background: hsl(0, 0%, 90%);
  padding-left: 0.2em;
  height: 2em;
  margin: 0.1em;
  border-radius: 10px;

  button{
    height: 100%;
    padding: 0 0.3em;
    padding-bottom: 0.01em;
    background: none;
    border: none;
    margin: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover{
      background-color: #FFBDAD;
    color: #DE350B;
    }
  }
}
}


#buttons{
  background: white;
  
  div{
  margin: auto;
  display: flex;
  justify-content: space-around;

    button{
    background: none;
    border: none;
  }
  }
  
}

textarea{
  width: 100%;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 0.4em;

  &:focus{
    outline: none;
  }
}

input{
  width: 90%;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 0.4em;

  &:focus{
    outline: none;
  }
}
`;