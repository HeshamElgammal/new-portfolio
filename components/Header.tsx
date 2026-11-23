'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandLogo from '@/components/ui/BrandLogo'

const navItems = [
  { name: 'Work', href: '#selected-work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > 24)
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto max-w-6xl rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled || isMenuOpen
            ? 'border-white/10 bg-dark-950/80 shadow-xl shadow-black/30 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <BrandLogo href="#home" onNavigate={closeMenu} />

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white ${focusRing}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={`hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-brand transition-colors hover:from-primary-400 hover:to-primary-500 sm:inline-flex ${focusRing}`}
            >
              Contact Me
            </a>
            <button
              type="button"
              className={`rounded-xl p-2.5 text-slate-200 transition-colors hover:bg-white/[0.06] lg:hidden ${focusRing}`}
              onClick={() => setIsMenuOpen((open) => !open)}
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
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <div className="space-y-1 p-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block rounded-xl px-4 py-3 font-medium text-slate-200 hover:bg-white/[0.06] ${focusRing}`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 block rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-3 text-center font-semibold text-white"
                >
                  Contact Me
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
