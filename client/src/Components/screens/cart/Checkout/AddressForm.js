import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MODIFY_USER from "../../../../Apollo/mutations/modifyUser";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import "../../../../Assets/toast.css";

toast.configure();

export default function AddressForm() {
  const [modifyUser] = useMutation(MODIFY_USER);
  const [form, setForm] = useState({
    address: "",
    dni: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await modifyUser({
      variables: {
        id: parseInt(localStorage.id),
        address: form.address,
        dni: form.dni,
        phoneNumber: form.phoneNumber,
      },
    });
    let save = document.getElementsByClassName("save");
    save[0].style = "display: none";
    toast("Datos guardados");
  };
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Typography variant="h6" gutterBottom>
          Shipping
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="shipping address"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              id="dni"
              name="dni"
              label="DNI"
              fullWidth
              autoComplete="dni"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="phone-number"
              onChange={handleChange}
            />
          </Grid>
          <button type="submit" className="save">
            Guardar los datos
          </button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
