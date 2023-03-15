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
            Hello hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhh
            hhhhhhhhhhhhhhh
            hhhhhhhhh
            hhhhhhhhhhhh
            <span className="off timestamp-chat">
            10:34 pm
          </span>
          </span>
        </div>
        <div className="msg-information">
          <span className="off timestamp-chat">
            10:34 pm
          </span>
          {/* <span className="chat-icon">
            <CustomIcon name={"read"}/>
                
          </span> */}

        </div>
        
      </div>
    </div>
  )
}
export default LeftMessage;