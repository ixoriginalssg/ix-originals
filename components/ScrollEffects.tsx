'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    // ── Fade up on scroll ──
    const fadeEls = document.querySelectorAll('.fadeUp')
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            const delay = el.dataset.delay || '0'
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, parseInt(delay))
            fadeObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    fadeEls.forEach((el) => fadeObserver.observe(el))

    // ── Staggered children ──
    const staggerEls = document.querySelectorAll('.staggerParent')
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.staggerChild')
            children.forEach((child, i) => {
              const el = child as HTMLElement
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            staggerObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    staggerEls.forEach((el) => staggerObserver.observe(el))

    // ── Stat counters ──
    const counters = document.querySelectorAll('.statCounter')
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = el.dataset.target || '100'
            const suffix = el.dataset.suffix || ''
            const isText = el.dataset.text === 'true'
            if (isText) {
              el.textContent = target + suffix
              return
            }
            const duration = 1500
            const start = performance.now()
            const from = 0
            const to = parseInt(target)
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              el.textContent = Math.round(from + (to - from) * eased) + suffix
              if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach((el) => counterObserver.observe(el))

    // ── Parallax blobs ──
    const handleScroll = () => {
      const scrollY = window.scrollY
      const blob1 = document.querySelector('.blob1') as HTMLElement
      const blob2 = document.querySelector('.blob2') as HTMLElement
      const blob3 = document.querySelector('.blob3') as HTMLElement
      if (blob1) blob1.style.transform = `translateY(${scrollY * 0.15}px)`
      if (blob2) blob2.style.transform = `translateY(${scrollY * -0.1}px)`
      if (blob3) blob3.style.transform = `translateY(${scrollY * 0.2}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      fadeObserver.disconnect()
      staggerObserver.disconnect()
      counterObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
