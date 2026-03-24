const SmallMandala = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
    <circle cx="50" cy="50" r="48" strokeDasharray="2 4" />
    <circle cx="50" cy="50" r="40" strokeDasharray="1 2" />
    <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
    <rect x="25" y="25" width="50" height="50" />
    <path d="M50 0 L55 35 L100 50 L55 65 L50 100 L45 65 L0 50 L45 35 Z" fill="currentColor" fillOpacity="0.1" />
  </svg>
)

export function QuoteSection() {
  return (
    <section className="reveal font-serif relative py-[clamp(4rem,8vw,6rem)] px-4 text-center flex items-center justify-center max-w-[1200px] mx-auto" id="quote-section">
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[clamp(150px,30vw,300px)] text-accent opacity-[0.15] pointer-events-none" aria-hidden="true">
        <SmallMandala />
      </div>
      
      <div className="max-w-[800px] relative z-[1]">
        <blockquote className="m-0 text-[clamp(1.4rem,3.5vw,2.2rem)] leading-[1.5] text-accent uppercase font-serif">
          &ldquo;And among His signs is that He created for you mates from among yourselves,
          that you may find tranquility in them...&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4 mt-8 text-accent text-[0.9rem] tracking-[0.2em] uppercase">
          <span className="flex-none w-10 h-px bg-accent opacity-50" />
          <p>Surah Ar-Rum</p>
          <span className="flex-none w-10 h-px bg-accent opacity-50" />
        </div>
      </div>

      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[clamp(150px,30vw,300px)] text-accent opacity-[0.15] pointer-events-none" aria-hidden="true">
        <SmallMandala />
      </div>
    </section>
  )
}
