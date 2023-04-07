import React, { Children } from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "../../pages/chatsLists";
import Avatar from '@mui/material/Avatar';
import "./main.css"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import SideNavigation from "./components/sideNavigation";
import MobileMainLayout from "./mobileLayout";
// mainlayout contains the sidebar and main window layouts 
const MainLayout = ({children}) =>{
  if(isMobile){
    return <MobileMainLayout />
  }
  return (
    <div className="main-layout">
      <div className="window">
        <SideNavigation />
        
        {children}
        <div className="body">
          <Outlet/>
        </div>
      </div>
    </div>  
  )
}
export default MainLayout