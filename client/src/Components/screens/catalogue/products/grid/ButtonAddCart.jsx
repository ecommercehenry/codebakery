import React from "react";
import styled from "styled-components";
import cartIcon from "../../../../../icons/cart.svg";
import { addProductToCart } from "../../../../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import ADD_PRODUCT_TO_ORDER from "../../../../../Apollo/mutations/addProductToOrder";
import { useMutation, useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../../Apollo/queries/getOrdersByUserIdInCart";
import { toast } from "react-toastify";
import "../../../../../Assets/toast.css";
import { setQuantityOrdersCardBackend } from "../../../../../actions/setQuantityOrdersCardBackend";

toast.configure();

const ButtonAddCart = ({ id, orderId, refetchCatalogue }) => {
  const [addProductToOrder] = useMutation(ADD_PRODUCT_TO_ORDER);
  let logged = localStorage.token ? true : false;
  let userId = logged ? parseInt(localStorage.id) : null;
  let { itemsToCart } = useSelector((state) => state.cart);

  const { data, refetch, loading } = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
    variables: { idUser: userId },
    fetchPolicy: "no-cache",
  });
  const dispatch = useDispatch();
  let poc = [];
  if (data && !loading) {
    if(data.getOrdersByUserIdInCart.orders[0]){
      data.getOrdersByUserIdInCart.orders[0].lineal_order.map((element) =>
        poc.push(element.id)
      );
    }
  }
  if (!logged && itemsToCart.length > 0) {
    itemsToCart.map((ele) => poc.push(ele.id));
  }
  const buttonHandler = async (id, e) => {
    if (
      e.target.innerHTML === "Sin Stock" ||
      e.target.innerText === "Sin Stock"
    ) {
      toast("No stock sorry");
    } else if (poc.length >= 0) {
      if (poc.includes(id)) {
        toast("Already in cart");
      } else if (!logged) {
        if(poc.includes(id)){
          toast("Already in cart");
        }else{
          dispatch(addProductToCart(id));
          toast("Product added to cart", { autoClose: 1000 });
        }
      } else {
        if (!loading) {
          dispatch(
            setQuantityOrdersCardBackend(
              orderId
                ? data?.getOrdersByUserIdInCart?.orders[0]?.lineal_order
                    ?.length + 1
                : 1
            )
          );
          if (orderId !== undefined) {
            await addProductToOrder({
              variables: {
                orderId: orderId,
                productId: id,
                quantity: 1,
                userId: userId,
              },
            });
            await refetch();
            await refetchCatalogue();
            toast("Product added to cart", { autoClose: 1000 });
          } else {
            await addProductToOrder({
              variables: {
                orderId: -1,
                productId: id,
                quantity: 1,
                userId: userId,
              },
            });
            await refetch();
            await refetchCatalogue();
            toast("Product added to cart", { autoClose: 1000 });
          }
        }
      }
    }
  };

  return (
    <StyledButton className={id} id={id} onClick={(e) => buttonHandler(id, e)}>
      <img
        src={cartIcon}
        alt="cat icon"
        style={{ height: "1.1rem", width: "1.1rem" }}
      />
      <span>Add to Shop Cart</span>
    </StyledButton>
  );
};

const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //padding:0.7rem 1rem;
  padding: 0.5rem 0.8rem;
  font-size: calc(0.7rem + 6 * ((100vw - 320px) / 680));
  color: #755588;
  border-radius: 25px;
  border: 1px solid #755588;
  align-items: center;
  z-index: 11;
  span {
    margin-left: 4px;
  }
  ${media.tablet} {
    font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
  }
  ${media.laptop} {
    font-size: calc(0.2rem + 6 * ((100vw - 320px) / 680));
  }
`;

export default ButtonAddCart;
