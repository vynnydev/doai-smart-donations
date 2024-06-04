import Link from 'next/link'
import React from 'react'
import ButtonPurple from '../Button/ButtonPurple'
import ButtonPink from '../Button/ButtonPink'
import { Bars3BottomRightIcon } from '@heroicons/react/16/solid'

interface Props {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[12vh] bg-[#000000] shadow-md ">
      <div className="w-[85%] flex items-center justify-between mx-auto h-[12vh]">
        <h1 className="text-[16px] md:text-[25px] font-bold text-slate-800">
          <span className="text-[27px] md:text-[40px] bg-purple">Do</span>
          <span className="text-[27px] md:text-[40px] bg-[#5d37bcfe]">AI</span>
        </h1>
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[17px] cursor-pointer text-[#d2d3de]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[17px] cursor-pointer text-[#d2d3de] hover:text-red-500 transition-all duration-200">
            <Link href="/">Sobre nós</Link>
          </li>
          <li className="text-[17px] cursor-pointer text-[#d2d3de] hover:text-red-500 transition-all duration-200">
            <Link href="/">Serviços</Link>
          </li>
          <li className="text-[17px] cursor-pointer text-[#d2d3de] hover:text-red-500 transition-all duration-200">
            <Link href="/">Negócios</Link>
          </li>
          <li className="text-[17px] cursor-pointer text-[#d2d3de] hover:text-red-500 transition-all duration-200">
            <Link href="/">Saiba mais</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-5">
          <ButtonPurple text="Login" />
          <ButtonPink text="Se inscrever" />
          <Bars3BottomRightIcon
            onClick={openNav}
            className="w-[1.5rem] lg:hidden h-[1.5rem] text-slate-900 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
