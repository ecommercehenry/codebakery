import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import ADD_STORE from "../../../Apollo/mutations/addStore";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import '../../../Assets/toast.css'

toast.configure();

const ManageStores = () => {
    const [addStore] = useMutation(ADD_STORE)
    const [form, setForm] = useState({
        name: "",
        address: "",
        phoneNumber: "",
        lat: 0,
        long: 0
      }); 

  return (
      <React.Fragment>
        <form>
          <Typography variant="h6" gutterBottom>
            Add a new store
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="address"
                name="addres"
                label="Address"
                fullWidth
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="lat"
                name="lat"
                label="Latitude (from Google Maps)"
                fullWidth
              />
            </Grid><Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="long"
                name="long"
                label="Longitude (from Google Maps)"
                fullWidth
              />
            </Grid>
            <button type="submit" className="save">
              Guardar los datos
            </button>
          </Grid>
        </form>
      </React.Fragment>
  );
};

export default ManageStores;
