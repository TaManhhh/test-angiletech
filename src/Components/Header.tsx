import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";
import menu from "../assets/menu.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        !document
          .getElementById("mobile-menu-button")
          ?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
      <div className="flex justify-between z-[90] items-center w-full h-[100px]">
        <Link to={"/"} className=" order-2 lg:order-1">
          <img src={logo} alt="logo" className="w-[66px] h-[40px]" />
        </Link>
        <div className="gap-5 lg:flex hidden order-2">
          <Button className="lg:px-[50px] px-[25px]">Profile</Button>
          <Button className=" lg:px-[50px] px-[25px]"> Logout</Button>
        </div>
        <button
          className="lg:hidden  order-1 lg:order-3"
          id="mobile-menu-button"
          onClick={handleMenuToggle}
        >
          <img src={menu} alt="" className="w-[24px] h-[24px]" />
        </button>
      </div>
      <div
        ref={navbarRef}
        className={`lg:hidden fixed top-0 left-0 z-[91] w-[60%] h-full bg-[#D9D9D9] text-[#212353] transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-[#D9D9D9;] p-5 h-[90px] flex justify-center items-center">
          <Link to={"/"} className="py-2  ">
            <img src={logo} alt="logo" className="w-[66px] h-[40px]" />
          </Link>
        </div>
        <ul className="p-5 divide-y bg-[#D9D9D9;] text-[20px] leading-[160%] ">
          <li>
            <Link to="/" className="block  py-2">
              Posts
            </Link>
          </li>
          <li>
            <div className="block  py-2">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
