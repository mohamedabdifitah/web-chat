import React from "react";
import BadgeAvatars from "../../components/Avatar/avatar";
import ChatListBody from "./body/body";
import Header from "./header/header";
import "./index.css"
import TextField from '@mui/material/TextField';
const ConversionChats = () => {
  return (
    <div className="chats blue border-right">
      <Header />
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <input type="text" placeholder="Search..." className="search outline "/>
      <ChatListBody />

    </div>
  )
}
export default ConversionChats