import React from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
const RightMessage = () =>{
  return (
    <div className="row right">
      <div className="msg-container   ">
        <div className="content">
          <span>
            Hello
          </span>
        </div>
        <div className="info">
          <span className="timestamp text off">19/12/2022</span>
          <span className="chat-icon">
          <CustomIcon name={"sent"}/>
          </span>
        </div>
      </div>
    </div>
  )
}
export default RightMessage;