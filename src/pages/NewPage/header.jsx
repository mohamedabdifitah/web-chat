import React from 'react';
import "./header.css";
import BadgeAvatars from './badge';
// import image from "../../../assets/pin.svg"
import { BsFillPersonFill } from "react-icons/bs"
import { MdFace , MdPeopleOutline ,MdOutlinePerson} from "react-icons/md"
import {AiOutlineFilter } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FcMissedCall } from "react-icons/fc"
import { TbDotsVertical } from "react-icons/tb";
const Header = () => {
  return (
    <div className="sidebar-header">
      <div>
      {/* <BadgeAvatars /> */}
      <span className='flex1  text text-header' >
        Chats
      </span>
      <div className="white curved icon-panel-horiz">
        <MdOutlinePerson title={"chats"} fontSize={18} color="var(--primary-icon-color)" />
        <FcMissedCall title={"groups"} fontSize={18} color="var(--primary-icon-color)" />
        {/* <MdFace fontSize={18} color="black" /> */}
        <MdPeopleOutline title={"contancts"} fontSize={18} color="var(--primary-icon-color)" />
        {/* <img src={"./pin.svg"} /> */}
        {/* <TbDotsVertical fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/>
        <FiEdit fontSize={20} color='white'/> */}

      </div>
      </div>
    </div>
  )
}
export default Header;