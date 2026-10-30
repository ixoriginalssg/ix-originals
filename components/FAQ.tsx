'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "What binders can you actually paint on?",
    a: "Most standard TCG binders work great. Every commission comes with a non-branded binder included in the price, or you can upgrade to a Vault X binder — I keep a few in stock. Prefer your own? Send it over and I'll check the surface takes paint before we lock anything in. Just pop your binder model in the form.",
  },
  {
    q: "How long does it take?",
    a: "Typically 1 to 3 weeks from when you pay the deposit, depending on complexity and how long the queue is. If you need it faster for a gift or an occasion, rush orders are available for +20%.",
  },
  {
    q: "Do I send my binder or do you sort one out?",
    a: "Either works! A non-branded binder is included in your quote by default. You can upgrade to a Vault X (in stock), send your own and the price drops to match, or ask me to source a specific one — that's charged at cost plus a small sourcing fee, and it takes a little longer. I'll help you pick the best option once the form's in.",
  },
  {
    q: "Can I ask for literally any Pokémon?",
    a: "Pretty much yes! The tier examples are just there to help you gauge the price range. If your pick isn't listed, describe it in the form and I'll quote based on how complex it is and the time it'll take.",
  },
  {
    q: "How does payment work?",
    a: "A S$30 sketch fee locks your slot and covers the concept sketch. Once you approve the sketch, you top up to 50% to start painting (the S$30 counts toward it), with the rest due once the piece is done and before I hand it over. I take PayNow and bank transfer.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faqSection" id="faq">
      <div className="container">
        <span className="sectionLabel">Good questions</span>
        <h2 className="sectionTitle">FAQ</h2>

        <div className="faqList">
          {faqs.map((faq, i) => (
            <div className="faqItem" key={i}>
              <button className="faqQ" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faqIcon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <p className="faqA">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
