'use client'

import { useState } from 'react'

const faqs = [
  {
    q: "What binders can you actually paint on?",
    a: "Most standard TCG binders work great, else we have our own IX Originals binders as well :D. Just drop your binder model in the form and we'll confirm before you commit to anything.",
  },
  {
    q: "How long does it take?",
    a: "Typically 2 to 4 weeks from when you pay the deposit, depending on complexity and how long the queue is. If you need it faster for a gift or an occasion, rush orders are available for +20%.",
  },
  {
    q: "Do I send my binder or do you sort one out?",
    a: "You can send yours over if you'd like, else we do have our own binders :) We'll figure out the best approach together after the form is in.",
  },
  {
    q: "Can I ask for literally any Pokémon?",
    a: "Pretty much yes! The tier examples are just there to help you guess the price range. If your pick isn't listed, describe it in the form and we'll quote based on how complex it is based on the estimated time needed.",
  },
  {
    q: "How does payment work?",
    a: "50% deposit upfront to lock in your slot, rest due when the piece is done and before we hand it over. We take PayNow and bank transfer.",
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
