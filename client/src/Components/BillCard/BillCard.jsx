import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router";
import GET_All_ORDERS from "../../Apollo/queries/getAllOrders";
import getUserById from "../../Apollo/queries/getUserById";
import OrderDetail from "../screens/admin/ordenes/OrdenDetail";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./BillCard.css";

const BillCard = () => {
  let { id } = useParams();
  let { data } = useQuery(GET_All_ORDERS);
  const result = data?.getAllOrders?.orders.filter(
    (element) => element.id === Number(id)
  );

  /* 

  const { lineal_order } = result[0];
  const finalResult = result[0]?.lineal_order?.filter(
    (element) => element.id === Number(id)
  ); */
  let {status} = useSelector((state)=>state.theme);
  const date = result[0]?.creation;
  const userId = result[0]?.userId;

  const newDate = (d) => {
    const fullDate = new Date(d);
    let day = fullDate.getDate();
    let mounth = fullDate.getMonth();
    let year = fullDate.getFullYear();

    return d ? `${day}/${mounth}/${year}` : "N/A";
  };

  let { data: $USER } = useQuery(getUserById, {
    variables: { id: userId },
  });

  const subTotal = result[0]?.lineal_order
    ?.map((r) => r.price * r.quantity)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);


  const subTotalPor = ((subTotal * 21) / 100).toFixed(2);

  const shipping = 0;

  const total = (+subTotal + +subTotalPor + +shipping).toFixed(2);

  return (
    <div
      className="container-two"
      style={{
        height: "100%",
      }}
    >
      <StyledCard
        className="onboard-card"
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
        light={status}
      >
        <div className="info info-details">
          <div
            style={{
              flex: "50%",
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Order: </h2>

            <p
              style={{
                fontSize: "1.5rem",
                color: "#7d62a0",
              }}
            >
              {id ? id : "N/A"}
            </p>
          </div>
          <div
            style={{
              flex: "50%",
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Date: </h2>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#7d62a0",
              }}
            >
              {newDate(date)}
            </p>
          </div>
        </div>

        <div style={{ width: "80%" }}>
          <UserDetails
            name={$USER?.getUserById.name}
            email={$USER?.getUserById.email}
            dni={$USER?.getUserById.dni}
            phoneNumber={$USER?.getUserById.phoneNumber}
            address={$USER?.getUserById.address}
          />
        </div>

        <div style={{ width: "80%" }}>
          {result[0]?.lineal_order?.map((res) => (
            <OrderDetail
              key={res.id}
              name={res.name}
              image={res.image}
              price={res.price}
              quantity={res.quantity}
            />
          ))}
        </div>

        <div className="info info-total">
          {/* <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Subtotal:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {subTotal ? `$ ${subTotal}` : 0}
            </p>
          </h3> */}
          {/* <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            IVA 12%:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {" "}
              {subTotalPor ? `$ ${subTotalPor}` : 0}
            </p>
          </h3> */}
          {/* <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Costo de Envio:{" "}
            <p style={{ paddingTop: "1rem" }}>
              {shipping ? `$ ${shipping}` : 0}
            </p>
          </h3> */}
          <h3 style={{ fontSize: "1rem", padding: "1rem" }}>
            Total:{" "}
            <p style={{ paddingTop: "1rem" }}>{subTotal ? `$ ${subTotal}` : 0}</p>
          </h3>
        </div>

        <ButtonStyled className="submit-button">
          <button>SEND</button>
          <button>CANCELLED</button>
          <Link to="/admin/orders">
            <button className="sub-btn">GO BACK</button>
          </Link>
        </ButtonStyled>
      </StyledCard>
    </div>
  );
};

const ButtonStyled = styled.div`
  color: #dce8f1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 80%;
  button {
    margin: 1rem;
    width: 12rem;
    background: #402e57;
    color: #f6f6f6;
  }

  button:hover {
    background-color: #7d62a0;
    color: #f6f6f6;
  }

  .sub-btn {
    background: white;
    color: #402e57;
    font-weight: 900;
  }
`;

const StyledCard = styled.div`
  background:${({light})=>light 
  ? 'white' 
  : '#222222'};
  color:${({light})=>light 
  ? 'inherit' 
  : 'white'};
`;

export default BillCard;
