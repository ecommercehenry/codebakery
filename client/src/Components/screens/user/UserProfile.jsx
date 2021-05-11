import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";
import { useParams } from "react-router";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import "../../../Assets/toast.css";
import DisableTFA from "./DisableTFA";
import StatusAuthentication from "./StatusAuthentication.jsx";
import { HiOutlinePencilAlt, HiOutlineSave, HiOutlineX } from "react-icons/hi";
import { toast } from "react-toastify";
import EnableTFA from "./EnableTFA";

toast.configure();

const UserProfile = () => {
  let { id } = useParams();

  const [show, setShow] = useState(true);

  const { data: $USER } = useQuery(getUserById, {
    variables: { id: parseInt(id) },
  });

  const [modifyUser] = useMutation(MODIFY_USER, {
    variables: { id: parseInt(id) },
    refetchQueries: [
      {
        query: getUserById,
        variables: { id: parseInt(id) },
      },
    ],
  });

  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    dni: "",
    password: "",
    phoneNumber: "",
  });

  const handleClose = function () {
    setShow(!show);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    modifyUser({
      variables: {
        name: input.name,
        email: input.email,
        address: input.address,
        dni: input.dni,
        phoneNumber: input.phoneNumber,
        newPassword: input.password,
      },
    });
    toast("Your data has been updated", {
      toastId: 1,
    });
    handleClose();
  };

  let sizeIconEdit = "1.8rem",
    colorIconEdit = "green";

  return (
    <StyledUseer>
      {
        <div key={id} className="container">
          <div className="container-profile">
            <h1>MY DATA</h1>
          </div>
          <div className="container-cards">
            <div>
              {show ? (
                <button>
                  <HiOutlinePencilAlt
                    onClick={handleClose}
                    size={sizeIconEdit}
                    color={colorIconEdit}
                    className="edit-button"
                  />
                </button>
              ) : (
                <div>
                  <button
                    onClick={submitHandler}
                    style={{ background: "none", width: "fit-content" }}
                  >
                    <HiOutlineSave size="1.5rem" color="green" />
                  </button>
                  <button onClick={handleClose}>
                    <HiOutlineX size="1.5rem" color="red" />
                  </button>
                </div>
              )}
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <p>Name</p>
                  {show ? (
                    <div>{$USER?.getUserById.name}</div>
                  ) : (
                    <input
                      value={input.name}
                      name="name"
                      placeholder={$USER?.getUserById.name}
                      type="text"
                      onChange={(e) => inputHandler(e)}
                    ></input>
                  )}
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>DNI</p>
                    {show ? (
                      <div>{$USER?.getUserById.dni}</div>
                    ) : (
                      <input
                        value={input.dni}
                        name="dni"
                        placeholder={$USER?.getUserById.dni}
                        type="number"
                        onChange={(e) => inputHandler(e)}
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>Email</p>
                    {show ? (
                      <div>{$USER?.getUserById.email}</div>
                    ) : (
                      <input
                        value={input.email}
                        name="email"
                        placeholder={$USER?.getUserById.email}
                        type="email"
                        onChange={(e) => inputHandler(e)}
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>Phone Number</p>
                    {show ? (
                      <div>{$USER?.getUserById.phoneNumber}</div>
                    ) : (
                      <input
                        value={input.phoneNumber}
                        name="phoneNumber"
                        placeholder={$USER?.getUserById.phoneNumber}
                        onChange={(e) => inputHandler(e)}
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>Address</p>
                    {show ? (
                      <div>{$USER?.getUserById.address}</div>
                    ) : (
                      <input
                        value={input.address}
                        name="address"
                        placeholder={$USER?.getUserById.address}
                        type="text"
                        onChange={(e) => inputHandler(e)}
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>Password</p>
                    {show ? (
                      <div></div>
                    ) : (
                      <input
                        value={$USER?.getUserById.password}
                        name="password"
                        type="password"
                        onChange={(e) => inputHandler(e)}
                      ></input>
                    )}
                  </div>
                </div>
              </div>
              <div className="element-naame">
                <div className="text-container">
                  <div>
                    <p>Authentication</p>
                    <StatusAuthentication twoFA={$USER?.getUserById.twoFA} />
                  </div>
                  {!$USER?.getUserById.twoFA ? (
                    <button value="authentication" className="button-twoFA">
                      <Link to={`/user/${id}/profile/enableTFA`}>Enable</Link>
                    </button>
                  ) : (
                    <DisableTFA id={id} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </StyledUseer>
  );
};

export default UserProfile;

const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
};

const StyledUseer = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  // padding-top: 3rem;
  h1 {
    font-weight: 700;
    color: #5e3f71;
    margin-bottom: 0;
  }
  .container {
    width: 100vw;
    border-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .element-naame {
    margin-top: 13rem;
    background-color: rgb(255, 255, 255);
    border-radius: 40px;
    width: 40rem;
    height: 100px;
    padding-left: 20px;
    margin: 20px;
  }
  .text-container {
    width: 37rem;
    height: 100px;
    padding: 0.5rem;
    padding-top: 1rem;
    // margin: 0px 80px;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .container-profile{
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    // margin-bottom: 40rem;
    width: 100%;
    height: 3.3rem;
    background-color: #f1f1f1;
    z-index: 1;
  }
  .container-cards{
    margin-top: 0;
  }
  .text-container p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }

  .edit-button:hover {
    cursor: pointer;
  }
  .button-twoFA {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background-color: red;
    //padding:0.7rem 1rem;
    height: 2.7rem;
    padding: 0.5rem 0.8rem;
    font-weight: 700;
    font-size: calc(0.7rem + 6 * ((100vw - 320px) / 680));
    color: green;
    border-radius: 25px;
    border: 3px solid green;
    align-items: center;
    z-index: 11;
    span {
      margin-left: 4px;
    }
    ${media.tablet} {
      font-size: calc(0.5rem + 6 * ((100vw - 320px) / 680));
    }
    ${media.laptop} {
      font-size: calc(0.25rem + 6 * ((100vw - 320px) / 680));
    }
  }
`;
