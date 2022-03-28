import { useState } from "react";
// import Register from './Register';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Home = () => {
  const [deleteusers, setDeleteUsers] = useState(["Ana", "marie", "banks"]);

  const handleDelete = () => {
    setDeleteUsers((oldlist) => {
      const newlist = [...oldlist];
      newlist.pop();
      return newlist;
    });
  };

  const removeusers = deleteusers.map((names) => {
    <h1>hello</h1>
    return (
      <p className="displaynames-p" key={names} >
        <span>
          <i>
            {names}
            </i>
        </span>
      </p>
    );
  });
  
  return (
    <>
      <section className="home-section">
        <h1>Title</h1>
        {deleteusers &&
          deleteusers.map((info) => {
            <p key={info}>{info}</p>;
            console.log(info);
          })}
        <div className="home-div">
          {removeusers}
          <button className="homedelete-btn" onClick={handleDelete}>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
