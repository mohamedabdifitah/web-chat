import React , {useState} from 'react'
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { AiOutlineAudio } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./footer.scss"
import { IconButton ,Button} from '@mui/material';
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
    className='footer border-top'>
      <div>
        <div className="first-column-footer">

          <button className="button-footer button-normal" onClick={() => { SetOpenEmoji(!openEmoji)}}>
            <BsEmojiSmile/>

          </button>
        </div>
        <div className="input border" contentEditable={true}  placeholder={"write your message..."} >
          <div class="lhggkp7q qq0sjtgm jxacihee c3x5l3r8 b9fczbqn t35qvd06 m62443ks rkxvyd19 c5h0bzs2 bze30y65 kao4egtt">Type a message</div>
        </div>
        <div className='side-icons-panel'>

          <button className="button-normal" >
            <MdAttachFile />
          </button>
          <button className="button-normal">
            <AiOutlineAudio/>
          </button>
          <button className="button-selected">
            <FiSend style={{color:"var(--badge)"}}/>
          </button>
        </div>
        
        <CustomEmojiPicker pickEmoji={pickEmoji} open={openEmoji} SetOpen={SetOpenEmoji} />
      
      </div>
    </footer>


)
}

export default Footer