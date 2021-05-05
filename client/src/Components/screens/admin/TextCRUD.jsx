import React, { useState } from "react";
// import allProducts from "../../../Apollo/queries/allProducts"
// import './TextCRUD.css'
// import UPDATE_CATEGORY from "../Apollo/mutations/updateCategory"
import FormCRUD from "./FormCRUD";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { HiOutlinePencilAlt } from "react-icons/hi";

function TextCRUD({ id }) {
  const product = useSelector((state) => state.productsReducer.products[id]);
  const [show, setShow] = useState(true);
  function handlerOnClick() {
    setShow(!show);
  }

  if (product) {
    return (
      <>
        {show ? (
          <StyledTableRow onDoubleClick={handlerOnClick}>
            <tr>
            <td width="1%">
              <img src={product.image} alt="" style={{ width: "4rem", marginLeft:"0.3rem", marginRight:"1em" }} />
            </td>
            <td width="30%" style={{textAlign:"left"}}>{product.name}</td>
            <td width="30%" style={{textAlign:"left"}}>
              {product.categories.map((element, idx, arr) => 
                  element.name
              ).join(', ')}
            </td>
            <td width="10%">{product.stock}</td>
            <td width="10%">{product.price}</td>
            <td width="10%" id="edit-btn">
              <div>
              <button  onClick={handlerOnClick}>
                <HiOutlinePencilAlt size="1.5rem" color="green" />
              </button>
              </div>
            </td>
            </tr>
          </StyledTableRow>
        ) : (
          <FormCRUD id={id} key={id} handlerOnClick={handlerOnClick} />
        )}
      </>
    );
  } else {
    return "Loading";
  }
}

export default TextCRUD;

const StyledTableRow = styled.tr`
#edit-btn{
  padding: auto;


  div{
    position: relative;
    display: flex;
    justify-content: center;

    button{
    background: none;
    border: none;
  }
  }
  
  
}
`

