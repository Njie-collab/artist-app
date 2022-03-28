import {useState} from 'react'
// import { Snackbar } from '@mui/material'
// import { Alert } from '@mui/material'
// import MuiAlert from "@mui/material/Alert";
import "../Inbox.css"



const FlashMessage = (props) => {
  const [toggle,setToggle]=useState(false)

  
  const unreadMessages=props.unreadMessages;
   

  return (
    <div>
      <h1>hello !!</h1>
      { toggle && unreadMessages.length > 0 && (
        <p>'You have{unreadMessages.length} unread messages'</p>
      )}
      <button className="falshmessage-btn" onClick={() =>setToggle(!toggle)}>unread Message</button>
    </div>
  );
}

export default FlashMessage