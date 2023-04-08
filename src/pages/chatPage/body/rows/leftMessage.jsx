import React, { useRef } from "react";
import { CustomIcon } from "../../../../components/icons/custom-icons";
import ProfileAvatar from "../../../../components/Avatar/avatar";
const LeftMessage = () =>{
  const SvgRef = useRef()
  function SetHover(){
    if(SvgRef.current){
      SvgRef.current.style.display ="flex"
      
    }
  }
  function SetNone(){
    if(SvgRef.current){
      SvgRef.current.style.display ="none"
      
    }
  }
  return (
    <div className="row left  " onMouseEnter={() => SetHover()}
    onMouseLeave={() => SetNone()}>
      <div style={{position: "relative",alignItems:"center",display:"flex"}}>
        <ProfileAvatar style ={{
          width:"27px",
          height:"27px",
          borderRadius:"9px"
      }} />
      </div>
      <div className="msg-container  ">

        <div className="msg-content">
          <span className="message-text">
            Hello
          </span>
        </div>
        <div className="msg-information">
          <span className="off timestamp-chat">
            10:34
          </span>
          <span className="off timestamp-chat status-msg">read</span>

        </div>
      </div>
      
      <svg ref={SvgRef}  style={{cursor:"pointer",display:"none"}} viewBox="0 0 15 15" width="15" preserveAspectRatio="xMidYMid meet" class="" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z" fill="white"></path></svg>
      
    </div>
  )
}
export default LeftMessage;