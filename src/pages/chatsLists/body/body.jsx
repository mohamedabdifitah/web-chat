import React from "react";
import SimpleSnackbar from "../components/snackbar";
import ChatCard from "./components/chat-card";
import PerfectScrollbar from 'react-perfect-scrollbar'
import "./index.css"
const ChatListBody = () => {
  return (
    <div className="chat-list-body">
      <div>
        {/* <PerfectScrollbar> */}

        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        <ChatCard />
        {/* </PerfectScrollbar> */}
      </div>
      {/* <SimpleSnackbar /> */}
    </div>
  )
}
export default ChatListBody