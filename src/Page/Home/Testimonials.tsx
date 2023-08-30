import React, { useState } from "react";
import Slider from "../../Components/Slider";
import Arrow from "../../Components/Arrow";
import imgslider from "../../assets/imgslider.svg";
import "./styles.css";
const Testimonials = () => {
  const imageSlider = [
    {
      id: 1,
      name: "John Fang 1",
      mail: "wordfaang.com",
      title:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      img: imgslider,
    },
    {
      id: 2,
      name: "John Fang 2",
      mail: "wordfaang.com",
      title:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      img: imgslider,
    },
    {
      id: 3,
      name: "John Fang 3",
      mail: "wordfaang.com",
      title:
        "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
      img: imgslider,
    },
  ];
  const len = imageSlider.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="mt-[100px]">
      <div className="bg-[#9C69E2] relative rounded-[50px] h-[75vh] px-[95px] flex  justify-center items-center ">
        <div>
          <p className="mb-[100px] text-[#fff] text-[40px] font-bold">
            Testimonials
          </p>
          <div className="slider-container">
            <Slider
              activeIndex={activeIndex}
              imageSlider={imageSlider}
              setActiveIndex={setActiveIndex}
            />
          </div>
          <Arrow
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
