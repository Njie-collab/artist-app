import React from "react";
// import { styled } from "@mui/material/styles";
// import CardHeader from "@mui/material/CardHeader";
// import CardActions from "@mui/material/CardActions";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Bg2 from "../componnents/Bg2.jpg";
import Images from "../componnents/Images/Bg6.jpg"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundColor: "red",
    borderBottom: 10,
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={Bg2} />
        {/* <Image  src={Bg2}/> */}
        {/* This another way to display image */}
        <CardContent>
          Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis hic saepe distinctio sapiente numquam voluptas
          architecto quod aliquam expedita, vero deleniti neque qui quos
          accusantium inventore porro earum adipisci modi.
        </CardContent>
      </CardActionArea>

      <CardMedia className={classes.media} image={Images} />
      <CardContent>
        Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis hic saepe distinctio sapiente numquam voluptas architecto
        quod aliquam expedita, vero deleniti neque qui quos accusantium
        inventore porro earum adipisci modi.
      </CardContent>
    </Card>
  );
};

export default Sidebar;
