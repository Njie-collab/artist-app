import React from 'react'
import "./Inbox.css"
import FlashMessage from './notifications/FlashMessage'


const Inbox = () => {
  return (
    <div className='inbox-div'>Inbox
        <FlashMessage unreadMessages= {["hey you","good night"]} />
    </div>
  )
}

export default Inbox