const tiers = [
  {
    num: '01',
    name: 'Starter',
    price: 'from S$170',
    desc: 'One or more Pokémon, no background, clean and simple shading.',
    eg: 'e.g. a solo Charizard on a flat colour',
    featured: false,
  },
  {
    num: '02',
    name: 'Trainer',
    price: 'from S$230',
    desc: 'A background comes in, or the shading gets detailed. Usually one or two Pokémon with a rendered or scenic backdrop.',
    eg: 'e.g. Umbreon under a full moon, or Mew in a rendered orb',
    featured: true,
  },
  {
    num: '03',
    name: 'Champion',
    price: 'Custom quote',
    desc: 'Multi-character scenes, full coverage, blended effects. The showpiece tier.',
    eg: 'e.g. a full Charizard vs Charizard battle scene',
    featured: false,
  },
]

const addons = [
  { name: 'Additional Pokémon (Starter / Trainer)', price: '+S$10 to 20 each' },
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
            All prices in SGD and include a binder. Each piece is quoted individually by complexity and hours, so these are starting points. DM with your reference for a quote.
          </p>
        </div>

        <div className="tierCards staggerParent">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`tierCard staggerChild${tier.featured ? ' tierCardFeatured' : ''}`}
            >
              <div className="tierCardNum">{tier.num}</div>
              <div className="tierName">{tier.name}</div>
              <div className="tierPrice">{tier.price}</div>
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
                <div className="pricingNoteHead">Binder source</div>
                <div className="pricingNoteBody">Bringing your own binder keeps the cost lower. If you need us to source one for you, the binder cost will be added on top.</div>
              </div>
            </div>
            <div className="pricingNoteItem">
              <span className="pricingNoteIcon">02</span>
              <div>
                <div className="pricingNoteHead">Art complexity</div>
                <div className="pricingNoteBody">Everything is priced by the hours it takes. A single simple Pokémon on a flat background sits at the lower end. Backgrounds, detailed shading, multiple Pokémon, or full scenes take longer and bring the price up.</div>
              </div>
            </div>
          </div>
          <p className="pricingNoteSub">Not sure what your idea would cost? Fill in the form and we will give you a quote with no commitment.</p>
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
