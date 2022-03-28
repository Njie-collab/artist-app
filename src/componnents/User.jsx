import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
              throw new Error(resp.message);
            } else {
              setLogIn(true);
              localStorage.setItem("user-id", JSON.stringify(resp));
              // setLogin(true);
              setError(null);
              navigate("/", { replace: true });
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
          type="password"
          onChange={handleFormChange}
        />
        <label for="examplePassword">Email</label>
      </formGroup>
      <formGroup>
        <input
          required={true}
          id="Password"
          name="password"
          placeholder="Password"
          value={form.password}
          type="password"
          onChange={handleFormChange}
        />
        <label for="examplePassword">Password</label>
      </formGroup>
      <input type="submit" value="submit"/>
    </form>
  );
};

export default User;
