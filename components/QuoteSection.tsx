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
    <section className="quote reveal font-serif" id="quote-section">
      <div className="mandala-left" aria-hidden="true">
        <SmallMandala />
      </div>
      <div className="quote-text">
        <blockquote>
          &ldquo;And among His signs is that He created for you mates from among yourselves,
          that you may find tranquility in them...&rdquo;
        </blockquote>
        <div className="quote-source">
          <span className="quote-line" />
          <p>Surah Ar-Rum</p>
          <span className="quote-line" />
        </div>
      </div>
      <div className="mandala-right" aria-hidden="true">
        <SmallMandala />
      </div>
    </section>
  )
}
