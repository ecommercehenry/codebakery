import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";
import { useParams } from "react-router";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import "../../../Assets/toast.css";
import DisableTFA from "./DisableTFA";
import StatusAuthentication from "./StatusAuthentication.jsx";
import { HiOutlinePencil } from "react-icons/hi";
import { toast } from "react-toastify";

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

  let sizeIconEdit = "1.3rem";

  return (
    <StyledUseer>
      {
        <div key={id} className="container">
          <div className="container-profile">
            <h1>MY DATA</h1>
          </div>
          <div className="container-cards">
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
                    <Link to={`/user/${id}/my-data/enableTFA`}>Enable</Link>
                  </button>
                ) : (
                  <DisableTFA id={id} />
                )}
              </div>
            </div>
          </div>
          <div className="bottom-edit">
            {show ? (
              <button className="edit-btn" onClick={handleClose}>
                <span>Edit</span>
                <HiOutlinePencil
                  size={sizeIconEdit}
                  color="white"
                  className="edit-button"
                />
              </button>
            ) : (
              <div>
                <button className="cancel-btn" onClick={handleClose}>
                  <span>Cancel</span>
                </button>
                <button className="save-btn" onClick={submitHandler}>
                  <span>Save changes</span>
                </button>
              </div>
            )}
          </div>
        </div>
      }
    </StyledUseer>
  );
};

export default UserProfile;

/* const media = {
  tablet: "@media(min-width:768px)",
  laptop: "@media(min-width:992px)",
  desktop: "@media(min-width:1200px)",
}; */

const StyledUseer = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  max-width: 100%;
  margin-top: 1rem;
  height: 100%;
  // padding-top: 3rem;
  h1 {
    font-weight: 700;
    color: #5e3f71;
    margin-bottom: 0;
  }

  .bottom-edit {
    div{
      display: flex;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 0.5rem 0.8rem;
      border-radius: 40px;
      font-size: 1.1rem;
    }

    .edit-btn {
      background: #5e3f71;

      span {
        color: white;
        margin-right: 0.5em;
      }
    }

    .cancel-btn {
      background: none;
      margin-right: 2em;

      span {
        color: #333;
      }
    }

    .save-btn {
      background: #5e3f71;

      span {
        color: white;
      }
    }
  }
  .container {
    height: 100%;
    width: 100%;
    border-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .element-naame {
    background-color: rgb(255, 255, 255);
    border-radius: 40px;
    width: 20rem;
    height: 5rem;
    padding-left: 20px;
    margin: 0;
    justify-self: center;
    align-self: center;
  }
  .text-container {
    width: 90%;
    height: 100px;
    padding: 0.5rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin: 0 !important;
  }
  .container-profile {
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
  .container-cards {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 40rem;
    gap: 2rem;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
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
    font-size: 1rem;
    color: green;
    border-radius: 25px;
    border: 2px solid green;
    align-items: center;
    z-index: 11;
    background: none;

    span {
      margin-left: 4px;
      color: #333 !important;
    }
  }

  @media (max-width: 874px) {
    margin-bottom: 2rem;

    .container-cards {
      margin: 1.5rem 0;
      max-width: 35rem;
      grid-template-columns: 1fr;
      gap: 1rem !important;
    }

    .element-naame {
      width: 100%;
    }
  }

  @media (max-width: 850px) {
    .container-profile {
      display: none !important;
    }

    .bottom-edit {
      display: flex;
      justify-content: center;
      max-width: 35rem;
      width: 100%;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0.5rem 0.8rem;
        border-radius: 40px;
        font-size: 1.3rem;
        width: 50%;
        height: 3rem;
      }

      .save-btn {
        width: 100% !important;
      }
    }
  }

  @media (max-width: 500px) {
    .bottom-edit {
      div{
        flex-direction: column;
      }

      button {
        width: 90vw!important;
        height: 3rem;
      }

      .cancel-btn{
        margin-right: 0!important;
        margin-bottom: 1em;
      }
    }
  }
`;
