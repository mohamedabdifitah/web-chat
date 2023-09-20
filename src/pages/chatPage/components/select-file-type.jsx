import React from 'react'
import "./index.css"
import Tooltip from '@mui/material/Tooltip';
import { CustomIcon } from '../../../components/icons/custom-icons'

function UploadFile(){

}
function getCamera(){

}
function getContact(){

}
export default function SelectFileTypeComp(props) {
  var {show } = props;


  var options = [
    {
      name:"Poll",
      func:UploadFile,
      title:"Poll"
    },
    {
      name:"Poll",
      func:UploadFile,
      title:"Poll"
    }
  ]
  if(show){

    return (
      <div className="select-type-container">
      <ul>
        <li>
        <Tooltip title="poll" placement="right">

          <button className='btn-select' onClick={()=>{console.log("hello")}}>
            <span>
              <CustomIcon name={"poll"}  />
            </span>
          </button>
          </Tooltip>
        </li>
        <li>
        <Tooltip title="contact" placement="right">
          <button className='btn-select'>
            <span>
              <CustomIcon name={"contact"}  />
            </span>
          </button>
          </Tooltip>
        </li>
        <li>

        <Tooltip title="document" placement="right">
          <button className='btn-select'>
            <span>
              <CustomIcon name={"document"}  />
            </span>
          </button>
          </Tooltip>
        </li>
        <li>
        <Tooltip title="stickers" placement="right">
          <button className='btn-select'>
            <span>
              <CustomIcon name={"stickers"}  />
            </span>
          </button>
          </Tooltip>
        </li>
        <li>
        <Tooltip title="multimedia" placement="right">
          <button className='btn-select'>
            <span>
              <CustomIcon name={"multimedia"}  />
            </span>
          </button>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
  }
  return ""
}
