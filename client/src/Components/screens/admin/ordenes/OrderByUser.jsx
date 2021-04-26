import React from "react";
import FormReview from "../../reviews/FormReview"; 
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components'; 


const OrderByUser = ({ id, name, price, quantity }) => {
let idd = useParams(); 
    return (

        <StyledOrd>
            <div key={id} className="element-container">
                <div className="info-container">
                    <div className="text-container">
                        <span>Product</span>
                        <p>{name}</p>
                    </div>
                    <div className="text-container">
                        <span>Price </span>
                        <p> ${price}</p>
                    </div>
                    <div className="text-container">
                        <span>Quantity </span>
                        <p> {quantity}</p>
                    </div>
                    <div >
                    </div>
                    <div className="edit-button">

                        <button>
                <Link to={`/user/addReview/${id}`} >
                <span style={{ color: '#28004d' }} >Add Comment</span>
                </Link>
              </button>
                    </div>
                </div>
            </div>
        </StyledOrd>
    )
}

export default OrderByUser;

const StyledOrd = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 80%;
margin-top: 2rem;
//background:red;
.status-container {
  width: 350px;
  height: 100px;
  padding: 0.5rem;
  align-items: center;
}
.info-container {
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.element-container {
  width: 100%;
  height: 25vh;
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