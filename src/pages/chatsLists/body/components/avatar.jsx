
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 1.2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      // animation: 'ripple 1.2s infinite ease-in-out',
      // border: '1px solid currentColor',
      content: '""',
    },
  },
  
}));
const ChatAvatar = (props) => {
  // var { loading = false } = props
  
  const [loading,setLoading] = useState(true);
  // useEffect(() =>{
  //   setLoading(false);
  // },[])
  return (
    <div style={{ position: 'relative',left:"18px",width:"50px"}}>
      {!loading?<Skeleton variant="rectangular" width={35} height={35} sx={{borderRadius:"9px"}}/>:

          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            >
            {/* <img onload={() => {
              setLoading(false);
            }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:"35px",height:"35px",borderRadius:"9px",}}  /> */}

            <Avatar  onload={() => setLoading(false)} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{width:"35px",height:"35px",borderRadius:"9px",}}  />
          </StyledBadge>
      }
        {/* </Skeleton> */}
    </div>
  )
}
export default ChatAvatar;