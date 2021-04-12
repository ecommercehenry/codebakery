import React from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

import "./UserAcount.css";

import CREATE_USER from "../../Apollo/mutations/createUser";

const UserAcount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ username, password, email }) => {
    createUser({
      variables: { name: username, password, email },
    });
  };

  return (
    <div className="login">
      <div className="heading">
        <h2>Sign in</h2>
        <form action="">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
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

          <button onClick={handleSubmit(onSubmit)} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAcount;
