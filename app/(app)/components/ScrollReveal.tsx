'use client'

import { useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right'
  delay?: string
  className?: string
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animationClass = visible ? `animate-${animation}` : ''

  return (
    <div
      ref={ref}
      className={`${visible ? '' : 'opacity-0'} ${animationClass} ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      {children}
    </div>
  )
}
