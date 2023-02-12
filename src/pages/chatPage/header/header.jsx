import React from "react";

import ProfileAvatar from "../../../components/Avatar/avatar";

import { BiSearchAlt2 , BiDotsVerticalRounded } from "react-icons/bi"
import { IconButton } from "@mui/material";
import AccountMenu from "./menu";
const Header = () => {
  return (
    <div className="header-chatpage">
      <div style={{top:"7px",position:"relative",height: "61%"}}>
        <ProfileAvatar style={{width:"40px",height:"40px",borderRadius:"9px" ,}} badgecls={"badge-header-chat"} />
      </div>
      <div className="chata-info">
        
        <span data-testid="conversation-info-header-chat-title" dir="auto" title="Maqdas" aria-label=""
        className="header-title title text">
          Maqdas
          
        </span>
        <span data-testid="conversation-info-header-chat-title" dir="auto" title="Maqdas" aria-label=""
        className="left-header text descript typing">
          typing...
        </span>
      </div>
      <div>
        <AccountMenu />
      </div>
    </div>
  )
}
export default Header