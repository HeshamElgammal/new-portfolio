'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandLogo from '@/components/ui/BrandLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('darkMode')
    const dark = stored !== 'false'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleDarkMode = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('darkMode', String(next))
    document.documentElement.classList.toggle('dark', next)
  }

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="top-0 right-0 left-0 z-50 fixed px-4 sm:px-6 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-glow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center gap-4 px-4 sm:px-6 h-16">
          <BrandLogo onClick={() => scrollToSection('#home')} />

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="hover:bg-primary-500/10 px-4 py-2 rounded-lg font-medium text-slate-600 hover:text-primary-600 dark:hover:text-primary-300 dark:text-slate-300 text-sm transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:inline-flex btn-brand px-4 py-2.5 rounded-xl font-semibold text-sm"
            >
              Start a Project
            </button>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="hover:bg-slate-200/80 dark:hover:bg-slate-800/80 p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="lg:hidden hover:bg-slate-200/80 dark:hover:bg-slate-800/80 p-2.5 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-slate-200/60 dark:border-slate-700/60 border-t"
            >
              <div className="space-y-1 p-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="block hover:bg-primary-500/10 px-4 py-3 rounded-xl w-full font-medium text-slate-700 dark:text-slate-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollToSection('#contact')}
                  className="block btn-brand mt-2 px-4 py-3 rounded-xl w-full font-semibold text-center"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
