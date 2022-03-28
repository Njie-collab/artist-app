import React from 'react'
import {useState} from "react"

const UsersLogin = () => {

const [login,setLogIn]=useState({email:"", password:""})

 const handleFormChange = (e) => {
   setLogIn({ ...login, [e.target.name]: e.target.value });
 };


 const handleSubmit=(e)=>{



 }


  return (
    <div>
      <form floating>
        <input
          required={true}
          id="Email"
          name="email"
          placeholder="Email"
          value={login.email}
          type="email"
          onChange={handleFormChange}
        />
        <label for="Email">Email</label>
      </form>
      {""}
      <form >
        <input
          required={true}
          id="Password"
          name="password"
          placeholder="Password"
          value={login.password}
          type="password"
          onChange={handleFormChange}
        />
        <label for="Password">Password</label>
      </form>{" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UsersLogin