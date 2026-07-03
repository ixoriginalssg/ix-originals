export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="aboutInner">

          <div className="aboutVisual fadeUp" data-delay="0">
            <img
              src="/images/AboutPic.jpg"
              alt="Hand-painted Mega Charizard binder beside the paints it was made with"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
            />
            <div className="aboutVisualBadge" style={{ background: 'rgba(10,10,20,0.55)' }}>IX Originals · Est. 2026</div>
          </div>

          <div>
            <span className="sectionLabel">What&apos;s the deal</span>
            <h2 className="sectionTitle">
              I paint on binders.<br />
              <em>And I love it :)</em>
            </h2>
            <p className="sectionBody">
              IX Originals is my solo venture turning plain TCG binders into pieces
              people stop and stare at. Every design is hand painted. If you can dream it,
              let&apos;s make it happen together!
            </p>
            <p className="sectionBody" style={{ marginTop: '1rem' }}>
              Bring the flex to your trade show or as a gift to your friends! ( • ᴗ - ) ✧
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
