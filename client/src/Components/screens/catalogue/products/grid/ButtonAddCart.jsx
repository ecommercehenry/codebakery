import React from 'react'
import styled from 'styled-components';
import cartIcon from '../../../../../icons/cart.svg';
import {addProductToCart} from '../../../../../actions/cartActions';
import {useDispatch} from 'react-redux';
import ADD_PRODUCT_TO_ORDER from '../../../../../Apollo/mutations/addProductToOrder'
import { useMutation, useQuery } from "@apollo/client";
import GET_ORDERS_BY_USER_ID_IN_CART from "../../../../../Apollo/queries/getOrdersByUserIdInCart"
import { toast } from "react-toastify";
import '../../../../../Assets/toast.css'

toast.configure()



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
            toast('Producto añadido al carrito')
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
            toast('Producto añadido al carrito')
        }
    }

    return (
        <StyledButton onClick={()=>buttonHandler(id)}>
            <img src={cartIcon} alt="cat icon" style={{height:"1.1rem" ,width:"1.1rem"}}/>
            <span>Add to Shop Cart</span>
        </StyledButton>
    )
}

const media = {
    tablet: '@media(min-width:768px)',
    laptop: '@media(min-width:992px)',
    desktop: '@media(min-width:1200px)',
}

const StyledButton = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    //padding:0.7rem 1rem;
    padding:0.5rem 0.8rem;
    font-size: calc(0.7rem + 6 * ((100vw - 320px) / 680));
    color:#755588;
    border-radius:25px;
    border: 1px solid #755588;
    align-items:center;
    z-index:11;
    span{
        margin-left:4px;
    }
    ${media.tablet}{
        font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
    }
    ${media.laptop}{
        font-size: calc(0.2rem + 6 * ((100vw - 320px) / 680));
    }
`;

export default ButtonAddCart
