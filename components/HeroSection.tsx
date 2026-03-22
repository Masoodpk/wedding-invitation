export function HeroSection() {
  return (
    <header className="hero reveal">
      <div className="hero-image-wrap">
        <div className="hero-frame">
          <div className="hero-frame-inner" />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/786.jpg"
          alt="Wedding couple"
          className="hero-image parallax"
          decoding="async"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-arabic font-arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
          <p className="eyebrow font-serif">We Are Getting Married</p>

          <div className="hero-names-wrap">
            <span className="hero-name font-script">Naji</span>
            <span className="hero-amp font-serif">&amp;</span>
            <span className="hero-name font-script">Ayisha</span>
          </div>

          <div className="hero-date-box font-serif">
            <div className="date-col">
              <span className="date-num">20</span>
              <span className="date-text">DECEMBER</span>
            </div>
            <div className="date-divider" />
            <div className="date-col">
              <span className="date-num">2026</span>
              <span className="date-text">SUNDAY</span>
            </div>
          </div>

          <div className="scroll-down font-serif">
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
