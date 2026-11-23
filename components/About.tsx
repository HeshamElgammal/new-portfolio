'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'
import { siteCopy } from '@/lib/site-copy'

const highlights = [
  {
    title: 'Mobile apps',
    text: 'Cross-platform React Native apps taken from feature work through App Store and Google Play releases.',
  },
  {
    title: 'Web platforms',
    text: 'Next.js frontends, admin and center dashboards, and maintainable UI architecture shared across teams.',
  },
  {
    title: 'Team delivery',
    text: 'Frontend leadership, code review, and clear communication with designers, backend engineers, and clients.',
  },
]

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-shell scroll-mt-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="About"
            beforeHighlight="A bit about "
            highlight="Me"
            subtitle={siteCopy.aboutLead}
          />

          <div className="grid items-start gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
            <motion.figure
              variants={itemVariants}
              className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-white/10">
                <Image
                  src={brand.profileImage}
                  alt={brand.profileImageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, 320px"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400 lg:text-left">
                {brand.name} · {brand.jobTitle}
              </figcaption>
            </motion.figure>

            <div className="space-y-10">
              <motion.div variants={itemVariants}>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
                  {siteCopy.aboutSupport}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {siteCopy.heroSince}
                </p>
              </motion.div>

              <motion.ul variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/[0.08] dark:bg-dark-900/60"
                  >
                    <h3 className="font-display font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
