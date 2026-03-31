'use client'

import type { WeddingData } from '@/lib/wedding'

interface FooterProps {
  data: WeddingData
}

export function FooterSketchy({ data }: FooterProps) {
  return (
    <footer className="reveal py-20 px-6 bg-[#F5F1E9] text-center">
      <div className="inline-block relative">
        <h4 className="font-script text-[clamp(3rem,8vw,5rem)] text-[#1A1A1A] leading-none mb-4 transform -rotate-3">
          See you there!
        </h4>
        <div className="absolute -top-6 -right-12 w-16 h-16 opacity-30 text-[#C62828]">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 text-[#1A1A1A] font-serif tracking-widest uppercase text-sm">
        <div className="w-12 h-px bg-[#1A1A1A] opacity-20" />
        <p>
          {data.couple.groom.name} &amp; {data.couple.bride.name}
        </p>
        <div className="w-12 h-px bg-[#1A1A1A] opacity-20" />
      </div>
    </footer>
  )
}
