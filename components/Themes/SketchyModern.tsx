'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { WeddingData } from '@/types/wedding'
import { useReveal } from '@/hooks/useReveal'
import { IntroSectionSketchy } from '@/components/Sketchy/IntroSection'
import { HeroSectionSketchy } from '@/components/Sketchy/HeroSection'
import { CoupleSectionSketchy } from '@/components/Sketchy/CoupleSection'
import { CalendarSection } from '@/components/Sketchy/CalendarSection'
import { EnvelopeSection } from '@/components/Sketchy/EnvelopeSection'
import { RulesSection } from '@/components/Sketchy/RulesSection'
import { ContactSection } from '@/components/Sketchy/ContactSection'
import { FooterSketchy } from '@/components/Sketchy/Footer'
import { MusicToggle } from '@/components/MusicToggle'

interface ThemeProps {
  data: WeddingData;
}

export function SketchyModernTheme({ data }: ThemeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicVisible, setMusicVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useReveal()

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
    document.documentElement.classList.add('theme-sketchy', 'is-open')
    document.body.classList.add('theme-sketchy', 'is-open')
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
      document.documentElement.classList.remove('theme-sketchy', 'is-open')
      document.body.classList.remove('theme-sketchy', 'is-open')
    }
  }, [])

  return (
    <div className="bg-[#F5F1E9] text-[#1A1A1A] font-sans selection:bg-[#C62828]/20 selection:text-[#C62828]">
      <IntroSectionSketchy onOpen={handleOpen} hidden={isOpen} data={data} />

      <main
        className={`relative w-full transition-opacity duration-1000 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <HeroSectionSketchy data={data} />
        <CoupleSectionSketchy data={data} />
        <EnvelopeSection data={data} />
        <CalendarSection data={data} />
        <RulesSection data={data} />
        <ContactSection data={data} />
        <FooterSketchy data={data} />
      </main>

      <MusicToggle
        playing={musicPlaying}
        onToggle={handleMusicToggle}
        hidden={!musicVisible}
      />

      <audio ref={audioRef} preload="metadata" loop>
        <source src={data.details.music || "/assets/wedding_music.mp3"} type="audio/mpeg" />
      </audio>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Caveat:wght@400;700&display=swap');
        
        .theme-sketchy {
          background-color: #F5F1E9;
        }
        
        @keyframes draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}
