import React from "react"
import ProfileAvatar from "./avatar"
import { IconButton } from "@mui/material"
import { IoIosAdd } from "react-icons/io"
import { BiMessageRounded } from "react-icons/bi"
import { TbSettings } from "react-icons/tb"
import ButtonLink from "./button-link"
const SideNavigation = ()=>{
  return (
    <div className="side-navigation">
        
      <div className="column avatar panel">
        <ProfileAvatar />
      </div>
      <div className="navigation-btn ">
        <ButtonLink path={"/"}>
          <IoIosAdd fontSize={30} style={style}/>
        </ButtonLink>
        <ButtonLink path={"/he"}>
          <BiMessageRounded fontSize={30} style={style}/>
        </ButtonLink>
      </div>
    </div>
  )
}
var style = {
  position:"relative",
  left:"0px",
  top:"0px"
}
export default SideNavigation