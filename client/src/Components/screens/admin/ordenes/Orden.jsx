import React from "react";
import styled from 'styled-components';
import { Steps } from 'rsuite';
import 'rsuite/lib/styles/index.less';
import "./prueba.css"

// @-WenLi
//Recibe id de la orden y la orden...va renderizando los datos que necesita
export default function Orden({ id, orden }) {

  console.log("Esta es la orden: ", orden)
 
  
  const instance = (
    <Steps current={0}>
     
      <Steps.Item onClick={()=> console.log("Me hiciste click")}  />
     
      <Steps.Item  />
      <Steps.Item  />     
    </Steps>
  );

  if (orden) {
    return (
      <StyledOrden>
        <div className="element-container" id={id}>
          <div className="info-container">
            <div className="text-container">
              <span>Date</span>
              <p>{"esperando al BACK"}</p>
            </div>
            <div className="text-container">
              <span>Order</span>
              <p>{id}</p>
            </div>
            <div className="text-container">
              <span>UserId</span>
              <p>{orden.lineal_order[0].userId}</p>
            </div>
            <div className="status-container">
              <div className="titulos">
                <span>Paid</span>
                <span>Sent</span>
                <span>Recived</span>
              </div>
              {instance}
            </div>
            <div className="text-container">
              <span>Cancelled</span>
              <p>{"esperando cancell del BACK"} </p>
            </div>
            <div className="text-container">
              <span>Total</span>
              <p>{orden.lineal_order[0].price} </p>
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

 .status-container{
  width:350px;
  height: 80px;
  padding:0.5rem;
  align-items:center; 

}


.info-container{
    height: 80%;
    width: 90%;
    display: flex;
   
}

.element-container{   
    width: 100%;
    height: 16vh;
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