import React from "react";
import styled from "styled-components";

const UserDetails = ({ name, email, dni, address, phoneNumber }) => {
  return (
    <UserDetailsStyled>
      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          Client
        </h3>
        <p>{name ? name : "N/A"}</p>
      </div>

      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          Email
        </h3>
        <p>{email ? email : "N/A"}</p>
      </div>

      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          DNI
        </h3>
        <p>{dni ? dni : "N/A"}</p>
      </div>

      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          Address
        </h3>
        <p>{address ? address : "N/A"}</p>
      </div>

      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          Phone
        </h3>
        <p>{phoneNumber ? phoneNumber : "N/A"}</p>
      </div>
    </UserDetailsStyled>
  );
};

const UserDetailsStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .parrafo {
    font-weight: 600;
    color: #402e57;
  }

  h3,
  p {
    font-size: 1rem;
  }
`;

export default UserDetails;
