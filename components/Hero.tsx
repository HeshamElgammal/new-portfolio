'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Download } from 'lucide-react'
import { brand } from '@/lib/brand'
import BrandLogo from '@/components/ui/BrandLogo'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const highlights = [
    'React Native & Next.js specialists',
    'Full-stack delivery — design to deployment',
    'Available for freelance & contract work',
  ]

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden bg-page hero-mesh"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,11,20,0.03))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(5,11,20,0.6))]" />
      <div className="top-1/4 -left-32 absolute bg-primary-500/20 blur-3xl rounded-full w-96 h-96 animate-pulse-soft" />
      <div className="right-0 bottom-1/4 absolute bg-blue-600/10 blur-3xl rounded-full w-80 h-80 animate-pulse-soft" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="items-center gap-14 grid lg:grid-cols-2 mx-auto max-w-6xl"
        >
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="eyebrow-pill">{brand.tagline}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 font-display font-extrabold text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">{brand.name}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-2 font-semibold text-primary-600 dark:text-primary-400 text-xl sm:text-2xl"
            >
              {brand.studioName} — {brand.tagline.split('·')[0]?.trim()}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            >
              I ship mobile apps, web platforms, and full-stack systems for
              businesses that need a reliable freelance partner — not just code,
              but clear communication and on-time delivery.
            </motion.p>

            <motion.ul
              variants={itemVariants}
              className="space-y-3 mb-10"
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary-500 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={itemVariants}
              className="flex sm:flex-row flex-col gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="inline-flex justify-center items-center gap-2 btn-brand px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Start a Project
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToWork}
                className="inline-flex justify-center items-center btn-brand-outline px-8 py-4 rounded-xl text-lg"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="modern-card p-8 sm:p-10">
              <BrandLogo />
              <p className="mt-6 mb-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                From marketplace apps like Digital Car and Waseet to end-to-end
                builds like TeeslaTech — I deliver production-ready software
                with clear communication and on-time milestones.
              </p>

              <div className="gap-4 grid grid-cols-3 mb-8">
                {[
                  { n: '10+', l: 'Products shipped' },
                  { n: '3+', l: 'Years building' },
                  { n: '24h', l: 'Typical reply' },
                ].map((stat) => (
                  <div
                    key={stat.l}
                    className="bg-slate-50 dark:bg-dark-900/80 p-3 border border-slate-200/80 dark:border-slate-700/50 rounded-xl text-center"
                  >
                    <p className="font-bold text-primary-600 dark:text-primary-400 text-xl">
                      {stat.n}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-wide">
                      {stat.l}
                    </p>
                  </div>
                ))}
              </div>

              <motion.a
                href={brand.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-400 text-sm"
              >
                <Download size={16} />
                Download CV — {brand.name}
              </motion.a>
            </div>
            <div className="-z-10 absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-blue-600/10 blur-2xl rounded-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
