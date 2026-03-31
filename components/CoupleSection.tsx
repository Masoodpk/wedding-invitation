interface CoupleSectionProps {
  groomName: string
  groomDetailsLine: string
  brideName: string
  brideDetailsLine: string
  heading: string
  subheading: string
}

export function CoupleSection({
  groomName,
  groomDetailsLine,
  brideName,
  brideDetailsLine,
  heading,
  subheading,
}: CoupleSectionProps) {
  const [groomFirst, ...groomRest] = groomName.trim().split(/\s+/)
  const [brideFirst, ...brideRest] = brideName.trim().split(/\s+/)

  return (
    <section className="reveal py-8 px-4 pb-[clamp(4rem,8vw,6rem)] max-w-[1100px] mx-auto text-center" id="couple">
      <div className="mb-16">
        <h2 className="text-[clamp(3rem,7vw,5rem)] text-text m-0 leading-none font-script">{heading}</h2>
        <div className="flex items-center justify-center gap-6 mt-4 text-accent text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em] uppercase font-serif">
          <span className="flex-none w-[60px] h-px bg-accent opacity-40" />
          <p>{subheading}</p>
          <span className="flex-none w-[60px] h-px bg-accent opacity-40" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-8 relative">
        {/* Groom */}
        <article className="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
          <div className="w-full text-center">
            <p className="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">• THE GROOM</p>
            <h4 className="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
              {groomFirst}
              {groomRest.length > 0 ? (
                <>
                  <br />
                  {groomRest.join(' ')}
                </>
              ) : null}
            </h4>
            <p className="text-muted text-[0.95rem] m-0 font-body italic">{groomDetailsLine}</p>
          </div>
        </article>

        <div className="flex items-center justify-center px-4 md:px-0 max-lg:-my-4 z-[3]">
          <div className="flex items-center justify-center text-[1.5rem] md:text-[3rem] text-accent bg-bg z-[2] font-script">&amp;</div>
        </div>

        {/* Bride */}
        <article className="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
          <div className="w-full text-center">
            <p className="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">THE BRIDE •</p>
            <h4 className="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
              {brideFirst}
              {brideRest.length > 0 ? (
                <>
                  <br />
                  {brideRest.join(' ')}
                </>
              ) : null}
            </h4>
            <p className="text-muted text-[0.95rem] m-0 font-body italic">{brideDetailsLine}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
