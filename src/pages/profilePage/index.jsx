import React from 'react'
import "./index.css"
import { MdCall } from "react-icons/md" 
import { IconButton } from '@mui/material'
import { FiVideo,FiMessageSquare, FiSearch } from "react-icons/fi"
import { Call, Message, MessageOutlined, Search, VideoCall, VideoCallOutlined } from '@mui/icons-material'
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="upper-page">

          <div className={"profile"}>

            <img src="http://localhost:5173/pro.jpeg"
            alt="" class="_11JPr" />
            <span>
              <div  style={{opacity: 1,visibility:"hidden",color:"white"}}>
                <div>
                  <span data-testid="camera" data-icon="camera" class="">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z"></path>
                    </svg>
                  </span>
                </div>
                <div data-testid="avatar-text" >Change profile photo</div>
                </div>
            </span>
          </div>
          <div className="profile-info">
            <span className="profile-title">
              Mohamed Abdifitah
              {/* <span> </span> */}
              {/* <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg> */}
            </span>
            <span className="profile-phone">
              +252 61 9592722 
              {/* <span> </span> */}
              {/* <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg> */}

            </span>
            <div className='icons-holder-profile'>
              <button className='button-normal button-profile' >
                <MdCall/>
                
              </button>
              <button className='button-normal button-profile' >
                <FiVideo  />
              </button>
              <button className='button-normal button-profile' >
                <FiMessageSquare />
              </button>
              <button className='button-normal button-profile' >
                <FiSearch />
              </button>
            </div>
          </div>
          {/* <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style={{}}></input> */}
      </div>
      <div></div>
      
    </div>
  )
}

export default ProfilePage