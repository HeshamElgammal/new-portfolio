'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from '@/components/icons/WhatsAppIcon'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: brand.email,
      link: `mailto:${brand.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: brand.phone,
      link: brand.phoneTel,
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
      link: '#contact',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: brand.github,
      color: 'hover:text-slate-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: brand.linkedin,
      color: 'hover:text-blue-500',
    },
    {
      icon: WhatsAppIcon,
      name: 'WhatsApp',
      url: brand.whatsapp,
      color: 'hover:text-emerald-500',
    },
  ]

  return (
    <section id="contact" className="section-shell bg-surface-muted">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Let's build"
            beforeHighlight="Start your "
            highlight="Project"
            subtitle={`Tell me about your app, platform, or MVP. I reply within 24 hours with next steps, timeline options, and how ${brand.name} can help.`}
          />

          <div className="gap-12 grid lg:grid-cols-2">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="mb-4 font-display font-bold text-slate-900 dark:text-white text-2xl">
                  Talk to the studio
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Available for freelance contracts, fixed-scope builds, and
                  ongoing product work. Share your goals — we&apos;ll recommend
                  the right stack and delivery plan.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const isWhatsApp = info.title === 'WhatsApp'
                  return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={isWhatsApp ? '_blank' : undefined}
                    rel={isWhatsApp ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="flex items-center gap-4 modern-card-muted p-4"
                  >
                    <div
                      className={`p-3 border rounded-xl ${
                        isWhatsApp
                          ? 'bg-emerald-500/10 border-emerald-500/25'
                          : 'bg-primary-500/10 border-primary-500/20'
                      }`}
                    >
                      {isWhatsApp ? (
                        <Icon size={22} className="text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Icon
                          size={22}
                          className="text-primary-600 dark:text-primary-400"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )})}
              </div>

              <div>
                <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                  Connect
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`p-3 modern-card-muted text-slate-600 dark:text-slate-400 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon size={22} />
                    </motion.a>
                  )})}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="modern-card p-8 md:p-10">
                <h3 className="mb-3 font-display font-bold text-slate-900 dark:text-white text-2xl">
                  Book a project conversation
                </h3>
                <p className="mb-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ideal for founders, agencies, and teams who need a reliable
                  developer partner for mobile, web, or full-stack delivery.
                </p>

                <div className="space-y-3">
                  <motion.a
                    href={`mailto:${brand.email}?subject=Project%20inquiry%20-%20Elgammal%20Digital`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center gap-2 btn-brand px-6 py-3.5 rounded-xl w-full font-semibold"
                  >
                    <Mail size={20} />
                    Email project details
                  </motion.a>

                  <motion.a
                    href={`${brand.whatsapp}?text=${encodeURIComponent('Hi Hesham, I have a project inquiry.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 rounded-xl w-full font-semibold text-white transition-colors"
                  >
                    <WhatsAppIcon size={20} />
                    Chat on WhatsApp
                  </motion.a>

                  <motion.a
                    href={brand.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3.5 rounded-xl w-full font-semibold text-white transition-colors"
                  >
                    <Linkedin size={20} />
                    Message on LinkedIn
                  </motion.a>

                  <motion.a
                    href={brand.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3.5 rounded-xl w-full font-semibold text-white transition-colors"
                  >
                    <Github size={20} />
                    Review our code
                  </motion.a>
                </div>

                <div className="bg-emerald-500/10 mt-8 p-4 border border-emerald-500/25 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-500 rounded-full w-2.5 h-2.5 animate-pulse" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">
                      Accepting new freelance & contract work
                    </span>
                  </div>
                  <p className="mt-2 text-emerald-700/80 dark:text-emerald-400/90 text-sm">
                    Typical response within 24 hours · Remote worldwide
                  </p>
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
