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
      <div className="default">
        <div>
            {dataToRender?.map((element) => (
              <StyledUserAdmin key={element.id}>
                <div className="element-container">
                  <div className="info-container">
                    <div className="small-container">
                      <span>ID</span>
                      <span>{element.id}</span>
                    </div>
                    <div className="small-container">
                      <span>NAME</span>
                      <span>{element.name}</span>
                    </div>
                    <div className="small-container">
                      <span>EMAIL</span>
                      <span>{element.email}</span>
                    </div>
                    <div className="small-container">
                      <span>ADDRESS</span>
                      <span>{element.address ? element.address : "N/A"}</span>
                    </div>
                    <div className="small-container">
                      <span>DNI</span>
                      <span>{element.dni ? element.dni : "N/A"}</span>{" "}
                    </div>
                    <div className="small-container">
                      <span>PHONE NUMBER</span>
                      <span>
                        {element.phoneNumber ? element.phoneNumber : "N/A"}
                      </span>
                    </div>
                    <div className="small-container">
                      <span>ROLE</span>
                      <span>{element.role}</span>
                    </div>
                    <div className="small-container">
                      {element.email === "admin@admin.com" ? (
                        ""
                      ) : (
                        <Promote
                          name={element.name}
                          idUser={element.id}
                          rol={element.role}
                        />
                      )}
                    </div>
                    <div className="small-container">
                      {element.role === "admin" ? (
                        <button>CANNOT DELETE </button>
                      ) : (
                        <button
                          name={element.id}
                          onClick={(e) => handleClick(e)}
                        >
                          DELETE{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </StyledUserAdmin>
            ))}
        </div>
      </div>
    );
  }
};

export default UserAdmin;

const StyledUserAdmin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.5rem;
  height: 100%;

  .element-container {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(236, 227, 250);
    border-radius: 50px;
  }

  .element-container span {
    font-weight: 700;
    color: #5f3f71;
  }

  .small-container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin-right: 30px;
    height: 100%;
  }

  .info-container {
    height: 80%;
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
