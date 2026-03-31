'use client'

import type { WeddingData } from '@/lib/wedding'

interface RulesProps {
  data: WeddingData
}

export function RulesSection({ data }: RulesProps) {
  void data

  return (
    <section className="reveal py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h3 className="font-script text-[clamp(2.5rem,6vw,4.5rem)] text-[#C62828] leading-none mb-2 transform -rotate-2">
            Details
          </h3>
          <p className="font-serif tracking-[0.3em] uppercase text-sm text-[#1A1A1A]">important notes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative border border-[#1A1A1A] p-8 bg-white rotate-1 hover:rotate-0 transition-transform shadow-[5px_5px_0_#C62828]">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#F5F1E9] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center font-serif text-xl font-bold text-[#1A1A1A]">
              1
            </div>
            <h4 className="font-serif text-xl mb-4 tracking-widest uppercase text-[#1A1A1A] border-b border-gray-200 pb-2 border-dashed">
              Dress Code
            </h4>
            <p className="font-serif text-gray-600 leading-relaxed text-sm text-justify">
              Please join us in our celebration of love by following our color theme. We would be delighted to see you in pastel
              tones: beige, dusty rose, grey, or olive.
            </p>
          </div>

          <div className="relative border border-[#1A1A1A] p-8 bg-white -rotate-1 hover:rotate-0 transition-transform shadow-[-5px_5px_0_#1A1A1A]">
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#F5F1E9] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center font-serif text-xl font-bold text-[#C62828]">
              2
            </div>
            <h4 className="font-serif text-xl mb-4 tracking-widest uppercase text-[#1A1A1A] border-b border-gray-200 pb-2 border-dashed">
              Gifts
            </h4>
            <p className="font-serif text-gray-600 leading-relaxed text-sm text-justify">
              Your presence is our most cherished gift. However, if you would like to honor us with a gift, a contribution in an
              envelope would help us realize our dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
