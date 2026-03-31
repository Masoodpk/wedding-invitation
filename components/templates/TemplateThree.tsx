'use client'

import type { WeddingData } from '@/lib/wedding'
import { formatDateParts } from '@/lib/wedding'
import { useCountdown } from '@/hooks/useCountdown'

function IntroSection() {
  return null
}

function HeroSection({ data, t3, dateLine }: { data: WeddingData; t3: WeddingData['templateThree']; dateLine: string }) {
  return (
    <>
      <header className="max-w-[1040px] mx-auto px-6 pt-10">
        <div className="flex items-center justify-between gap-6">
          <div className="text-[12px] tracking-[0.22em] uppercase">{t3.headerText}</div>
          <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-[0.22em] uppercase opacity-70">
            {(t3.topLinks ?? []).map((label) => (
              <a key={label} href="#" className="hover:opacity-100">
                {label}
              </a>
            ))}
          </nav>
          <button className="border border-[#161616]/70 px-4 py-2 text-[11px] tracking-[0.22em] uppercase">{t3.rsvpLabel}</button>
        </div>
      </header>

      <section className="pt-12 text-center max-w-[1040px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] items-center gap-8">
          <div className="mx-auto w-full max-w-[220px]">
            <img
              src={(t3.galleryImages ?? [])[0] ?? data.wedding.heroImageUrl}
              alt=""
              className="w-full h-[160px] object-cover grayscale"
            />
          </div>

          <div>
            <div className="text-[clamp(34px,6vw,68px)] leading-[0.95] font-serif font-normal">{dateLine || ' '}</div>
            <div className="mt-5 text-[11px] tracking-[0.22em] uppercase opacity-70 max-w-[520px] mx-auto">
              {data.couple.groom.name} &amp; {data.couple.bride.name}
            </div>
            <div className="mt-3 text-[11px] tracking-[0.22em] uppercase opacity-60 max-w-[520px] mx-auto">{data.quote.source}</div>
          </div>

          <div className="mx-auto w-full max-w-[220px]">
            <img
              src={(t3.galleryImages ?? [])[2] ?? data.wedding.heroImageUrl}
              alt=""
              className="w-full h-[160px] object-cover grayscale"
            />
          </div>
        </div>

        <div className="mt-10 mx-auto w-full max-w-[420px]">
          <img
            src={(t3.galleryImages ?? [])[1] ?? data.wedding.heroImageUrl}
            alt=""
            className="w-full h-[220px] object-cover grayscale"
          />
        </div>
      </section>
    </>
  )
}

function CoupleSection() {
  return null
}

function EnvelopeSection() {
  return null
}

function CalendarSection({
  data,
  t3,
  countdownStyle,
  countdownParts,
}: {
  data: WeddingData
  t3: WeddingData['templateThree']
  countdownStyle: { backgroundImage: string; backgroundSize: 'cover'; backgroundPosition: 'center' }
  countdownParts: Array<{ value: string; label: string }>
}) {
  return (
    <>
      <section className="mt-14 bg-[#1b1b1b] text-[#f2efe9] rounded-[2px] overflow-hidden max-w-[1040px] mx-auto px-0">
        <div className="px-6 md:px-12 py-14 text-center">
          <div className="text-[12px] tracking-[0.22em] uppercase opacity-80">{t3.scheduleHeading}</div>
          <div className="mt-2 text-[14px] tracking-[0.22em] uppercase font-serif opacity-90">{t3.scheduleSubheading}</div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
            {(t3.scheduleItems ?? []).map((item) => (
              <div key={`${item.time}-${item.label}`} className="text-center">
                <div className="text-[14px] tracking-[0.18em] uppercase">{item.time}</div>
                <div className="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto" style={countdownStyle}>
        <div className="px-6 md:px-12 py-20 text-center text-[#f2efe9]">
          <div className="text-[12px] tracking-[0.22em] uppercase opacity-80">Countdown</div>
          <div className="mt-10 flex items-center justify-center gap-8">
            {countdownParts.map((part) => (
              <div key={part.label} className="text-center min-w-[60px]">
                <div className="text-[22px] md:text-[26px] tracking-[0.1em] font-serif">{part.value}</div>
                <div className="mt-2 text-[10px] tracking-[0.22em] uppercase opacity-70">{part.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-[11px] tracking-[0.22em] uppercase opacity-75">
            {data.couple.groom.name} <span className="mx-2 opacity-60">•</span> {data.couple.bride.name}
          </div>
        </div>
      </section>
    </>
  )
}

function RulesSection({ t3 }: { t3: WeddingData['templateThree'] }) {
  return (
    <section className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1040px] mx-auto px-6">
      <div className="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center">
        <div className="text-[14px] tracking-[0.22em] uppercase font-serif">{t3.registryHeading}</div>
        <p className="mt-6 text-[13px] leading-[1.8] opacity-80">{t3.registryText}</p>
      </div>
      <div className="bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] px-8 py-12 text-center">
        <div className="text-[14px] tracking-[0.22em] uppercase font-serif">{t3.dressCodeHeading}</div>
        <p className="mt-6 text-[13px] leading-[1.8] opacity-80">{t3.dressCodeText}</p>
      </div>
    </section>
  )
}

function ContactSection({ data, t3 }: { data: WeddingData; t3: WeddingData['templateThree'] }) {
  return (
    <section className="mt-14 bg-[#f7f4ee] border border-[#161616]/15 rounded-[2px] overflow-hidden max-w-[1040px] mx-auto">
      <div className="px-6 md:px-12 py-14 text-center">
        <div className="text-[14px] tracking-[0.22em] uppercase font-serif">{t3.locationHeading}</div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">{t3.locationLeftText}</div>

          <div className="mx-auto w-full max-w-[300px]">
            <img src={t3.locationImageUrl} alt="" className="w-full h-[200px] object-cover grayscale" />
            <a
              href={data.events.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center border border-[#161616]/70 px-5 py-2 text-[10px] tracking-[0.22em] uppercase"
            >
              {t3.locationCtaLabel}
            </a>
          </div>

          <div className="text-[10px] tracking-[0.22em] uppercase opacity-70 whitespace-pre-line">{t3.locationRightText}</div>
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return null
}

export function TemplateThree({ data }: { data: WeddingData }) {
  const t3 = data.templateThree ?? ({} as WeddingData['templateThree'])
  const { day, month, year } = formatDateParts(data.wedding.dateTimeLocal)
  const numericMonth = /^(\d{4})-(\d{2})-(\d{2})/.exec(data.wedding.dateTimeLocal.trim())?.[2] ?? ''
  const dateLine = day && numericMonth && year ? `${day} . ${numericMonth} . ${year}` : ''
  const { days, hours, minutes, seconds } = useCountdown(data.wedding.dateTimeLocal)

  const countdownStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${t3.countdownBackgroundUrl})`,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
  }

  const countdownParts = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: minutes, label: 'MINS' },
    { value: seconds, label: 'SECS' },
  ]

  return (
    <div className="min-h-[100svh] bg-[#f2efe9] text-[#161616]">
      <IntroSection />
      <HeroSection data={data} t3={t3} dateLine={dateLine} />
      <CoupleSection />
      <EnvelopeSection />
      <CalendarSection data={data} t3={t3} countdownStyle={countdownStyle} countdownParts={countdownParts} />
      <RulesSection t3={t3} />
      <ContactSection data={data} t3={t3} />
      <FooterSection />
      <div className="pb-24" />
    </div>
  )
}
