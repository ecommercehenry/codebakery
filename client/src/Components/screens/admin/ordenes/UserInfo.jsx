import React, { useState } from "react";
import GET_ALL_USERS from "../../../../Apollo/queries/getAllUsers";
import DELETE_USER from "../../../../Apollo/mutations/deleteUser";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import Promote from "../Promote";
import { HiOutlineTrash } from "react-icons/hi";
import BootBox from "react-bootbox";

function UserInfo({ id, name, email, address, dni, phoneNumber, role }) {
  const [show, setShow] = useState(false);

  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  function handleClick(id) {
    deleteUser({
      variables: {
        userId: parseInt(id),
      },
    });
    setShow(false);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <StyledTableRow>
      <td width="10%" id="id-column" key={id}>
        {id}
      </td>
      <td width="20%" id="name-column">
        {name}
      </td>
      <td width="30%" className="email">
        {email}
      </td>
      {/* <td width="20%">{address ? address : "N/A"}</td>
        <td width="10%">{dni ? dni : "N/A"}</td> */}
      {/* <td width="10%">{phoneNumber ? phoneNumber : "N/A"}</td> */}
      <td width="10%">{role}</td>
      <td width="5%" className="promote">
        {email === "admin@admin.com" ? (
          ""
        ) : (
          <Promote idUser={id} rol={role} />
        )}
      </td>
      <td width="5%">
        {role === "admin" ? (
          <HiOutlineTrash size="1.5rem" />
        ) : (
          <>
            <HiOutlineTrash
              onClick={() => setShow(true)}
              size="1.5rem"
              color="red"
              cursor="pointer"
            />
            <BootBox
              message="Do you want to Continue?"
              show={show}
              onYesClick={() => handleClick(id)}
              onNoClick={handleClose}
              onClose={handleClose}
            />
          </>
        )}
      </td>
    </StyledTableRow>
  );
}

export default UserInfo;

const StyledTableRow = styled.tr`

`;
