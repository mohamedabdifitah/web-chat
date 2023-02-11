import React from "react";
import BadgeAvatars from "../../components/Avatar/avatar";
import ChatListBody from "./body/body";
import Header from "./header/header";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header />
      <ChatListBody />
    </div>
  )
}
export default Sidebar