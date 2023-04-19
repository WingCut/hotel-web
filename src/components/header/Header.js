import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
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
              <li className="mx-6 py-3 cursor-pointer">Home</li>
              <li className="mx-6 py-3 cursor-pointer">Rooms</li>
              <li className="mx-6 py-3 cursor-pointer">Offers</li>
              <li className="mx-6 py-3 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
