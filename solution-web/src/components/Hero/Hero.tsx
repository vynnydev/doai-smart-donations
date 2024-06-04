/* eslint-disable prettier/prettier */
import React from 'react'
import ButtonPurple from '../Button/ButtonPurple'
import ButtonPink from '../Button/ButtonPink'
import HeroImg from '@/public/hero.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-[#000000] h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1
            data-aos="fade-right"
            className="text-[27px] md:text-[35px] lg:text-[40px] mb-[3rem] font-bold text-[#d2d3de] leading-[2.4rem] md:leading-[4rem]"
          >
            Focados em conectar pessoas através da computação na nuvem e inteligencia artificial
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="md:text-[17px] text-[15px] mb-[3rem] text-[#d2d3de] opacity-90 font-[400]"
          >
            A solução Smart Donation da DoAI serve para trazer mais assertividade nas doações, 
            doações, analisando as roupas, o que está para qual local a doação
            deve ser entregue. Acreditamos que a inteligência aritificial junto
            com a nossa vontade de bem estar de todos, seremos mais assertivos
            nas nossas próprias vidas e nas vidas das pessoas ao nosso redor.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex items-center space-x-4 md:space-x-6"
          >
            <ButtonPurple text="Começar" />
            <ButtonPink text="Explorar Funcionalidades" />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="600"
          className="col-span-3 hidden sm:block"
        >
          <Image src={HeroImg} alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
