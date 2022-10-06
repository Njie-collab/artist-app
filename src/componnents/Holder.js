import React from "react";
import { Grid } from "@mui/material";
// import { Paper } from "@mui/material";
// import HolderCards from "./HolderCards";
import { Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
// import Images2 from "../componnents/Images/Bg11.jpg";
// import Images3 from "../componnents/Images/Bg12.jpg";
// import Images4 from "../componnents/Images/Bg14.jpg";
// import Images5 from "../componnents/Images/Bg15.jpg";

const Holder = () => {
  return (
    <Container className="card">
      WELCOME TO OUR GALLERY
      <Grid
        container
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <CardMedia>
              <img
                src="/Images/Bg11.jpg"
                alt="Bg11.jpeg"
                width="240"
                height="100%"
              />
            </CardMedia>
            <CardContent>
              Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Blanditiis hic saepe distinctio sapiente numquam voluptas
              architecto quod aliquam expedita, vero deleniti neque qui quos
              accusantium inventore porro earum adipisci modi.
            </CardContent>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <CardMedia>
              <img
                src="/Images/Bg12.jpg"
                alt="Bg12.jpg"
                width="240px"
                height="300px"
              />
            </CardMedia>
            <CardContent>
              Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Blanditiis hic saepe distinctio sapiente numquam
            </CardContent>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <CardMedia>
              <img
                src="/Images/Bg7.jpg"
                alt="Bg7.jpg"
                width="240px"
                height="100%"
              />
            </CardMedia>
            <CardContent>
              Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Blanditiis hic saepe distinctio sapiente numquam voluptas
              architecto quod aliquam expedita, vero deleniti neque qui quos
              accusantium inventore porro earum adipisci modi.
            </CardContent>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <CardMedia>
              <img src="/Images/Bg15.jpg" alt="Bg15.jpg" width="240px" height="100%" />
            </CardMedia>
            <CardContent>
              Hello SIDEBAR Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Blanditiis hic saepe distinctio sapiente numquam voluptas
              architecto quod aliquam expedita, vero deleniti neque qui quos
              accusantium inventore porro earum adipisci modi.
            </CardContent>
          </CardActionArea>
          {/* <HolderCards /> */}
          {/* <Paper> This was an example
            item4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            quidem soluta quia iste, eos nam impedit non error vero 
          </Paper> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Holder;
