import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import getUserById from "../../../Apollo/queries/getUserById";
import styled from "styled-components";
import { useParams } from "react-router";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import closeIcon from "../../../icons/close2.svg";
import GENERATE_OTP from "../../../Apollo/mutations/generateOtp";
import VALIDATE_TOTP from "../../../Apollo/queries/validateTokenTOTP";
import { toast } from "react-toastify";
import "../../../Assets/toast.css";
import DisableTFA from "./DisableTFA";
import StatusAuthentication from "./StatusAuthentication.jsx";
import { HiOutlinePencilAlt } from "react-icons/hi";
// HiOutlinePencilAlt

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
  let sizeIconEdit = "1.8rem", colorIconEdit = "green";
  return click === 1 ? (
    <StyledUseer>
      {
        <div key={id} className="container">
          <div className='container-profile'>
            <h1>PROFILE</h1>
          </div>
          <div className='container-cards'>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Name</span>
                  <p>{$USER?.getUserById.name}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(2)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="name" onClick={() => setClick(2)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Document</span>
                  <p>{$USER?.getUserById.dni}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(3)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="document" onClick={() => setClick(3)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Email</span>
                  <p>{$USER?.getUserById.email}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(4)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="email" onClick={() => setClick(4)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>PhoneNumber</span>
                  <p>{$USER?.getUserById.phoneNumber}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(5)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="phoneNumber" onClick={() => setClick(5)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Address</span>
                  <p>{$USER?.getUserById.address}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(6)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="address" onClick={() => setClick(6)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Password</span>
                  <p>{$USER?.getUserById.password}</p>
                </div>
                <HiOutlinePencilAlt onClick={() => setClick(7)} 
                size={sizeIconEdit} color={colorIconEdit} className='edit-button'/>
                {/* <Button value="password" onClick={() => setClick(7)} className='style-button'>
                  Editar
                </Button> */}
              </div>
            </div>
            <div className="element-naame">
              <div className="text-container">
                <div>
                  <span>Authentication</span>
                  <p></p>
                  <StatusAuthentication twoFA={$USER?.getUserById.twoFA} />
                </div>
                {/* <HiOutlinePencilAlt onClick={() => setClick(8)} /> */}
                {!$USER?.getUserById.twoFA ? <button value="authentication" onClick={() => setClick(8)} 
                className='button-twoFA'>
                  Enable
                </button>: <DisableTFA id={id} />}
                {/* <Button value="authentication" onClick={() => setClick(8)} 
                style={{visibility: $USER?.getUserById.twoFA?"hidden":"visible"}}>
                  Enable
                </Button>
                <DisableTFA id={id} visibility={$USER?.getUserById.twoFA ? "visible":"hidden"} /> */}
              </div>
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
            <label>Edit Name</label>
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
            <label>Edit Document</label>
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
            <label>Edit Email</label>
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
            <label>Edit Phone Number</label>
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
            <label>Edit Address</label>
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
            <label>Edit Password</label>
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
            <label for = 'authentication'>Enable Authentication</label>
            <img src={dataGenerate?.generateTokenOTP.image} alt="" width='60%'></img>
            <input
              name="authentication"
              type="password"
              placeholder="Authentication code"
              value={input.authentication}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className="submitt">
            <button type="submit" >Authenticate</button>
          </div>
        </div>
      </StyledForm>
    </div>
  ) : (
    <p>''</p>
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
  h1{
    font-weight: 700;
    color: #5e3f71;
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
    position: fixed;
    display: flex;
    justify-content: center;
    // margin-bottom: 40rem;
    width: 100%;
    height: 3.3rem;
    background-color: #f1f1f1;
  }
  .container-cards{
    margin-top: 3rem;
  }
  .text-container p {
    margin: 0;
    color: grey;
    font-weight: 700;
  }

  .edit-button:hover{
    cursor:pointer;
  }
  .button-twoFA{
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
    border: none;
  }
  .infoProductt {
    // background:blue;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    font-weight: 700;
    .namee {
      //background:green;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
      margin: 0.8rem 0px;
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
