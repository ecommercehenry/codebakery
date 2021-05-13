import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
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
    ?.map((r) => r.price * r.quantity * ((r.discount/100 ||1)))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);


  return (
    <div
      className="container-two"
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10%",
        marginBottom: "20%",
      }}
    >
      <StyledCard
        className="onboard-card"
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
        }}
        light={status}
      >
        <div className="info info-details">
          <div
            style={{
              flex: "100%",
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Order</h2>

            <p className="step-title">{id ? id : "N/A"}</p>
          </div>
          <div
            style={{
              flex: "50%",
              padding: "1rem",
            }}
          >
            <h2 className="step-title">Date</h2>
            <p className="step-title">{newDate(date)}</p>
          </div>
        </div>

        <div
          style={{
            width: "95%",
          }}
        >
          <UserDetails
            name={$USER?.getUserById.name}
            email={$USER?.getUserById.email}
            dni={$USER?.getUserById.dni}
            phoneNumber={$USER?.getUserById.phoneNumber}
            address={$USER?.getUserById.address}
          />
        </div>

        <div style={{ width: "100%" }}>
          {result[0]?.lineal_order?.map((res) => (
            <OrderDetail
              key={res.id}
              name={res.name}
              image={res.image}
              price={res.price}
              quantity={res.quantity}
              discount = {res.discount}
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
        <ButtonStyled>
          <Link to="/admin/orders">
            <button className="sub-btn">GO BACK</button>
          </Link>
        </ButtonStyled>
      </StyledCard>
    </div>
  );
};

const ButtonStyled = styled.div`
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  button {
    margin: 1rem;
    width: 12rem;
    background: #402e57;
    color: #f6f6f6;
  }

  .sub-btn:hover {
    background-color: #7d62a0;
    color: #c6ade6;
    border: none;
  }

  .sub-btn:active {
    background: #c6ade6;
    color: #f6f6f6;
    box-shadow: 1px 1px 40px 20px #e7e3ec;
    border: none;
  }

  .sub-btn {
    background: #c6ade6;
    color: #f6f6f6;
    font-weight: 900;
    margin: 1rem;
    width: 20vw;
    border-radius: 1rem;
    box-shadow: 1px 2px 5px 2px #402e57;
    height: 3rem;
    border: none;
  }
`;

const StyledCard = styled.div`
  background: ${({ light }) => (light ? "white" : "#222222")};
  color: ${({ light }) => (light ? "inherit" : "white")};

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5rem;
  box-shadow: 10px 10px 20px 10px gainsboro;

  .info-details {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
  }

  .step-title {
    font-size: 1.5rem;
    color: rgb(125, 98, 160);
  }

  .info-total {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    padding: 0.5rem;
    margin-top: 1rem;
    width: 95%;
    border-radius: 1rem;
    /* reset */
    border: 0;
    margin-bottom: 0;
  }

  .info-parrafo {
    font-size: 1rem;
    p {
      padding-top: 0.5rem;
    }
  }
`;

export default BillCard;
