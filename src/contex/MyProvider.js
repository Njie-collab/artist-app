// import React from 'react'
// import MyContext from "./MyContext"
// import { useState } from 'react';


// const MyProvider = (props) => {
//     const [users, setUsers] = useState({ email: "", password: "" });
// //   const postForm = async (url = "", data = {}) => {
// //     try {
// //       const sendReq = await fetch(url, {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(data),
// //       });
// //       const info = await sendReq.json();
// //       return info;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

//   return (
  
//       <MyContext.Provider value={{users ,setUsers}}>
//         {props.children}
//       </MyContext.Provider>
    
//   );
// }

// export default MyProvider