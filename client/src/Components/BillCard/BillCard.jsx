import React from "react";

import "./BillCard.css";

const BillCard = () => {
  return (
    <div className="container-two ">
      <div
        className="onboard-card"
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="info info-details">
          <div
            style={{
              flex: "50%",
            }}
          >
            <h2 className="step-title">Order: </h2>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <h2 className="step-title">Date: </h2>
          </div>
        </div>

        <div className="info info-details">
          <table style={{ width: "100%" }}>
            <tr>
              <th className="parrafo">Client: </th>

              <th className="parrafo">Email: </th>

              <th className="parrafo">DNI: </th>

              <th className="parrafo">Address: </th>

              <th className="parrafo">Phone: </th>
            </tr>
          </table>
        </div>

        <div className="">
          {/**Aca deberia ir:
           * Name Product Amount Price Subtotal
           */}
        </div>

        <div className="info info-total">
          <h3>Subtotal: </h3>
          <h3>IVA 12%: </h3>
          <h3>Costo de Envio: </h3>
          <h3>Total: </h3>
        </div>

        <div className="">
          <button>SEND</button>
          <button>CANCELLED</button>
        </div>
      </div>
    </div>
  );
};

export default BillCard;

/**
 * <div className="info info-details">
          <div
            style={{
              flex: "50%",
            }}
          >
            <p className="parrafo">Client: </p>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <p className="parrafo">Email: </p>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <p className="parrafo">DNI: </p>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <p className="parrafo">Address: </p>
          </div>
          <div
            style={{
              flex: "50%",
            }}
          >
            <p className="parrafo">Phone: </p>
          </div>
        </div>
 */
