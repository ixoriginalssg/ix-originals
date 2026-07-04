const tiers = [
  {
    num: '01',
    name: 'Starter',
    price: '170',
    desc: 'One Pokémon, flat or single-tone background.',
    eg: '',
    featured: false,
  },
  {
    num: '02',
    name: 'Trainer',
    price: '200',
    desc: 'One Pokémon with a proper rendered background (gradient, sky, or a light scene).',
    eg: '',
    featured: false,
  },
  {
    num: '03',
    name: 'Ace',
    price: '260',
    desc: 'Two to three Pokémon, and/or a detailed background, and/or added effects.',
    eg: '',
    featured: true,
  },
  {
    num: '04',
    name: 'Champion',
    price: null, // Tier 4 — custom quote (holding $700+ pricing off the public site for now)
    desc: 'Full multi-character scenes, blended and heavily detailed. The showpiece.',
    eg: 'e.g. legendary duo scenes',
    featured: false,
  },
]

const addons = [
  { name: 'Rush order', price: '+20%' },
  { name: 'Custom name or text', price: '+S$10 to 15' },
  { name: 'Extra revision round', price: '+S$10' },
]

export default function Tiers() {
  return (
    <section className="tiersSection" id="tiers">
      <div className="container">

        <div className="tiersHeader fadeUp">
          <div>
            <span className="sectionLabel">Pricing</span>
            <h2 className="sectionTitle">Pick your tier</h2>
          </div>
          <p className="tiersNote">
            Prices are in SGD and these are starting points — your final quote depends on complexity and the reference you send over. Got your own binder? Knock S$10–15 off any tier. DM to confirm the details before ordering.
          </p>
        </div>

        <div className="tierCards staggerParent">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`tierCard staggerChild${tier.featured ? ' tierCardFeatured' : ''}`}
            >
              {tier.featured && <div className="tierBadge">Ace</div>}
              <div className="tierCardNum">{tier.num}</div>
              <div className="tierName">{tier.name}</div>
              {tier.price
                ? <div className="tierPrice"><sup>from S$</sup>{tier.price}</div>
                : <div className="tierPrice" style={{ fontSize: '26px', fontWeight: 400 }}>Custom quote</div>
              }
              <p className="tierDesc">{tier.desc}</p>
              <p className="tierEg">{tier.eg}</p>
            </div>
          ))}
        </div>

        <div className="pricingNote fadeUp">
          <h3 className="pricingNoteTitle">What affects the final price?</h3>
          <div className="pricingNoteGrid">
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">01</span>
              <div>
                <div className="pricingNoteHead">Art complexity</div>
                <div className="pricingNoteBody">A single Pokémon on a flat background sits at the lower end. More Pokémon, detailed backgrounds, or effects move you up the tiers. Your tier is confirmed once I&apos;ve seen your reference.</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">02</span>
              <div>
                <div className="pricingNoteHead">Binder source</div>
                <div className="pricingNoteBody">The price already includes a standard binder. Bring your own and take S$10–15 off, as long as it&apos;s paintable. Only a premium or special-request binder that costs more than the standard adds anything on top.</div>
              </div>
            </div>
          </div>
          <p className="pricingNoteSub">Not sure what your idea would cost? Fill in the form and I&apos;ll give you a quote with no commitment.</p>
        </div>

        <h3 className="addonsTitle">Add ons</h3>
        <div className="addonsGrid">
          {addons.map((addon) => (
            <div className="addon" key={addon.name}>
              <span className="addonName">{addon.name}</span>
              <span className="addonPrice">{addon.price}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
