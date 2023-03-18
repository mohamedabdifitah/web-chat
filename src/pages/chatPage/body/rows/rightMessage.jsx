import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
const RightMessage = () =>{
  return (
    <div className="row right">
      
      <div className="msg-container right-padding ">

        <div className="msg-content left-corner">
          <span className="message-text ">
            Hello 
          </span>
        </div>
        <div className="msg-information ">
          <span className="off timestamp-chat ">
            20:34
          </span>
          <span className="off timestamp-chat status-msg">sent..</span>

        </div>
        
      </div>
    </div>
  )
}
export default RightMessage;