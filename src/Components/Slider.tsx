import React from "react";
import "./styles.css"
function Slider({ activeIndex, imageSlider ,setActiveIndex}) {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="w-full h-full flex justify-center items-center shadow">
            <div className="flex w-[70%]">
              <div className=" ">
                <img className=" w-full object-cover" src={slide.img} alt="" />
              </div>

              <div className=" w-[60%] ml-[45px] mt-[20px]">
                <p className="text-[#212353] text-[18px] font-black">
                  {slide.name}
                </p>
                <p className="text-[#9C69E2] text-[14px] font-medium leading-[160%]">
                  {slide.mail}
                </p>
                <p className="text-[#4B5D68] text-[18px] leading-[180%] mt-[20px]">
                  {slide.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </section>
  );
}

export default Slider;
