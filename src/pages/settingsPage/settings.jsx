import React from "react";
import "./settings.css"
import { NavLink, useNavigate } from "react-router-dom";
import { CustomIcon } from "../../components/icons/custom-icons";
import ProfileAvatar from "../../components/Avatar/avatar";
const SettingPage = () => {
  const navigate = useNavigate()
  function Navigation(url){
    navigate(url)
  }
  return (
    <div className="settings blue border-right">
      <div className="setting-holder">
        <NavLink to={"profile"} 
          className={({ isActive }) =>
            isActive ? "Avatar-holder setting-active" : "Avatar-holder"
          }
          >
          <ProfileAvatar 
            style={{
              width:"55px",
              height:"55px",
              borderRadius:"9px"
            }}
          />
        <div className={"title-desc"}>
          <span className="title text color-text" title={"Mohamed Abdifitah"}>
            Mohamed Abdifitah
          </span>
          <span className="description text color-text s-large">
            Description of Your Profile
          </span>
        </div>
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