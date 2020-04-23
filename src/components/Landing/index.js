import React, { Fragment } from "react";
import Typed from "react-typed";
import { Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: 100,
      height: 100
    },
    title: {
      color: "#000"
    },
    subtitle: {
      color: "#555",
      marginBottom: "3rem"
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
    }
  })
);

const Landing = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.typedContainer}>
        <Avatar
          className={classes.avatar}
          src="assets/img/avatar.jpg"
          alt="avatar"
        />
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Portifolio em construção"]} typeSpeed={40} />
        </Typography>
        <Typography>
          <Typed
            className={classes.subtitle}
            strings={[
              "Desenvolvedor Web",
              "Desenvolvedor Frontend",
              "Desenvolvedor Backend"
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Landing;
