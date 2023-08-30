import React from "react";
import search from "../../assets/searchdata.png";
import hours from "../../assets/24hours.png";
import printout from "../../assets/printout.png";
import security from "../../assets/securitycode.png";
import cardpink from "../../assets/cardpink.png";
import cardwhite from "../../assets/cardwhite.png";
import arrow from "../../assets/arrow.svg";
import cardpupe from "../../assets/cardpuple.png";
import cardblue from "../../assets/cardblue.png";
import "./styles.css";
const Features = () => {
  return (
    <div className="mt-[164px]">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#212353] text-[40px] font-bold">Features</p>
        <div className="text-center mt-[50px]">
          <p>
            Some of the features and advantages that we provide for those of you
          </p>
          <p>who store data in this Data Warehouse.</p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-6">
        <div className="w-full flex justify-center items-center mt-[10px]">
          <div className="w-full max-w-[550px] text-left relative sm:h-[353px] h-[260px]">
            <div className="w-[40%] max-w-[210px] absolute right-[10%] h-full flex flex-col justify-center  ">
              <p className="sm:text-[24px] text-[18px] text-[#212353]">
                Search Data
              </p>
              <p className="sm:mt-[20px] mt-[10px] lg:h-[145px] text-[16px] sm:h-[145px] h-[80px] xemthem text-[#4B5D68]">
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <button className="font-extrabold mt-[20px] sm:text-[16px] text-[13px] text-[#212353] flex gap-5 items-center">
                <span>Learn more</span>
                <img src={arrow} alt="" className="mt-[6px]" />
              </button>
            </div>
            <div className="absolute right-0 w-[77%] ">
              <img src={cardwhite} alt="" className="object-cover w-full" />
            </div>
            <div className="absolute top-[25%] w-[44%]">
              <img src={search} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5  mt-[10px]">
          <div className="w-full max-w-[550px] text-left relative sm:h-[353px] h-[260px]">
            <div className="w-[40%] max-w-[210px] absolute right-[10%] h-full flex flex-col justify-center  ">
              <p className="sm:text-[24px] text-[18px] text-[#212353]">
                24 Hours Access
              </p>
              <p className="sm:mt-[20px] mt-[10px] lg:h-[145px] text-[16px] sm:h-[145px] h-[80px] xemthem text-[#4B5D68]">
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
              <button className="font-extrabold mt-[20px] sm:text-[16px] text-[13px] text-[#212353] flex gap-5 items-center">
                <span>Learn more</span>
                <img src={arrow} alt="" className="mt-[6px]" />
              </button>
            </div>
            <div className="absolute right-0 w-[77%] ">
              <img src={cardpink} alt="" className="object-cover w-full" />
            </div>
            <div className="absolute top-[25%] w-[44%]">
              <img src={hours} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5  mt-[10px]">
          <div className="w-full max-w-[550px] text-left relative sm:h-[353px] h-[260px]">
            <div className="w-[40%] max-w-[210px] absolute right-[10%] h-full flex flex-col justify-center  ">
              <p className="sm:text-[24px] text-[18px] text-[#212353]">
                Print Out
              </p>
              <p className="sm:mt-[20px] mt-[10px] lg:h-[145px] text-[16px] sm:h-[145px] h-[80px] xemthem text-[#4B5D68]">
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it.
              </p>
              <button className="font-extrabold mt-[20px] sm:text-[16px] text-[13px] text-[#212353] flex gap-5 items-center">
                <span>Learn more</span>
                <img src={arrow} alt="" className="mt-[6px]" />
              </button>
            </div>
            <div className="absolute right-0 w-[77%] ">
              <img src={cardpupe} alt="" className="object-cover w-full" />
            </div>
            <div className="absolute top-[25%] w-[44%]">
              <img src={search} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-5  mt-[10px]">
          <div className="w-full max-w-[550px] text-left relative sm:h-[353px] h-[260px]">
            <div className="w-[40%] max-w-[210px] absolute right-[10%] h-full flex flex-col justify-center  ">
              <p className="sm:text-[24px] text-[18px] text-[#212353]">
                Security Code
              </p>
              <p className="sm:mt-[20px] mt-[10px] lg:h-[145px] text-[16px] sm:h-[145px] h-[80px] xemthem text-[#4B5D68]">
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
              <button className="font-extrabold mt-[20px] sm:text-[16px] text-[13px] text-[#212353] flex gap-5 items-center">
                <span>Learn more</span>
                <img src={arrow} alt="" className="mt-[6px]" />
              </button>
            </div>
            <div className="absolute right-0 w-[77%] ">
              <img src={cardblue} alt="" className="object-cover w-full" />
            </div>
            <div className="absolute top-[25%] w-[44%]">
              <img src={security} alt="" className="object-cover w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
