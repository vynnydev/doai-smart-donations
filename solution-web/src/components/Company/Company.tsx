import Image from 'next/image'
import React from 'react'
import CompanyImg from '@/public/enterprises.png'

const Company = () => {
  return (
    <div className="pt-[6rem] pb-[3rem] bg-[#000000]">
      <h1 className="mb-[1.5rem] font-bold text-[22px] text-center md:text-[30px] text-[#d2d3de]">
        Company who also worked with us
      </h1>
      <p className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[55%] mx-auto text-[17px] text-center text-[#d2d3de] opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illum
        facilis, nulla reiciendis eveniet molestias totam corrupti in iste
        possimus sapiente fugiat pariatur, necessitatibus neque fugit?
        Accusantium doloremque sequi quasi.
      </p>
      <p className="text-center mt-[1.7rem] font-[500] cursor-pointer text-[#d2d3de]">
        Explore Details
      </p>
      <div className="mt-[12rem] text-center w-[80%] mx-auto">
        <Image src={CompanyImg} alt="company" />
      </div>
    </div>
  )
}

export default Company
