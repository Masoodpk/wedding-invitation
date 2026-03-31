import Link from 'next/link'

export default function Home() {
  return (
    <main className="app-shell flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center app-card px-8 py-14 md:px-14">
        <div className="app-kicker text-[12px]">Taplink Style Builder</div>
        <h1 className="mt-6 text-[clamp(40px,6vw,70px)] leading-[1.05] app-title">
          Create a wedding website
          <br />
          from templates
        </h1>
        <p className="mt-6 text-[16px] md:text-[18px] app-muted max-w-2xl mx-auto">
          Enter your details, preview templates, and publish a shareable link.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/start"
            className="app-btn app-btn-primary px-7 py-3"
          >
            Get Started
          </Link>
          <Link
            href="/templates"
            className="app-btn app-btn-secondary px-7 py-3"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </main>
  )
}
