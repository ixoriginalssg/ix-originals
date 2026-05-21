const BASE = '/ix-originals'

const drops = [
  {
    name: 'Drop 001',
    pokemon: 'Mew',
    binder: '4 Pocket',
    binderType: 'Ace',
    price: 'S$120',
    status: 'available',
    image: '/images/drop-001-mew.jpg',
  },
  {
    name: 'Drop 002',
    pokemon: 'Derpizard',
    binder: '4 Pocket',
    binderType: 'Starter',
    price: 'S$80',
    status: 'available',
    image: '/images/drop-002-derpizard.jpg',
  },
  {
    name: 'Drop 003',
    pokemon: '',
    binder: '12 Pocket',
    binderType: '',
    price: 'S$120',
    status: 'available',
    image: null,
  },
  {
    name: 'Drop 004',
    pokemon: '',
    binder: '9 Pocket Toploader',
    binderType: '',
    price: 'S$95',
    status: 'available',
    image: null,
  },
  {
    name: 'Drop 005',
    pokemon: '',
    binder: '4 Pocket Toploader',
    binderType: '',
    price: 'S$75',
    status: 'available',
    image: null,
  },
  {
    name: 'Drop 006',
    pokemon: '',
    binder: '9 Pocket',
    binderType: '',
    price: 'S$90',
    status: 'available',
    image: null,
  },
  {
    name: 'Drop 007',
    pokemon: '',
    binder: '12 Pocket',
    binderType: '',
    price: 'S$120',
    status: 'available',
    image: null,
  },
]

export default function Drops() {
  return (
    <section className="dropsSection" id="drops">
      <div className="container">
        <div className="dropsHeader fadeUp">
          <div>
            <span className="sectionLabel">Ready to ship</span>
            <h2 className="sectionTitle">Drops <em>Available now</em></h2>
          </div>
          <p className="dropsNote">
            Can&apos;t wait for a commission? Grab one of these while they last. DM <a href="https://instagram.com/ixoriginals" target="_blank" rel="noopener noreferrer">@ixoriginals</a> to purchase.
          </p>
        </div>

        <div className="dropsGrid staggerParent">
          {drops.map((drop) => (
            <div
              key={drop.name}
              className={`dropCard staggerChild${drop.status === 'sold' ? ' dropCardSold' : ''}`}
            >
              <div className="dropImage">
                {drop.image
                  ? <img
                      src={`${BASE}${drop.image}`}
                      alt={`${drop.name} ${drop.pokemon}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                    />
                  : <div className="dropImageInner">
                      <div className="dropImageIx">IX</div>
                      <span className="dropImagePlaceholder">Photo coming soon</span>
                    </div>
                }
                <div className="dropBadgeStack">
                  <div className={`dropBadge ${drop.status === 'sold' ? 'dropBadgeSold' : 'dropBadgeAvailable'}`}>
                    {drop.status === 'sold' ? 'Sold' : 'Available'}
                  </div>
                  {drop.binderType && (
                    <div className="dropTierBadge">{drop.binderType}</div>
                  )}
                </div>
              </div>
              <div className="dropInfo">
                <div className="dropName">
                  {drop.name}{drop.pokemon ? ` — ${drop.pokemon}` : ''}
                </div>
                <div className="dropMeta">
                  <span className="dropType">{drop.binder}</span>
                  <span className="dropPrice">{drop.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="dropsSub fadeUp">
          New drops posted on <a href="https://instagram.com/ixoriginals" target="_blank" rel="noopener noreferrer">@ixoriginals</a> — follow to be the first to know.
        </p>
      </div>
    </section>
  )
}
