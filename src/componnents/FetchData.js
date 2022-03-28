import { useState, useEffect } from "react";
import "./FetchData.css"
// import axios from "axios";
// import axios from "axios";

const FetchData = () => {
  const [display, setDisplay] = useState("");
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9090")
      .then((res) => {
        return res.json();
      })
      .then((reciveddata) => {
        console.log("====================================");
        console.log("Here is your data", reciveddata);
        console.log('====================================');
    
        setDisplay(reciveddata);
        setisPending(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (_id) => {
    
    const newUsers = display.details.filter((userdata) => userdata._id !== _id);
    setDisplay(newUsers);
    console.log("====================================");  
    console.log('This is the fliter data trying to delete users by _id',newUsers);
    console.log("====================================");
  };

  return (
    <>
      <div >
        <h1>hello</h1>
        {isPending && <div>Loading....</div>}
        {display &&
          display.details.map((users) => (
            <div className="showdata-div" key={users._id}>
              <p>{users.firstName}</p>
              <p>{users.email}</p>
              <p>{users.password}</p>
              <button
                className="showdata-btn"
                onClick={() => handleDelete(users._id)}
              >
                Delete button
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default FetchData;

//  <ul>
//    <h1>Hello</h1>
//    {display.map((users) => (
//      <li key={users.id}>
//        {users.firstName}
//        {users.email}
//        {users.password}
//      </li>
//    ))}
//  </ul>;

// const FectApi = async () => {
//   const response = await fetch(
//     // "http://localhost:9090"
//     "https://jsonplaceholder.typicode.com/posts"
//     // "https://emojihub.herokuapp.com/api/random"
//   );
//   const data = await response.json();
//   console.log(data);
//   setDisplay(data);
//   // const dataArray = data.map((item) => {
//   //   return item.id;
//   // })
//   // console.log(dataArray);
// };
// FectApi();
