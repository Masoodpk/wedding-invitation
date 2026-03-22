'use client'

import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.parallax')
    let ticking = false

    const update = () => {
      const vh = window.innerHeight || 1
      items.forEach((img) => {
        const rect = img.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > vh) return
        const offset = (rect.top + rect.height * 0.5 - vh * 0.5) * -0.035
        img.style.transform = `translateY(${offset}px) scale(1.06)`
      })
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}
