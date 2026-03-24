'use client'

import { WeddingData } from '@/types/wedding'
import { SketchyUnderline } from './Elements'

interface ContactProps {
  data: WeddingData;
}

export function ContactSection({ data }: ContactProps) {
  const events = data.details.events || [];

  return (
    <section className="reveal py-24 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-[1000px] mx-auto text-center">
        <h3 className="font-serif text-[clamp(2.5rem,5vw,4rem)] uppercase tracking-[0.2em] mb-16 relative inline-block">
          Локация
          <SketchyUnderline className="absolute -bottom-4 left-0 w-full h-8 text-[#C62828]" />
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16">
          <div className="flex-1 text-center md:text-right">
            <p className="font-serif text-[#C62828] tracking-widest uppercase text-sm mb-4">Venue</p>
            <p className="font-serif text-2xl md:text-3xl mb-2">{data.details.venue}</p>
            <p className="font-sans text-gray-400 font-light max-w-xs ml-auto mr-auto md:mr-0">{data.details.address}</p>
          </div>
          
          <div className="hidden md:block w-px bg-gray-800" />
          
          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            {events.map((e, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <p className="font-serif text-xl mb-1">{e.title}</p>
                <p className="font-sans text-[#C62828] tracking-widest text-sm">{e.time}</p>
              </div>
            ))}
          </div>
        </div>

        <a 
          href={events.find(e => e.mapLink)?.mapLink || `https://maps.google.com/?q=${data.details.address}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border-2 border-[#C62828] text-[#C62828] hover:bg-[#C62828] hover:text-white px-10 py-4 font-serif uppercase tracking-[0.2em] transition-colors duration-300"
        >
          View on Map
        </a>
      </div>
    </section>
  )
}
