import React from "react";
import ChatAvatar from "./avatar";
import { RiArrowDropDownLine } from "react-icons/ri"
import Badge from '@mui/material/Badge';
import CustomBadge  from "../../../../components/badge/badge"
import { CustomIcon } from "../../../../components/icons/custom-icons";
const ChatCard = () => {
  return (
    <div className="outline-card">
      <ChatAvatar />
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
            {/* <img src={"/pin.svg"} alt="pin icon" className="chat-icon" /> */}
            {/* <Badge badgeContent={4} color="secondary">
              
            </Badge> */}
            <CustomBadge count={1} className={"badge-primary"} />
            {/* <span class="MuiBadge-root MuiBadge-root css-1c32n2y-MuiBadge-root"><span class="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorSecondary MuiBadge-badge css-jcn4dz-MuiBadge-badge">4</span></span> */}
            <span className="chat-icon">
              <CustomIcon name={"dropdown"}/>
            </span>
            {/* <img src={"/dropdown.svg"} alt="dropdown" className="chat-icon" /> */}

          </div>
        </div>
      </div>

    </div>  
  )
}
export default ChatCard;