import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
export default function AddressForm() {
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          variant="filled"
            required
            id="phone-number"
            name="phone-number"
            label="Phone Number"
            fullWidth
            autoComplete="phone-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}