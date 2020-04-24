import React, { Fragment } from "react";
import Typed from "react-typed";
import { Box, Typography, Avatar, makeStyles } from "@material-ui/core";
import Particles from "react-particles-js";

const useStyles = makeStyles(theme => ({
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  title: {
    color: "#000"
  },
  subtitle: {
    color: "#555",
    marginBottom: "3rem"
  },
  typedContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 64px)",
    background: "linear-gradient(to left, #2f80ed, #56ccf2 )"
  },
  particlesCanva: {
    position: "absolute"
  }
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Particles
        width="95vw"
        height="90vh"
        className={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 16,
              density: {
                enable: true,
                value_area: 300
              }
            },
            color: {
              value: "#000"
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 1,
                color: "#ddd"
              },
              polygon: {
                nb_sides: 6
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false
              }
            },
            lineLinked: {
              enable: true,
              distance: 150
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              }
            }
          }
        }}
      />
      <Box className={classes.typedContainer}>
        <Avatar
          className={classes.avatar}
          src="assets/img/avatar.jpg"
          alt="avatar"
        />
        <Typography className={classes.title} variant="h4">
          <Typed strings={["🚧 Portifolio em construção 🚧"]} typeSpeed={30} />
        </Typography>
        <Typography>
          <Typed
            className={classes.subtitle}
            strings={["Desenvolvedor Web: Frontend e Backend"]}
            typeSpeed={30}
          ></Typed>
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Landing;
