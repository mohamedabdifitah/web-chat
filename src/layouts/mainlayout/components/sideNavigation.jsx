import React from "react"
import ProfileAvatar from "../../../components/Avatar/avatar"
import { IconButton, useTheme } from "@mui/material"
import { IoIosAdd } from "react-icons/io"
import { BiMessageRounded } from "react-icons/bi"
import { TbSettings } from "react-icons/tb"
import Badge from '@mui/material/Badge';
import ButtonLink from "./button-link"
import { FiMessageCircle } from "react-icons/fi";
import { red } from '@mui/material/colors';
import {theme } from "../theme"
import Tooltip from '@mui/material/Tooltip';

const SideNavigation = ()=>{
  var themePlate = useTheme(theme)
  return (
    <div className="side-navigation">
        
      <div className="column avatar panel">

        <ProfileAvatar loading={true}  badgecls={"badge-sidebar"}/>
      </div>
      <div className="navigation-btn ">
        <ButtonLink path={"/add"}>
          <IoIosAdd fontSize={25} style={style2}/>
        </ButtonLink>
        <ButtonLink path={"/"}>
          {/* <Badge */}
          {/* // color="secondary" overlap="circular" badgeContent={2}  */}
          {/* // > */}
            <FiMessageCircle fontSize={22} style={style}/>
          {/* </Badge> */}
        </ButtonLink>
        <Tooltip title="Add" arrow>
          <ButtonLink path={"/settings"}>
          {/* <Badge 
            color="primary"  badgeContent={2}> */}
              <TbSettings fontSize={25} style={style2}/>
            {/* </Badge> */}
          </ButtonLink>
        </Tooltip>
      </div>
    </div>
  )
}
var style = {
  position:"relative",
  left:"5px",
  top:"4px"
}
var style2 ={
  position:"relative",
  left:"3px",
  top:"3px"
}
var color = "var(--badge-background)"
var badgeStyle ={
  position:"relative",
  // left:"-10px",
  backgroundColor:"var(--badge-background)",
  // top:"5px"
}
export default SideNavigation