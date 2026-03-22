'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { IntroScreen } from '@/components/IntroScreen'
import { HeroSection } from '@/components/HeroSection'
import { QuoteSection } from '@/components/QuoteSection'
import { CoupleSection } from '@/components/CoupleSection'
import { CountdownSection } from '@/components/CountdownSection'
import { DetailsSection } from '@/components/DetailsSection'
import { Footer } from '@/components/Footer'
import { MusicToggle } from '@/components/MusicToggle'
import { useReveal } from '@/hooks/useReveal'
import { useParallax } from '@/hooks/useParallax'
import { useSparkles } from '@/hooks/useSparkles'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicVisible, setMusicVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // These hooks set up DOM observers — they run after isOpen triggers re-render
  useReveal()
  useParallax()
  useSparkles()

  const playMusic = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      audio.volume = 0.35
      await audio.play()
      setMusicPlaying(true)
    } catch {
      setMusicPlaying(false)
    }
  }, [])

  const handleOpen = useCallback(async () => {
    // Mirror what the original script does: add is-open to html + body,
    // show the invitation, hide intro, show music toggle
    document.documentElement.classList.add('is-open')
    document.body.classList.add('is-open')
    setIsOpen(true)
    setMusicVisible(true)
    await playMusic()
  }, [playMusic])

  const handleMusicToggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      await playMusic()
    } else {
      audio.pause()
      setMusicPlaying(false)
    }
  }, [playMusic])

  // Clean up body class on unmount (SPA navigation safety)
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('is-open')
      document.body.classList.remove('is-open')
    }
  }, [])

  return (
    <>
      <canvas id="sparkleCanvas" aria-hidden="true" />

      <IntroScreen onOpen={handleOpen} hidden={isOpen} />

      <main
        id="invitation"
        className="invitation"
        aria-hidden={!isOpen}
      >
        <HeroSection />
        <QuoteSection />
        <CoupleSection />
        <CountdownSection />
        <DetailsSection />
        <Footer />
      </main>

      <MusicToggle
        playing={musicPlaying}
        onToggle={handleMusicToggle}
        hidden={!musicVisible}
      />

      <audio ref={audioRef} id="bgMusic" preload="metadata" loop>
        <source src="/assets/wedding_music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}
