'use client'

import { WeddingData } from '@/types/wedding'
import { SketchyUnderline } from './Elements'

interface HeroProps {
  data: WeddingData;
}

export function HeroSectionSketchy({ data }: HeroProps) {
  const { groom, bride } = data.details

  return (
    <section className="reveal relative min-h-screen py-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-block px-4 py-1 border border-[#C62828] text-[#C62828] text-sm tracking-[0.3em] uppercase mb-8">
            The Wedding of
          </div>
          
          <h2 className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] font-serif uppercase tracking-tighter mb-4 text-[#1A1A1A]">
            {groom.name} 
            <br />
            <span className="text-[#C62828]">&</span> {bride.name}
          </h2>
          
          <div className="relative mt-4">
            <p className="font-script text-[clamp(1.5rem,4vw,2.5rem)] text-gray-700">
              ...совместные мечты
            </p>
            <SketchyUnderline className="absolute -bottom-2 left-0 w-full h-4 text-[#C62828] opacity-40" />
          </div>
          
          <div className="mt-12 flex flex-col items-center md:items-start gap-4 font-serif tracking-[0.2em] text-[#1A1A1A]">
            <p className="text-xl">20 . 12 . 2026</p>
            <p className="text-sm opacity-60 uppercase">{data.details.venue}</p>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] bg-gray-200 border-[8px] border-white shadow-xl transform rotate-2 overflow-hidden">
            <img 
              src={data.details.images?.[0] || "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop"} 
              alt="Couple" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          
          {/* Sketchy Arrows/Elements */}
          <div className="absolute -bottom-10 -left-10 w-24 h-24 text-[#C62828] rotate-45 opacity-60">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10,50 L90,50 M70,30 L90,50 L70,70" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#C62828] opacity-60">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="1.5">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
