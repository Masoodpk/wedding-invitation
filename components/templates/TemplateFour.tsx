'use client'

import type { WeddingData } from '@/lib/wedding'

function IntroSection() {
  return null
}

function HeroSection({ t4 }: { t4: WeddingData['templateFour'] }) {
  return (
    <>
      <header className="max-w-[1100px] mx-auto px-6 pt-8">
        <div className="text-center text-[12px] tracking-[0.26em] uppercase opacity-70">{t4.headerText}</div>

        <div className="mt-7 border-t border-[#171717]/15" />
        <nav className="py-4 flex items-center justify-center gap-10 text-[11px] tracking-[0.22em] uppercase opacity-70">
          {(t4.navItems ?? []).map((label) => (
            <a key={label} href="#" className="hover:opacity-100">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="max-w-[1100px] mx-auto px-6 mt-6 rounded-[2px] overflow-hidden relative">
        <img src={t4.heroImageUrl} alt="" className="w-full h-[360px] md:h-[420px] object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-[900px]">
            <div className="text-[11px] tracking-[0.26em] uppercase text-white/85">{t4.heroKicker}</div>
            <div className="mt-6 text-[clamp(44px,7vw,92px)] leading-[0.92] text-white font-script">{t4.heroTitle}</div>
            <div className="mt-4 text-[12px] tracking-[0.22em] uppercase text-white/80">{t4.heroDateText}</div>
          </div>
        </div>
      </section>
    </>
  )
}

function CoupleSection({ data, t4 }: { data: WeddingData; t4: WeddingData['templateFour'] }) {
  return (
    <section className="max-w-[1100px] mx-auto px-6 mt-10 bg-[#f7f3ea] border border-[#171717]/12 rounded-[2px] px-8 md:px-12 py-14 text-center">
      <div className="text-[11px] tracking-[0.26em] uppercase opacity-70">{t4.welcomeKicker}</div>
      <div className="mt-6 text-[clamp(42px,6vw,78px)] leading-[0.92] font-script">{t4.welcomeHeading}</div>
      <p className="mt-8 max-w-[760px] mx-auto text-[14px] leading-[1.9] opacity-80">{t4.welcomeText}</p>
      <div className="mt-10">
        <button className="border border-[#171717]/70 px-10 py-4 text-[11px] tracking-[0.26em] uppercase">{t4.primaryCtaLabel}</button>
      </div>
      <div className="mt-10 text-[12px] tracking-[0.18em] opacity-70 font-serif">
        {data.couple.groom.name} &amp; {data.couple.bride.name}
      </div>
    </section>
  )
}

function EnvelopeSection() {
  return null
}

function CalendarSection() {
  return null
}

function RulesSection() {
  return null
}

function ContactSection() {
  return null
}

function FooterSection({ t4 }: { t4: WeddingData['templateFour'] }) {
  return (
    <section className="max-w-[1100px] mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
      {(t4.galleryImages ?? []).slice(0, 3).map((src, idx) => (
        <div key={`${src}-${idx}`} className="rounded-[2px] overflow-hidden bg-[#171717]/10">
          <img src={src} alt="" className="w-full h-[240px] object-cover grayscale" />
        </div>
      ))}
    </section>
  )
}

export function TemplateFour({ data }: { data: WeddingData }) {
  const t4 = data.templateFour ?? ({} as WeddingData['templateFour'])
  return (
    <div className="min-h-[100svh] bg-[#f2efe6] text-[#171717]">
      <IntroSection />
      <HeroSection t4={t4} />
      <CoupleSection data={data} t4={t4} />
      <EnvelopeSection />
      <CalendarSection />
      <RulesSection />
      <ContactSection />
      <FooterSection t4={t4} />
    </div>
  )
}
