import React from "react";
import SimpleSnackbar from "../components/snackbar";
import ChatCard from "./components/chat-card";
import PerfectScrollbar from 'react-perfect-scrollbar'
import "./index.scss"
import ArchiveCard from "./components/archive-card";
import { CustomIcon } from "../../../components/icons/custom-icons";
const ChatListBody = () => {
  return (
    <div className="chat-list-body chat-body-height">
      <div>
        {/* <PerfectScrollbar> */}
        <ArchiveCard />
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