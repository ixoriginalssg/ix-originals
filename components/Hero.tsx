import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroBlob blob1" />
      <div className="heroBlob blob2" />
      <div className="heroBlob blob3" />

      <p className="heroEyebrow">Singapore · TCG Binder Art</p>
      <h1 className="heroIx">IX</h1>
      <p className="heroOriginals">Originals</p>
      <div className="heroRuleWrap">
        <div className="heroRule" />
      </div>

      <h2 className="heroTagline">Made by hand, just for you.</h2>
      <p className="heroSub">
        Hand painted art on your binder • ᴗ &lt;  Customisable, Personalised and uniquely yours
      </p>

      <div className="heroActions">
        <Link href="#order" className="btnPrimary">Let&apos;s get painting</Link>
        <Link href="#tiers" className="btnGhost">See pricing</Link>
      </div>

      <div className="heroScroll">
        <div className="scrollLine" />
        scroll
      </div>
    </section>
  )
}
