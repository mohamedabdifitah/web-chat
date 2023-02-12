import React, { Children } from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "../../pages/chatsLists";
import Avatar from '@mui/material/Avatar';
import "./main.css"
import SideNavigation from "./components/sideNavigation";
// mainlayout contains the sidebar and main window layouts 
const MainLayout = ({children}) =>{
  return (
    <div className="main-layout">
      <div className="window">
        <SideNavigation />
        
        {children}
        <div>
          <Outlet/>
        </div>
      </div>
    </div>  
  )
}
export default MainLayout