import Button from "../Components/Button";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Post } from "../Service/service";
import { setTokens } from "../redux/userSlice";
import { useCookies } from "react-cookie";
import axios from "axios";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate ()
  
  const handleSubmit = async () => {
    if (!username) {
      setErrorMessage("Please enter your username"); 
      return;
    }
    const data = {
      username: username,
    };
    const obj = {
      url: "https://test-react.agiletech.vn/auth/login",
      body: data,
    };
    try {
      const res = await Post(obj);
      if ( res.accessToken) {
        setCookie("token", res.accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.accessToken}`
        const tokens = {
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        };
        dispatch(setTokens(tokens)); 
        navigate("/")
        console.log(res.accessToken);
      } else {
        console.log("Failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container mx-auto px-4">
      <Link to={"/"} className=" h-[80px] flex items-end fixed top-0">
        <img src={logo} alt="logo" className="w-[66px] h-[40px]" />
      </Link>
      <div className=" h-screen flex justify-center items-center">
        <div className="w-full max-w-[410px] ">
          <div className="flex justify-center">
            <p className="font-normal lg:text-[64px] text-[30px] mb-[20px]">
              Sign In
            </p>
          </div>

          <div className="mt-[60px]">
            <div className="text-[#000] text-[16px] mb-[16px]">Username</div>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setErrorMessage(""); 
              }}
              className="border-black border rounded-[6px] w-full max-w-[407px] h-[57px] px-2"
            />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
          </div>
          <Button
            className="w-full max-w-[407px] mt-[50px]"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
