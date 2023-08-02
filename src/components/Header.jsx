import React from "react";
import Logo from "/images/logo.svg";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className=" place-content-between  absolute w-full  p-4  pt-8 flex font-Barlow sm:pt-0 sm:h-[30px] sm:mt-[45px]">
      <img
        src={Logo}
        alt=""
        className=" small:h-[24px] small:mt-[-7px] tablet:mt-[-5px] desktop:w-[190px] desktop:h-[35px] desktop:pl-[10px]"
      />
      <NavBar />
    </header>
  );
};

export default Header;
