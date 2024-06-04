import React from 'react'

interface Props {
  headingMini: string
  headingPrimary: string
}

const SectionHeading = ({ headingMini, headingPrimary }: Props) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#d2d3de] md:text-[16px] text-[15px]">{headingMini}</p>
      <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#d2d3de]">
        {headingPrimary}
      </h1>
    </div>
  )
}

export default SectionHeading
