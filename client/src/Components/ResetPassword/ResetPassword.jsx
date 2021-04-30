import React, { useState, useEffect } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import MODIFY_USER from "../../Apollo/mutations/modifyUser";
import { Redirect, useParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../../Assets/toast.css";
import styled from "styled-components";
import GET_ALL_USERS from "../../Apollo/queries/getAllUsers";
import RESET_PASSWORD from "../../Apollo/mutations/resetPassword";

toast.configure();

function ResetPassword() {
  /* 
    Le pido la contraseña actual y el email al usuario.
    Si la contraseña y el email coinciden lo dejo actualizar
    con la otra contraseña que envié
  */
  const customId = 1;

  const [modifyUser, { data, loading }] = useMutation(MODIFY_USER);
  const { data: dataUsers } = useQuery(GET_ALL_USERS);
  const [resetPassword, { data: dataReset }] = useMutation(RESET_PASSWORD);

  // let redirect = localStorage.getItem("redirect");
  const [input, setInput] = useState({
    // email: "",
    // oldPassword: "",
    newPassword: "",
    newnewPasswordRepeat: "",
  });

  const search = useLocation().search;
  const resetToken = new URLSearchParams(search).get("resetToken");
  const email = new URLSearchParams(search).get("email");
  const newPassword = new URLSearchParams(search).get("newPassword");
  const newPasswordRepeat = new URLSearchParams(search).get("newPasswordRepeat");

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  // function handleInputChangeTwo(e) {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  // }

  const handleSubmitOne = (e) => {
    console.log(resetToken && email);
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
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();

    // if (resetToken && email) {
    //   modifyUser({
    //     variables: {
    //       id: null,
    //       name: null,
    //       password: null,
    //       newPassword: input.newPassword,
    //       email: email,
    //       role: null,
    //       address: null,
    //       dni: null,
    //       phoneNumber: null,
    //     },
    //   });
    // }
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
    // localStorage.setItem("redirect", false);
    // window.location.reload();
  };

  useEffect(() => {
    if (
      input.newPassword !== "" &&
      input.newPasswordRepeat !== "" &&
      input.newPassword !== input.newPasswordRepeat
    ) {
      toast("New passwords should match", {
        toastId: customId,
      });
    } else if (!loading) {
      if (data?.modifyUser.__typename === "error") {
        toast(data?.modifyUser.detail, {
          toastId: customId,
        });
      } else if (data?.modifyUser.__typename === "user") {
        toast("Your password has successfully changed");
        // localStorage.setItem("redirect", true);
        setInput({
          // email: "",
          // oldPassword: "",
          newPassword: "",
          newPasswordRepeat: "",
        });
        // window.location.reload();
      }
    }
  }, [data, dataUsers]);

  // if (redirect) {
  //   localStorage.setItem("redirect", false);
  //   return <Redirect to="/" />;
  // }

  if (resetToken && email) {
    return (
      <div
        classname="page"
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
  } else if (newPassword && newPasswordRepeat)
    return <Redirect to="/" />;
  else {
    return (
      <div
        classname="page"
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
