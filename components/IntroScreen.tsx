'use client'

import { MandalaDecoration } from './MandalaDecoration'

interface IntroScreenProps {
  onOpen: () => void
  hidden: boolean
}

export function IntroScreen({ onOpen, hidden }: IntroScreenProps) {
  return (
    <section
      id="introScreen"
      className={`intro-screen${hidden ? ' hidden' : ''}`}
    >
      <div className="vertical-glow-line" aria-hidden="true" />
      <MandalaDecoration className="mandala-top-left" />
      <MandalaDecoration className="mandala-bottom-right" />

      <div className="intro-card">
        <div className="bismillah-wrap">
          <p className="intro-arabic font-arabic">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
        </div>

        <h1 className="intro-names">
          <span className="intro-groom font-script">Naji</span>
          <div className="intro-and-wrap">
            <div className="intro-and-line left" />
            <span className="intro-and font-serif">&amp;</span>
            <div className="intro-and-line right" />
          </div>
          <span className="intro-bride font-script">Ayisha</span>
        </h1>

        <p className="intro-copy font-serif">Request the honor of your presence</p>

        <div className="heart-area">
          <button
            id="openInviteBtn"
            className="heart-button"
            aria-label="Open invitation"
            onClick={onOpen}
          >
            <svg
              className="heart-icon-svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <span className="hint font-serif">Open Invitation</span>
        </div>
      </div>
    </section>
  )
}
