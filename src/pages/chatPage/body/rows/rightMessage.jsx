import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
const RightMessage = () =>{
  return (
    <div className="row right">
      
      <div className="msg-container  ">

        <div className="msg-content">
          <span className="message-text">
            Hello 
            <span className="off timestamp-chat">
            10:34 pm
          </span>
          <span className="chat-icon">
            <CustomIcon name={"read"}/>
                
          </span>
          </span>
        </div>
        <div className="msg-information">
          <span className="off timestamp-chat">
            10:34 pm
          </span>
          <span className="chat-icon">
            <CustomIcon name={"read"}/>
                
          </span>

        </div>
        
      </div>
    </div>
  )
}
export default RightMessage;