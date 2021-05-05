import React from "react";
import { useMutation } from "@apollo/client";
import MODIFY_USER from "../../../Apollo/mutations/modifyUser";
import getUserById from "../../../Apollo/queries/getUserById";

export default function DisableTFA({ id }) {
  const [modifyUser] = useMutation(MODIFY_USER, {
    refetchQueries: [{
      query: getUserById,
      variables: { id: parseInt(id) }
    }]})

  const handleClick = (e) => {
      e.preventDefault()
      modifyUser({variables: {
          id: parseInt(id),
          twoFA: false,
      }})
      // window.location.reload()
  }


  return (
        <button onClick={e => handleClick(e)}>DISABLE AUTHENTICATION</button>
  );
}
