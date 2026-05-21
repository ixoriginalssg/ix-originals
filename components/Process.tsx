const steps = [
  {
    num: 'I',
    title: 'Fill the form',
    desc: 'Tell us your binder model, which Pokémon you want, and any inspo pics. The more detail, the better.',
  },
  {
    num: 'II',
    title: 'Lock it in',
    desc: "We'll hit you with a quote in 2 days. 50% deposit gets you in the queue. Slots fill up fast.",
  },
  {
    num: 'III',
    title: 'Sneak peek',
    desc: 'We send a WIP sketch before the final coat. Got notes? 2 free revision rounds included.',
  },
  {
    num: 'IV',
    title: 'Come get it',
    desc: 'Pay the balance, then collect in person somewhere in SG or get it shipped to your door.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <span className="sectionLabel fadeUp">The process</span>
        <h2 className="sectionTitle fadeUp" data-delay="100">How this works</h2>

        <div className="steps staggerParent">
          {steps.map((step) => (
            <div className="step staggerChild" key={step.num}>
              <div className="stepNum">{step.num}</div>
              <div className="stepTitle">{step.title}</div>
              <p className="stepDesc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
