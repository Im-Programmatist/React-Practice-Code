import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import DoneIcon from "@mui/icons-material/Done";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  zIndex: 1,
  color: "#fff",

  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "silver",
    color: "white!important",
  }),
  ...(!ownerState.active && {
    background: "silver",
    color: "white!important",
  }),
  ...(ownerState.completed && {
    background: "green",
    color: "white!important",
  }),
  ...(ownerState.step && {
     background: "silver",
     color: "white!important",
  }),

}));

function ColorlibStepIcon(props) {
  const { active, completed, step } = props;
  return (
    <ColorlibStepIconRoot
       ownerState={{ completed, active, step }}
    >
      <DoneIcon />
    </ColorlibStepIconRoot>
  );
}

const useStyles = makeStyles((theme) =>
createStyles({
	root: {
	width: '100%',
  "& .Mui-active": { color: "grey !important" },
  "& .Mui-completed": { color: "green !important" },
  "&  Mui-disabled": { color: "grey !important" },
  "& .Mui-disabled .MuiStep-root": { color: "grey !important" },
  "& .MuiStepConnector-root": {
    top: 0, 
  },
  "& .MuiStepConnector-root span": {
    borderColor: "tranparent",
    display: "none",
  },
  "& .MuiStepConnector-root span::before": {
    color: "white",
    display: "none",
  },
	}
}),
);

const steps = [
  "Name",
  "Tax Info",
  "Location",
  "Designation Group",
  "Designation",
  "Department",
];

const StepperTab = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [progress, setProgress] = React.useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    setProgress((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = 17;
      return Math.min(oldProgress + diff, 100);
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress((oldProgress) => {
      const diff = 17;
      return Math.min(oldProgress - diff, 100);
    });
  };

  React.useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100vh",

          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "70%",
            height: "100%",
            m: 2,
            mx: "auto",
          }}
        >
          <Card
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginX: "auto",
              mt: 3,
              borderRadius: "10px",
              p: 2,

              background: "#FFFFFF",
              boxShadow: " 0px 1px 5px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Stepper
                activeStep={activeStep}
              >
                {steps.map((label, index) => {
                  return (
                    <Step
                      key={label}
                    >
                      <StepLabel
                        StepIconComponent={ColorlibStepIcon}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {/* progressbar+++++++++++++ */}
              <Box sx={{ pt: 3 }}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 2,
                    backgroundColor: "silver",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "orange",
                    },
                  }}
                />
              </Box>
              <React.Fragment>
                {activeStep === 0 ? (
                  <Box
                    sx={{
                      m: 5,
                      display: "flex",

                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <p>demo</p>
                  </Box>
                ) : (
                  ""
                )}
                {/* {activeStep === 0 ? <Designationgroup /> : ""} */}
                {/* {activeStep === 1 ? <Side /> : ""} */}
                {/* {activeStep === 2 ? <Department /> : ""} */}
              </React.Fragment>
            </Box>
          </Card>

          {/* button++++++++++++++++++++++++++++++++++++++ */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              width: "100%",
              mx: "auto",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleBack}
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                /* identical to box height */
                backgroundColor: "white!important",
                textAlign: "center",
                color: "#515151!important",
                border: "1px solid #515151",
                borderRadius: "12px",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "white",
                  textAlign: "center",
                  color: "#515151!important",
                  border: "1px solid #515151",
                },
                ...(activeStep === 0 && {
                  display: "none",
                }),
              }}
              startIcon={
                <ArrowBackIosNewIcon
                  sx={{ fontSize: "16px!important", color: "#515151" }}
                />
              }
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              variant="contained"
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                /* identical to box height */
                backgroundColor: "#ff9800",
                textAlign: "center",
                color: "white!important",
                border: "1px solid #ff9800",
                borderRadius: "12px",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "#ff9800",
                  textAlign: "center",
                  color: "white!important",
                },
              }}
              endIcon={
                <ArrowForwardIosIcon
                  sx={{ fontSize: "16px!important", color: "white" }}
                />
              }
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default StepperTab;
