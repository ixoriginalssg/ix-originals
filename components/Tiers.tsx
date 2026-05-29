const tiers = [
  {
    num: '01',
    name: 'Starter',
    desc: 'Up to 2 Pokémons, no background, no shading. Clean and simple.',
    eg: '',
    featured: false,
  },
  {
    num: '02',
    name: 'Trainer',
    desc: 'Up to 2 Pokémon with a solid, gradient or partially detailed background.',
    eg: '',
    featured: false,
  },
  {
    num: '03',
    name: 'Ace',
    desc: 'One complex Pokémon, partially or full scenic background, detailed shading.',
    eg: 'e.g. Charizard, Mewtwo, Rayquaza',
    featured: true,
  },
  {
    num: '04',
    name: 'Champion',
    desc: 'Two Pokémon, full scenic background. Think tag team :p',
    eg: 'e.g. Legendary duo scenes',
    featured: false,
  },
]

const pricingTable = [
  {
    category: 'Sleeve',
    items: [
      { name: '4 Pocket', t1: 75, t2: 85, t3: 140, t4: 280 },
      { name: '9 Pocket', t1: 95, t2: 105, t3: 160, t4: 320 },
    ],
  },
  {
    category: 'Toploader',
    items: [
      { name: '4 Pocket', t1: 85, t2: 95, t3: 150, t4: 290 },
      { name: '9 Pocket', t1: 115, t2: 125, t3: 180, t4: 340 },
    ],
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
            All prices in SGD, inclusive of binder. Final price depends on binder source and complexity. DM to confirm before ordering.
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
              <p className="tierDesc">{tier.desc}</p>
              <p className="tierEg">{tier.eg}</p>
            </div>
          ))}
        </div>

        <div className="pricingTable fadeUp">
          <table className="priceGrid">
            <thead>
              <tr>
                <th className="priceGridCorner"></th>
                <th className="priceGridHead">Starter</th>
                <th className="priceGridHead">Trainer</th>
                <th className="priceGridHead priceGridHeadFeatured">Ace</th>
                <th className="priceGridHead">Champion</th>
              </tr>
            </thead>
            <tbody>
              {pricingTable.map((section) => (
                <>
                  <tr key={section.category} className="priceGridCategory">
                    <td colSpan={5}>{section.category}</td>
                  </tr>
                  {section.items.map((item) => (
                    <tr key={`${section.category}-${item.name}`} className="priceGridRow">
                      <td className="priceGridLabel">{item.name}</td>
                      <td className="priceGridVal">S${item.t1}</td>
                      <td className="priceGridVal">S${item.t2}</td>
                      <td className="priceGridVal priceGridValFeatured">S${item.t3}</td>
                      <td className="priceGridVal">S${item.t4}</td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
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
                <div className="pricingNoteBody">A single simple Pokémon on a flat background sits at the lower end. Complex scenes, multiple Pokémons, or detailed backgrounds will bring the price up.</div>
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
