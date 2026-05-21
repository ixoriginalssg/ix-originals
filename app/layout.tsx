import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IX Originals — Hand-Painted Binders · Singapore',
  description: 'Custom hand painted Pokémon art on your TCG binders. One of one commissions based in Singapore.',
  openGraph: {
    title: 'IX Originals',
    description: 'Your binder\'s glow-up starts here. Hand painted Pokémon art, Singapore.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
