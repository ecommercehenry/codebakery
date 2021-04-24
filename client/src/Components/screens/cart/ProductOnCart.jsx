import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../actions/cartActions";
import styled from "styled-components";
import StockCounter from "./StockCounter";
import deleteIcon from "../../../icons/delete.svg";
import DELETE_PRODUCT_ORDER from "../../../Apollo/mutations/deleteProductOrder";
import { useMutation } from "@apollo/client";

const ProductOnCart = ({
  id,
  image,
  name,
  price,
  stock,
  quantity,
  orderId,
}) => {
  let logged = localStorage.token ? true : false;
  let [newQuantity, setNewQuantity] = useState(quantity);
  const [deleteProductOrder, { data, loading }] = useMutation(
    DELETE_PRODUCT_ORDER
  );

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (!logged) {
      dispatch(removeProductFromCart(id));
    } else {
      deleteProductOrder({
        variables: {
          orderId: orderId,
          productId: id,
        },
      })
      window.location.reload()
    }
  };
  return (
    <StyledProductOnCart>
      <div className="imagee">
        <img src={image} alt={name} />
      </div>
      <div className="namee">{name}</div>
      <div className="quantityy">
        <StockCounter
          id={id}
          newQuantity={newQuantity}
          setNewQuantity={setNewQuantity}
          stock={stock}
          logged = {logged}
          orderId= {orderId}
          productId= {id}
        />
        <div className="stockk">{stock} disponibles</div>
      </div>
      <div className="pricee">
        <div className="subtotal">${newQuantity * price}</div>
        <div className="unitaryy">Precio: ${price}</div>
      </div>

      <button className="deleteItemm" onClick={() => deleteHandler(id)}>
        <img src={deleteIcon} alt="" />
      </button>
    </StyledProductOnCart>
  );
};

const StyledProductOnCart = styled.div`
  //background:lightblue;
  border-radius: 13px;
  border: 1px solid #755588;
  display: flex;
  width: 65%;
  height: 17vh;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  .imagee {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    width: 6rem;
    //background:blue;
    height: 100%;
    overflow: hidden;
    img {
      width: 7rem;
      height: 100%;
      object-fit: cover;
    }
  }
  .namee {
    width: 40%;
    height: 100%;
    //background:red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .quantityy {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    height: 90%;
    //background:violet;
  }
  .pricee {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 18%;
    height: 89%;
    //padding:0.rem 0;
    //background:green;
    box-sizing: border-box;
    .subtotal {
      //height:80%;
      padding-top: 0.5rem;
      font-size: 1.5rem;
      //background:red;
      /* display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center; */
      //box-sizing:border-box;
    }
  }
  .deleteItemm {
    width: 4%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    //background:yellow;
    img {
      height: 1rem;
    }
  }
`;

export default ProductOnCart;
