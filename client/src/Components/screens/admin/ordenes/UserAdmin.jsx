import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET_ALL_USERS from "../../../../Apollo/queries/getAllUsers";
import DELETE_USER from "../../../../Apollo/mutations/deleteUser";
import styled from "styled-components";
import { useLazyQuery, useMutation } from "@apollo/client";
import Promote from "../Promote";
import {
  getAllUsersWithDetails,
  orderAscByName,
  orderDescByName,
  searchByName,
} from "../../../../actions/index";
import SearchBarUserAdmin from "./SearchBarUserAdmin";

import { RiDeleteBin6Line } from "react-icons/ri";
import { IconContext } from "react-icons";

const UserAdmin = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let dataToRender = state.userAdmin.dataToRender;

  const [
    deleteUser,
    { data: dataDeleteUser, loading: loadingMutation },
  ] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  let [getAllUsers, { data, loading }] = useLazyQuery(GET_ALL_USERS);

  function handleClick(e) {
    e.preventDefault();
    console.log("en handleClick:", e.target.name);
    deleteUser({
      variables: {
        userId: parseInt(e.target.name),
      },
    });
  }

  useEffect(() => {
    if (!data) {
      getAllUsers();
    } else if (data && data.getAllUsers) {
      dispatch(getAllUsersWithDetails(data?.getAllUsers));
    }
  }, [data, loading]);

  // function handleClickAsc(e) {
  //   e.preventDefault();
  //   dispatch(orderAscByName());
  // }

  // function handleClickDesc(e) {
  //   e.preventDefault();
  //   dispatch(orderDescByName());
  // }

  if (!dataToRender) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledUserAdmin>
        <table border="0" cellPadding="0" cellSpacing="0" className="flexy">
          <thead>
            <tr>
              <th width="10%" id="img-column">
                Id
              </th>
              <th width="30%" id="name-column">
                Name
              </th>
              <th width="30%">Email</th>
              <th width="10%">Address</th>
              <th width="10%" id="price-column">
                DNI
              </th>
              <th width="10%">Phone Number</th>
              <th width="10%">Role</th>
              <th width="10%">Promote</th>
              <th width="10%">Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataToRender?.map((element) => (
              <StyledTableRow>
                <td key={element.id}>{element.id}</td>
                <td className="td-name">{element.name}</td>
                <td className="td-email">{element.email}</td>
                <td>{element.address ? element.address : "N/A"}</td>
                <td>{element.dni ? element.dni : "N/A"}</td>
                <td>{element.phoneNumber ? element.phoneNumber : "N/A"}</td>
                <td>{element.role}</td>
                <td>
                  {element.email === "admin@admin.com" ? (
                    ""
                  ) : (
                    <Promote
                      name={element.name}
                      idUser={element.id}
                      rol={element.role}
                    />
                  )}
                </td>
                <td>
                  {element.role === "admin" ? (
                    <RiDeleteBin6Line />
                  ) : (
                    <button name={element.id} onClick={(e) => handleClick(e)}>
                      {/* <IconContext.Provider
                        value={{ color: "red" }}
                      >
                        <RiDeleteBin6Line />
                      </IconContext.Provider> */}
                    </button>
                  )}
                </td>
              </StyledTableRow>
            ))}
          </tbody>
        </table>
      </StyledUserAdmin>
    );
  }
};

export default UserAdmin;

const StyledUserAdmin = styled.div`
  padding: 2rem;
  padding-top: 0;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: white;
  height: 83vh;
  margin-bottom: 2rem;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.07);
  clear: both;
  overflow: hidden;

  table {
    padding: 1rem 0;
    position: relative;
    width: 100%;
    overflow-y: auto;
    float: left;

    thead {
      display: table;
      overflow: auto;
      width: 100%;

      th {
        position: sticky;
        top: 0;
        padding: 1rem 1em;
        background: white;
        border-bottom: 1px solid #ddd;
      }
    }

    tbody {
      display: block;
      overflow-y: scroll;
      width: 100%;
      height: 66vh;

      td {
        height: 5rem;
        border-bottom: 1px solid #ddd;
        padding: 0 1em;
      }

      th  {
      }
    }

    .info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const StyledTableRow = styled.tr`
  .td-name {
    padding: 0 3em;
  }

  .td-email  {
    padding: 0 0 0 4em;
  }
`;
