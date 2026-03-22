'use client'

import { useCountdown } from '@/hooks/useCountdown'

const WEDDING_DATE = '2026-12-20T15:00:00+05:30'

export function CountdownSection() {
  const { days, hours, minutes, seconds, arrived } = useCountdown(WEDDING_DATE)

  return (
    <section className="countdown-section reveal" id="date">
      <h3 className="font-serif section-heading">CELEBRATION DETAILS</h3>
      <div className="heading-underline" />

      <div className="countdown-card">
        <p className="eyebrow top-eyebrow font-serif tracking-widest text-gold text-sm mb-4">
          SAVE THE DATE
        </p>

        <div className="date-hero">
          <div className="date-hero-day font-serif">20</div>
          <div className="date-hero-divider" />
          <div className="date-hero-month-year font-serif">
            <span className="month">DECEMBER</span>
            <span className="year-day">2026 • SUNDAY</span>
          </div>
        </div>

        <div id="countdown" className="countdown" aria-live="polite">
          <div className="count-card">
            <strong id="days" className="font-serif">{days}</strong>
            <span className="font-serif">DAYS</span>
          </div>
          <span className="colon">:</span>
          <div className="count-card">
            <strong id="hours" className="font-serif">{hours}</strong>
            <span className="font-serif">HOURS</span>
          </div>
          <span className="colon">:</span>
          <div className="count-card">
            <strong id="minutes" className="font-serif">{minutes}</strong>
            <span className="font-serif">MINS</span>
          </div>
          <span className="colon">:</span>
          <div className="count-card">
            <strong id="seconds" className="font-serif">{seconds}</strong>
            <span className="font-serif">SECS</span>
          </div>
        </div>
      </div>

      {arrived && (
        <p id="countdownNote" className="countdown-note">
          The wedding day has arrived. Welcome to our celebration.
        </p>
      )}
    </section>
  )
}
