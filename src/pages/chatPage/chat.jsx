import React from "react";
import ChatPageBody from "./body/body";
import Header from "./header/header";
import TextField from '@mui/material/TextField';
import "./index.css";
import Footer from "./footer/footer";
const ChatPage = () => {
  return (
    <div className="chat">
        <Header />
        
        <ChatPageBody />
      
    </div>
  )
}
export default ChatPage