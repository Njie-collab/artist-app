// import React from "react";
// import "./NewForm.css";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { useState ,useContext} from "react";
// import MyContext from "../contex/MyContext";

// const Details = () => {
 
// // const [users, setUsers] = useState({ email: "", password: "" });
//   const context = useContext(MyContext);
//   const { postForm,users,setUsers } = context;
//   const [login, setLogin] = useState(false);

// const handleChange = (e) => {
//   console.log(e.target.name);
//   console.log(e.target.value);
//   console.log("====================================");
//   setUsers({ ...users, [e.target.name]: [e.target.value] });
// };
// const handleSubmit = (e) => {
//   // e.preventDefault();
//   // postForm(users)
//   try {
//     postForm( users).then((data) =>
//     console.log(data)
//     );
//     setLogin(true);
//     console.log("Submitted successfully");
//    } catch (error) {
//      console.log(error.message);
//    }
// };
//   // const submit = () => {
//   // };

//   return (
//     <div>
//       Details
//       <Form className="detail-form" inline onSubmit={handleSubmit}>
//         <FormGroup floating className="detail-form">
//           <Input
//             className={"detail-input"}
//             id="email"
//             name="email"
//             placeholder="email"
//             type="email"
//             value={users.email}
//             onChange={handleChange}
//           />
//           <Label className={"detail-label"} for="Email">
//             Email
//           </Label>
//         </FormGroup>{" "}
//         <FormGroup floating className="detail-form">
//           <Input
//             className={"detail-input"}
//             id="Password"
//             name="password"
//             placeholder="Password"
//             type="password"
//             autoComplete="on"
//             value={users.password}
//             onChange={handleChange}
//           />
//           <Label className={"detail-label"} for="Password">
//             Password
//           </Label>
//         </FormGroup>{" "}
//         <Button className={"detail-button"}>Submit</Button>
//       </Form>
//       {login && console.log("successfully Submitted")}
//     </div>
//   );
// };

// export default Details;
