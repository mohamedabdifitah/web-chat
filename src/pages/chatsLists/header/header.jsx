import React from 'react';
import "./header.css";
import BadgeAvatars from './badge';
import { FiEdit } from "react-icons/fi";
import { TbDotsVertical } from "react-icons/tb";
const Header = () => {
  return (
    <div className="sidebar-header">
      <div>
      <BadgeAvatars />
      <span className='flex1  text text-header' style={{color:"white"}}>
        Chats
      </span>
      <div className="icons-horiz icon-header icon-panel">
        <FiEdit fontSize={20} color='white'/>
        <TbDotsVertical fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/>

      </div>
      </div>
    </div>
  )
}
export default Header;