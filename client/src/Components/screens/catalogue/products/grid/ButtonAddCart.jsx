import React from 'react'
import styled from 'styled-components';
import cartIcon from '../../../../../icons/cart.svg';
import {addProductToCart} from '../../../../../actions/cartActions';
import {useDispatch} from 'react-redux';
import ADD_PRODUCT_TO_ORDER from '../../../../../Apollo/mutations/addProductToOrder'
import { useMutation, useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../../Apollo/queries/getOrdersByUserIdInCart"



const ButtonAddCart = ({id}) => {
    const [addProductToOrder, addData] = useMutation(ADD_PRODUCT_TO_ORDER);
    let logged = localStorage.token ? true : false;
    let userId = logged ? parseInt(localStorage.id) : null;

    const queryData = useQuery(GET_ORDERS_BY_USER_ID_IN_CART, {
        variables: { idUser: userId },
      });
    const dispatch = useDispatch();

    const buttonHandler = (id) => {
        if (!logged){
            dispatch(addProductToCart(id));
        }else {
            if(!queryData.loading){
                let orderId = queryData.data.getOrdersByUserIdInCart.orders[0].id;
                addProductToOrder({
                    variables:{
                      orderId: orderId,
                       productId: id,
                       quantity: 1,
                    }
                  })
            }

        }
    }

    return (
        <StyledButton onClick={()=>buttonHandler(id)}>
            <img src={cartIcon} alt="cat icon" style={{height:"1.1rem" ,width:"1.1rem"}}/>
            <span>Add to Shop Cart</span>
        </StyledButton>
    )
}

const StyledButton = styled.button`

    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:0.7rem 1rem;
    border-radius:25px;
    border: 1px solid violet;
    align-items:center;
    z-index:11;
    span{
        margin-left:4px;
    }
`;

export default ButtonAddCart
