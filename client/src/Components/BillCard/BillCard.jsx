import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import GET_All_ORDERS from "../../Apollo/queries/getAllOrders";
import OrderDetail from "../screens/admin/ordenes/OrdenDetail";
import { Link } from "react-router-dom";

import "./BillCard.css";

const BillCard = () => {
  let { id } = useParams();

  let { data } = useQuery(GET_All_ORDERS);
  const result = data?.getAllOrders?.orders.filter(
    (element) => element.id == id
  );

  const subTotal = result[0]?.lineal_order
    .map((r) => r.price)
    .reduce((a, b) => a + b, 0);

  const porcTotal = (subTotal * 21) / 100;

  const trunc = (x, posiciones = 5) => {
    var s = x.toString();
    var l = s.length;
    var decimalLength = s.indexOf(".") + 1;
    var numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  };

  const subTotalPor = trunc(porcTotal);

  const shipping = 0;

  const total = subTotal + subTotalPor + shipping;

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
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Order: </h2>
            <p>N/A</p>
            {/* <p>{order ? order : "N/A"}</p> */}
          </div>
          <div
            style={{
              flex: "50%",
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Date: </h2>
            <p>N/A</p>
            {/* <p>{date ? date : "N/A"}</p> */}
          </div>
        </div>

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
            <p>N/A</p>
            {/* <p>{client ? client : "N/A"}</p> */}
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
            <p>N/A</p>
            {/* <p>{email ? email : "N/A"}</p> */}
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
            <p>N/A</p>
            {/* <p>{dni ? dni : "N/A"}</p> */}
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
            <p>N/A</p>
            {/* <p>{address ? address : "N/A"}</p> */}
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
            <p>N/A</p>
            {/* <p>{phone ? phone : "N/A"}</p> */}
          </div>
        </div>

        <div style={{ width: "80%" }}>
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
          <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Subtotal:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {subTotal ? `$ ${subTotal}` : 0}
            </p>
          </h3>
          <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            IVA 12%:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {" "}
              {subTotalPor ? `$ ${subTotalPor}` : 0}
            </p>
          </h3>
          <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Costo de Envio:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {shipping ? `$ ${shipping}` : 0}
            </p>
          </h3>
          <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Total:{" "}
            <p style={{ paddingTop: "1rem" }}>{total ? `$ ${total}` : 0}</p>
          </h3>
        </div>

        <div className="">
          <button>SEND</button>
          <button>CANCELLED</button>
          <Link to="/admin/orders">
            <button>GO BACK</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
