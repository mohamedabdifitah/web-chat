
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import "./avatar.css"
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 1.2px ${theme.palette.background.paper}`,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '5px',
    // height: '5px',
    // borderRadius: '50%',
    // // animation: 'ripple 1.2s infinite ease-in-out',
    // // border: '1px solid currentColor',
    // content: '""',
    // '&::after': {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '50%',
    //   // animation: 'ripple 1.2s infinite ease-in-out',
    //   // border: '1px solid currentColor',
    //   content: '""',
    // },
  },
  
}));
const ProfileAvatar = (props) => {
  // var { loading = false } = props
  
  const [loading,setLoading] = useState(true);
  // useEffect(() =>{
  //   setLoading(false);
  // },[])
  var {style , url , badgecls} = props;
  var basicStyle ={
    width:"35px",
    height:"35px",
    borderRadius:"9px"
  }
  return (
    <div style={style}>
      {!loading?<Skeleton variant="rectangular"  sx={style?style:basicStyle}/>:
        <div  title={"Profile Details"}>
          <Avatar onload={() => setLoading(false)} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={style?style:basicStyle}/>
          <span className={`badge ${badgecls}`}>

          </span>
        </div>
          
      }
        {/* </Skeleton> */}
    </div>
  )
}
export default ProfileAvatar;


{/* <span class="MuiBadge-root MuiBadge-root css-1xk9h57-MuiBadge-root">
  <div class="MuiAvatar-root MuiAvatar-circular css-3yfne5-MuiAvatar-root">
    <img alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" class="MuiAvatar-img css-1pqm26d-MuiAvatar-img">
  </div>
  <span class="MuiBadge-badge MuiBadge-dot MuiBadge-anchorOriginBottomRight MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular MuiBadge-badge css-ank3r8-MuiBadge-badge">
  </span>
  </span> */}