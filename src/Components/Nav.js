import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-white text-center">
      <div className="img pt-3">
        <NavLink to="/">
          <img
            src="./images/logo.png"
            style={{ width: "200px" }}
            alt=""
          />
        </NavLink>
      </div>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? (
            <Icon icon={x} size={28} />
          ) : (
            <Icon icon={menu} size={28} />
          )}
        </div>
        <ul className="links">
          <li className="nav-items">
            <NavLink to="/" className="text-decoration-none text-black">
              HOME
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/anime" className="text-decoration-none text-black">
              ANIMES
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/movies" className="text-decoration-none text-black">
              MOVIES
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/request" className="text-decoration-none text-black">
              REQUEST
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
