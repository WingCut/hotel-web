import React from "react";
import logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="mt-5 p-4 flex justify-around bg-[#5f6468] ">
        <div>
          <img src={logo} alt="logo" width="150px" height="150px" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Contact</h2>
          <p>
            <b>Phone:</b> 111-222-3333
          </p>
          <p>
            <b>E-mail:</b> mymail@gmail.com
          </p>
          <p>
            <b>Add:</b> Bach Mai street, Hanoi, Vietnam
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Our Branch</h2>
          <p>123 Ho Tung Mau, Ha Noi, Viet Nam</p>
          <p>123 xxx street, HCM city, Viet Nam</p>
        </div>
        <div></div>
      </footer>
    </>
  );
};
export default Footer;
