'use client'

interface MusicToggleProps {
  playing: boolean
  onToggle: () => void
  hidden: boolean
}

export function MusicToggle({ playing, onToggle, hidden }: MusicToggleProps) {
  if (hidden) return null

  return (
    <button
      id="musicToggle"
      className="music-toggle"
      aria-label="Toggle background music"
      aria-pressed={playing}
      onClick={onToggle}
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {playing ? (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </>
        ) : (
          <>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </>
        )}
      </svg>
    </button>
  )
}
