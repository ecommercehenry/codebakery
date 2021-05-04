import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BootBox from 'react-bootbox';

import "rsuite/lib/styles/index.less";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import MODIFY_ORDER_STATUS from "../../../../Apollo/mutations/modifyOrderStatus";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../../actions";
import { useMutation } from "@apollo/client";

// @-WenLi
//Recibe id de la orden y la orden...va renderizando los datos que necesita
export default function Orden({ id, orden }) {
  const [orderStatus, setOrderStatus] = useState(orden.status);
  const [selectedStatus, setSelectedStatus] = useState();
  const [show, setShow] = useState(false);

  /* let status;
  if (orden.status === "unpaid") status = 0;
  if (orden.status === "paid") status = 1;
  if (orden.status === "received") status = 2;

  const instance = (
    <Steps current={1}>
      <Steps.Item onClick={() => console.log("cambiar status a paid")} />
      <Steps.Item onClick={() => console.log("cambiar status a send")} />
      <Steps.Item onClick={() => console.log("cambiar status a recived")} />
    </Steps>
  ); */

  let active;

  useEffect(() => {
    setOrderStatus(orden.status);

    document.getElementById(
      `status-select-${orden.id}`
    ).value = orderStatus;

    active = {
      unpaid: orderStatus === "unpaid" ? "selected" : "⠀",
      paid: orderStatus === "paid" ? "selected" : "⠀",
      sent: orderStatus === "sent" ? "selected" : "⠀",
      received: orderStatus === "received" ? "selected" : "⠀",
    };

    /* console.log(document.getElementById(`status-select-${orden.id}`).outerHTML) */
  }, []);

  let handleSubmit = (e) => {
    if (window.confirm("You want to change this order status?")) {
      e.preventDefault();
      /* var el = document.getElementById(`status-select-${orden.id}`);
      var value= el.selectElement.options[e.selectedIndex].value;// get selected option value */
      console.log(selectedStatus);
    } else {
      e.preventDefault();
    }
  };

  const [modifyOrderStatus] = useMutation(
    MODIFY_ORDER_STATUS
  );

  const handleCancel  = () => {
    document.getElementById(
      `status-select-${orden.id}`
    ).value = orderStatus;
    
    setShow(false)
  }

  let dispatch = useDispatch()

  const handleConfirm = () => {
    modifyOrderStatus({
      variables: { orderId: orden.id, status: selectedStatus },
    });

    dispatch(changeStatus(orden.id, selectedStatus))
    setOrderStatus(selectedStatus)
    setShow(false)
  }

  let handleOption = async (e) => {
   setSelectedStatus(e.target.value);
   setShow(true)
  };

  if (orden) {
    return (
      <StyledOrden>
        <BootBox 
          message="Do you want to Continue?"
          show={show} 
          onYesClick = {handleConfirm}
          onNoClick = {handleCancel}
          onClose = {handleCancel}/>
            <td width="10%">
              {orden.date}
            </td>
            <td width="10%">{id}</td>
            <td width="10%">{orden.userId}</td>
            <td width="10%">{orden.name}</td>
            <td width="10%">
            <div className="status-container">
              <select
                name="status"
                id={`status-select-${orden.id}`}
                onChange={handleOption}
              >
                <option value="unpaid" id={`unpaid-${orden.id}`}>
                  Unpaid
                </option>
                <option value="paid" id={`paid-${orden.id}`}>
                  Paid
                </option>
                <option value="sent" id={`sent-${orden.id}`}>
                  Sent
                </option>
                <option value="received" id={`received-${orden.id}`}>
                  Received
                </option>
              </select>
            </div>
            </td>
            <td width="10%">
              {orden.cancelled === false ? (
                <p>O</p>
              ) : (
                <p className="order-cacelled">X</p>
              )}
            </td>
            <td width="10%">{orden.price[0]} </td>
            
            <td width="10%">
              <div className="edit-button">
              <button>
                <Link to={`/admin/order/${id}`}>
                  <HiOutlineDocumentSearch size="1.8rem" color="green" />
                </Link>
              </button>
              </div>
            </td>
      </StyledOrden>
    );
  } else {
    return "Loading";
  }
}

const StyledOrden = styled.tr`
  
  .edit-button {
    padding: 0.5rem;
    height: 100%;
    justify-self: center;
    align-self: center;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }
  .edit-button button {
    margin-top: 0.5rem;
    border: none;
    background: transparent;
  }
`;
