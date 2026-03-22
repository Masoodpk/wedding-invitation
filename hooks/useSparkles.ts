'use client'

import { useEffect } from 'react'

export function useSparkles() {
  useEffect(() => {
    const canvas = document.getElementById('sparkleCanvas') as HTMLCanvasElement | null
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    let width = 0, height = 0
    type Star = { x: number; y: number; size: number; alpha: number; speed: number }
    let stars: Star[] = []
    let animationId = 0

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = width
      canvas!.height = height
      const count = Math.max(24, Math.floor((width * height) / 24000))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.2,
        alpha: Math.random() * 0.4 + 0.08,
        speed: Math.random() * 0.16 + 0.05,
      }))
    }

    function draw() {
      context!.clearRect(0, 0, width, height)
      for (const star of stars) {
        star.y -= star.speed
        if (star.y < -4) {
          star.y = height + 4
          star.x = Math.random() * width
        }
        context!.beginPath()
        context!.fillStyle = `rgba(255, 223, 170, ${star.alpha})`
        context!.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        context!.fill()
      }
      animationId = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])
}
