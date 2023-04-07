import React from 'react'
import "./mobile.css"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { TbMessageCircle2 } from "react-icons/tb"
const MobileMainLayout = () => {
  return (
    <div className={"mobile-layout"}>
      <header>

      </header>
      <div className="mobile-body">
      </div>
      <div className="floating-icons">

        <Fab color="primary" aria-label="add">
        
          <TbMessageCircle2 size={30}/>
        </Fab>
      </div>
    </div>
  )
}

export default MobileMainLayout
