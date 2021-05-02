import React from "react"; 
import styled from "styled-components";


const UserByDetail = ({name, id, address, email, phoneNumber}) => {

    return (
            <StyledUser>
              <div key={id} className="element-container">
                <div className="info-container">
                  <div className="text-container">
                    <span>Name</span>
                    <p>{name}</p>
                  </div>
                  <div className="text-container">
                    <span>Address</span>
                    <p>{address}</p>
                  </div>
                  <div className="text-container">
                    <span>Email </span>
                    <p>{email}</p>
                  </div>
                  <div className="text-container">
                    <span>PhoneNumber </span>
                    <p>{phoneNumber}</p>
                  </div>
                </div>
              </div>
            </StyledUser>
          
    )
}

export default UserByDetail;

const StyledUser = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  margin-top: 2rem;
  //background:red;
  .status-container {
    width: 250px;
    height: 50px;
    padding: 0.5rem;
    align-items: center;
  }
  .info-container {
    height: 30%;
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
  }
  .text-container {
    width: 350px;
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