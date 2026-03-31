'use client'

import { useEffect, useRef, useState } from 'react'

interface EnvelopeProps {
  data: unknown
}

export function EnvelopeSection({ data }: EnvelopeProps) {
  void data
  const [isOpen, setIsOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setIsOpen(true)
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

      <div className="text-center mb-16 relative z-10">
        <h3 className="font-serif text-[clamp(2.5rem,6vw,4rem)] text-[#1A1A1A] uppercase tracking-widest mb-4">
          Invitation
        </h3>
        <p className="font-script text-[clamp(1.5rem,3vw,2.5rem)] text-[#1A1A1A] opacity-70">(Welcome)</p>
      </div>

      <div
        className="relative w-full max-w-[600px] aspect-[3/2] cursor-pointer group"
        onClick={() => setIsOpen((v) => !v)}
      >
        <div className="absolute inset-0 bg-[#C62828] shadow-2xl skew-x-1" />

        <div
          className={`absolute left-4 right-4 bg-white shadow-inner border border-gray-100 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col items-center justify-center p-8 text-center ${
            isOpen ? '-top-32 h-[120%] z-20 rotate-1' : 'top-4 bottom-4 z-0'
          }`}
        >
          <p className="font-serif text-xl tracking-[0.3em] uppercase mb-4 text-[#1A1A1A]">DEAR</p>
          <div className="w-16 h-px bg-[#C62828] mb-6 opacity-40" />
          <p className="font-script text-3xl md:text-4xl text-[#1A1A1A] leading-relaxed mb-6">Family &amp; Friends</p>
          <p className="font-serif text-sm tracking-widest leading-loose text-gray-600 uppercase max-w-[80%]">
            We invite you to share this special day with us.
          </p>
          <div className="mt-8 text-xs text-[#C62828] font-bold tracking-[0.4em] uppercase border border-[#C62828] px-6 py-2 rotate-[-5deg]">
            Save the Date
          </div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-[60%] bg-[#b71f1f] shadow-[0_-5px_15px_rgba(0,0,0,0.1)]"
            style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
          />
          <div
            className="absolute top-0 bottom-0 left-0 w-[50%] bg-[#aa1919] shadow-[5px_0_15px_rgba(0,0,0,0.1)]"
            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-[50%] bg-[#aa1919] shadow-[-5px_0_15px_rgba(0,0,0,0.1)]"
            style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
          />
          <div
            className={`absolute top-0 left-0 right-0 h-[55%] bg-[#C62828] shadow-[0_5px_15px_rgba(0,0,0,0.2)] transform origin-top transition-transform duration-700 ease-in-out z-30 ${
              isOpen ? 'opacity-0' : ''
            }`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              transformStyle: 'preserve-3d',
              transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
            }}
          />
        </div>
      </div>

      <p
        className="mt-20 font-serif text-[#C62828] tracking-widest text-sm animate-pulse cursor-pointer"
        onClick={() => setIsOpen((v) => !v)}
      >
        {isOpen ? 'CLOSE ENVELOPE' : 'OPEN ENVELOPE'}
      </p>
    </section>
  )
}
