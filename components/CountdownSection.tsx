import { useCountdown } from '@/hooks/useCountdown'
import { WeddingData } from '@/types/wedding'

interface CountdownSectionProps {
  data: WeddingData
}

export function CountdownSection({ data }: CountdownSectionProps) {
  const weddingDate = new Date(data.details.date)
  const { days, hours, minutes, seconds, arrived } = useCountdown(data.details.date)

  const day = weddingDate.getDate()
  const month = weddingDate.toLocaleString('en-US', { month: 'long' }).toUpperCase()
  const year = weddingDate.getFullYear()
  const weekday = weddingDate.toLocaleString('en-US', { weekday: 'long' }).toUpperCase()

  return (
    <section className="reveal py-[clamp(3rem,6vw,5rem)] px-4 max-w-[1000px] mx-auto text-center" id="date">
      <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] text-accent m-0 mb-4 tracking-[0.1em]">CELEBRATION DETAILS</h3>
      <div className="w-[60px] h-0.5 bg-accent mx-auto mb-12 opacity-50" />

      <div className="bg-card rounded-[20px] p-[clamp(2rem,5vw,4rem)] shadow-2xl">
        <p className="font-serif tracking-widest text-accent text-sm mb-4">
          SAVE THE DATE
        </p>

        <div className="flex items-center justify-center gap-8 text-text mb-12">
          <div className="text-[clamp(4rem,8vw,6rem)] leading-none font-serif">{day}</div>
          <div className="w-px h-20 bg-text opacity-30" />
          <div className="flex flex-col items-start text-accent font-serif">
            <span className="text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[0.1em]">{month}</span>
            <span className="text-[clamp(0.9rem,1.5vw,1.2rem)] tracking-[0.25em] mt-2 text-text opacity-80 font-serif">{year} • {weekday}</span>
          </div>
        </div>

        <div id="countdown" className="flex items-center justify-center gap-[clamp(0.2rem,2vw,1.5rem)]" aria-live="polite">
          <div className="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
            <strong id="days" className="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{days}</strong>
            <span className="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">DAYS</span>
          </div>
          <span className="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
          <div className="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
            <strong id="hours" className="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{hours}</strong>
            <span className="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">HOURS</span>
          </div>
          <span className="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
          <div className="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
            <strong id="minutes" className="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{minutes}</strong>
            <span className="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">MINS</span>
          </div>
          <span className="text-[clamp(1.5rem,2vw,2rem)] text-accent opacity-50 -mt-4 sm:-mt-6 lg:-mt-8">:</span>
          <div className="border border-accent/30 rounded-lg p-[clamp(0.5rem,1.5vw,1rem)] min-w-[clamp(50px,15vw,100px)] bg-black/10">
            <strong id="seconds" className="block text-[clamp(1.5rem,3vw,2.5rem)] text-text leading-[1.2] font-normal font-serif">{seconds}</strong>
            <span className="block text-[clamp(0.6rem,1vw,0.8rem)] text-accent tracking-[0.15em] mt-1 font-serif">SECS</span>
          </div>
        </div>
      </div>

      {arrived && (
        <p id="countdownNote" className="mt-8 text-accent text-[1.2rem] font-serif">
          The wedding day has arrived. Welcome to our celebration.
        </p>
      )}
    </section>
  )
}
