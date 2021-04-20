import { useMutation } from "@apollo/client"
import React, { useEffect, useRef, useState } from "react"
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form"

import "./UserAccount"

import CREATE_USER from "../../Apollo/mutations/createUser"

const CreateUserAccount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER)
  const [exit, SetExit] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const password = useRef({})
  password.current = watch("password", "");

  const handleLogin = async (data) => {
    createUser({
      variables: {
        name: data.name,
        password: data.password,
        email: data.email,
        role: "user",
      },
    })
    SetExit(true);
  }
useEffect(() => {
  if (data?.createUser?.name === "error") {
    SetExit("error");
  }
}, [data])
  
  // SetExit(false);
  // useEffect(()=>{ 
  //   SetExit(false);
  // }, [exit])

  return (
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
                    required: {value: true, message: 'This is required'},
                    minLength: {value: 5, message: 'min 5 characters '},
                    maxLength: {value: 30, message: 'max 30 characters '},
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
                    required: {value: true, message: 'This is required'},
                    minLength: {value: 3, message: 'min 3 characters '},
                    maxLength: {value: 30, message: 'max 30 characters '},
                  })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
                
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
                    required: {value: true, message: 'This is required'},
                    minLength: {value: 3, message: 'min 3 characters '},
                    maxLength: {value: 30, message: 'max 30 characters '},
                    validate: (value) =>
                      value === password.current ||
                      "Passwords are not equal",
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
          ) : exit === true ? <><span>"User created successfully"</span>  <Redirect push to="/log-in"/></>: null}
        </div>
      </div>
    </div>
  )
}

export default CreateUserAccount
