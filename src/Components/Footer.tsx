import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import mess from "../assets/mess.svg"
const Footer = () => {
  return (
    <div className="footer">
      <div className=" grid lg:grid-cols-5 gap-3 grid-cols-2 pb-4 text-[#212353] text-[16px]">
        <div className=" lg:col-span-2 ">
          <div className="block lg:flex justify-center lg:justify-start items-center gap-4">
            <Link to={"/"} className=" ">
              <img src={logo} alt="logo" className="w-[66px] h-[40px]" />
            </Link>
            <p className="text-[#212353] lg:text-[20px] text-[16px] font-black">
              DataWarehouse
            </p>
          </div>
          <div className="mt-[50px] ">
            <div>
              <p>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</p>
              <p> </p>
            </div>
            <div className="mt-[20px]">
              <p>info@warehouse.project</p>
              <p> 1-232-3434 (Main)</p>
            </div>
          </div>
        </div>
        <div className="lg:mt-0 mt-[41px]">
          <p className="font-black">About</p>
          <div className="flex flex-col lg:gap-4 gap-2 mt-[35px]">
            <p>Profile </p>
            <p> Features </p>
            <p> Careers</p>
            <p> DW News</p>
          </div>
        </div>
        <div className="">
          <p className="font-black">Help</p>
          <div className="flex flex-col lg:gap-4 gap-2 mt-[35px]">
            <p>Support </p>
            <p> Sign up </p>
            <p> Guide</p>
            <p> Reports</p>
            <p> Q&A</p>
          </div>
        </div>
        <div className="">
          <p className="font-black">Social Media</p>
          <div className="flex  lg:gap-4 gap-2 mt-[35px]">
            <div className="bg-[#212353] opacity-[0.1] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50px]"></div>
            <div className="bg-[#212353] opacity-[0.1] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50px]"></div>
            <div className="bg-[#212353] opacity-[0.1] lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-[50px]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-[12px]">
          <p>© Datawarehouse™, 2020. All rights reserved. </p>
          <p> Company Registration Number: 21479524. </p>
        </div>
        <div className="">
            <img src={mess} alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
