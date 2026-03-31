'use client'

import type { WeddingData } from '@/lib/wedding'
import { SketchyCircle, WavyLine } from './Elements'

interface CalendarProps {
  data: WeddingData
}

function parseYmd(dateTimeLocal: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(dateTimeLocal.trim())
  if (!match) return null
  const year = Number(match[1])
  const monthIndex = Number(match[2]) - 1
  const day = Number(match[3])
  if (!Number.isFinite(year) || !Number.isFinite(monthIndex) || !Number.isFinite(day)) return null
  return { year, monthIndex, day }
}

export function CalendarSection({ data }: CalendarProps) {
  const parsed = parseYmd(data.wedding.dateTimeLocal)
  const monthIndex = parsed?.monthIndex ?? 0
  const year = parsed?.year ?? 2026
  const date = parsed?.day ?? 1

  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate()
  const firstDay = new Date(Date.UTC(year, monthIndex, 1)).getUTCDay()

  const blanks = Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 })
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const monthNames = [
    'ЯНВАРЬ',
    'ФЕВРАЛЬ',
    'МАРТ',
    'АПРЕЛЬ',
    'МАЙ',
    'ИЮНЬ',
    'ИЮЛЬ',
    'АВГУСТ',
    'СЕНТЯБРЬ',
    'ОКТЯБРЬ',
    'НОЯБРЬ',
    'ДЕКАБРЬ',
  ]
  const displayMonth = monthNames[monthIndex] ?? 'MONTH'

  return (
    <section className="reveal py-24 px-6 flex flex-col items-center">
      <div className="relative w-full max-w-lg mx-auto">
        <h3 className="font-serif text-3xl md:text-5xl text-center mb-16 tracking-widest text-[#1A1A1A]">
          {displayMonth} {year}
        </h3>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-6 text-[#C62828] opacity-60">
          <WavyLine className="w-full h-full" />
        </div>

        <div className="grid grid-cols-7 gap-y-6 gap-x-2 md:gap-x-4 text-center font-serif text-[#1A1A1A]">
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
            <div key={d} className="text-xs md:text-sm tracking-widest font-bold opacity-50 mb-4">
              {d}
            </div>
          ))}

          {blanks.map((_, i) => (
            <div key={`blank-${i}`} className="p-2" />
          ))}

          {days.map((d) => (
            <div key={d} className="relative p-2 md:p-4 text-lg md:text-2xl flex items-center justify-center">
              <span className={`relative z-10 ${d === date ? 'font-bold' : ''}`}>{d}</span>
              {d === date ? (
                <div className="absolute inset-0 text-[#C62828] z-0 -rotate-12 scale-150">
                  <SketchyCircle className="w-full h-full stroke-[3px]" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
