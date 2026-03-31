'use client'

import { useState, useEffect } from 'react'

function formatUnit(value: number): string {
  return String(value).padStart(2, '0')
}

export function useCountdown(dateISO: string) {
  const [time, setTime] = useState(() => ({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    arrived: false,
  }))

  useEffect(() => {
    const targetTime = new Date(dateISO).getTime()
    const getTimeLeft = () => {
      const diff = targetTime - Date.now()
      if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00', arrived: true }
      return {
        days: formatUnit(Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: formatUnit(Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: formatUnit(Math.floor((diff / (1000 * 60)) % 60)),
        seconds: formatUnit(Math.floor((diff / 1000) % 60)),
        arrived: false,
      }
    }

    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [dateISO])

  return time
}
