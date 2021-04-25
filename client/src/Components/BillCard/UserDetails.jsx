import React from "react";

const UserDetails = ({ name, email, dni, address, phoneNumber }) => {
  return (
    <div className="info info-details">
      <div
        style={{
          flex: "50%",
          padding: "1rem",
        }}
      >
        <h3 className="parrafo" style={{ fontWeight: "600" }}>
          Client:
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
          Email:
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
          DNI:
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
          Address:
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
          Phone:
        </h3>
        <p>{phoneNumber ? phoneNumber : "N/A"}</p>
      </div>
    </div>
  );
};

export default UserDetails;
