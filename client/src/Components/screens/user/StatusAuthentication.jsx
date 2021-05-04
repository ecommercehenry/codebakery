import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Switch from "react-input-switch";
import getUserById from "../../../Apollo/queries/getUserById";

export default function StatusAuthentication({ twoFA }) {
  // const [value, setValue] = useState();
  // const [getUser, { data, loading, error }] = useLazyQuery(getUserById)

  // useEffect(() => {
  //   console.log(data)
  //   getUser({ variables: { id: parseInt(id) } });
  //   if (data?.getUserById) {
  //     setValue(data?.getUserById.twoFA);
  //     console.log(data);
  //   }
  // }, [data, loading]);

  return (
    <>
      <div>{twoFA ? twoFA : "Nada de nada"}</div>
      <Switch
        on={true}
        off={false}
        value={twoFA}
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
