import React from "react";

import ProfileAvatar from "../../../components/Avatar/avatar";
import "./index.scss"
import { BiSearchAlt2 , BiDotsVerticalRounded } from "react-icons/bi"
import { IconButton } from "@mui/material";
import AccountMenu from "./menu";
const Header = (props) => {
  var {title} = props;
  return (
    <div className="header-chatpage">
      <div style={{top:"7px",position:"relative",height: "61%"}}>
        <ProfileAvatar profileStyles={{top:"6px",left: "3px",position: "relative"}} style={{width:"40px",height:"40px",borderRadius:"9px" ,}} badgecls={"badge-header-chat"} />
      </div>
      <div className="chata-info">
        
        <span data-testid="conversation-info-header-chat-title" dir="auto" title={title} aria-label=""
        className="header-title title text">
          {title}
          
        </span>
        <span data-testid="conversation-info-header-chat-title" dir="auto" title={title} aria-label=""
        className="left-header text descript typing">
          typing...
        </span>
      </div>
      <div className="header-menu">
        <AccountMenu />
      </div>
    </div>
  )
}
export default Header