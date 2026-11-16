// Replace with the link to your Artist's Choice Google Form
const AC_FORM_URL = 'https://forms.gle/REPLACE_ME'

const options = [
  {
    num: '01',
    name: 'Lite',
    prices: [
      { size: '4 pocket', price: 'S$220' },
      { size: '9 pocket', price: 'S$320' },
    ],
    desc: 'One Pokémon on a soft, simple background: a gradient, a sky, a glow. Clean and quiet.',
    featured: false,
  },
  {
    num: '02',
    name: 'Full',
    prices: [
      { size: '4 pocket', price: 'S$280' },
      { size: '9 pocket', price: 'S$420' },
    ],
    desc: 'Up to two Pokémon in a full scene, with an environment, effects and detail edge to edge.',
    featured: true,
  },
]

export default function ArtistsChoice() {
  return (
    <section className="tiersSection" id="artists-choice">
      <div className="container">

        <div className="tiersHeader fadeUp">
          <div>
            <span className="sectionLabel">Artist&apos;s Choice</span>
            <h2 className="sectionTitle">Leave it to me</h2>
          </div>
          <p className="tiersNote">
            Pick a size and a level, tell me your favourite Pokémon and the mood you&apos;re after, and I&apos;ll design the rest. Fixed price, full cover, standard binder included.
          </p>
        </div>

        <div className="tierCards tierCardsTwo staggerParent">
          {options.map((o) => (
            <div key={o.name} className={`tierCard staggerChild${o.featured ? ' tierCardFeatured' : ''}`}>
              <div className="tierCardNum">{o.num}</div>
              <div className="tierName">{o.name}</div>
              {o.prices.map((p) => (
                <div className="tierPrice" key={p.size}>
                  {p.price} <span style={{ fontSize: '0.6em', color: 'var(--muted)' }}>· {p.size}</span>
                </div>
              ))}
              <p className="tierDesc">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="pricingNote fadeUp">
          <h3 className="pricingNoteTitle">How it works</h3>
          <div className="pricingNoteGrid">
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">01</span>
              <div>
                <div className="pricingNoteHead">You choose</div>
                <div className="pricingNoteBody">Binder size, Lite or Full, up to two favourite Pokémon (or leave it as a surprise), a mood, and any colours to avoid.</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">02</span>
              <div>
                <div className="pricingNoteHead">I choose</div>
                <div className="pricingNoteBody">Everything else: composition, background, palette and style. No sketch stage, so it&apos;s quicker and lower priced than a custom piece.</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">03</span>
              <div>
                <div className="pricingNoteHead">Good to know</div>
                <div className="pricingNoteBody">Paid in full upfront. As the design is my call, there are no revisions, and changes to the artwork aren&apos;t possible once it&apos;s done.</div>
              </div>
            </div>
          </div>
          <p className="pricingNoteSub">
            Want a specific scene, text, or more than two Pokémon? That&apos;s a custom commission, see the tiers above.
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href={AC_FORM_URL} target="_blank" rel="noopener noreferrer" className="btnPrimary">
            Order Artist&apos;s Choice
          </a>
        </div>

      </div>
    </section>
  )
}
