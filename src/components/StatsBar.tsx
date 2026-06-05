'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Calendar, Chart, Star } from 'pixelarticons/react'

interface Stat {
  label: string
  value: number
  suffix: string
}

interface StatsBarProps {
  stats: Stat[]
  delay?: number
}

const ICONS = [Calendar, Chart, Star]

export default function StatsBar({ stats, delay = 0 }: StatsBarProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const counters = container.querySelectorAll<HTMLElement>('.stat-value')

    const ctx = gsap.context(() => {
      counters.forEach((counter, i) => {
        const target = stats[i]?.value ?? 0
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            delay,
          }
        )
      })
    }, container)

    return () => ctx.revert()
  }, [stats, delay])

  return (
    <div ref={containerRef} className="flex gap-8 md:gap-12 pt-12">
      {stats.map((stat, i) => {
        const Icon = ICONS[i]
        return (
          <div key={stat.label} className="flex items-center gap-3">
            <Icon
              className="text-primary shrink-0"
              width={28}
              height={28}
            />
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="stat-value text-2xl font-bold tabular-nums">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[11px] text-muted tracking-wider uppercase leading-tight">
                {stat.label}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
