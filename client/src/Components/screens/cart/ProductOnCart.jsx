import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../../actions/cartActions";
import { removeItem } from "../../../actions/setQuantityOrdersCardBackend";
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
  discount,
  stock,
  quantity,
  orderId,
  refetch,
}) => {
  console.log(discount)
  let logged = localStorage.token ? true : false;
  let [newQuantity, setNewQuantity] = useState(quantity);
  const [deleteProductOrder] = useMutation(DELETE_PRODUCT_ORDER);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    if (!logged) {
      dispatch(removeProductFromCart(id));
    } else {
      dispatch(removeItem());
      deleteProductOrder({
        variables: {
          orderId: orderId,
          productId: id,
        },
      });
      refetch();
    }
  };
  useEffect(() => {},[])
  return (
    <StyledProductOnCart>
      <article className="item">
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
            logged={logged}
            orderId={orderId}
            productId={id}
            refetch={refetch}
          />
          <div className="stockk">{stock} disponibles</div>
        </div>
        <div className="pricee">
          {
            discount !== 0 ? 
            (
              <div className="subtotal">
                ${(newQuantity * (price-((price*discount)/100))).toFixed(2)}
              </div>
            ) : 
            <div className="subtotal">
              ${newQuantity * price}
            </div>
          }
          
          <div className="unitaryy">Precio:${price}</div>
          {
            discount !== 0 ? <div className="unitaryy">Descuento:{discount}%</div> : ""
          }
        </div>

        <button className="deleteItemm" onClick={() => deleteHandler(id)}>
          <img src={deleteIcon} alt="" />
        </button>
      </article>
    </StyledProductOnCart>
  );
};

const StyledProductOnCart = styled.div`
  //background:lightblue;
  width: 80%;
  padding-top: 2.4rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #e6e6e6;

  .item {
    border: none;
    display: flex;
    width: 100%;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
  }

  .imagee {
    display: flex;
    justify-content: center;
    align-items: center;
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
