export function CoupleSection() {
  return (
    <section className="reveal py-8 px-4 pb-[clamp(4rem,8vw,6rem)] max-w-[1100px] mx-auto text-center" id="couple">
      <div className="mb-16">
        <h2 className="text-[clamp(3rem,7vw,5rem)] text-text m-0 leading-none font-script">The Happy Couple</h2>
        <div className="flex items-center justify-center gap-6 mt-4 text-accent text-[clamp(0.7rem,1.5vw,0.9rem)] tracking-[0.2em] uppercase font-serif">
          <span className="flex-none w-[60px] h-px bg-accent opacity-40" />
          <p>Request the honor of your presence</p>
          <span className="flex-none w-[60px] h-px bg-accent opacity-40" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-8 relative">
        {/* Groom */}
        <article className="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
          {/* <div className="w-full aspect-[0.75] rounded-t-[9999px] rounded-b-xl overflow-hidden border border-accent/20 mb-8 shadow-lg">
        
            <img
              src="/assets/groom-optimized.jpg"
              alt="Portrait of the groom"
              className="person-photo parallax w-full h-full object-cover scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
          </div> */}
          <div className="w-full text-center">
            <p className="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">• THE GROOM</p>
            <h4 className="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
              Naji
              <br />
              Ibn Muhammed
            </h4>
            <p className="text-muted text-[0.95rem] m-0 font-body italic">Son of Mr. &amp; Mrs. Muhammed</p>
          </div>
        </article>

        <div className="flex items-center justify-center px-4 md:px-0 max-lg:-my-4 z-[3]">
          <div className="flex items-center justify-center text-[1.5rem] md:text-[3rem] text-accent bg-bg z-[2] font-script">&amp;</div>
        </div>

        {/* Bride */}
        <article className="flex-1 max-w-[400px] flex flex-col items-center mx-auto">
          {/* <div className="w-full aspect-[0.75] rounded-t-[9999px] rounded-b-xl overflow-hidden border border-accent/20 mb-8 shadow-lg">
   
            <img
              src="/assets/bride-optimized.jpg"
              alt="Portrait of the bride"
              className="person-photo parallax w-full h-full object-cover scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
          </div> */}
          <div className="w-full text-center">
            <p className="text-accent text-[0.8rem] tracking-[0.25em] m-0 mb-4 font-serif">THE BRIDE •</p>
            <h4 className="text-[clamp(1.8rem,3vw,2.4rem)] text-text m-0 mb-2 leading-[1.2] font-serif">
              Ayisha
              <br />
              Ziyad
            </h4>
            <p className="text-muted text-[0.95rem] m-0 font-body italic">Daughter of Mr. &amp; Mrs. Ziyad</p>
          </div>
        </article>
      </div>
    </section>
  )
}
