'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { DarkModeToggle } from './DarkModeToggle'

type NavbarProps = {
  logo?: string
  links?: { href: string; label: string }[]
  transparent?: boolean
}

export function Navbar({ logo, links, transparent }: NavbarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const bgClass = transparent
    ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md'
    : 'bg-white dark:bg-zinc-950'

  return (
    <nav className={`sticky top-0 z-50 ${bgClass} border-b border-zinc-200 dark:border-zinc-800`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
          {logo}
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links?.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <DarkModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
                }
                className="transition-all duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-white dark:bg-zinc-950 animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {links?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
