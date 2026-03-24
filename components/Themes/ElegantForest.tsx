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
import { WeddingData } from '@/types/wedding'

interface ThemeProps {
  data: WeddingData;
}

export function ElegantForestTheme({ data }: ThemeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicVisible, setMusicVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('is-open')
      document.body.classList.remove('is-open')
    }
  }, [])

  return (
    <>
      <canvas 
        id="sparkleCanvas" 
        className="fixed inset-0 w-full h-full pointer-events-none z-0" 
        aria-hidden="true" 
      />

      <IntroScreen onOpen={handleOpen} hidden={isOpen} data={data} />

      <main
        id="invitation"
        className={`relative z-[1] w-full transition-opacity duration-[1500ms] ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <HeroSection data={data} />
        <QuoteSection data={data} />
        <CoupleSection data={data} />
        <CountdownSection data={data} />
        <DetailsSection data={data} />
        <Footer data={data} />
      </main>

      <MusicToggle
        playing={musicPlaying}
        onToggle={handleMusicToggle}
        hidden={!musicVisible}
      />

      <audio ref={audioRef} id="bgMusic" preload="metadata" loop>
        <source src={data.details.music || "/assets/wedding_music.mp3"} type="audio/mpeg" />
      </audio>
    </>
  )
}
