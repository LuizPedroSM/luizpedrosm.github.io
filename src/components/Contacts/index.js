import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    "& label": {
      color: "#56ccf2"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#2f80ed"
      },
      "&:hover fieldset": {
        borderColor: "#2f80ed"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2f80ed"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  form: {
    margin: "5em 0.5em",
    padding: "1em 0.5em",
    backgroundColor: "black",
    borderRadius: "10px",
    opacity: "0.7"
  },
  button: {
    marginTop: "1rem",
    color: "white",
    borderColor: "#2f80ed",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  header: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  box: {
    background: "linear-gradient(to left, #2f80ed, #56ccf2 )",
    height: "calc(100vh - 64px)"
  }
}));

const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.box}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.header}>
            Contact me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "gray" } }}
            margin="dense"
            size="medium"
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "gray" } }}
            margin="dense"
            size="medium"
          />

          <InputField
            fullWidth={true}
            label="Company name"
            variant="outlined"
            inputProps={{ style: { color: "gray" } }}
            margin="dense"
            size="medium"
          />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
