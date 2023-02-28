import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { BiSearchAlt2 , BiDotsVerticalRounded } from "react-icons/bi"
import { MdCall } from "react-icons/md" 
import { FiVideo } from "react-icons/fi"
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <button className='button-footer button-normal' >
          <BiSearchAlt2 />
        </button>
        <button className='button-footer button-normal' >
          <MdCall/>
        </button>
        <button className='button-footer button-normal' >
          <FiVideo  />
        </button>
      
        
        <Tooltip title="Account settings">
          <button
            onClick={handleClick}
            size="small"
            className='button-footer button-normal'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <BiDotsVerticalRounded />
          </button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          Contact info
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Select messages
        </MenuItem>
  
        <MenuItem onClick={handleClose}>
          Close chat
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Mute notifications
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Disappering messages
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Clear messages
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Delete chat
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Block
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}