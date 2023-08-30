import React from "react";
import "./styles.css"
const Button = ({ children, className, style, ...props }:any) => {
  return (
    <button className={`bg-[#9C69E2] text-[#fff] py-[10px] custom-button rounded-[50px] ${className}`} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
