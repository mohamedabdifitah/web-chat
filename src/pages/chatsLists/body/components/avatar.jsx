
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
const ChatAvatar = (props) => {
  return (
    <div title="Profile Details" className="pointer" style={{ left:"18px",position: 'relative',width:"50px"}}>
      
      <Avatar   alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:"35px",height:"35px",borderRadius:"9px",}}  />
      <span className={`badge badge-chat-list`}/>

    </div>
  )
}
export default ChatAvatar;