import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios'


//This Is The Post Request To Create Users//
 const CreateUsers = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //This Is fecting users data and we need to display it //
  const getusersHandler = async () => {
    const usersdata = { firstName, lastName, email, password };
    const response = await axios.post(
      "http://localhost:9090/create-user",
      usersdata
    );
    console.log(response);
    console.log('====================================');
  };

  // useEffect(()=>{
  // getusersHandler()
  // },[])


 
  return (
    <div>
      createUsers
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="first Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
        placeholder="first Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={getusersHandler}></button>
    </div>
  );
};

export default CreateUsers;
