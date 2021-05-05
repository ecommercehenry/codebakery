import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";
import { useParams } from "react-router";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import Button from "@material-ui/core/Button";
import closeIcon from "../../../icons/close2.svg";
import GENERATE_OTP from "../../../Apollo/mutations/generateOtp";
import VALIDATE_TOTP from "../../../Apollo/queries/validateTokenTOTP";
import { toast } from "react-toastify";
import "../../../Assets/toast.css";
import DisableTFA from "./DisableTFA";
import StatusAuthentication from "./StatusAuthentication.jsx";


toast.configure();

const UserProfile = () => {
  let { id } = useParams();


  const [
    generateOTP,
    { data: dataGenerate, loading: loadingGenerate },
  ] = useMutation(GENERATE_OTP);
  const [
    validateTotp,
    { data: dataValidate, loading: loadingValidate },
  ] = useLazyQuery(VALIDATE_TOTP);

  const [click, setClick] = useState(1);

  const { data: $USER } = useQuery(getUserById, {
    variables: { id: parseInt(id) },
    // fetchPolicy: "no-cache",
  });

  const [modifyUser] = useMutation(MODIFY_USER, {
    variables: { id: parseInt(id) },
    // fetchPolicy: "no-cache",
    refetchQueries: [{
      query: getUserById,
      variables: { id: parseInt(id) }
    }]})

  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    dni: "",
    password: "",
    phoneNumber: "",
    authentication: "",
  });

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
  };

  const handleSubmitFA = (e) => {
    e.preventDefault();
    validateTotp({
      variables: {
        userId: parseInt(id),
        code: input.authentication,
      },
    });
  };

  useEffect(() => {
    console.log(dataValidate?.validateTOTP);
    if (dataValidate?.validateTOTP.boolean) {
      modifyUser({
        variables: {
          id: parseInt(id),
          twoFA: dataValidate?.validateTOTP.boolean,
        },
      });
      toast("Two steps authentication activated", {
        toastId: 1,
      });
    } else if (dataValidate?.validateTOTP.name) {
      toast(dataValidate?.validateTOTP.detail, {
        toastId: 2,
      });
    }
  }, [loadingValidate, dataValidate, id, modifyUser]);

  useEffect(() => {
    if (!dataGenerate && !loadingGenerate) {
      generateOTP({ variables: { userId: parseInt(id) } });
    }
  }, [dataGenerate, loadingGenerate, generateOTP, id]);

  return click === 1 ? (
    <StyledUseer>
      {
        <div key={id} className="container">
          <h1>Profile</h1>
          <div className="element-naame">
            <div className="text-container">
              <span>Name</span>
              <p>{$USER?.getUserById.name}</p>
              <Button value="name" onClick={() => setClick(2)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Document</span>
              <p>{$USER?.getUserById.dni}</p>
              <Button value="document" onClick={() => setClick(3)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Email</span>
              <p>{$USER?.getUserById.email}</p>
              <Button value="email" onClick={() => setClick(4)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>PhoneNumber</span>
              <p>{$USER?.getUserById.phoneNumber}</p>
              <Button value="phoneNumber" onClick={() => setClick(5)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Address</span>
              <p>{$USER?.getUserById.address}</p>
              <Button value="address" onClick={() => setClick(6)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Password</span>
              <p>{$USER?.getUserById.password}</p>
              <Button value="password" onClick={() => setClick(7)}>
                Editar
              </Button>
            </div>
          </div>
          <div className="element-naame">
            <div className="text-container">
              <span>Authentication</span>
              <p></p>
              <StatusAuthentication twoFA={$USER?.getUserById.twoFA} />

              <Button value="authentication" onClick={() => setClick(8)}>
                Enable Authentication
              </Button>
              <DisableTFA id={id} />
            </div>
          </div>
        </div>
      }
    </StyledUseer>
  ) : click === 2 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={input.name}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 3 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Document</label>
            <input
              name="dni"
              type="text"
              placeholder="Document"
              value={input.dni}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update </button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 4 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={input.email}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 5 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={input.phoneNumber}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 6 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Address</label>
            <input
              name="address"
              type="text"
              placeholder="Address"
              value={input.address}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 7 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={submitHandler}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={input.password}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Update</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : click === 8 ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.664)",
        zIndex: 5,
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        paddingLeft: "10vw",
      }}
    >
      <StyledForm onSubmit={(e) => handleSubmitFA(e)}>
        <button onClick={() => setClick(1)} className="closeee">
          <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
        </button>
        <div className="infoProductt">
          <div className="namee">
            <label>Authentication</label>
            <img src={dataGenerate?.generateTokenOTP.image} alt="" ></img>
            <input
              name="authentication"
              type="password"
              placeholder="Authentication code"
              value={input.authentication}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit">Authenticate</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : (
    <p>''</p>
  );
};

export default UserProfile;

const StyledUseer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .element-naame {
    background-color: rgb(236, 227, 250);
    border-radius: 40px;
    width: 650px;
    height: 300px;
    margin: 10px;
  }
  .text-container {
    width: 350px;
    height: 300px;
    padding: 0.5rem;
    overflow: hidden;
  }

  .text-container p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }
`;

const StyledForm = styled.form`
  width: 35%;
  height: 80vh;
  background: white;
  border-radius: 65px;
  padding: 3rem 4rem;
  border: 1px solid #f3dff3;
  position: relative;

  .closeee {
    display: flex;
    justify-content: flex-end;
  }

  .infoProductt {
    //background:blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .namee {
      //background:green;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .descriptionn {
      //background:green;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      textarea {
        width: 100%;
        margin-top: 0.5rem;
        padding: 0 1rem;
        //height:3rem;
        border-radius: 23px;
        border: 1px solid #dad7dc;
        background: #e3dde7;
      }
    }
    input {
      width: 100%;
      margin-top: 0.8rem;
      padding: 0 1rem;
      height: 3rem;
      border-radius: 23px;
      border: 1px solid #dad7dc;
      background: #e3dde7;
    }
    .ratiing {
      padding: 3rem 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ratingg {
      padding: 3rem 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .submitt {
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      //background:red;
      button {
        background: #5e3f71;
        color: white;
        width: 23%;
        height: 3rem;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 0 2.3rem;
        border: none;
        cursor: pointer;
      }
    }
  }
`;
