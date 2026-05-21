export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="aboutInner">

          <div className="aboutVisual fadeUp" data-delay="0">
            <div className="aboutVisualIx">IX</div>
            <div className="aboutVisualText">
              Portfolio dropping soon —<br />
              follow <strong style={{ color: 'var(--gold)' }}>@ixoriginals.sg</strong><br />
              to be first in line
            </div>
            <div className="aboutVisualBadge">IX Originals · Est. 2026</div>
          </div>

          <div>
            <span className="sectionLabel">What&apos;s the deal</span>
            <h2 className="sectionTitle">
              We paint on binders.<br />
              <em>Yeah, actually.</em>
            </h2>
            <p className="sectionBody">
              IX Originals is a solo operation turning plain TCG binders into pieces
              people stop and stare at. Every design is hand painted. If you can dream it
              (and it&apos;s a Pokémon), let&apos;s make it happen together!
            </p>
            <p className="sectionBody" style={{ marginTop: '1rem' }}>
              Bring the flex to your next locals.
            </p>

            <div className="aboutStats fadeUp" data-delay="200">
              <div>
                <div className="statNum statCounter" data-target="100" data-suffix="%">0%</div>
                <div className="statLabel">Hand painted</div>
              </div>
              <div>
                <div className="statNum statCounter" data-text="true" data-target="1 of 1">1 of 1</div>
                <div className="statLabel">Every single one</div>
              </div>
              <div>
                <div className="statNum statCounter" data-text="true" data-target="SG">SG</div>
                <div className="statLabel">Local &amp; proud</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
