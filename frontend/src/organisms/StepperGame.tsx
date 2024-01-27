import React from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export type StepperGameProps = {
  wineType: string;
};
export function StepperGame(props: StepperGameProps) {
  const { wineType } = props;
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSnackbar = (val: boolean) => {
    setOpenSnackbar(val);
  };

  return (
    <div>
      <Typography variant="h5"> Play to win {wineType} wine</Typography>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index).question}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    {getStepContent(index).options.map((opt, key) => (
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        key={key}
                        onClick={() => {
                          if (opt === getStepContent(index).answer) {
                            handleNext();
                          } else {
                            handleSnackbar(true);
                          }
                        }}
                      >
                        {opt}
                      </Button>
                    ))}
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Yay! You won the game.</Typography>
            <Button
              onClick={handleReset}
              className={classes.button}
              variant="contained"
            >
              Reset
            </Button>
          </Paper>
        )}
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => {
          handleSnackbar(false);
        }}
        message="Sorry, your answer is wrong."
      ></Snackbar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })
);

function getSteps() {
  return ["Question 1", "Question 2", "Question 3"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return {
        question: `What type of French wine is typically made from Pinot Noir grapes?`,
        options: ["Cabernet Sauvignon", "Burgundy"],
        answer: "Burgundy",
      };
    case 1:
      return {
        question: `What is the most widely planted grape in the world?`,
        options: ["Sangiovese", "Cabernet Sauvignon"],
        answer: "Cabernet Sauvignon",
      };

    case 2:
      return {
        question: `What is Australia’s most important wine grape?`,
        options: ["Shiraz", "Sangiovese"],
        answer: "Shiraz",
      };

    default:
      return {
        question: `Unknown question`,
        options: ["Ans1", "Ans2"],
        answer: "",
      };
  }
}
