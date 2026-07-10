import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Commission Terms · IX Originals',
  description: 'The terms for commissioning a hand-painted one-of-one binder from IX Originals.',
}

const terms = [
  { t: 'Deposit', b: 'A non-refundable deposit of 50% of the quoted price is required to secure a commission slot and must be paid before work begins. The remaining 50% is due upon completion, before the piece is shipped or handed over.' },
  { t: 'Reference required', b: 'A clear reference image is required for every commission. All work is produced from the client’s reference; a commission cannot begin, or be accurately quoted, without one.' },
  { t: 'Quotes and pricing', b: 'Pricing is determined by the complexity of the artwork, not the size of the binder. A quote is provided once the reference has been reviewed. No commitment is required until the quoted price has been approved.' },
  { t: 'Scope and changes', b: 'Once a quote is approved, the agreed scope and price are fixed. Any additions or changes requested afterwards will be re-quoted before work continues; no additional work is undertaken without a revised quote.' },
  { t: 'Concept approval', b: 'A sketch or concept is shared for approval before full work begins, to ensure the composition matches the client’s expectations.' },
  { t: 'Turnaround', b: 'Standard turnaround is 1–3 weeks from the date the deposit is received, depending on complexity and the current queue. Rush requests may be accommodated for an additional 20%, subject to availability.' },
  { t: 'Progress updates', b: 'Progress is shared at key milestones. To avoid delays, daily check-ins are discouraged.' },
  { t: 'Revisions', b: 'One round of revisions is included at the sketch stage, prior to painting. A second round may be accommodated where reasonable. A substantially different design requested after painting is treated as a new commission.' },
  { t: 'Client-supplied binders', b: 'A deduction of S$10–15 applies to client-supplied binders. The binder must be a paintable surface and should be confirmed in advance; unsuitable binders may be declined.' },
  { t: 'Cancellations', b: 'Cancellation before work begins: the deposit may be refunded at the artist’s discretion. Cancellation after work has begun: the deposit is forfeited. Cancellation of a completed or near-completed piece: no refund is issued, and the artist retains the finished piece.' },
  { t: 'Portfolio use', b: 'Finished pieces may be photographed and shared on the artist’s social media and portfolio. Clients who prefer their piece not to be shared may opt out by notifying the artist in advance.' },
]

export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <section className="terms" style={{ paddingTop: '120px', paddingBottom: '90px', minHeight: '100vh' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <span className="sectionLabel">The fine print</span>
            <h1 className="sectionTitle">Commission Terms</h1>
            <p className="sectionBody">
              The following terms apply to all commissions. Please read them in full before placing an order.
            </p>

            <div style={{ marginTop: '2.5rem' }}>
              {terms.map((item, i) => (
                <div
                  key={i}
                  style={{ padding: '1.4rem 0', borderBottom: '1px solid rgba(201,162,82,0.15)' }}
                >
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.5rem' }}>
                    {i + 1}. {item.t}
                  </h2>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.b}</p>
                </div>
              ))}
            </div>

            <p className="sectionBody" style={{ marginTop: '2rem' }}>
              By commissioning a piece, the client agrees to the terms set out above. For any questions, please contact{' '}
              <a href="https://instagram.com/ixoriginals" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                @ixoriginals
              </a>{' '}
              before placing an order.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/#order" className="btnPrimary">Start a commission</Link>
              <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to home</Link>
            </div>

            <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: 'var(--muted)', opacity: 0.7 }}>
              Last updated: July 2026
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
