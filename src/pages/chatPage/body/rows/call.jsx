import { Button } from "@mui/material";
import React from "react";
import { FiVideo } from "react-icons/fi"
export function RightMissedCallContainer (){
  return (
    <div className="row right">
      <div className="missed-call-panel right-padding">
        <button className="button-footer button-selected">
          <FiVideo style={{color:"var(--badge)"}}/>
        </button>
        <div className="missed-call-content">
          <span dir="auto" title="Porgramrs " aria-label="" style={{fontSize:"14px"}} className="chat-title text">
            Call declined
          </span>
          <span dir="ltr" className="recent-msg text off" style={{fontSize: "12px"}}>Username decline call</span>
          

        </div>
        <button className="call-back pointer">
          Call Back
        </button>
  
      </div>
    </div>  
  )
}
export function LeftMissedCallContainer (){
  return (
      <div className="row left" style={{left:"51px"}}>
        <div className="missed-call-panel">
          <button className="button-footer button-selected">
            <FiVideo style={{color:"var(--badge)"}}/>
          </button>
          <div className="missed-call-content">
            <span dir="auto" title="Porgramrs " aria-label="" style={{fontSize:"14px"}} className="chat-title text">
              Call declined
            </span>
            <span dir="ltr" className="recent-msg text off" style={{fontSize: "12px"}}>Username decline call</span>
            
  
          </div>
          <button className="call-back pointer">
            Call Back
          </button>
    
        </div>
      </div>  
  )
}

export function AcceptedCallContianer(){
  return (
    <div>

    </div>
  )
}