import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import CREATE_USER from "../../Apollo/mutations/createUser";
import background1 from "./image.png";
import colorfulImage from "./4391857.jpg";
import GET_ALL_USERS from "../../Apollo/queries/getAllUsers";

import { toast } from "react-toastify";

toast.configure();
const CreateUserAccount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { data: dataUsers } = useQuery(GET_ALL_USERS);
  const [exit, SetExit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const handleLogin = (data) => {
    if (dataUsers?.getAllUsers) {
      let user = dataUsers.getAllUsers.filter(
        (el) => el.email === data.email
      )[0];

      if (!user) {
        createUser({
          variables: {
            name: data.name,
            password: data.password,
            email: data.email,
            role: "user",
          },
        });

        SetExit(true);
      } else {
        toast("Email already exists", {
          toastId: 1,
        });
      }
    }
  };

  useEffect(() => {
    if (data?.createUser?.name === "error") {
      SetExit("error");
    }
  }, [data]);

  // SetExit(false);
  // useEffect(()=>{
  //   SetExit(false);
  // }, [exit])

  return (
    <StyledCreateUser
      className="page"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="container-two">
        <div className="onboard-card">
          <div className="onboard-img"></div>
          <div className="onboard-form">
            <div className="info">
              <h2 className="step-title">Welcome</h2>
              <h5 className="parrafo">
                Fill out this form to register in this site
              </h5>
            </div>
            <form>
              <div className="responsive">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="placeholder"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", {
                      required: true,
                      minLength: 5,
                      maxLength: 30,
                    })}
                    pattern="[a-zA-Z ]*"
                  />
                  {errors.name && errors.name.type === "required" && (
                    <p className="error" role="alert">
                      This is required
                    </p>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <p className="error" role="alert">
                      This field cannot have more than 30 characters
                    </p>
                  )}
                  {errors.name && errors.name.type === "minLength" && (
                    <p className="error" role="alert">
                      This field should have at least 5 characters
                    </p>
                  )}
                </div>
              </div>

              <div className="responsive">
                <div>
                  <input
                    id="copy"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="placeholder"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("email", {
                      required: { value: true, message: "This is required" },
                      minLength: { value: 5, message: "min 5 characters " },
                      maxLength: { value: 60, message: "max 30 characters " },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="responsive">
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="placeholder"
                    //aria-invalid={errors.name ? "true" : "false"}
                    {...register("password", {
                      required: { value: true, message: "This is required" },
                      minLength: { value: 3, message: "min 3 characters " },
                      maxLength: { value: 30, message: "max 30 characters " },
                    })}
                  />
                  {errors.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </div>
              </div>

              <div className="responsive">
                <div>
                  <input
                    type="password"
                    name="password_repeat"
                    placeholder="Repeat your password"
                    className="placeholder"
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("password_repeat", {
                      required: { value: true, message: "This is required" },
                      minLength: { value: 3, message: "min 3 characters " },
                      maxLength: { value: 30, message: "max 30 characters " },
                      validate: (value) =>
                        value === password.current || "Passwords are not equal",
                    })}
                  />
                  {errors.password_repeat && (
                    <p className="error">{errors.password_repeat.message}</p>
                  )}
                </div>
              </div>

              <div className="submit-button">
                <button
                  onClick={handleSubmit(handleLogin)}
                  type="submit"
                  value="Enviar"
                >
                  Register
                </button>
              </div>
            </form>
            {exit === "error" ? (
              <span>"Email already exists, please try with another"</span>
            ) : exit === true ? (
              <>
                <span>"User created successfully"</span>{" "}
                <Redirect push to="/log-in" />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </StyledCreateUser>
  );
};

const StyledCreateUser = styled.div`
  /* BASIC */

  body {
    font-family: "Montserrat", sans-serif;
    height: 100vh;
  }

  /* STRUCTURE */

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
  }

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
  }

  .formFooter {
    background-color: #f6f6f6;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
  }

  /* FORM TYPOGRAPHY*/

  input[type="submit"],
  button[type="submit"] {
    background-color: #8a6db1;
    border: none;
    color: #dce8f1;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(231, 239, 243, 0.4);
    box-shadow: 0 10px 10px 0 rgba(209, 191, 209, 0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  input[type="submit"]:hover,
  button[type="submit"] {
    background-color: #7d62a0;
  }

  input[type="submit"]:active,
  button[type="submit"] {
    -moz-transform: scale(0.95);
    -webkit-transform: scale(0.95);
    -o-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    background-color: #f6f6f6;

    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;

    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    background-color: #fff;
    border: none;
    border-bottom: 2px solid #402e57;
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus {
    outline: none;
  }

  input[type="text"]:placeholder,
  input[type="password"]:placeholder {
    color: #402e57;
  }

  /* ANIMATIONS */

  /* Simple CSS3 Fade-in-down Animation */
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fadeIn {
    opacity: 0;
    -webkit-animation: fadeIn ease-in 1;
    -moz-animation: fadeIn ease-in 1;
    animation: fadeIn ease-in 1;

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
  }

  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }

  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }

  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }

  /* ---------------------- */
  /* Create */
  /* ---------------------- */

  .container-two {
    width: 100vw;
    height: 100vh;
    background: url(${background1});
  }

  .onboard-card {
    border: none;
    display: flex;
    padding: 0;
    width: 70%;
    position: relative;
    left: 15%;
    top: 15%;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.09);
    background: rgba(253, 251, 251, 0.7);
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .container-two .onboard-card .onboard-img {
    background: url(${colorfulImage});
    display: block;
    flex-basis: 40%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    border-top-left-radius: 25px;
  }

  .container-two .onboard-card .onboard-form {
    min-height: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;
    flex-basis: 100%;
  }

  .container-two .info {
    margin: 2 10px;
  }

  .step-title {
    display: block;
    color: #0d0d0d;
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.05rem;
  }

  .parrafo {
    font-size: 1.2rem;
    color: #0d0d0d;
    line-height: 1.8rem;
  }

  form {
    display: block;
    margin-top: 2em;
  }

  .responsive {
    flex-direction: column;
  }

  .responsive div {
    width: 100%;
    margin: 0 5px;
  }

  .responsive input {
    color: #0d0d0d;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  .image-card {
    padding: 15px 0;
  }

  .submit-button button {
    color: #dce8f1;
    padding: 20px 30px;
    font-size: 1rem;
    font-weight: 700;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 30%;
  }
`;
export default CreateUserAccount;