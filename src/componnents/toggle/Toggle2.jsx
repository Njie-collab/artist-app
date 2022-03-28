
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";



const Toggle2 = () => {
     const [open, setOpen] = useState(false);

    //  const showSidebar = () => setOpen(!open);
    //  const [toggled, setToggled] = useState(false);

  return (
    <div className="modalbackground">
        <Hamburger
          label="Show menu"
          rounded
          size={20}
          toggled={open}
          toggle={() => setOpen(!open)}
          direction="left"
          duration={0.8}
          distance="lg"
          //   color="#4FD1C5"
          easing="ease-in"
          hideOutline={false}
        />
      {open && (
        <ul className="modalcontainer">
        
          {/* <button onClick={() => setOpen(false)}>CloseX</button> */}
          <Link to="/signup">
            <li className="title1">Singup</li>
          </Link>

          <Link to="login">
            <li className="title2">Login</li>
          </Link>
          <Link to="inbox">
            <li className="title3">Inbox</li>
          </Link>
        </ul>
      )}
      {/* <button onClick={() => setOpen(true)}>Open</button> */}
    </div>
  );
  
}

export default Toggle2