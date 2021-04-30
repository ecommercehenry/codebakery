import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MODIFY_USER from "../../../../Apollo/mutations/modifyUser";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import "../../../../Assets/toast.css";
import getUserById from "../../../../Apollo/queries/getUserById";

toast.configure();

export default function AddressForm({setUserdata}) {
  const [modifyUser] = useMutation(MODIFY_USER);
  const { data, refetch,loading } = useQuery(getUserById, {
    variables: { id: parseInt(localStorage.id) },
    fetchPolicy: "no-cache",
  });
  const customId='error toast' 
  useEffect(()=>{
    if(data){
      if(data.getUserById){
        if(data.getUserById.address === null || data.getUserById.phoneNumber === null || data.getUserById.dni === null ){
          setUserdata(false)
        }else{
          setUserdata(true)
        }

      }
    }    
  },[loading, data, setUserdata])
  const [form, setForm] = useState({
    address: "",
    dni: "",
    phoneNumber: "",
  });
  const regex =new RegExp("^[0-9]*$") 
  const handleAddress = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleChange = (e) => {
    if(regex.test(e.target.value)){
      setForm({ ...form, [e.target.name]: e.target.value });
    }else{
      e.target.value = ""
      toast("Numbers Only", {toastId: customId});
    }
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
  let dni = document.getElementById("dni");
  let phoneNumber = document.getElementById("phoneNumber");
  if (dni) {
    dni.style = "background : #ffffff";
    phoneNumber.style = "background : #ffffff";
    dni.maxLength = "8";
    dni.minLength = "7";
    phoneNumber.maxLength = "11";
    phoneNumber.minLength = "10";
  }
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
          <button
            type="submit"
            className='save'
          >
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
    </React.Fragment>
  );
}

// const StyledContainer = styled.div`
//   background:red;
//   width:100vw;
//   height:fit-content;
// `;
