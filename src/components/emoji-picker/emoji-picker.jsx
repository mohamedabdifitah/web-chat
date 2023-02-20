import React from "react";
import Picker from 'emoji-picker-react';
const CustomEmojiPicker = (props) => {
  var { pickEmoji , style,open,setOpen} = props;
  var basicStyle = {
    position: "absolute",
    top: "-736%",
    left: "4%",
    // width:'fi'
  }
  if(open){
    return (
  
      <div className={"emoji-picker-container"} style={style?style:basicStyle}>
        <Picker style={{position:"absolute"}} autoFocusSearch={false}  preload={true} onEmojiClick={pickEmoji}  />
      </div>
    
    )

  }
  return (
    <div>
      
      </div>
  )
}
export default CustomEmojiPicker