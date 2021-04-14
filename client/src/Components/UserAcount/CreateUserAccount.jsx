import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./UserAccount";

import CREATE_USER from "../../Apollo/mutations/createUser";

const CreateUserAccount = () => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, isDirty, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    // Aqui iria la mutation
    console.log(data);
  };

  return (
    <div className="container-two">
      <div className="onboard-card">
        <div className="onboard-img"></div>
        <div className="onboard-form">
          <div className="info">
            <h2 className="step-title">Bienvenido</h2>
            <p className="parrafo">
              Complete este formulario para registrarse en el sitio
            </p>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="responsive">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Escriba tu nombre"
                  className="placeholder"
                  {...register("name", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  pattern="[a-zA-Z ]*"
                />
              </div>
            </div>

            <div className="responsive">
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Escribe tu email"
                  className="placeholder"
                  {...register("email", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>

            <div className="responsive">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  className="placeholder"
                  {...register("password", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>

            <div className="responsive">
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Repite tu contraseña"
                  className="placeholder"
                  {...register("repeatpassword", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>

            <div className="submit-button">
              <button type="submit" value="Enviar">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccount;
