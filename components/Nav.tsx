import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="navLogo">
        <span className="navIx">IX</span>
        <span className="navOrig">Originals</span>
      </Link>

      <div className="navLinks">
        <Link href="#about">About</Link>
        <Link href="#tiers">Pricing</Link>
        <Link href="#drops">Drops</Link>
        <Link href="#gallery">Gallery</Link>
        <Link href="#faq">FAQ</Link>
      </div>

      <Link href="#order" className="navCta">Commission</Link>
    </nav>
  )
}
