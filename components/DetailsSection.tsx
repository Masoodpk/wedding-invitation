const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="-rotate-45 text-accent">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="-rotate-45 text-accent">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="-rotate-45 text-accent">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export function DetailsSection() {
  return (
    <section className="reveal py-[clamp(3rem,6vw,5rem)] px-4 max-w-[1200px] mx-auto" id="details">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md md:max-w-none mx-auto">
        {/* Nikah */}
        <article className="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40">
          <div className="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true">
            <CalendarIcon />
          </div>
          <h5 className="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">NIKAH</h5>
          <div className="w-10 h-px bg-accent mx-auto mb-6 opacity-50" />
          <p className="text-[1.2rem] m-0 mb-2 font-serif text-accent">3:00 PM</p>
          <p className="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">20 December 2026</p>
          <p className="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">Bride&apos;s Residence</p>
        </article>

        {/* Reception */}
        <article className="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40">
          <div className="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true">
            <DollarIcon />
          </div>
          <h5 className="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">RECEPTION</h5>
          <div className="w-10 h-px bg-accent mx-auto mb-6 opacity-50" />
          <p className="text-[1.2rem] m-0 mb-2 font-serif text-accent">6:00 PM</p>
          <p className="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">20 December 2026</p>
          <p className="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body">Groom&apos;s Residence</p>
        </article>

        {/* Venue */}
        <article className="border border-accent/20 bg-bg py-12 px-6 text-center flex flex-col items-center shadow-2xl relative rounded-t-[9999px] rounded-b-xl transition-all duration-300 hover:border-accent/40">
          <div className="w-[50px] h-[50px] border border-accent rotate-45 flex items-center justify-center mb-10" aria-hidden="true">
            <PinIcon />
          </div>
          <h5 className="text-2xl text-text m-0 mb-4 tracking-[0.1em] font-serif">THE VENUE</h5>
          <div className="w-10 h-px bg-accent mx-auto mb-6 opacity-50" />
          <p className="text-[1.2rem] m-0 mb-2 font-serif text-accent">Kothiyoth House</p>
          <p className="m-0.5 text-[0.95rem] opacity-80 text-[#FAFAF2] font-body mb-4">Nandi Bazar, Calicut</p>
          <a
            href="https://www.google.com/maps?q=11.483810424804688,75.64095306396484&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 border border-accent text-accent no-underline py-3 px-6 text-[0.8rem] tracking-[0.2em] transition-all duration-300 rounded hover:bg-accent hover:text-bg font-serif"
          >
            GET DIRECTIONS
          </a>
        </article>
      </div>
    </section>
  )
}
