import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import GET_All_ORDERS from "../../Apollo/queries/getAllOrders";
import OrderDetail from "../screens/admin/ordenes/OrdenDetail";

import "./BillCard.css";

const BillCard = () => {
  let { id } = useParams();

  let { data } = useQuery(GET_All_ORDERS);
  const result = data?.getAllOrders?.orders.filter(
    (element) => element.id == id
  );

  console.log("LA ID: ", id);
  console.log("LA data: ", result);

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
          {result[0]?.lineal_order?.map((res) => (
            <OrderDetail
              key={res.id}
              id={res.id}
              name={res.name}
              image={res.image}
              price={res.price}
              quantity={res.quantity}
            />
          ))}
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
