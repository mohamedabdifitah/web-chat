import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
const RightMessage = () =>{
  return (
    <div className="row right">
      <div className="msg-container   ">
        <div className="msg-content">
          <span>
            Hello
          </span>
        </div>
        <div className="msg-info">
          <span className="timestamp text off">20:40</span>
          <span className="chat-icon">
          <CustomIcon name={"sent"}/>
          </span>
        </div>
      </div>
    </div>
  )
}
export default RightMessage;