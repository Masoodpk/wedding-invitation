'use client'

import type { WeddingData } from '@/lib/wedding'
import { SketchyCircle } from './Elements'

interface IntroProps {
  onOpen: () => void
  hidden: boolean
  data: WeddingData
}

export function IntroSectionSketchy({ onOpen, hidden, data }: IntroProps) {
  if (hidden) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#F5F1E9] flex flex-col items-center justify-center p-4 text-center overflow-y-auto overflow-x-hidden">
      <div className="relative w-full max-w-[350px] sm:max-w-[400px] mb-8 group mt-8">
        <div className="aspect-[3/4] max-h-[40vh] mx-auto overflow-hidden grayscale contrast-125 border-[3px] border-[#1A1A1A] transform -rotate-1 transition-transform group-hover:rotate-0 duration-500">
          <img src={data.wedding.heroImageUrl} alt="Couple" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24 text-[#C62828] opacity-60 pointer-events-none">
          <SketchyCircle className="w-full h-full stroke-[3]" />
        </div>
      </div>

      <div className="mb-8">
        <h1 className="font-serif text-[clamp(1.5rem,5vw,3.5rem)] mb-2 uppercase tracking-tighter text-[#1A1A1A]">
          LOVE IS...
        </h1>
        <p className="font-script text-[clamp(1.2rem,3vw,2.5rem)] text-[#C62828] -mt-2">...when you are together</p>
      </div>

      <button
        onClick={onOpen}
        className="relative group px-10 py-3 md:px-12 md:py-4 bg-transparent transition-transform active:scale-95 cursor-pointer mb-8"
      >
        <span className="relative z-10 font-serif text-base md:text-lg tracking-[0.2em] text-[#1A1A1A] uppercase">Open</span>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 60" preserveAspectRatio="none">
          <path
            d="M5,5 Q100,2 195,5 Q198,30 195,55 Q100,58 5,55 Q2,30 5,5 Z"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="2"
            className="group-hover:stroke-[#C62828] transition-colors"
          />
        </svg>
      </button>

      <div className="mt-8 text-sm tracking-widest text-gray-500 font-serif uppercase animate-pulse">Scroll to explore</div>
    </div>
  )
}

