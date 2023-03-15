import React from "react";
import Footer from "../footer/footer";
// import Messages from "./message";
import './body.css';
import RightMessage from "./rows/rightMessage";
import LeftMessage from "./rows/leftMessage";
import { CustomIcon } from "../../../components/icons/custom-icons";
import CustomBadge from "../../../components/badge/badge";
import { IconButton } from "@mui/material";
import { LeftMissedCallContainer , RightMissedCallContainer } from "./rows/call";
// import Rows from "./rows";
const ChatPageBody = () => {
  return (
    <div className="chat-body">
      <div className="copybale-area">
        {/*  one div is missing */}
        <div className="conversion-panel-messages">
          <div className="messages">
            <RightMessage />
            <LeftMessage />
            <LeftMessage />
            <LeftMissedCallContainer />
            <RightMissedCallContainer />
            
          </div>

          <div className="turn-to-bottom">
        
              <span className="chat-icon left-center  ">
              {/* <div role="button" tabindex="0" aria-label="Scroll to bottom" className="_25zh0 p357zi0d gndfcl4n ac2vgrno d6ll3xky db4qzak4 i5tg98hk f9ovudaz przvwfww gx1rr48f f8jlpxt4 hnx8ox4h k17s6i4e ofejerhi os0tgls2 g9p5wyxn i0tg5vk9 aoogvgrq o2zu3hjb hftcxtij rtx6r8la e3b81npk oa9ii99z p1ii4mzz" data-tab="7" style={{transform: "scaleX(1) scaleY(1)", opacity: 1,}}><span className="SruXD"></span><span data-testid="down" data-icon="down" className="_28HTg"><svg viewBox="0 0 19 20" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" xml:space="preserve"><path fill="currentColor" d="M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z"></path></svg></span></div> */}
                <CustomIcon name={"dropdown"} style={{width:"20",height:"20",position:"relative"}} />
              </span>
        
                <div style={{ position: "relative",left: "-13px",top:'-16px'}}> 

                  <CustomBadge count={1} className={"badge-primary"} />
                </div>
            </div>
        </div>
      <Footer />
      </div>
      <div style={{heigt:"0px"}}></div>
    </div>
  )
}
export default ChatPageBody;