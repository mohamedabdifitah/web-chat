import React , {useState} from 'react'
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./footer.css"
import { IconButton } from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import CustomEmojiPicker from '../../../components/emoji-picker/emoji-picker';
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
        
        <CustomEmojiPicker pickEmoji={pickEmoji} open={openEmoji} SetOpen={SetOpenEmoji} />
      
      </div>
    </footer>


)
}

export default Footer