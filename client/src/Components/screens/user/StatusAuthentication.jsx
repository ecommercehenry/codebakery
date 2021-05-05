import React from "react";
import Switch from "react-input-switch";

export default function StatusAuthentication({ twoFA }) {

  return (
    <>
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
