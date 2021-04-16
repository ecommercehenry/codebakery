import React from 'react'
import {useSelector} from 'react-redux'
//styles
import styled from "styled-components";

const TotalToOrder = () => {
    const itemsFromCart = useSelector(state=>state.cart.itemsToCart);
    console.log(itemsFromCart)
    let total = 0;
    if(itemsFromCart!=undefined){itemsFromCart.map(elem => {total = total + (elem.price)*(elem.quantity)} )}
    
    const orderHandler = () => {

    }

    return (
        <StyledTotal>
            <div className="topp">
                <div className="textt">
                    Total:
                </div>
                <div className="numberr">
                    ${total}
                </div>
            </div>
            <div className="buttonContainer">
                <button className="payMee" onClick={orderHandler}>Comprar</button>
            </div>
            
        </StyledTotal>
    )
}

const StyledTotal = styled.div`
    //background: black;
    height: 12vh;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //align-items: center;
    z-index:1;
    margin-top:5rem;
    margin-bottom:10rem;
    .buttonContainer{
        //background:violet;
        width:87%;
        display:flex;
        justify-content:flex-end;
        .payMee{
            z-index:1;
            display:flex;
            justify-content:center;
            padding:1rem 5.5rem;
            background:#755588;
            color:white;
            border:none;
            border-radius: 20px;
            font-size:1.2rem;
        }
    }
    //background:green;
    .topp{
        height:3rem;
        width:100%;
        font-size:1.8rem;
        //background:red;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    .textt{
        display:flex;
        justify-content: flex-end;
        align-items: center;
        text-align:right;
        width:auto;
        //background:yellow;
    }
    .numberr{
        //background:blue;
        width:auto;
        margin-left:1rem;
        padding-right:13%;
        
    }
  }
  
`;

export default TotalToOrder
