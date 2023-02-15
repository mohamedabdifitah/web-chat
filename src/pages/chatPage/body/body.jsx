import React from "react";
import Footer from "../footer/footer";
// import Messages from "./message";
import './body.css';
import RightMessage from "./rows/rightMessage";
import LeftMessage from "./rows/leftMessage";
// import Rows from "./rows";
const ChatPageBody = () => {
  return (
    <div className="chat-body">
      <div className="copybale-area">
        {/*  one div is missing */}
        <div className="conversion-panel-messages">
          <RightMessage />
          <LeftMessage />
        </div>
      <Footer />
      </div>
      <div style={{heigt:"0px"}}></div>
    </div>
  )
}
export default ChatPageBody;