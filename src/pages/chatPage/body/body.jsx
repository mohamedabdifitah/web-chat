import React ,{useEffect, useRef, useState} from "react";
import Footer from "../footer/footer";
// import Messages from "./message";
import './body.css';
import RightMessage from "./rows/rightMessage";
import LeftMessage from "./rows/leftMessage";
import { CustomIcon } from "../../../components/icons/custom-icons";
import CustomBadge from "../../../components/badge/badge";
import CustomEmojiPicker from '../../../components/emoji-picker/emoji-picker';
import { IconButton } from "@mui/material";
import SelectFileTypeComp from "../components/select-file-type";
import { LeftMissedCallContainer , RightMissedCallContainer } from "./rows/call";
// import Rows from "./rows";
const ChatPageBody = () => {
  const [showFileUploader,setShowFileUploader] = useState()
  const [input, setInput] = useState('');
  const [ selectedEmoji , setSelectedEmoji] = useState()
  const DivRef = useRef()
  const [ openEmoji, SetOpenEmoji] = useState()
  const pickEmoji = ({emoji}) =>{
    setSelectedEmoji(emoji)

    const ref = DivRef.current ;
		ref.focus();
    // setInput((prevInput) => emoji+prevInput );
    var currentLocation = document.location;
    const start = String(ref.value).substring(0 ,ref.selectionStart) ;
		const end = String(ref.value).substring( ref.selectionStart ) ;
		const text = start + emoji + end ;

		setInput(text);

		// setCursorPosition(start.length+emoji.length);
  }
  const ConPanelRef = useRef()
  const [ scrollHeight,setScrollHeight] = useState(ConPanelRef?.current?.scrollHeight)
  const [ scrollTop,setScrollTop] = useState(ConPanelRef?.current?.scrollTop)
  const OnScrollToBottom = () => {
    if(ConPanelRef.current){
      ConPanelRef.current.scrollTop = ConPanelRef.current.scrollHeight;

    }
  }
  useEffect(()=>{
    OnScrollToBottom()
  },[])
  return (
    <div className="chat-body">
      
      <div className="copybale-area">
        {/*  one div is missing */}
        <div className="conversion-panel-messages"  >
          <div className={"popup-area"}>
            <div>
              <CustomEmojiPicker pickEmoji={pickEmoji} open={openEmoji} SetOpen={SetOpenEmoji} />

            </div>
            <div>
              <SelectFileTypeComp show={showFileUploader}/>
            </div>
          </div>
          <div className="messages" ref={ConPanelRef}>
            <RightMessage />
            <LeftMessage />
            <LeftMessage />
            <LeftMessage />
            <LeftMessage />
            <LeftMessage />
            <RightMessage />
            <RightMessage />
            <RightMessage />
            <LeftMissedCallContainer />
            <RightMissedCallContainer />
            
          </div>

          {scrollTop == scrollHeight?<div className="turn-to-bottom" onClick={() => OnScrollToBottom()}>
              <span className="chat-icon left-center  ">
                <CustomIcon name={"dropdown"} style={{width:"20",height:"20",position:"relative"}} />
              </span>
        
                <div style={{ position: "absolute",top: "-5px"}}> 

                  <CustomBadge count={1} className={"badge-primary"} />
                </div>
            </div>:""}
        </div>
      <Footer setShowFileUploader={setShowFileUploader} showFileUploader={showFileUploader} openEmoji={openEmoji} SetOpenEmoji={SetOpenEmoji} DivRef={DivRef} setInput={setInput} input={input}/>
      </div>
      <div style={{heigt:"0px"}}></div>
    </div>
  )
}
export default ChatPageBody;