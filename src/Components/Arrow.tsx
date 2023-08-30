import React from 'react'
import "./styles.css"
import arrowright from "../assets/arrowright.svg"
import arrowleft from "../assets/arrowleft.svg"

function Arrow({prevSlide,nextSlide}) {
  return (
    <div className='arrows absolute bg-red-400 w-full top-[50%] left-0'>
        <span className='prev rounded-sm' onClick={prevSlide}><img src={arrowleft} alt=''/></span>
        <span className='next  rounded-sm' onClick={nextSlide}><img src={arrowright} alt=''/></span>
    </div>
  )
}

export default Arrow