import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import img1 from "../../assets/image1.png";
import Button from "../../Components/Button";
import Features from "./Features";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div className="container mx-auto px-4 max-w-[1300px]">
      <Header />
      <div className="mt-[100px]">
        <div className=" lg:relative w-full lg:h-[60vh] flex flex-col ">
          <div className="lg:absolute w-full  lg:w-[50%] h-full z-10 justify-center order-2 lg:order-1 top-0 flex flex-col lg:justify-between">
            <p className="lg:text-[80px] text-[42px] text-[#212353] font-bold leading-[110%]">
              Save your data storage here.
            </p>
            <p
              className="text-[18px] font-medium leading-[160%] mt-[50px] w-full lg:w-[60%]"
              style={{ color: "var(--1, #4B5D68)" }}
            >
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <div className="my-[30px]">
              <Button className="px-[20px] text-[18px] ">Learn more</Button>
            </div>
          </div>

          <div className="lg:absolute right-0 lg:w-[70%] w-full flex items-center justify-center order-1 lg:order-2 bottom-[0]">
            <img
              src={img1}
              className="object-cover w-full "
              alt="Save your data storage here."
            />
          </div>
        </div>
        <Features/>
        <Testimonials/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
