import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div className="footerLogoIx">IX</div>
          <div className="footerLogoSub">Originals · Singapore</div>
        </div>

        <div className="footerLinks">
          <a href="https://instagram.com/ixoriginals.sg" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://carousell.com" target="_blank" rel="noopener noreferrer">Carousell</a>
          <Link href="#order">Commission</Link>
          <Link href="#faq">FAQ</Link>
        </div>

        <div className="footerCopy">© 2026 IX Originals</div>
      </div>
    </footer>
  )
}
