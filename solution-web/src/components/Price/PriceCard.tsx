import React from 'react'

interface Props {
  bg: string
  num: string
  price: string
  plan: string
}

const PriceCard = ({ bg, num, plan, price }: Props) => {
  const large = num === '2' ? 'lg:scale-110 scale-100 z-[100]' : ''
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div
        className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md `}
      >
        <p className="text-[20px] text-white font-[500] mb-[1.5rem]">{plan}</p>
        <h1 className="text-[20px] text-white">
          <span className="text-[30px] text-yellow-300 font-bold">
            ${price}/
          </span>
          per mo
        </h1>
      </div>
      <div className="p-4 mt-[1rem] text-center">
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-[#000000] opacity-90 mb-[1rem]">
          Full Access Library
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-[#000000] opacity-90 mb-[1rem]">
          Multiple Website
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-[#000000] opacity-90 mb-[1rem]">
          Next Js Project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-[#000000] opacity-90 mb-[1rem]">
          Mern stack Project
        </p>
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-[#000000] opacity-90 mb-[1rem]">
          TypeScript Project
        </p>
        <div className="mt-[1.5rem] mb-[1.5rem] text-center">
          {num === '1' && (
            <button className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#81124a] relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
              <span className="relative">Choose Plan</span>
            </button>
          )}
          {num === '2' && (
            <button className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#22840c] relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
              <span className="relative">Choose Plan</span>
            </button>
          )}
          {num === '3' && (
            <button className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 overflow-hidden group bg-[#112c60] relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 group-hover:-translate-x-40 bg-white opacity-10 rotate-12 ease"></span>
              <span className="relative">Choose Plan</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default PriceCard
