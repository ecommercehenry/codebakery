import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import {getCurrentDomainFront} from "../../../../config/currentDomain"
import NavBar from "../../navBar/NavBar";

function Copyright() {
  let { status } = useSelector((state) => state.theme);
  return (
    <StyledFooter light={status}>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link color="inherit" href={getCurrentDomainFront()}>
          Code Bakery
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </StyledFooter>
  );
}
const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#5E3F71",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    color: "#402e57", //color de titulos
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      color: "#8a6db1",
      // background: "#8a6db1", //fondo del form
    },
  },
  stepper: {
    padding: theme.spacing(3, 10, 3),
    // background: "#8a6db1", //fondo de steps
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    // color: "#f4f2f8",
    // background: "#402e57",
  },
}));

const steps = ["Address", "Ticket", "Payment"];
function getStepContent(step, setUserdata, setShippingtype, shippingtype, setStoreId,storeId) {
  switch (step) {
    case 0:
      return (
        <AddressForm
          setUserdata={setUserdata}
          setShippingtype={setShippingtype}
          setStoreId={setStoreId}
        />
      );
    case 1:
      return <Review shippingtype={shippingtype} storeId={storeId} />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [userdata, setUserdata] = useState(true);
  const [shippingtype, setShippingtype] = useState("store");
  const [storeId, setStoreId] = useState(null)
  let { status } = useSelector((state) => state.theme);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  let nextButton = document.getElementById("nextButton");
  if (nextButton) {
    if (activeStep === steps.length - 1 || !userdata) {
      nextButton.style = "display: none";
    } else {
      nextButton.style = "display: flex";
    }
  }
  return (
    <StyledCheckout light={status}>
      <React.Fragment>
        <div className={classes.navbar}>
          <NavBar color="white" />
        </div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {
                <React.Fragment>
                  {getStepContent(
                    activeStep,
                    setUserdata,
                    setShippingtype,
                    shippingtype,
                    setStoreId,
                    storeId
                  )}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      id="nextButton"
                    >
                      {"Next"}
                    </Button>
                  </div>
                </React.Fragment>
              }
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    </StyledCheckout>
    
  );
}



const StyledCheckout = styled.div`
  background: ${({ light }) => (light ? "white" : "#222222")};
  background-color: #f1f1f1;
  
  display: flex;
  flex-direction: column;
  
  @media (min-width: 648px){}

.makeStyles-paper-3 {
    color:  #855eb7; /*letra de titulo "checkout" */
    padding: 24px;
    background: white;
    margin-top: 48px;
    margin-bottom: 48px;
}
.makeStyles-stepper-4 {
    padding: 24px 80px 24px;
    background: white;
}
.MuiButton-label {
   
    
    top: 7px;
    right: -15px;
    background-color: #5e3f71;
    color: #cecece;
    position: relative;
    left: 9px;
    padding: 6px;
    border-radius: 9px;
    border: none;

}
button.save {
    background-color: #5e3f71;
    color: #cecece;
    position: relative;
    left: 9px;
    padding: 6px;
    border-radius: 9px;
    border: none;
}
.makeStyles-button-6 {
    color: #f4f2f8;
    background: #f8f9fa;
    margin-top: 24px;
    margin-left: 8px;
}
.MuiButton-contained:hover {
    box-shadow: none;
    background-color: #d5d5d5;
}
.MuiButton-contained {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);
    background-color: white;
}
.MuiButton-contained:hover{    
    background-color: #ffffff00;
}

.MuiButton-root {
    padding: 0px 0px;
   
}
.MuiStepIcon-root.MuiStepIcon-active {
    color:  #855eb7;
}
.MuiStepIcon-root.MuiStepIcon-completed {
    color:  #855eb7;
}
.MuiGrid-spacing-xs-2 > .MuiGrid-item {
    padding: 8px;
    margin-top: 20px;
}

`;

const StyledFooter = styled.div`
  color: ${({ light }) => (light ? "inherit" : "white")};
`;
