const steps = [
  {
    num: 'I',
    title: 'Fill the form',
    desc: 'Tell me about your vision, your binder model, and attach reference picture(s). The more detail, the better.',
  },
  {
    num: 'II',
    title: 'Lock it in',
    desc: "I'll provide a quote ASAP. Leave a 50% deposit upfront, and only pay the rest after the work is done!",
  },
  {
    num: 'III',
    title: 'Sneak peek',
    desc: "I'll send WIP pictures before the final coat.",
  },
  {
    num: 'IV',
    title: 'Collect the goods',
    desc: 'Pay the balance, then collect in person or get it shipped to your door.',
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
