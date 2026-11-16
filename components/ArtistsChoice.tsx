// Replace with the link to your Blind Box Google Form
const AC_FORM_URL = 'https://forms.gle/COMING_SOON'

const options = [
  {
    num: '01',
    name: 'Lite Box',
    prices: [
      { size: '4 pocket', price: 'S$220' },
      { size: '9 pocket', price: 'S$320' },
    ],
    desc: 'One Pokémon with a little bit of magic around it (｡· ⩊ ·｡)',
    featured: false,
  },
  {
    num: '02',
    name: 'Full Box',
    prices: [
      { size: '4 pocket', price: 'S$280' },
      { size: '9 pocket', price: 'S$420' },
    ],
    desc: 'Up to two Pokémon and a whole world around them (╭ರ_•́) Where they end up is my secret until you open it ╮ (. ❛ ᴗ ❛.) ╭',
    featured: true,
  },
]

export default function ArtistsChoice() {
  return (
    <section className="tiersSection" id="blind-box">
      <div className="container">

        <div className="tiersHeader fadeUp">
          <div>
            <span className="sectionLabel">Blind Box</span>
            <h2 className="sectionTitle">Open it and find out</h2>
          </div>
          <p className="tiersNote">
            Pick a box, tell me your FAVOURTIEE Pokémon and one word, and I&apos;ll paint the rest. You won&apos;t see it until it arrives hehe :p Fixed price, full cover, standard binder included.
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
                <div className="pricingNoteHead">You pick</div>
                <div className="pricingNoteBody">Binder size, Lite or Full, up to two favourite Pokémon (or leave it as a total surprise), one word for the vibe, and any colours to avoid :)</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">02</span>
              <div>
                <div className="pricingNoteHead">I paint</div>
                <div className="pricingNoteBody">Everything else is my call: composition, background, palette and style. No previews along the way, it stays a secret until it&apos;s in your hands :p</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">03</span>
              <div>
                <div className="pricingNoteHead">Good to know</div>
                <div className="pricingNoteBody">Paid in full upfront. Like any blind box, what&apos;s inside is final, so the artwork can&apos;t be changed once it&apos;s done.</div>
              </div>
            </div>
          </div>
          <p className="pricingNoteSub">
            Looking for something more curated to your liking? Reach out for a custom commission instead!
          </p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href={AC_FORM_URL} target="_blank" rel="noopener noreferrer" className="btnPrimary">
            Get a Blind Box
          </a>
        </div>

      </div>
    </section>
  )
}
