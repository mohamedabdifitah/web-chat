import React from "react";
import ChatAvatar from "./avatar";

const ChatCard = () => {
  return (
    <div className="outline-card">
      <ChatAvatar />
      <div className="text-holder">
        <div className="content">

          <span dir="auto" title="Porgramrs " aria-label="" className="chat-title text">
            Porgramrs
          </span>
          <span className="timestamp text ">19/12/2022</span>
        </div>
        <div className="info">
          <span dir="ltr" className="recent-msg text">+252 61 9857867 changed to +256 775 099136</span>
          <div className="chat-icons">
            <span className="badge ">1</span>

          </div>
        </div>
      </div>

    </div>  
  )
}

export default ChatCard;