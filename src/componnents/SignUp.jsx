import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postHandler = async () => {
    const data = { firstName, email, password };
    const response = await axios.post(
      "http://localhost:9090/create-user",
      data
    );

    console.log("User Successfully Register");
    console.log(response);
    console.log("====================================");
  };

  return (
    <Form inline onSubmit={postHandler} className="detail-form">
      <h1>Welcome To My Home Page</h1>
      <h2>Please login /Register</h2>
      <FormGroup floating className="detail-form">
        <Input
          className={"detail-input"}
          required={true}
          id="firstName"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          type="firstName"
          autoComplete="on"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Label for="firstName">Name</Label>
      </FormGroup>{" "}
      <FormGroup floating className="detail-form">
        <Input
          className={"detail-input"}
          required={true}
          id="Email"
          name="email"
          placeholder="Email"
          value={email}
          type="email"
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label for="Email">Email</Label>
      </FormGroup>{" "}
      <FormGroup floating className="detail-form">
        <Input
          className={"detail-input"}
          required={true}
          id="Password"
          name="password"
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label for="Password">Password</Label>
      </FormGroup>{" "}
      <Button
        color="secondary"
        backgroundcolor="danger"
        onClick={postHandler}
        className={"detail-button"}
      >
        Submit
      </Button>
      <Button color="primary" onClick={() => navigate("../shop")}>
        Submit
      </Button>
    </Form>
  );
};

export default SignUp;

// onClick={() => handleSubmit()}
