import React , {useRef, useState} from 'react'
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./footer.scss"
import { IconButton ,Button} from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';

const Footer = (props) => {
  const {SetOpenEmoji,openEmoji,DivRef,setInput,input,setShowFileUploader,showFileUploader} = props;
  
  
  function changeMessageValue(e){
    e.target.value = value;
  }
  // console.log(DivRef.current)
  return (
    <footer
    className='footer border-top'>
      <div>
        <div className="first-column-footer">

          <button className="button-footer button-normal" onClick={() => { SetOpenEmoji(!openEmoji)}}>
            <BsEmojiSmile/>

          </button>
        </div>
        <input style={{backgroundColor:"inherit",resize:"none",lineBreak:"anywhere"}} value={input} 
        onChange={(e) => setInput(e.target.value)}
        className="input border" placeholder={"write your message..."} ref={DivRef}/>
        {/* <div className="input border" contentEditable={true} placeholder={"write your message..."} ref={DivRef}>

          <div class="placeholder">Type a message </div>
        </div> */}
        <div className='side-icons-panel'>

          <button className="button-normal" onClick={() => {setShowFileUploader(!showFileUploader)}}>
            <MdAttachFile />
          </button>
          <button className="button-normal">
            <AiOutlineAudio/>
          </button>
          <button className="button-selected">
            <FiSend style={{color:"var(--badge)"}}/>
          </button>
        </div>
        
        
      
      </div>
    </footer>


)
}

function pasteHtmlAtCaret(html) {
  let sel, range;
  if (window.getSelection) {
  // IE9 and non-IE
  sel = window.getSelection();
  if (sel.getRangeAt && sel.rangeCount) {
    range = sel.getRangeAt(0);
    range.deleteContents();

    // Range.createContextualFragment() would be useful here but is
    // non-standard and not supported in all browsers (IE9, for one)
    const el = document.createElement("div");
    el.innerHTML = html;
    let frag = document.createDocumentFragment(),
    node,
    lastNode;
    while ((node = el.firstChild)) {
    lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);

    // Preserve the selection
    if (lastNode) {
    range = range.cloneRange();
    range.setStartAfter(lastNode);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    }
  }
  } else if (document.selection && document.selection.type != "Control") {
  // IE < 9
  document.selection.createRange().pasteHTML(html);
  }
}
export default Footer