'use client'

import { useEffect, useRef, useState } from 'react'
import type { WeddingData } from '@/lib/wedding'

interface EnvelopeProps {
  data: WeddingData
}

export function EnvelopeSection({ data }: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { groom, bride } = data.couple

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsOpen(true)
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="reveal relative py-32 px-6 flex flex-col items-center justify-center min-h-[80vh] bg-[#F5F1E9] overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gray-300 transform -skew-y-2 opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-300 transform skew-y-2 opacity-50" />

      <div 
        className={`text-center mb-24 relative z-10 transition-all duration-1000 ${isOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <h3 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-[#1A1A1A] uppercase tracking-widest mb-4">
          Invitation
        </h3>
        <p className="font-script text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] opacity-70">A Secret Inside</p>
      </div>

      <div 
        className="relative w-full max-w-[500px] aspect-[4/3] perspective-[1000px] group"
      >
        <div 
          className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isOpen ? 'translate-y-20' : ''}`}
        >
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-[#b71f1f] shadow-2xl skew-x-1 rounded-sm" />

          {/* Invitation Card */}
          <div
            className={`absolute left-4 right-4 bg-white shadow-lg border border-gray-100 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center p-8 text-center ${
              isOpen 
                ? '-translate-y-[60%] z-10 opacity-100 scale-105' 
                : 'translate-y-4 z-0 opacity-0 scale-95'
            }`}
             style={{
               transitionDelay: isOpen ? '400ms' : '0ms'
             }}
          >
            <p className="font-serif text-[10px] tracking-[0.4em] uppercase mb-4 text-[#C62828] font-bold">You are Invited</p>
            <div className="w-10 h-px bg-gray-200 mb-8" />
            
            <h4 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] uppercase leading-[0.9] tracking-tighter mb-4">
              {groom.name} 
              <br/>
              <span className="text-[#C62828] text-2xl font-script normal-case">&amp;</span>
              <br/>
              {bride.name}
            </h4>
            
            <p className="font-script text-xl text-gray-500 mb-8 italic mt-4">Together Forever</p>
            
            <div className="mt-4 pt-6 border-t border-gray-100 font-serif text-[9px] tracking-[0.4em] text-gray-400 uppercase w-full">
              Save the Date • 20.12.2026
            </div>
          </div>

          {/* Front Flaps Layer */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Left Flap */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#aa1919]"
              style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            />
            {/* Right Flap */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#aa1919]"
              style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
            />
            {/* Bottom Flap */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#991616]"
              style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
            />
            {/* Top Flap */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-[#C62828] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform origin-top transition-all duration-500 ease-in-out z-30 ${
                isOpen ? 'rotate-x-180' : 'rotate-x-0'
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                backfaceVisibility: 'hidden',
                zIndex: isOpen ? 0 : 30
              }}
            />
          </div>
        </div>
      </div>

      <div className="h-20" />

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
      `}</style>
    </section>
  )
}
