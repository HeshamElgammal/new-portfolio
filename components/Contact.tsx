'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: brand.email,
    link: `mailto:${brand.email}`,
    external: false,
  },
  {
    icon: Phone,
    title: 'Phone',
    value: brand.phone,
    link: brand.phoneTel,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    value: brand.whatsappDisplay,
    link: `${brand.whatsapp}?text=${encodeURIComponent('Hi Hesham, I have a project inquiry.')}`,
    external: true,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: brand.location,
    link: undefined,
    external: false,
  },
]

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="section-shell scroll-mt-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Contact"
            beforeHighlight="Start your "
            highlight="Project"
            subtitle={`Tell me about your app, platform, or MVP. I reply within 24 hours with next steps, timeline options, and how ${brand.name} can help.`}
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <motion.div variants={itemVariants} className="min-w-0 space-y-8">
              <div>
                <h3 className="mb-3 font-display text-2xl font-bold text-white">
                  Talk to me directly
                </h3>
                <p className="leading-relaxed text-slate-400">
                  Available for freelance contracts, fixed-scope builds, and
                  ongoing product work. Share your goals and I will recommend the
                  right stack and delivery plan.
                </p>
              </div>

              <ul className="surface-card divide-y divide-white/[0.06] overflow-hidden">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-400/10 text-primary-300">
                        <Icon size={18} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                          {info.title}
                        </span>
                        <span className="block break-all font-medium text-slate-100">
                          {info.value}
                        </span>
                      </span>
                      {info.link && (
                        <ArrowUpRight
                          size={16}
                          aria-hidden
                          className="shrink-0 text-slate-500 transition-colors group-hover:text-primary-300"
                        />
                      )}
                    </>
                  )
                  return (
                    <li key={info.title}>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.external ? '_blank' : undefined}
                          rel={info.external ? 'noopener noreferrer' : undefined}
                          className="group flex items-center gap-4 p-5 transition-colors hover:bg-white/[0.03] focus-ring"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-5">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Elsewhere
                </h4>
                <div className="flex gap-3">
                  {[
                    { icon: Github, name: 'GitHub', url: brand.github },
                    { icon: Linkedin, name: 'LinkedIn', url: brand.linkedin },
                    { icon: WhatsAppIcon, name: 'WhatsApp', url: brand.whatsapp },
                  ].map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="surface-card flex h-12 w-12 items-center justify-center text-slate-300 transition-colors hover:border-primary-400/40 hover:text-white focus-ring"
                      >
                        <Icon size={20} aria-hidden />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="surface-card relative min-w-0 overflow-hidden p-7 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-500/15 blur-3xl"
              />
              <div className="relative">
                <h3 className="mb-3 font-display text-2xl font-bold text-white">
                  Book a project conversation
                </h3>
                <p className="mb-8 leading-relaxed text-slate-400">
                  Ideal for founders, agencies, and teams who need a reliable
                  developer partner for mobile, web, or full-stack delivery.
                </p>

                <div className="space-y-3">
                  <a
                    href={`mailto:${brand.email}?subject=Project%20inquiry%20-%20${encodeURIComponent(brand.name)}`}
                    className="btn-primary w-full"
                  >
                    <Mail size={18} aria-hidden />
                    Email project details
                  </a>
                  <a
                    href={`${brand.whatsapp}?text=${encodeURIComponent('Hi Hesham, I have a project inquiry.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-emerald-500 focus-ring"
                  >
                    <WhatsAppIcon size={18} />
                    Chat on WhatsApp
                  </a>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={brand.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      <Linkedin size={18} aria-hidden />
                      LinkedIn
                    </a>
                    <a
                      href={brand.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      <Github size={18} aria-hidden />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex items-start gap-3 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-4">
                  <span className="relative mt-1.5 flex h-2 w-2 shrink-0" aria-hidden>
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">
                      Accepting new freelance &amp; contract work
                    </p>
                    <p className="mt-1 text-sm text-emerald-200/70">
                      Typical response within 24 hours · Remote worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
