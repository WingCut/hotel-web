import React from "react";
import logo from "../assets/images/logo.png";
import { navBar } from "../assets/data/data";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink");
  return (
    <>
      <header className=" w-screen h-[8vh] md:shadow-lg bg-white">
        {/*desktop*/}
        <div className="hidden md:flex justify-between px-7 p2">
          <div className="logo">
            <img src={logo} alt="logo" width="150px" height="150px" />
          </div>
          <div className="menu">
            <ul className="flex ">
              {navBar.map((list, i) => (
                <li
                  className={`mx-6 py-3  cursor-pointer ${activeNavLink}`}
                  key={i}
                >
                  <NavLink className="p-1.5 px-2 rounded-lg" to={list.path}>
                    {list.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
