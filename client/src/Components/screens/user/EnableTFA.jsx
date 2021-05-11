import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getUserById from "../../../Apollo/queries/getUserById";
import { useMutation, useLazyQuery } from "@apollo/client";
import GENERATE_OTP from "../../../Apollo/mutations/generateOtp";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import VALIDATE_TOTP from "../../../Apollo/queries/validateTokenTOTP";
import { toast } from "react-toastify";
import styled from "styled-components";


toast.configure();

function EnableTFA() {
  let { id } = useParams();
  const [input, setInput] = useState({
    authentication: "",
  });

  const [generateOTP, { data: dataGenerate, loading: loadingGenerate }] =
    useMutation(GENERATE_OTP);
  const [validateTotp, { data: dataValidate, loading: loadingValidate }] =
    useLazyQuery(VALIDATE_TOTP);

  const [modifyUser] = useMutation(MODIFY_USER, {
    variables: { id: parseInt(id) },
    refetchQueries: [
      {
        query: getUserById,
        variables: { id: parseInt(id) },
      },
    ],
  });

  const inputHandler = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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

  return (
    <StyledForm onSubmit={(e) => handleSubmitFA(e)}>
      <div className="infoProductt">
        <div className="submitt">
          <Link to={`/user/${id}/my-data`}>X</Link>
        </div>
        <div className="namee">
          <label for="authentication">Enable Authentication</label>
          <img
            src={dataGenerate?.generateTokenOTP.image}
            alt=""
            width="60%"
          ></img>
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
  );
}

export default EnableTFA;

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