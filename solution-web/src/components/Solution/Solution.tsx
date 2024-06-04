import Image from 'next/image'
import React from 'react'
import AIWorld from '@/public/ai-world.png'
import { CheckIcon } from '@heroicons/react/16/solid'

const Solution = () => {
  return (
    <div className="bg-[#000000] pt-[5rem] pb-[3rem] ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="order-2 lg:order-1"
        >
          <Image src={AIWorld} alt="ai-world" />
        </div>
        <div className="order-1 lg:order-2">
          <h1
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="text-[20px] md:text-[25px] lg:text-[28px] text-[#82399c] font-bold leading-[2rem] md:leading-[3rem]"
          >
            A DoAI é uma empresa inovadora focada em revolucionar o setor de
            doações, dentre outros por meio do uso de inteligência artificial
            (IA) e computação na nuvem.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.5rem] mb-[1.5rem] text-[#d2d3de] opacity-90 text-[15px] md:text-[16px]"
          >
            Alguns dos nossos serviços de IA:
          </p>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.8rem] h-[1.8rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Utilizamos machine learning para analisar o comportamento e
              preferências dos doadores, recomendando causas e organizações que
              se alinham com seus interesses. Benefícios: Aumentamos a
              probabilidade de doações ao conectar doadores com causas que
              realmente importam para eles.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.8rem] h-[1.8rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Analisamos as imagens enviadas pelas organizações beneficiárias
              verificar a autenticidade e o impacto das doações. Benefícios:
              Benefícios: Garantimos a confiança e transparência ao verificar a
              legitimidade das organizações e o uso adequado dos fundos doados.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.8rem] h-[1.8rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Permitimos que as organizações criem, gerenciem e promovam
              campanhas de doação através da plataforma. Benefícios: Facilitamos
              a administração de campanhas, monitorando seu progresso e
              resultados em tempo real.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1200"
            className="flex items-center mb-[1rem] space-x-3"
          >
            <CheckIcon className="w-[1.8rem] h-[1.8rem] text-[#82399c]" />
            <p className="text-[17px] text-[#d2d3de] font-[500">
              Fornecemos relatórios detalhados sobre as atividades de doação,
              incluindo análises de tendências, performance de campanhas e
              comportamento dos doadores. Benefícios: Auxiliaremos as
              organizações para o melhor entendimento do seu público e assim,
              terão mais assertividade para otimizarem suas estratégias de
              arrecadação de fundos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
