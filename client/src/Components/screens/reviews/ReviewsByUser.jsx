import React from "react";
import { Rating } from "@material-ui/lab";
import styled from 'styled-components'; 


const ReviewByUser = ({ productId, id, title, description, stars }) => {
    return (
      
        <StyledRev>
            <div key={id} className="element-container">
                <div className="info-container">
                    <div className="text-container">
                        <span>Title</span>
                        <p>{title}</p>
                    </div>
                    <div className="text-container">
                        <span>Id Product</span>
                        <p>{productId}</p>
                    </div>
                    <div className="text-container">
                        <span>Comentary </span>
                        <p>{description}</p>
                    </div>
                    <div >
                        <span>Rating <div >
                        <Rating name="read-only" value={stars} readOnly/>
                        </div></span>
                    </div>

                    <div className="edit-button">
                        <span style={{ color: '#28004d' }}>Change my Comment</span>
                    </div>
                </div>
            </div>
        </StyledRev>
    )
}

export default ReviewByUser;

const StyledRev = styled.div`
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
  height: 80%;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.element-container {
  width: 100%;
  height: 16vh;
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
