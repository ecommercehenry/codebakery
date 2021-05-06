import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BootBox from "react-bootbox";

import "rsuite/lib/styles/index.less";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import MODIFY_ORDER_STATUS from "../../../../Apollo/mutations/modifyOrderStatus";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../../../actions";
import { useMutation, useLazyQuery } from "@apollo/client";
import GET_All_ORDERS from "../../../../Apollo/queries/getAllOrders";

// @-WenLi
//Recibe id de la orden y la orden...va renderizando los datos que necesita
export default function Orden({ id, orden }) {
  console.log(orden)
  const [orderStatus, setOrderStatus] = useState(orden.cancelled === true ? "cancelled" : orden.status);
  console.log(orderStatus)
  const [selectedStatus, setSelectedStatus] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setOrderStatus(orderStatus);
    document.getElementById(`status-select-${orden.id}`).value = orderStatus;
  }, [orden.id, orden.status, orderStatus]);

  const [modifyOrderStatus] = useMutation(MODIFY_ORDER_STATUS, {
    refetchQueries: [{ query: GET_All_ORDERS }],
  });

  const [getAllOrders, { data, loading }] = useLazyQuery(GET_All_ORDERS);

  const handleCancel = () => {
    document.getElementById(`status-select-${orden.id}`).value = orderStatus;
    setShow(false);
  };

  let dispatch = useDispatch();

  const handleConfirm = () => {
    getAllOrders()
    modifyOrderStatus({
      variables: { orderId: orden.id, status: selectedStatus },
    }).then(() => {
      dispatch(changeStatus(orden.id, selectedStatus));
      setOrderStatus(selectedStatus);
      setShow(false);
    });
  };

  // useEffect(() => {

  // }, [data, loading])

  let handleOption = async (e) => {
    setSelectedStatus(e.target.value);
    setShow(true);
  };
  if (orden) {
    let total = 0;
    orden.price.map((e) => (total = total + e));
    return (
      <StyledOrden>
        <BootBox
          message="Do you want to Continue?"
          show={show}
          onYesClick={handleConfirm}
          onNoClick={handleCancel}
          onClose={handleCancel}
        />

        <td width="10%">{orden.date}</td>
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
              <option value="cancelled" id={`received-${orden.id}`}>
                Cancelled
              </option>
            </select>
          </div>
        </td>
        {/* <td width="10%">
          {orden.cancelled === false ? (
            <p>O</p>
          ) : (
            <p className="order-cacelled">X</p>
          )}
        </td> */}
        <td width="10%">{total} </td>

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
