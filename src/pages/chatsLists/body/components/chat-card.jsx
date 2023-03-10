import React from "react";
import ChatAvatar from "./avatar";
import { RiArrowDropDownLine } from "react-icons/ri"
import Badge from '@mui/material/Badge';
import CustomBadge  from "../../../../components/badge/badge"
import { NavLink } from "react-router-dom"
import { CustomIcon } from "../../../../components/icons/custom-icons";
import ProfileAvatar from "../../../../components/Avatar/avatar";
const ChatCard = () => {
  return (
    <div className="card-container border-bottom">
      <div component="div" className="outline-card "  data-tooltip={"block"}>
        <div >
          <ChatAvatar/>
        </div>
        {/* <ProfileAvatar loading={true}  badgecls={"badge-sidebar"}/> */}
        <div className="text-holder">
          <div className="content">

            <span dir="auto" title="Porgramrs " aria-label="" className="chat-title text">
              Porgramrs
            </span>
            <span className="timestamp text off">19/12/2022</span>
          </div>
          <div className="info">
            <span dir="ltr" className="recent-msg text off">+252 61 9857867 changed to +256 775 099136</span>
            <div className="chat-icons">
              <span className="chat-icon">
                <CustomIcon name={"pin"}/>
                
              </span>
          
              <CustomBadge count={1} className={"badge-primary"} />
              <span className="chat-icon dropdown" >
                <CustomIcon name={"dropdown"}/>
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
export default ChatCard;