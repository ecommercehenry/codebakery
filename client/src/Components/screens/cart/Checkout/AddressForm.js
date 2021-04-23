import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
export default function AddressForm() {
  const [form, setForm] = useState({
    address:'',
    dni: '',
    phoneNumber:''
  })
  const handleChange = (e)=>{
      setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <React.Fragment>
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
      </Grid>
    </React.Fragment>
  );
}
