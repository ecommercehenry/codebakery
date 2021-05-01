import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MODIFY_USER from "../../../../Apollo/mutations/modifyUser";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import "../../../../Assets/toast.css";
import getUserById from "../../../../Apollo/queries/getUserById";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import GET_ALL_STORES from "../../../../Apollo/queries/getAllStores";
import { Button } from "@material-ui/core";

toast.configure();

export default function AddressForm({ setUserdata }) {
  //variables
  const regex = new RegExp("^[0-9]*$");
  const customId = "error toast";
  let dni = document.getElementById("dni");
  let phoneNumber = document.getElementById("phoneNumber");
  //states
  const [shipping, setShipping] = useState("none");
  const [form, setForm] = useState({
    address: "",
    dni: "",
    phoneNumber: "",
  });
  const [selected, setSelected] = useState("none");
  //queries
  const { data, refetch, loading } = useQuery(getUserById, {
    variables: { id: parseInt(localStorage.id) },
    fetchPolicy: "no-cache",
  });
  const stores = useQuery(GET_ALL_STORES);
  //mutations
  const [modifyUser] = useMutation(MODIFY_USER);

  //useEffects
  useEffect(() => {
    let formContainer = document.getElementById("formContainer");
    let store = document.getElementById("store");
    if (formContainer) {
      if (shipping === "none") {
        formContainer.style = "display:none";
        store.style = "display: none";
      } else if (shipping === "delivery") {
        formContainer.style = "display: ''";
        store.style = "display: none";
      } else if (shipping === "store") {
        formContainer.style = "display:none";
        store.style = "display: flex";
      }
    }
  }, [shipping]);
  useEffect(() => {
    if (shipping === "delivery") {
      if (data) {
        if (data.getUserById) {
          if (
            data.getUserById.address === null ||
            data.getUserById.phoneNumber === null ||
            data.getUserById.dni === null
          ) {
            setUserdata(false);
          } else {
            setUserdata(true);
          }
        }
      }
    } else if (shipping === "none") {
      setUserdata(false);
    }
  }, [loading, data, shipping, selected]);
  //event Handlers
  const handleStore = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  const submitStore = (e) => {
    e.preventDefault();
    setUserdata(true);
    toast("Store saved");
  };
  const handleAddress = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    if (regex.test(e.target.value)) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else {
      e.target.value = "";
      toast("Numbers Only", { toastId: customId });
    }
  };
  const handleShipping = (e) => {
    e.preventDefault();
    setShipping(e.target.value);
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
    let address = document.getElementById("address");
    let dni = document.getElementById("dni");
    let phoneNumber = document.getElementById("phoneNumber");
    address.disabled = true;
    dni.disabled = true;
    phoneNumber.disabled = true;
    refetch();
    toast("Datos guardados");
  };
  // form format/ DOM manipulation
  if (dni) {
    dni.maxLength = "8";
    dni.minLength = "7";
    phoneNumber.maxLength = "11";
    phoneNumber.minLength = "10";
  }
  console.log(selected);
  return (
    <React.Fragment>
      <div>
        <FormControl>
          <InputLabel htmlFor="age-native-simple">Shipping method</InputLabel>
          <Select
            fullWidth
            native
            onChange={handleShipping}
            inputProps={{
              name: "shipping",
              id: "shipping",
            }}
          >
            <option disabled selected aria-label="None" value="none" />
            <option value="delivery">Home delivery</option>
            <option value="store">Store pickup</option>
          </Select>
        </FormControl>
      </div>
      <form onSubmit={submitHandler} id="formContainer">
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
              onChange={handleAddress}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              id="dni"
              name="dni"
              label="DNI (Only numbers)"
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
              label="Phone Number (Only numbers)"
              fullWidth
              autoComplete="phone-number"
              onChange={handleChange}
            />
          </Grid>
          <button type="submit" className="save">
            Guardar los datos
          </button>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Your currend data:
            </Typography>
            <Typography gutterBottom>
              Comprador: {data?.getUserById?.name}
            </Typography>
            <Typography gutterBottom>DNI: {data?.getUserById?.dni}</Typography>
            <Typography gutterBottom>
              Direccion : {data?.getUserById?.address}
            </Typography>
            <Typography gutterBottom>
              Tel: {data?.getUserById?.phoneNumber}
            </Typography>
          </Grid>
        </Grid>
      </form>
      <div id="store">
        <form onSubmit={submitStore}>
          <FormControl>
            <InputLabel htmlFor="age-native-simple">Shipping method</InputLabel>
            <Select
              fullWidth
              native
              onChange={handleStore}
              inputProps={{
                name: "stores",
                id: "stores",
              }}
            >
              <option disabled selected aria-label="None" value="none" />
              {stores?.data?.getAllStores?.map((element) => (
                <option value={element.id} key={element.id}>
                  {element.id}|{element.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit"> Confirm store</Button>
        </form>
      </div>
    </React.Fragment>
  );
}
