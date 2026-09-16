'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import BrandLogo from '@/components/ui/BrandLogo'
import { brand } from '@/lib/brand'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: brand.github },
    { icon: Linkedin, name: 'LinkedIn', url: brand.linkedin },
    { icon: Mail, name: 'Email', url: `mailto:${brand.email}` },
    { icon: WhatsAppIcon, name: 'WhatsApp', url: brand.whatsapp },
  ]

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-950 text-slate-300 border-slate-800 border-t">
      <div className="section-container py-14">
        <div className="gap-10 grid md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <BrandLogo />
            <p className="mt-5 mb-6 max-w-md text-slate-400 leading-relaxed">
              {brand.description} — {brand.studioName}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="bg-dark-900 hover:bg-primary-600/20 p-3 border border-slate-800 hover:border-primary-500/30 rounded-xl text-slate-400 hover:text-primary-300 transition-all"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </motion.a>
              )})}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-white">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-primary-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-white">Work with me</h4>
            <address className="space-y-2 not-italic text-slate-400 text-sm">
              <p>
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {brand.email}
                </a>
              </p>
              <p>
                <a
                  href={brand.phoneTel}
                  className="hover:text-primary-300 transition-colors"
                >
                  {brand.phone}
                </a>
              </p>
              <p>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {brand.phone}
                </a>
              </p>
              <p>{brand.location}</p>
            </address>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex md:flex-row flex-col justify-between items-center gap-3 mt-12 pt-8 border-slate-800 border-t text-slate-500 text-sm"
        >
          <p>
            © {currentYear} {brand.name} · {brand.studioName}
          </p>
          <p className="text-slate-400">{brand.tagline}</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
