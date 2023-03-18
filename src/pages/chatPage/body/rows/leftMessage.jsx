import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
import ProfileAvatar from "../../../../components/Avatar/avatar";
const LeftMessage = () =>{
  return (
    <div className="row left  ">
      <div style={{position: "relative",alignItems:"center",display:"flex"}}>
        <ProfileAvatar style ={{
          width:"27px",
          height:"27px",
          borderRadius:"9px"
      }} />
      </div>
      <div className="msg-container  ">

        <div className="msg-content">
          <span className="message-text">
            Hello
          </span>
        </div>
        <div className="msg-information">
          <span className="off timestamp-chat">
            10:34
          </span>
          <span className="off timestamp-chat status-msg">read</span>

        </div>
        
      </div>
    </div>
  )
}
export default LeftMessage;