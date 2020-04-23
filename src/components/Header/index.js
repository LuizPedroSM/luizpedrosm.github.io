import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { AssignmentInd, Apps, ContactMail } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "#ddd",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: 100,
    height: 100
  },
  listItem: {
    color: "black"
  }
}));

const menuItens = [
  { listIcon: <HomeIcon />, listText: "Home" },
  { listIcon: <AssignmentInd />, listText: "Resume" },
  { listIcon: <Apps />, listText: "Portifolio" },
  { listIcon: <ContactMail />, listText: "Contacts" }
];

const Header = () => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = slider => (
    <Box className={classes.menuSliderContainer}>
      <Avatar
        className={classes.avatar}
        src="assets/img/avatar.jpg"
        alt="avatar"
        onClick={toggleSlider(slider, false)}
      />
      <Divider />
      <List>
        {menuItens.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Fragment>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={toggleSlider("right", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Portifolio
            </Typography>
          </Toolbar>
          <Drawer open={state.right} onClose={toggleSlider("right", false)}>
            {sideList("right")}
          </Drawer>
        </AppBar>
      </Box>
    </Fragment>
  );
};
export default Header;
