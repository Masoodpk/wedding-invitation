'use client'

import { WeddingData } from '@/types/wedding'

interface CoupleProps {
  data: WeddingData;
}

export function CoupleSectionSketchy({ data }: CoupleProps) {
  const { groom, bride } = data.details

  return (
    <section className="reveal py-24 px-6 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Groom */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right relative">
          <div className="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100">
            <img 
              src={data.details.images?.[1] || "/assets/groom-optimized.jpg"} 
              alt={groom.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">{groom.name}</h3>
          <p className="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Groom</p>
          <p className="font-sans text-gray-500 font-light max-w-xs">{groom.parents}</p>
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left relative">
          <div className="aspect-square w-full max-w-[300px] mb-8 grayscale border-[2px] border-[#1A1A1A] transform rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden bg-gray-100">
            <img 
              src={data.details.images?.[2] || "/assets/bride-optimized.jpg"} 
              alt={bride.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-4xl mb-2 text-[#1A1A1A] uppercase tracking-tighter">{bride.name}</h3>
          <p className="font-serif text-[#C62828] text-sm tracking-widest mb-4 uppercase">The Bride</p>
          <p className="font-sans text-gray-500 font-light max-w-xs">{bride.parents}</p>
        </div>
      </div>

      {/* Amperstand in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(10rem,30vw,20rem)] text-[#C62828] opacity-[0.03] pointer-events-none select-none">
        &
      </div>
    </section>
  )
}
