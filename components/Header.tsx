'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandLogo from '@/components/ui/BrandLogo'

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#selected-work' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const

const navLinkClass =
  'hover:bg-primary-500/10 px-4 py-2 rounded-lg font-medium text-slate-600 hover:text-primary-600 dark:hover:text-primary-300 dark:text-slate-300 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const next = window.scrollY > 24
      setScrolled((prev) => (prev === next ? prev : next))
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('darkMode')
    const dark = stored !== 'false'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleDarkMode = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('darkMode', String(next))
    document.documentElement.classList.toggle('dark', next)
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="top-0 right-0 left-0 z-50 fixed px-4 sm:px-6 pt-4"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl rounded-2xl transition-[background-color,box-shadow,border-color] duration-200 ${
          scrolled ? 'glass-nav' : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex justify-between items-center gap-4 px-4 sm:px-6 h-16">
          <BrandLogo href="#home" onNavigate={closeMenu} />

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={navLinkClass}>
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-brand px-4 py-2.5 rounded-xl font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a Project
            </a>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="hover:bg-slate-200/80 dark:hover:bg-slate-800/80 p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
            </button>
            <button
              type="button"
              className="lg:hidden hover:bg-slate-200/80 dark:hover:bg-slate-800/80 p-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-slate-200/60 dark:border-slate-700/60 border-t"
            >
              <div className="space-y-1 p-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block hover:bg-primary-500/10 px-4 py-3 rounded-xl w-full font-medium text-slate-700 dark:text-slate-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block btn-brand mt-2 px-4 py-3 rounded-xl w-full font-semibold text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Start a Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
