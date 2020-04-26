import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { Work, School } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#ddd",
    padding: "0.5rem 0.5rem"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid red",
      opacity: "0.7",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid red",
    backgroundColor: "black",
    opacity: "0.7",
    borderRadius: "10px",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "red red transparent transparent",
      opacity: "0.8",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        opacity: "0.7",
        borderColor: "red"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent red red"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "black",
    opacity: "0.7",
    color: "white",
    lineHeight: 1,
    padding: "1rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    backgroundColor: "black",
    opacity: "0.7",
    borderRadius: "10px",
    color: "#fff",
    padding: "2rem 0",
    marginTop: "1rem",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box component="header" className={classes.mainContainer}>
        {/* title1 */}
        <Typography variant="h4" align="center" className={classes.heading}>
          <Work fontSize="inherit" /> Experiência
        </Typography>

        <Box component="div" className={classes.timeLine}>
          {/* item 1 */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Estágio
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#eee" }}
            >
              ANAC (Agência Nacional de Aviação Civil)
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Tive a oportunidade de atuar no desenvolvimento do sistema interno
              SySDEA. Trabalhando na transição do sistema anterior feito em
              Access, para um completamente novo. Usando Visual Studio como
              editor, padrão de projeto mvc, C# no backend, bootstrap no
              frontend, Microsoft SQL Server como Banco de Dados e Team
              Foundation Server para controle de versionamento.
            </Typography>
          </Box>
        </Box>

        {/* title2 */}
        <Typography variant="h4" align="center" className={classes.heading}>
          <School fontSize="inherit" /> Educação
        </Typography>

        <Box component="div" className={classes.timeLine}>
          {/* item 1 */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013-2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Bacharelado em Ciência da Computação
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#eee" }}
            >
              Centro Universitário Estadual da Zona Oeste
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Linguagens: C e Java
            </Typography>
          </Box>

          {/* item 2 */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2011-2013
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Técnico em Informática
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#eee" }}
            >
              Firjan SENAI SESI Maracanã
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Desenvolvimento web usando .net C# e Java jsp.
            </Typography>
          </Box>

          {/* item 3 */}
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2008-2010
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              align="center"
              className={classes.subHeading}
            >
              Técnico em Informática
            </Typography>
            <Typography
              variant="body1"
              align="center"
              style={{ color: "#eee" }}
            >
              Colégio Arte e Instrução
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "tan" }}
            >
              Desenvolvimento desktop usando Delphi 7 e Visual Basic 6.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resume;
