import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import PROMOTE_USER from "../../../Apollo/mutations/promoteUser";
import Switch from "react-input-switch";
import GET_ALL_USERS from "../../../Apollo/queries/getAllUsers";

//@ Lau
//Promote recibira el id del componente padre, ese componente renderizara este boton y le pasara como propiedad el id del usuario actual.. Por ahora harcode violento
export default function Promote({ idUser, rol}) {
  const [value, setValue] = useState(rol);
  const [promoteUser] = useMutation(PROMOTE_USER, {
    refetchQueries: [{ query: GET_ALL_USERS }],
  });

  useEffect(() => {
    promoteUser({
      variables: {
        id: idUser,
        role: value,
      },
    });
  }, [value, idUser, promoteUser]);
  return (
    <>
      <Switch
        checked={value}
        on="admin"
        off="user"
        onChange={setValue}
        value={value}
        styles={{
          track: {
            backgroundColor: "red",
          },
          trackChecked: {
            backgroundColor: "green",
          },
          button: {
            backgroundColor: "white",
          },
          buttonChecked: {
            backgroundColor: "white",
          },
        }}
      />
    </>
  );
}
