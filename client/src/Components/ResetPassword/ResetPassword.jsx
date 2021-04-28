import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import MODIFY_USER from "../../Apollo/mutations/modifyUser";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "../../Assets/toast.css";
import styled from "styled-components";

toast.configure();

function ResetPassword() {
  /* 
    Le pido la contraseña actual y el email al usuario.
    Si la contraseña y el email coinciden lo dejo actualizar
    con la otra contraseña que envié
  */
  const [modifyUser, { data, loading }] = useMutation(MODIFY_USER);
  let redirect = localStorage.getItem("redirect");
  const [input, setInput] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    newnewPasswordRepeat: "",
  });

  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyUser({
      variables: {
        id: null,
        name: null,
        password: input.oldPassword,
        newPassword: input.newPassword,
        email: input.email,
        role: null,
        address: null,
        dni: null,
        phoneNumber: null,
      },
    });
  };

  const customId = 1;

  useEffect(() => {
    if (
      input.newPassword !== "" &&
      input.newPasswordRepeat !== "" &&
      input.newPassword !== input.newPasswordRepeat
    ) {
      toast("New passwords should match", {
        toastId: customId
      });
    } else if (!loading) {
      if (data?.modifyUser.__typename === "error") {
        toast(data?.modifyUser.detail, {
          toastId: customId
        });
      } else if (data?.modifyUser.__typename === "user") {
        toast("Your password has successfully changed");
        localStorage.setItem("redirect", true);
        setInput({
          email: "",
          oldPassword: "",
          newPassword: "",
          newPasswordRepeat: "",
        });
        window.location.reload();
      }
    }
  }, [data, input.newPassword, input.newPasswordRepeat, loading]);

  if (redirect) {
    localStorage.setItem("redirect", false);
    return <Redirect to="/log-in" />;
  }

  return (
    <div
      classname="page"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="wrapper fadeInDown" style={{ marginBottom: "10vh" }}>
        <div className="formContent">
          <StyledAcheDos></StyledAcheDos>
          <hr />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={input.email}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="oldPassword"
              onChange={handleInputChange}
              value={input.oldPassword}
              placeholder="Current password"
              required
            />
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
          </form>
        </div>
      </div>
    </div>
  );
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

export default ResetPassword;
