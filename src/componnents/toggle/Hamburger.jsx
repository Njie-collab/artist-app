import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";

const Hamburgermenue = () => {
   const [open, setOpen] = useState(false);
  return (
    
      <div className="hamburger">
       <Hamburger
          label="Show menu"
          rounded
          size={20}
          toggled={open}
          toggle={setOpen}
          direction="left"
          duration={0.8}
          distance="lg"
          //   color="#4FD1C5"
          easing="ease-in"
        //   hideOutline={false}
        />
      </div>
      

   
  );
}

export default Hamburgermenue