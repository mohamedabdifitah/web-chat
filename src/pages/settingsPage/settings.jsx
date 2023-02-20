import React from "react";
import "./settings.css"
import { NavLink } from "react-router-dom";
import { CustomIcon } from "../../components/icons/custom-icons";
import ProfileAvatar from "../../components/Avatar/avatar";
const SettingPage = () => {
  return (
    <div className="settings blue border-right">
      <div className="setting-holder">
        <div className="Avatar-holder">
          <ProfileAvatar style={{
          width:"55px",
          height:"55px",
          borderRadius:"9px"
        }} />
        <div className={"title-desc"}>
          <span className="title text" title={"Mohamed Abdifitah"}>
            Mohamed Abdifitah
          </span>
          <span className="description text">
            ❤️
          </span>
        </div>
        </div>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
        <NavLink to={"theme"}>
          <span className="chat-icon">
            <CustomIcon name={"notification"}/>
          </span>
        </NavLink>
      </div>  
    </div>
  )
}

export default SettingPage