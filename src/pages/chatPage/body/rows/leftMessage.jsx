import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
import ProfileAvatar from "../../../../components/Avatar/avatar";
const LeftMessage = () =>{
  return (
    <div className="row left  ">
      <div style={{position: "relative",alignItems:"self-end",display:"flex"}}>
        <ProfileAvatar style ={{
          width:"27px",
          height:"27px",
          borderRadius:"9px"
      }} />
  </div>
      <div className="msg-container  ">
        <div className="msg-content">
          <span>
            Hello
          </span>
        </div>
        
      </div>
    </div>
  )
}
export default LeftMessage;