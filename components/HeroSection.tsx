import { formatDateParts, getFirstName } from '@/lib/wedding'

interface HeroSectionProps {
  brideName: string
  groomName: string
  dateTimeLocal: string
  heroImageUrl: string
  basmala: string
  tagline: string
}

export function HeroSection({ brideName, groomName, dateTimeLocal, heroImageUrl, basmala, tagline }: HeroSectionProps) {
  const { day, month, year, weekday } = formatDateParts(dateTimeLocal)
  return (
    <header className="reveal relative min-h-[100svh] flex items-center justify-center overflow-visible">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Decorative Frame */}
        <div className="absolute inset-[clamp(1rem,1.3vw,2rem)] border border-[#E6B836]/20 z-[5] pointer-events-none
          before:content-[''] before:absolute before:top-[-2px] before:left-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-l-2 before:border-[#E6B836]
          after:content-[''] after:absolute after:bottom-[-2px] after:right-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-r-2 after:border-[#E6B836]">
          <div className="absolute inset-0
            before:content-[''] before:absolute before:top-[-2px] before:right-[-2px] before:w-8 before:h-8 before:border-t-2 before:border-r-2 before:border-[#E6B836]
            after:content-[''] after:absolute after:bottom-[-2px] after:left-[-2px] after:w-8 after:h-8 after:border-b-2 after:border-l-2 after:border-[#E6B836]" />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageUrl}
          alt="Wedding couple"
          className="hero-image parallax absolute inset-0 w-full h-full object-cover object-center scale-[1.05] grayscale opacity-25"
          decoding="async"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f11]/70 via-[#001f11]/50 to-[#001f11] opacity-80" />

        <div className="relative z-[2] text-center w-full px-4 flex flex-col items-center justify-center h-full">
          <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#E6B836] mb-8 font-arabic">{basmala}</p>
          <p className="m-0 mb-8 uppercase tracking-[0.3em] text-[clamp(0.7rem,1.5vw,0.9rem)] text-white opacity-80 font-serif">{tagline}</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 my-8">
            <span className="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">{getFirstName(groomName)}</span>
            <span className="text-[clamp(1.5rem,3vw,2.5rem)] text-[#E6B836] font-serif">&amp;</span>
            <span className="text-[clamp(4rem,12vw,8rem)] text-white leading-none [text-shadow:0_4px_20px_rgba(0,0,0,0.5)] font-script">{getFirstName(brideName)}</span>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-8 my-8 text-[#E6B836] bg-[#003219]/10 backdrop-blur-[2px] border border-[#E6B836]/15 py-4 px-6 md:px-12 font-serif max-w-[calc(100%-2rem)] mx-auto">
            <div className="flex flex-col items-center line-height-[1.2]">
              <span className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">{day}</span>
              <span className="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">{month}</span>
            </div>
            <div className="w-px h-10 bg-[#E6B836] opacity-50" />
            <div className="flex flex-col items-center line-height-[1.2]">
              <span className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold">{year}</span>
              <span className="text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em]">{weekday}</span>
            </div>
          </div>

          <div className="scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 color-[#E6B836] text-[0.75rem] tracking-[0.2em] opacity-80 animate-bounce font-serif">
            <p>Scroll Down</p>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
