import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import MODIFY_USER from "../../Apollo/mutations/modifyUser";
import { Redirect, useParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../Assets/toast.css";
import styled from "styled-components";
import GET_ALL_USERS from "../../Apollo/queries/getAllUsers";
import RESET_PASSWORD from "../../Apollo/mutations/resetPassword";
import { saveToken } from "../../actions/saveToken";


toast.configure();

function ResetPassword() {
  /* 
    Le pido la contraseña actual y el email al usuario.
    Si la contraseña y el email coinciden lo dejo actualizar
    con la otra contraseña que envié
  */
  const customId = 1;
  const dispatch = useDispatch();

  const [modifyUser, { data, loading }] = useMutation(MODIFY_USER);
  const { data: dataUsers } = useQuery(GET_ALL_USERS);
  const [
    resetPassword,
    { data: dataReset, loading: loadingReset },
  ] = useMutation(RESET_PASSWORD);

  const { token, emailReducer } = useSelector((state) => state.reducerToken);

  const [input, setInput] = useState({
    email: "",
    // oldPassword: "",
    newPassword: "",
    newnewPasswordRepeat: "",
  });

  const [flagSubmit, setFlagSubmit] = useState(false);

  const search = useLocation().search;
  const resetToken = new URLSearchParams(search).get("resetToken");
  const email = new URLSearchParams(search).get("email");
  // const newPassword = new URLSearchParams(search).get("newPassword");
  // const newPasswordRepeat = new URLSearchParams(search).get("newPasswordRepeat");

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmitOne = (e) => {
    e.preventDefault();
    if (
      input.newPassword !== "" &&
      input.newPasswordRepeat !== "" &&
      input.newPassword !== input.newPasswordRepeat
    ) {
      toast("New passwords should match", {
        toastId: customId,
      });
    }
    else if ((token === resetToken) && (emailReducer === email)) {
      if (resetToken && email) {
        modifyUser({
          variables: {
            id: null,
            name: null,
            password: null,
            newPassword: input.newPassword,
            email: email,
            role: null,
            address: null,
            dni: null,
            phoneNumber: null,
          },
        });
      }
      toast("You have changed password successfully", {
        toastId: customId,
      });
      setFlagSubmit(true);
      dispatch(saveToken("", ""));
    } else {
      toast("Try resetting your password again", {
        toastId: customId,
      });
    }
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();
    if (dataUsers?.getAllUsers) {
      let user = dataUsers.getAllUsers.filter(
        (el) => el.email === input.email
      )[0];
      if (user) {
        resetPassword({ variables: { userId: user.id } });
        toast("Check your email and reset your password", {
          toastId: customId,
        });
      } else {
        toast("User Not Found", {
          toastId: customId,
        });
      }
    }
  };

  useEffect(() => {
    if (dataReset?.resetPassword) {
      dispatch(saveToken(dataReset?.resetPassword.token, dataReset?.resetPassword.email));
    }
  }, [dataReset, loadingReset]);

  if (flagSubmit) {
    return <Redirect to="/" />;
  } else if (resetToken && email) {
    return (
      <div
        className="page"
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="wrapper fadeInDown" style={{ marginBottom: "10vh" }}>
          <div className="formContent">
            <StyledAcheDos></StyledAcheDos>
            <hr />
            <form onSubmit={(e) => handleSubmitOne(e)}>
              <input
                type="password"
                name="newPassword"
                onChange={handleInputChange}
                value={input.newPassword}
                placeholder="New password"
                required
              />
              <input
                type="password"
                name="newPasswordRepeat"
                onChange={handleInputChange}
                value={input.newPasswordRepeat}
                placeholder="Confirm new password"
                required
              />
              <input type="submit" value="SUBMIT" />
              <div className="formFooter">
                <Link to="/log-in">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="page"
        style={{ height: "100vh", display: "flex", alignItems: "center" }}
      >
        <div className="wrapper fadeInDown" style={{ marginBottom: "10vh" }}>
          <div className="formContent">
            <StyledAcheDos></StyledAcheDos>
            <hr />
            <form onSubmit={(e) => handleSubmitTwo(e)}>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
                value={input.email}
                placeholder="Email"
                required
              />
              <input type="submit" value="SUBMIT" />
              <div className="formFooter">
                <Link to="/catalogue">Go home</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const StyledAcheDos = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
`;

const StyledUserPanel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  .formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
    text-align: center;
    .formFooter {
      background-color: #f6f6f6;
      border-top: 1px solid #dce8f1;
      padding: 25px;
      text-align: center;
      -webkit-border-radius: 0 0 10px 10px;
      border-radius: 0 0 10px 10px;
    }
  }
`;

export default ResetPassword;
