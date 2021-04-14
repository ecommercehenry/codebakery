import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {removeProductFromCart} from '../../../actions/index'
//styles
import styled from 'styled-components';
//components
import StockCounter from './StockCounter'


const ProductOnCart = ({id,image,name,price,stock,quantity}) => {
    let [newQuantity,setNewQuantity] = useState(quantity);
    const dispatch = useDispatch()
    const deleteHandler = (id) => {
        dispatch(removeProductFromCart(id)) //action
    }

    return (
        <StyledProductOnCart>
            <div className="imagee">
                <img src={image} alt={name}/>
            </div>
            <div className="namee">{name}</div>
            <div className="quantityy">
                <StockCounter newQuantity={newQuantity} setNewQuantity={setNewQuantity} stock={stock}/>
                <div className="stockk">{stock} disponibles</div>
            </div>
            <div className="pricee">
                <div className="subtotal">${newQuantity*price}</div>
                <div className="unitary">Precio: ${price}</div>
            </div>

            <button className="deleteItemm" onClick={()=>deleteHandler(id)}>D</button>
            
        </StyledProductOnCart>
    )
}

const StyledProductOnCart = styled.div`
    //background:lightblue;
    border-radius:13px;
    border: 1px solid violet;
    display:flex;
    width:65%;
    height: 12vh;
    justify-content:space-between;
    align-items:center;
    margin: 1rem 0;
    padding: 0.3rem;
    .imagee{
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100%;
        width:7rem;
        //background:blue;
        height:100%;
        overflow:hidden;
        img{
            width:7rem;
            height:100%;
            object-fit:cover;
        }
    }
    .namee{
        width:40%;
        height:100%;
        //background:red;
        display:flex;
        justify-content:flex-start;
        align-items:center;
    }
    .quantityy{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:18%;
        height:100%;
        //background:violet;
        padding:1rem 0;
    }
    .pricee{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:18%;
        height:100%;
        padding:1rem 0;
        //background:green;
        .subtotal{
            height:3rem;
            font-size:1.5rem;
            //background:red;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
    }
    .deleteItemm{
        width:4%;
        height:50%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border:none;
        background:none;
        //background:yellow;
    }
`;

export default ProductOnCart
