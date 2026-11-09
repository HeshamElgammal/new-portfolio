'use client'

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
    { name: 'Work', href: '#selected-work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ] as const

  return (
    <footer className="bg-dark-950 text-slate-300 border-slate-800 border-t">
      <div className="section-container py-14">
        <div className="gap-10 grid md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo />
            <p className="mt-5 mb-6 max-w-md text-slate-400 leading-relaxed">
              {brand.description} — {brand.studioName}.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-900 hover:bg-primary-600/20 p-3 border border-slate-800 hover:border-primary-500/30 rounded-xl text-slate-400 hover:text-primary-300 hover:scale-105 transition-[colors,transform] duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-3 mt-12 pt-8 border-slate-800 border-t text-slate-500 text-sm">
          <p>
            © {currentYear} {brand.name} · {brand.studioName}
          </p>
          <p className="text-slate-400">{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
