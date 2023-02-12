import React from "react";
import ChatPageBody from "./body/body";
import Header from "./header/header";
import TextField from '@mui/material/TextField';
import "./index.css";
const ChatPage = () => {
  return (
    <div>
        <Header />
        
        <ChatPageBody />
    </div>
  )
}
export default ChatPage