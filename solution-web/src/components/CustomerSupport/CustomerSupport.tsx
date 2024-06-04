import Image from 'next/image'
import React from 'react'
import SupportImg from '@/public/phone-support.png'
import { CheckIcon } from '@heroicons/react/16/solid'

const CustomerSupport = () => {
  return (
    <div className="bg-[#000000] pt-[5rem] pb-[3rem] ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={SupportImg} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#82399c] font-bold leading-[2rem] md:leading-[3rem]"
          >
            Customer support is our main priority with their hundred percent
            satisfaction.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.5rem] mb-[1.5rem] text-[#d2d3de] opacity-90 text-[15px] md:text-[16px]"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            sit dolor quis perferendis optio debitis ullam aperiam perspiciatis,
            saepe id?
          </p>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Medical and Vision
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Life Insurance
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              400(k) Savings
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1200"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.3rem] h-[1.3rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              HSAs and FSAs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSupport
