import HamIcon from "/images/icon-hamburger.svg";
import { useState } from "react";
const NavBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleClick = () => {
    setMenuClicked((prevState) => !prevState);
  };

  return (
    <nav className="tablet:pr-[40px] pr-7 lg:pr-[60px] desktop:pr-[10px]">
      <ul
        className={`flex-col items-center gap-7 bg-white w-[329px] h-[307px] left-0 right-0 mx-auto absolute top-[106px] after:content-[''] after:absolute after:right-0 after:top-[-27px] after:border-[14px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-Dark-grayish-blue text-xl z-10 ${
          menuClicked ? "flex" : "hidden"
        } sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:pr-2 sm:w-[400px] sm:h-full sm:mt-[-5px] sm:relative sm:text-white md:w-[500px] md:gap-[60px] md:pr-6 lg:w-[450px] lg:pr-7 lg:gap-[40px]
        `}
      >
        <li className="mt-[45px] cursor-pointer  sm:mt-[0px]">
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li className="bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue sm:hover:bg-opacity-25 sm:hover:text-white sm:bg-white ">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="cursor-pointer sm:hidden" onClick={handleClick}>
        <img src={HamIcon} alt="menu hamburguesa" />
      </div>
    </nav>
  );
};

export default NavBar;
