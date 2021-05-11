import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getUserById from "../../../Apollo/queries/getUserById";
import { useMutation, useLazyQuery } from "@apollo/client";
import GENERATE_OTP from "../../../Apollo/mutations/generateOtp";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import VALIDATE_TOTP from "../../../Apollo/queries/validateTokenTOTP";
import { toast } from "react-toastify";

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
    <form onSubmit={(e) => handleSubmitFA(e)}>
      {/* <button className="closeee">
        <img src={closeIcon} width="30px" display="flex" alt="closeIcon" />
      </button> */}
      <div className="infoProductt">
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
    </form>
  );
}

export default EnableTFA;
