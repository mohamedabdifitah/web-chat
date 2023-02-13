import React , {useState} from 'react'
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./footer.css"
import { IconButton } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
const Footer = () => {
  const [ selectedEmoji , setSelectedEmoji] = useState()
  const [ openEmoji, SetOpenEmoji] = useState()
  const pickEmoji = ({emoji}) =>{
    setSelectedEmoji(emoji)

  }

  return (
    <footer
    className='footer'>
      <div>
        <IconButton onClick={() => { SetOpenEmoji(!openEmoji)}}>
          <BsEmojiSmile/>

        </IconButton>
        <input  placeholder={"write your message..."} style={{position:'relative',flex:1}}/>
        <IconButton >
          <MdAttachFile />
        </IconButton>
        <IconButton>
          <AiOutlineAudio/>
        </IconButton>
        <IconButton>
          <FiSend />
        </IconButton>

        {openEmoji?<Picker autoFocusSearch={false}  preload={true} onEmojiClick={pickEmoji}  />:""}
      </div>
    </footer>


)
}

export default Footer