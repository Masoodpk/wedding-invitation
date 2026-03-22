export function CoupleSection() {
  return (
    <section className="couple reveal" id="couple">
      <div className="section-title">
        <h2 className="font-script">The Happy Couple</h2>
        <div className="title-subtitle font-serif">
          <span className="title-line" />
          <p>Request the honor of your presence</p>
          <span className="title-line" />
        </div>
      </div>

      <div className="couple-grid">
        {/* Groom */}
        <article className="person-card">
          <div className="person-photo-wrap arched-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/groom-optimized.jpg"
              alt="Portrait of the groom"
              className="person-photo parallax"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="person-info">
            <p className="role-eyebrow font-serif">• THE GROOM</p>
            <h4 className="font-serif">
              NAJI
              <br />
              IBN MUHAMMED
            </h4>
            <p className="parents font-body italic">Son of Mr. &amp; Mrs. Muhammed</p>
          </div>
        </article>

        <div className="couple-divider">
          <div className="ampersand-circle font-script">&amp;</div>
        </div>

        {/* Bride */}
        <article className="person-card">
          <div className="person-photo-wrap arched-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bride-optimized.jpg"
              alt="Portrait of the bride"
              className="person-photo parallax"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="person-info">
            <p className="role-eyebrow font-serif">THE BRIDE •</p>
            <h4 className="font-serif">
              AYISHA
              <br />
              ZIYAD
            </h4>
            <p className="parents font-body italic">Daughter of Mr. &amp; Mrs. Ziyad</p>
          </div>
        </article>
      </div>
    </section>
  )
}
