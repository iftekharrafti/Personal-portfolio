import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/home" activeClassName="selected">
            Home
        </NavLink>
        <NavLink to="/about" activeClassName="selected">
            About
        </NavLink>
        <NavLink to="/skill" activeClassName="selected">
            Skill
        </NavLink>
        <NavLink to="/portfolio" activeClassName="selected">
            Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
            Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
