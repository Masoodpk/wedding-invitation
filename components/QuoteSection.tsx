import { MandalaDecoration } from './MandalaDecoration'
import { WeddingData } from '@/types/wedding'

interface QuoteSectionProps {
  data: WeddingData
}

export function QuoteSection({ data }: QuoteSectionProps) {
  const quoteText = data.details.quote?.text || "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them..."
  const quoteSource = data.details.quote?.source || "Surah Ar-Rum"

  return (
    <section className="reveal relative py-20 md:py-32 px-6 text-center flex items-center justify-center min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#002a18] via-[#001f11] to-[#002a18]" id="quote-section">
      {/* Decorative Border Frame */}
      <div className="absolute inset-[clamp(1.5rem,4vw,3rem)] border border-accent/15 z-0 pointer-events-none" />
      
      {/* Top Left Decorative Mandala */}
      <div className="absolute top-[10%] left-[2%] w-[clamp(300px,50vw,500px)] md:w-[clamp(200px,30vw,350px)] text-accent/20 pointer-events-none animate-[spin_40s_linear_infinite_reverse] z-0" aria-hidden="true">
        <MandalaDecoration className="w-full h-full" />
      </div>

      <div className="max-w-[850px] relative z-[1] flex flex-col items-center px-4 w-full">
        {/* Top Divider Line */}
        <div className="w-full h-px bg-accent/20 mb-12 max-w-[600px]" />

        <blockquote className="m-0 text-[clamp(1.2rem,3.2vw,1.7rem)] leading-[1.6] text-accent/90 uppercase font-serif tracking-[0.15em] [text-shadow:0_2px_10px_rgba(0,0,0,0.3)]">
          &ldquo;{quoteText}&rdquo;
        </blockquote>
        
        {/* Bottom Divider Line */}
        <div className="w-full h-px bg-accent/20 mt-12 mb-16 max-w-[600px]" />

        <div className="flex items-center justify-center gap-6 w-full max-w-[400px]">
          <div className="flex-1 h-px bg-accent/40" />
          <p className="text-accent text-[0.7rem] md:text-[0.8rem] tracking-[0.5em] uppercase font-serif font-bold whitespace-nowrap px-4">
            {quoteSource}
          </p>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
      </div>

      {/* Bottom Right Decorative Mandala */}
      <div className="absolute bottom-[-15%] right-[-15%] w-[clamp(300px,50vw,500px)] md:w-[clamp(200px,30vw,350px)] text-accent/20 pointer-events-none animate-[spin_40s_linear_infinite] z-0 hidden md:block" aria-hidden="true">
        <MandalaDecoration className="w-full h-full" />
      </div>
    </section>
  )
}
