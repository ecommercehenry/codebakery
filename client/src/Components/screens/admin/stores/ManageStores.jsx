import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import ADD_STORE from "../../../../Apollo/mutations/addStore";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import "../../../../Assets/toast.css";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

toast.configure();
const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "70%",
    borderRadius: "1rem",
    backgroundColor: "white",
    color: "black", //color de titulos
    margin: "auto",
    padding: theme.spacing(2),
    position: "relative",
    marginTop:"5rem"
  },
}));

const ManageStores = () => {
  const classes = useStyles();

  const [addStore] = useMutation(ADD_STORE);
  const [form, setForm] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    lat: 0,
    long: 0,
  });
  const customId = "error toast";

  const handleAddress = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const regex = new RegExp(/^-?\d*\.{0,15}\d+$/);

  const handleChange = (e) => {
    if (e.target.value.length >= 2) {
      if (regex.test(e.target.value)) {
        setForm({ ...form, [e.target.name]: e.target.value });
      } else {
        e.target.value = "";
        toast("Numbers Only", { toastId: customId });
      }
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await addStore({
      variables: {
        name: form.name,
        address: form.address,
        phoneNumber: form.phoneNumber,
        lat: parseFloat(form.lat),
        long: parseFloat(form.long),
      },
    });
    toast("Store created");
  };
  let phoneNumber = document.getElementById("phoneNumber");
  if (phoneNumber) {
    phoneNumber.maxLength = "11";
    phoneNumber.minLength = "10";
  }

  return (
    <React.Fragment>
      <div className={classes.formContainer}>
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="address"
                name="address"
                label="Address"
                fullWidth
                onChange={handleAddress}
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
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                id="lat"
                name="lat"
                label="Latitude (paste from Google Maps)"
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} style={{display: "flex", flexDirection: "column"}}>
              <TextField
                variant="filled"
                required
                id="long"
                name="long"
                label="Longitude (paste from Google Maps)"
                fullWidth
                onChange={handleChange}
              />
              <StyledPrincipalButton type="submit" style={{alignSelf:"flex-end", marginTop: "1em"}}>Save store</StyledPrincipalButton>
            </Grid>
          </Grid>
        </form>
      </div>
    </React.Fragment>
  );
};

export const StyledPrincipalButton = styled.button`
  position: relative; 
  width:fit-content;
  padding: .2em 1em;
  border-radius: 10px;
  border: none;
  background-color: #5f3f71;
  color: white;
  font-weight: bold;

  &:hover{
    background-color: #493157;
  }
`

export default ManageStores;
