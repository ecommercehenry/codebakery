import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import "./UserAcount.css";

import CREATE_USER from "../../Apollo/mutations/createUser";

// Login/ out
import Login from "./Login";
import Logout from "./Logout";

const UserAcount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ username, password, email }) => {
    createUser({
      variables: { name: username, password, email },
    });
  };

  // Google login
  const handleLogin = async (googleData) => {
    console.log("********************");
    console.log(googleData);
    /* const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json(); */
    // store returned user somehow
  };

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default UserAcount;

{
  /* <div className="login">
      <div className="heading">
        <form action="">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username o email"
              {...register("username", { required: true, maxLength: 18 })}
            />
          </div>

          <div className="input-group input-group-lg">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", { required: true, maxLength: 18 })}
            />
          </div>

          <div className="input-group input-group-lg">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 18 })}
            />
          </div>
          <div>
            <button onClick={handleSubmit(onSubmit)} type="submit">
              Login
            </button>
          </div>
          <div> <Login />
            <Logout /> </div>
            </form>
            </div>
          </div> */
}
