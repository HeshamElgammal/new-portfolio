'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { brand } from '@/lib/brand'
import { siteCopy } from '@/lib/site-copy'

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()

  const entrance = prefersReducedMotion
    ? { initial: false as const, animate: false as const }
    : { initial: 'hidden' as const, animate: 'visible' as const }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.15, staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section
      id="home"
      className="relative flex items-center min-h-[72vh] sm:min-h-[78vh] overflow-hidden bg-page hero-mesh"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,11,20,0.03))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(5,11,20,0.6))]" />
      <div
        className="top-1/4 -left-32 absolute bg-primary-500/15 rounded-full w-96 h-96 pointer-events-none"
        aria-hidden
      />
      <div
        className="right-0 bottom-1/4 absolute bg-blue-600/10 rounded-full w-80 h-80 pointer-events-none"
        aria-hidden
      />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 container">
        <motion.div
          variants={containerVariants}
          initial={entrance.initial}
          animate={entrance.animate}
          className="mx-auto max-w-3xl text-left lg:text-center lg:mx-auto"
        >
          <div>
            <motion.p
              variants={itemVariants}
              className="mb-4 font-semibold text-primary-600 dark:text-primary-400 text-sm sm:text-base tracking-wide"
            >
              {siteCopy.roleLine}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-6 font-display font-extrabold text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
            >
              {brand.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-6 max-w-xl lg:mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
            >
              {siteCopy.intro}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-10 font-medium text-slate-700 dark:text-slate-300 text-sm"
            >
              {siteCopy.heroSince}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex sm:flex-row flex-col gap-4 lg:justify-center"
            >
              <motion.a
                href="#selected-work"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex justify-center items-center gap-2 btn-brand px-8 py-4 rounded-xl font-semibold text-lg"
              >
                View Selected Work
                <ArrowRight size={20} aria-hidden />
              </motion.a>
              <motion.a
                href={brand.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex justify-center items-center gap-2 btn-brand-outline px-8 py-4 rounded-xl text-lg"
              >
                <Download size={20} aria-hidden />
                Download CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="inline-flex justify-center items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 px-8 py-4 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-slate-700 dark:text-slate-200 text-lg transition-colors"
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
