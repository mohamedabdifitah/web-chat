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
        <Tooltip title="Add" placement="right">

          <button className='btn-select'>
            <span>
              <CustomIcon name={"poll"}  />
            </span>
          </button>
          </Tooltip>
        </li>
        <li>
          <button className='btn-select'>
            <span>
              <CustomIcon name={"contact"}  />
            </span>
          </button>
        </li>
        <li>
          <button className='btn-select'>
            <span>
              <CustomIcon name={"document"}  />
            </span>
          </button>
        </li>
        <li>
          <button className='btn-select'>
            <span>
              <CustomIcon name={"camera"}  />
            </span>
          </button>
        </li>
        <li>
          <button className='btn-select'>
            <span>
              <CustomIcon name={"stickers"}  />
            </span>
          </button>
        </li>
        <li>
          <button className='btn-select'>
            <span>
              <CustomIcon name={"multimedia"}  />
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
  }
  return ""
}
