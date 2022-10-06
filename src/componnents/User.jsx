import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Card from "../componnents/card/Card"
import axios from "axios"

const storedId = JSON.parse(localStorage.getItem("user-id")) || "";

const User = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const { login, setLogIn } = false;

  const [error, setError] = useState(null);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {

    e.preventDefault()
   
      try {
         axios
          .post("/login", form)
          .then((resp) => {
            if (!resp.ok) {
              /* setLogin(false); */
              console.log(resp);
              throw new Error(resp.message);
            } else {
              setLogIn(true);
              localStorage.setItem("user-id", JSON.stringify(resp));
              // setLogin(true);
              setError(null);
              navigate("/home",{ replace: true });
            }
          })
          .catch((error) => {
            setError(error.message);
          });
      } catch (error) {
        console.error(error.message);
      }
    
  };

  useEffect(() => {
    const postForm = async (url = "", data = {}) => {
      try {
        const sendReq = await fetch(url, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            //'Content-Type': 'multipart/form-data'
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const info = await sendReq.json();
        return info;
      } catch (error) {
        console.error(error.message);
      }
    };

    postForm();
  }, []);

  if (login) return "login...";

  return (
    <form onSubmit={handleSubmit}>
      <formGroup>
        <input
          required={true}
          id="Email"
          name="email"
          placeholder="email"
          value={form.email}
          type="email"
          autoComplete="on"
          onChange={handleFormChange}
        />
        <label for="exampleemail" htmlFor="exampleemail">
          Email
        </label>
      </formGroup>

      <formGroup>
        <input
          required={true}
          id="Password"
          name="password"
          placeholder="Password"
          value={form.password}
          type="password"
          autoComplete="on"
          onChange={handleFormChange}
        />
        <label for="examplePassword" htmlFor="examplePassword">
          Password
        </label>
      </formGroup>
      {/* <input type="submit" value="submit" navigate={"/home"} /> */}
      <div onClick={()=>{
      }}>
        <Button
          navigate={"/home"}
          type="submit"
          value="submit"
          variant="contained"
          endIcon={<SendIcon />}
          // onSubmit={"form"}
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default User;

 {/* {login ? (
      <>
      <Card/>
      </>): ()} */}
