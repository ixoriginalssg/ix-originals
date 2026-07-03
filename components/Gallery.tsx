const BASE = ''

const works = [
  { image: '/images/drop-004-phantasmalCharizard.jpg', alt: 'Mega Charizard X and Y battle scene with the Charmander evolution line, hand painted on a binder' },
  { image: '/images/commission-001-GengarEvoLine.jpg', alt: 'Gengar evolution line — Gastly, Haunter and Gengar — hand painted on a purple binder' },
  { image: '/images/commission-002-PlusleMinun.jpg', alt: 'Plusle and Minun hand painted on a yellow binder' },
]

export default function Gallery() {
  return (
    <section className="gallerySection" id="gallery">
      <div className="container">
        <span className="sectionLabel">Portfolio</span>
        <h2 className="sectionTitle">The work</h2>

        <div className="galleryGrid">
          {works.map((work, i) => (
            <div className="galleryCell fadeUp" key={i}>
              {work.image
                ? <img
                    src={`${BASE}${work.image}`}
                    alt={work.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                  />
                : <div className="galleryComing">Coming soon</div>
              }
            </div>
          ))}
        </div>

        <p style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '1.5rem', textAlign: 'center' }}>
          Follow{' '}
          <a href="https://instagram.com/ixoriginals" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            @ixoriginals
          </a>{' '}
          on Instagram. That&apos;s where the good stuff gets posted first.
        </p>
      </div>
    </section>
  )
}
