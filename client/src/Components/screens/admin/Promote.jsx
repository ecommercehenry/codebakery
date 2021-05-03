import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import PROMOTE_USER from "../../../Apollo/mutations/promoteUser";
import Switch from "react-input-switch";
import GET_ALL_USERS from "../../../Apollo/queries/getAllUsers";

//@ Lau
//Promote recibira el id del componente padre, ese componente renderizara este boton y le pasara como propiedad el id del usuario actual.. Por ahora harcode violento
export default function Promote({ idUser, rol , name}) {
  const [value, setValue] = useState(false);
  const [promoteUser, { loading, error }] = useMutation(PROMOTE_USER, {
    // refetchQueries: [{ query: GET_ALL_USERS }],
  });

  useEffect(() => {
    // promoteUser({
    //   variables: {
    //     id: idUser,
    //     role: value,
    //   },
    // });
  }, [value]);
  const handleChangeSwitch = e => {
    console.log('atstattsats')
    setValue(value ? false: true)
  }
  console.log("value", value, "name", name)
  return (
    <>
    <p>{name}</p>
      <p>{value} </p>
      <Switch
        checked={value}
        // id={idUser}
        name={name}
        on={true}
        off={false}
        onChange={handleChangeSwitch}
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
