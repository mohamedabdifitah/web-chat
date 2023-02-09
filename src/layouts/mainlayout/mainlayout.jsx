import React from "react";
import { Outlet } from "react-router-dom"
import Sidebar from "./components/sidebar";
import "./main.css"
// mainlayout contains the sidebar and main window layouts 
const MainLayout = () =>{
  return (
    <div className="main-layout">
      <div className="window">
        <Sidebar />
        <div>
          <Outlet/>
        </div>
      </div>
    </div>  
  )
}
export default MainLayout