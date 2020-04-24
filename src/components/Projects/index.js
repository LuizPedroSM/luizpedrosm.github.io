import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto"
  }
});
const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Project1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                image="https://raw.githubusercontent.com/LuizPedroSM/omnistack-11/3084464d544d23bf9df0333a8e4fa78e945fe227/frontend/src/assets/logo.svg"
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ducimus eveniet odit quibusdam repellat temporibus
                cum laboriosam ullam, architecto maiores facilis, autem
                accusamus hic dolores optio quam iure earum ex.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project2"
                height="140"
                image="https://raw.githubusercontent.com/LuizPedroSM/omnistack-11/3084464d544d23bf9df0333a8e4fa78e945fe227/frontend/src/assets/logo.svg"
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ducimus eveniet odit quibusdam repellat temporibus
                cum laboriosam ullam, architecto maiores facilis, autem
                accusamus hic dolores optio quam iure earum ex.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project3"
                height="140"
                image="https://raw.githubusercontent.com/LuizPedroSM/omnistack-11/3084464d544d23bf9df0333a8e4fa78e945fe227/frontend/src/assets/logo.svg"
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ducimus eveniet odit quibusdam repellat temporibus
                cum laboriosam ullam, architecto maiores facilis, autem
                accusamus hic dolores optio quam iure earum ex.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Project4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project4"
                height="140"
                image="https://raw.githubusercontent.com/LuizPedroSM/omnistack-11/3084464d544d23bf9df0333a8e4fa78e945fe227/frontend/src/assets/logo.svg"
              ></CardMedia>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Project4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis ducimus eveniet odit quibusdam repellat temporibus
                cum laboriosam ullam, architecto maiores facilis, autem
                accusamus hic dolores optio quam iure earum ex.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
