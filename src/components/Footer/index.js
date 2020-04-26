import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";

const useStyle = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: "#56ccf2",
      "&:hover": {
        fill: "#2f80ed",
        fontSize: "1.8rem"
      }
    }
  }
});
const Footer = () => {
  const classes = useStyle();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction className={classes.root} icon={<LinkedIn />} />
      <BottomNavigationAction className={classes.root} icon={<GitHub />} />
    </BottomNavigation>
  );
};

export default Footer;
