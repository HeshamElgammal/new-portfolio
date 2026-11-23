import { Github, Linkedin, Mail } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import BrandLogo from '@/components/ui/BrandLogo'
import { brand } from '@/lib/brand'

const quickLinks = [
  { name: 'Work', href: '#selected-work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
] as const

const socialLinks = [
  { icon: Github, name: 'GitHub', url: brand.github },
  { icon: Linkedin, name: 'LinkedIn', url: brand.linkedin },
  { icon: Mail, name: 'Email', url: `mailto:${brand.email}` },
  { icon: WhatsAppIcon, name: 'WhatsApp', url: brand.whatsapp },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo />
            <p className="mt-6 max-w-sm leading-relaxed text-slate-400">
              {brand.description}
            </p>
            <ul className="mt-6 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="surface-card flex h-11 w-11 items-center justify-center text-slate-300 transition-colors hover:border-primary-400/40 hover:text-white focus-ring"
                    >
                      <Icon size={18} aria-hidden />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white focus-ring rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </h2>
            <address className="space-y-3 not-italic text-slate-300">
              <p>
                <a href={`mailto:${brand.email}`} className="break-all transition-colors hover:text-white focus-ring rounded">
                  {brand.email}
                </a>
              </p>
              <p>
                <a href={brand.phoneTel} className="transition-colors hover:text-white focus-ring rounded">
                  {brand.phone}
                </a>
              </p>
              <p>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-emerald-300 focus-ring rounded"
                >
                  WhatsApp
                </a>
              </p>
              <p className="text-slate-500">{brand.location}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] pt-8 text-sm text-slate-500 md:flex-row md:items-center">
          <p>
            © {currentYear} {brand.name} · {brand.studioName}
          </p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
