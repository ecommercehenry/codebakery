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
        <div className="top-row-mobile">
        <div className="imagee">
          <img src={image} alt={name} />
        </div>
        <div className="namee">{name}</div>
        </div>
        <div className="bottom-row-mobile">
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
        <div className="right-bottom-mobile">
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
          
          <div className="unitaryy" >Precio: ${price}</div>
          {
            discount !== 0 ? <div className="unitaryy">Descuento:{discount}%</div> : ""
          }
        </div>

        <button className="deleteItemm" onClick={() => deleteHandler(id)}>
          <img src={deleteIcon} alt="" />
        </button>
        </div>
        </div>
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

  .top-row-mobile{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-row-mobile{
    display:flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;

    .right-bottom-mobile{
      display: flex;
      width: 50%;
      justify-content: space-between;
      align-items: center;
    }
  }

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
    width: 70%;
    height: 100%;
    //background:red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1em;
  }
  .quantityy {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: 90%;
    //background:violet;
  }
  .pricee {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
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
    width: fit-content;
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

  @media(max-width: 1024px){
    width: 90%;
  }

  @media(max-width: 768px){
    width: 100%;
    padding: 1em!important;
    height: 10rem!important;

    article{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;

      .top-row-mobile{
       flex-wrap: nowrap;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;

        .namee{
          align-items: flex-start;
          width: fit-content;
        }

        .imagee{
          height: 4rem;
          max-width: 7rem;
        }
      }

      .bottom-row-mobile{
        padding-left: 7rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .unitaryy{
          display: none!important;
        }

        .right-bottom-mobile{
          justify-content: flex-end;
        padding-right: .5em!important;

          .pricee{
            margin-right: 2em;
          }

          .subtotal{
            padding-top: .1em;
          }
        }
      }
    }

    @media(max-width: 480px){
      .bottom-row-mobile{
        padding-left: 6rem!important;
      }
    }

    @media(max-width: 375px){
      .bottom-row-mobile{
        padding-left: 0!important;
        margin-top: 1em!important;

        .right-bottom-mobile{
          display: flex;
          width: 50%!important;
          justify-content: space-between!important;
        }
      }

      .stockk{
        display: none;
      }
    }

    @media(max-width: 350px){
      .bottom-row-mobile{
        margin-top: 1em!important; 
      }

      
  }
    
  }
`;

export default ProductOnCart;
