import React from "react";
import { Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";
// import Images from "../../public/Images/Bg4.jpg";

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

const Scetion = () => {
  const classes = useStyles();
  const handleClick =()=>{
 console.log("You Clicked Me");
  }
  return (
    <Card className={classes.root} maxWidth="345">
      <CardActionArea>
        <CardMedia className={classes.media} image="/Images/Bg4.jpg" />
        <CardContent>
          <h1> Upcoming Dates 2022</h1>

          <p>Jan 
            Feb 
            March April May 
            June July Sept
            Oct Nov Dec</p>
        </CardContent>
      </CardActionArea>

      <Button
        onClick={() => {
          handleClick();
        }}
        variant="contained"
      >
        Click Me
      </Button>
    </Card>
  );
};

export default Scetion;
