import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle'; 


const OrderByUser = ({ id, name, price, quantity }) => {
    return (
     
        <StyledOrd>
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

                        <button>
                <Link to={`/user/addReview/${id}`} >
                  <button>
                  <span style={{ color: '#28004d' }}><AddCircleIcon/>Review</span>
                  </button>
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
  height: 80px;
  padding: 0.5rem;
  align-items: center;
}
.info-container {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.element-container {
  width: 100%;
  height: 19vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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
  padding-bottom: 2em;
  height: fit-content;
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