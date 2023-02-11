import React from "react";
import { NavLink } from "react-router-dom";
const ButtonLink = ({children,path}) =>{
  return (
    <NavLink
    to={path}
    className={({ isActive }) =>
      isActive ? "nav-icons active bend-left" : "nav-icons bend-left"
    }
    >
      {children}

    </NavLink>
  )
}
export default ButtonLink