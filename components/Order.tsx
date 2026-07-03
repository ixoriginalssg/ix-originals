// Replace FORM_URL with your Jotform or Google Form link
const FORM_URL = 'https://forms.gle/jgbQjq1LGyMcVURq5'

export default function Order() {
  return (
    <section className="orderSection" id="order">
      <div className="container">
        <span className="sectionLabel">Ready?</span>
        <h2 className="sectionTitle" style={{ textAlign: 'center' }}>
          Let&apos;s make something <em>stupid good.</em>
        </h2>

        <div className="orderCard fadeUp">
          <div className="orderCardIx">IX</div>
          <h3 className="orderTitle">Fill in the form here!</h3>
          <p className="orderDesc">
            Binder model and size, desired Pokémon or art, and any refs you love.
            I&apos;ll get back to you ASAP with a quote.
            No commitment until you&apos;re happy with the price.
          </p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="orderBtn">
            Open the form
          </a>
          <p className="orderNote">Slots are limited · 50% deposit to lock in</p>
        </div>
      </div>
    </section>
  )
}
