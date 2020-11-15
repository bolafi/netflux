import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <ul className="navbar-menu">
      <li>
        <NavLink className="navbar-item " exact to="/">
          الرئيسية
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-item" exact to="./movies">
          أفلام
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-item" exact to="./shows">
          مسلسلات
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuBar;
