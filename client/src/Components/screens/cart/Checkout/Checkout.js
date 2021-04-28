import React, {useState} from "react";
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
import NavBar from "../../navBar/NavBar";

function Copyright() {
  let { status } = useSelector((state) => state.theme);
  return (
    <StyledFooter light={status}>
      <Typography variant="body2" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://localhost:3000/">
          Code Bakery
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </StyledFooter>
  );
}
const useStyles = makeStyles((theme) => ({
  navbar:{
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
      color: "#f4f2f8",
      background: "#8a6db1", //fondo del form
    },
  },
  stepper: {
    padding: theme.spacing(3, 10, 3),
    background: "#8a6db1", //fondo de steps
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "#f4f2f8",
    background: "#402e57",
  },
}));

const steps = ["Address", "Ticket", "Payment"];
function getStepContent(step, userdata, setUserdata) {
  switch (step) {
    case 0:
      return <AddressForm setUserdata={setUserdata}/>;
    case 1:
      return <Review />;
    case 2:
      return <PaymentForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [userdata, setUserdata] = useState(true)
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
          <NavBar color="white"/>
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
                  {getStepContent(activeStep, userdata, setUserdata)}
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
`;

const StyledFooter = styled.div`
  color: ${({ light }) => (light ? "inherit" : "white")};
`;
