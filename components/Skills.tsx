'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'

const categories = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Mobile',
    skills: [
      'React Native',
      'Expo',
      'Firebase',
      'Native Modules',
      'Mobile Performance Optimization',
    ],
  },
  {
    title: 'State Management & Data',
    skills: ['Redux Toolkit', 'TanStack Query', 'Zustand'],
  },
  {
    title: 'Tools & Engineering',
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'CI/CD',
      'REST APIs',
      'App Store / Google Play Deployment',
    ],
  },
]

const learning = ['Dart', 'Flutter']

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="section-shell scroll-mt-28 bg-dark-900/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Skills"
            beforeHighlight="Technologies I "
            highlight="Work With"
            subtitle="The tools I use day to day to design, build, and ship production web and mobile products."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-primary-500/40 dark:border-white/[0.08] dark:bg-dark-900/60 sm:p-7"
              >
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-dashed border-primary-500/40 bg-primary-500/[0.04] p-6 sm:p-7 md:col-span-2"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Currently learning
                  </h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Exploring these for new cross-platform work. I have not used
                    them in production yet.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {learning.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary-500/30 bg-white px-3 py-1.5 text-sm font-medium text-primary-700 dark:bg-dark-950 dark:text-primary-300"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-primary-400"
                        aria-hidden
                      />
                      {item}
                      <span className="text-xs font-normal text-slate-500">
                        · learning
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
