import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import styled from 'styled-components';



export default function Orden({ id, orden }) {
  //   const product = useSelector((state) => state.productsReducer.products[id]);
  //   const [show, setShow] = useState(true);
  //   function handlerOnClick() {
  //     setShow(!show);
  //   }

  if (orden) {
    return (
      <StyledOrden>
        <div className="element-container" id={id}>
          <div className="info-container">
            <div className="text-container">
              <span>Date</span>
              <p>{orden.date}</p>
            </div>
            <div className="text-container">
              <span>Order</span>
              <p>{id}</p>
            </div>
            <div className="text-container">
              <span>Status</span>
              {/* <div className="container-mapeo">
                  {product.categories.map((element) => (
                    <p key={element.id}>{element.name}</p>
                ))} */}
            </div>
            <div className="text-container">
              <span>Cancelled</span>
              <p>{orden.cancelled.toString()} </p>
            </div>
            <div className="text-container">
              <span>Total</span>
              <p>{"total"} </p>
            </div>
            <div className="edit-button">
              <button>Detail</button>
            </div>
          </div>
        </div>
      </StyledOrden>
    );
  } else {
    return "Loading";
  }
}



const StyledOrden = styled.div`
  
    display:flex;
    align-items:flex-start;
    justify-content:space-around;
    width:70vw;
    margin: 2rem;
    margin-top: 0.5rem;
    height: 100%;

.info-container{
    height: 80%;
    width: 90%;
    display: flex;
   
}

.element-container{   
    width: 100%;
    height: 15vh;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(236, 227, 250);
    border-radius: 40px;
   
}
.element-container span {
    font-weight: 700;
    color:rgb(123, 87, 156);
}

.text-container{
   width:250px;
   height: 80px;
   padding:0.5rem;
   overflow: hidden;   
}
.text-container p{
    margin:0;
    color:grey;
    font-weight: 700;
}




.edit-button{
    width:5rem;
    height: 80px;
    padding:0.5rem;
    margin-top: 20px;
    margin-left: 20px;    
    
}

.edit-button button{
    border-radius: 30px;
    color:rgb(78, 160, 78);
    padding: 4px;
    background-color: rgba(117, 250, 161, 0.328);
}
.edit-button button:hover{
    border-radius: 30px;
    color:rgb(78, 160, 78);
    padding: 6px;
    color:rgb(232, 208, 243);
    background-color: rgb(55, 10, 85);
}
`;