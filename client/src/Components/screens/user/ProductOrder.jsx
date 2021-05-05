import React from "react";
import styled from 'styled-components';


const ProductOrder = ({ id, name, price, quantity, image }) => {

    return (
     
        <StyledProduct>
            <div key={id} className="element-container">
                <div className="info-container">
                    <div className="text-container">
                        <span>Product</span>
                        <p>{name}</p>
                    </div>
                    <div className="text-container">
                        <span>Id </span>
                        <p> {id}</p>
                    </div>
                    <div className="text-container">
                        <span>Price </span>
                        <p> ${price}</p>
                    </div>
                    <div className="text-container">
                        <span>Quantity </span>
                        <p> {quantity}</p>
                    </div>
                    <div className="text-container">
                        <span>SubTotal </span>
                        <p> {price * quantity}</p>
                    </div>
                    <div >
                    </div>
                    <div className="edit-button">
                    </div>
                </div>
            </div>
        </StyledProduct>
      

    )
}

export default ProductOrder;

const StyledProduct = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 80%;
margin-top: 2rem;
//background:red;
.status-container {
  width: 350px;
  height: 80px;
  padding: 0.5rem;
  align-items: center;
}
.info-container {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.element-container {
  width: 100%;
  height: 19vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(236, 227, 250);
  border-radius: 40px;
}
.element-container span {
  font-weight: 700;
  color: rgb(123, 87, 156);
}
.text-container {
  width: 250px;
  height: 80px;
  padding: 0.5rem;
  overflow: hidden;
}
.text-container p {
  margin: 0;
  color: grey;
  font-weight: 700;
}
.edit-button {
  padding: 0.5rem;
  height: 100%;
  justify-self: center;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.edit-button button {
  margin-top: 0.5rem;
  border: none;
  background: transparent;
}

`; 