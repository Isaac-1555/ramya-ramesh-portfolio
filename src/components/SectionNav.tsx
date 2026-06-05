'use client'

import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Capabilities' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Connect' },
]

interface SectionNavProps {
  visible?: boolean
}

export default function SectionNav({ visible = false }: SectionNavProps) {
  const [activeId, setActiveId] = useState('')
  const navRef: RefObject<HTMLElement | null> = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries.reduce(
          (max, e) => (e.intersectionRatio > max.intersectionRatio ? e : max),
          entries[0]
        )
        if (best?.isIntersecting) {
          setActiveId(best.target.id)
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], rootMargin: '-60px 0px 0px 0px' }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      ref={navRef}
      className={`fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group flex items-center gap-2"
          aria-label={`Scroll to ${label}`}
        >
          <span className="text-[10px] font-medium text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              activeId === id
                ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_6px_2px_rgba(158,98,64,0.4)]'
                : 'w-1.5 h-1.5 bg-foreground/20 hover:bg-foreground/40'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
