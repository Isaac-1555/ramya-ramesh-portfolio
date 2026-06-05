'use client'

import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Skills' },
  { id: 'work', label: 'Works' },
  { id: 'contact', label: 'Connect' },
]

interface SectionNavProps {
  visible?: boolean
}

export default function SectionNav({ visible = false }: SectionNavProps) {
  const [activeId, setActiveId] = useState('')
  const navRef: RefObject<HTMLElement | null> = useRef(null)

  useEffect(() => {
    const updateActive = () => {
      const threshold = window.innerHeight * 0.5
      let current = ''

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) {
          current = id
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = SECTIONS[SECTIONS.length - 1].id
      }

      if (current) setActiveId(current)
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()

    return () => window.removeEventListener('scroll', updateActive)
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
