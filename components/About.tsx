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
              Your collection is one of one<br />
              <em>Your binder should be too</em>
            </h2>
            <p className="sectionBody">
              I hand-paint one-of-one binders for collectors who want their favourite cards kept
              in something made just for them; a piece that&apos;s as personal as the collection inside.
            </p>
            <p className="sectionBody" style={{ marginTop: '1rem' }}>
              Bring the flex to your next tournament or trade show! ( • ᴗ - ) ✧
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
