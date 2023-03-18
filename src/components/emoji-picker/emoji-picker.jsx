import React, { useRef ,useEffect } from "react";
import Picker from 'emoji-picker-react';
const CustomEmojiPicker = (props) => {
  var { pickEmoji , style,open,SetOpen} = props;
  const DivRef = useRef()
  var basicStyle = {
    position: "absolute",
    // top: "-736%",
    // left: "4%",
    // width:'fi'
    display:"block",
    top:"3px",
    paddingBottom:"2px",
    left:"10px",
    zIndex: "100",
  }
  // useEffect(()=>{
  //   window.onclick = function(event) {
  //     console.log("click")
  //     console.log(event.target,DivRef.current)
  //     if (event.target !=  DivRef.current) {
  //       SetOpen(false)
  //     }
  //   }
  // },[window])
  function ClosePopup() {
    // console.log
    // SetOpen(false)
    // it uses  onBlurCapture={() => ClosePopup()}
  }
  
  if(open){
    return (
  
      <div className={"emoji-picker-container"} style={style?style:basicStyle} ref={DivRef}>
        <Picker style={{position:"absolute"}}   preload={true} onEmojiClick={pickEmoji}  />
      </div>
    
    )

  }
  return (
    <div>
      
      </div>
  )
}
export default CustomEmojiPicker