import React, { useRef, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";
import menu from "../assets/menu.png";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Post } from "../Service/service";
import { clearTokens } from "../redux/userSlice";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [cookies, , removeCookie] = useCookies(["token"]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
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
  const clickProfile = () => {
    navigate("/profile");
  };
  const clickSignin = () => {
    navigate("/signin");
  };
  const handleLogout = async () => {
    try {
      const obj = {
        url: "https://test-react.agiletech.vn/auth/logout",
        token: cookies.token,
      };
      await Delete(obj);
      dispatch(clearTokens());
      removeCookie("token");
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between z-[90] items-center w-full h-[100px]">
        <Link to={"/"} className=" order-2 lg:order-1">
          <img src={logo} alt="logo" className="w-[66px] h-[40px]" />
        </Link>
        {cookies.token ? (
          <div className="gap-5 lg:flex hidden order-2">
            <Button className="lg:px-[50px] px-[25px]" onClick={clickProfile}>
              Profile
            </Button>
            <Button className=" lg:px-[50px] px-[25px]" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button className="lg:px-[50px] px-[25px]" onClick={clickSignin}>
              Signin
            </Button>
          </div>
        )}

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
        {cookies.token ? (
          <ul className="p-5 divide-y bg-[#D9D9D9;] text-[20px] leading-[160%] ">
            <li>
              <Link to="/profile" className="block  py-2">
                Posts
              </Link>
            </li>
            <li>
              <div className="block  py-2" onClick={handleLogout}>
                Logout
              </div>
            </li>
          </ul>
        ) : (
          <Link to="/signin" className="block  py-2">
            Signin
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
