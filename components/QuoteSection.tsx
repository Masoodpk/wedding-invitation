import { MandalaDecoration } from './MandalaDecoration'
import { WeddingData } from '@/types/wedding'

interface QuoteSectionProps {
  text: string
  source: string
}

export function QuoteSection({ text, source }: QuoteSectionProps) {
  return (
    <section className="reveal relative py-20 md:py-32 px-6 text-center flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#002a18] via-[#001f11] to-[#002a18]" id="quote-section">
      {/* Decorative Border Frame */}
      <div className="absolute inset-[clamp(1.5rem,4vw,3rem)] border border-accent/15 z-0 pointer-events-none" />
      
      <div className="max-w-[800px] relative z-[1]">
        <blockquote className="m-0 text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.5] text-accent uppercase font-serif">
          {text}
        </blockquote>
        <div className="flex items-center justify-center gap-4 mt-8 text-accent text-[0.9rem] tracking-[0.2em] uppercase">
          <span className="flex-none w-10 h-px bg-accent opacity-50" />
          <p>{source}</p>
          <span className="flex-none w-10 h-px bg-accent opacity-50" />
        </div>
      </div>

      {/* Bottom Right Decorative Mandala */}
      <div className="absolute bottom-[-15%] right-[-15%] w-[clamp(300px,50vw,500px)] md:w-[clamp(200px,30vw,350px)] text-accent/20 pointer-events-none animate-[spin_40s_linear_infinite] z-0 hidden md:block" aria-hidden="true">
        <MandalaDecoration className="w-full h-full" />
      </div>
    </section>
  )
}
