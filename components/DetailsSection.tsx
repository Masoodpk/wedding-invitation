const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="gold-svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="gold-svg">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" className="gold-svg">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export function DetailsSection() {
  return (
    <section className="details reveal" id="details">
      <div className="detail-grid">
        {/* Nikah */}
        <article className="detail-card arched-frame-small">
          <div className="detail-icon" aria-hidden="true">
            <CalendarIcon />
          </div>
          <h5 className="font-serif">NIKAH</h5>
          <div className="detail-divider" />
          <p className="detail-time font-serif text-accent">3:00 PM</p>
          <p className="font-body text-cream">20 December 2026</p>
          <p className="font-body text-cream">Bride&apos;s Residence</p>
        </article>

        {/* Reception */}
        <article className="detail-card arched-frame-small">
          <div className="detail-icon" aria-hidden="true">
            <DollarIcon />
          </div>
          <h5 className="font-serif">RECEPTION</h5>
          <div className="detail-divider" />
          <p className="detail-time font-serif text-accent">6:00 PM</p>
          <p className="font-body text-cream">20 December 2026</p>
          <p className="font-body text-cream">Groom&apos;s Residence</p>
        </article>

        {/* Venue */}
        <article className="detail-card arched-frame-small">
          <div className="detail-icon" aria-hidden="true">
            <PinIcon />
          </div>
          <h5 className="font-serif">THE VENUE</h5>
          <div className="detail-divider" />
          <p className="detail-time font-serif text-accent">Kothiyoth House</p>
          <p className="font-body text-cream mb-4">Nandi Bazar, Calicut</p>
          <a
            href="https://www.google.com/maps?q=11.483810424804688,75.64095306396484&z=17&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link font-serif"
          >
            GET DIRECTIONS
          </a>
        </article>
      </div>
    </section>
  )
}
