'use client'

import { useRef, useEffect, type ElementType, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimationType = 'typewriter' | 'stagger-wobble' | 'clip-reveal' | 'gradient-scroll'

interface TextRevealProps {
  children: string
  as?: ElementType
  animation?: AnimationType
  className?: string
}

export default function TextReveal({
  children,
  as: Tag = 'p',
  animation = 'clip-reveal',
  className = '',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const isSplit = animation === 'typewriter' || animation === 'stagger-wobble'

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (animation === 'typewriter') {
        const chars = el.querySelectorAll('.char')
        if (!chars.length) return
        gsap.fromTo(
          chars,
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.03,
            duration: 0.4,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      } else if (animation === 'stagger-wobble') {
        const words = el.querySelectorAll('.word')
        if (!words.length) return
        gsap.fromTo(
          words,
          { opacity: 0, y: 20, rotate: -4 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      } else if (animation === 'clip-reveal') {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        )
      } else if (animation === 'gradient-scroll') {
        gsap.to(el, {
          backgroundPosition: '200% 0',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        })
      }
    }, el)

    return () => ctx.revert()
  }, [animation])

  const splitContent = (): ReactNode[] | string => {
    if (animation === 'typewriter') {
      return children.split('').map((char, i) => (
        <span key={i} className="char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))
    }
    if (animation === 'stagger-wobble') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em]">
          {word}
        </span>
      ))
    }
    return children
  }

  const baseClasses =
    animation === 'gradient-scroll'
      ? `${className} bg-gradient-to-r from-foreground via-primary via-30% to-foreground bg-[length:200%_100%] bg-[0%_0%] text-transparent bg-clip-text`
      : className

  return (
    <Tag ref={containerRef as unknown as React.Ref<HTMLElement>} className={baseClasses}>
      {isSplit ? splitContent() : children}
    </Tag>
  )
}
