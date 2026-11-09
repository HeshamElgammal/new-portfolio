'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Cloud,
  Layers,
  Rocket,
  Smartphone,
  Workflow,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description:
      'Cross-platform React Native apps with polished UX, store releases, payments, maps, and real-time features.',
    tags: ['React Native', 'iOS & Android', 'App Store Launch'],
  },
  {
    icon: Layers,
    title: 'Web Platforms',
    description:
      'Marketing sites, dashboards, and SaaS frontends built with Next.js, TypeScript, and scalable architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Workflow,
    title: 'Full-Stack Products',
    description:
      'End-to-end delivery — APIs, databases, admin panels, and integrations owned from design through deployment.',
    tags: ['Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    icon: Cloud,
    title: 'Launch & Infrastructure',
    description:
      'Production setup on VPS or cloud: domains, DNS, SSL, environments, and handover documentation.',
    tags: ['Hostinger VPS', 'DevOps', 'Monitoring'],
  },
]

const process = [
  { step: '01', title: 'Discovery', detail: 'Goals, scope, timeline, and success metrics.' },
  { step: '02', title: 'Build', detail: 'Iterative development with clear milestones.' },
  { step: '03', title: 'Launch', detail: 'QA, deployment, and store or web release.' },
  { step: '04', title: 'Support', detail: 'Post-launch fixes, enhancements, and scaling.' },
]

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-shell bg-surface-muted scroll-mt-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="What I Offer"
            beforeHighlight="Services for "
            highlight="Your Next Project"
            subtitle="Freelance services for your next project — mobile apps, web platforms, and full-stack products, delivered by Hesham Elgammal."
          />

          <div className="gap-6 grid md:grid-cols-2 mb-16">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group modern-card p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex justify-center items-center bg-primary-500/10 border border-primary-500/20 rounded-xl w-12 h-12 text-primary-600 dark:text-primary-400">
                    <service.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-dark-700 px-3 py-1 border border-slate-200/80 dark:border-dark-600 rounded-full text-slate-600 dark:text-slate-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="modern-card-soft p-8 md:p-10 mb-12"
          >
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 mb-8">
              <div>
                <p className="mb-1 font-medium text-primary-600 dark:text-primary-400 text-xs uppercase tracking-[0.2em]">
                  How I work
                </p>
                <h3 className="font-bold text-slate-900 dark:text-white text-2xl">
                  A clear path from idea to launch
                </h3>
              </div>
              <Rocket className="hidden sm:block text-primary-500/40" size={40} />
            </div>
            <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="relative">
                  <p className="mb-2 font-black text-primary-500/30 text-3xl">
                    {item.step}
                  </p>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 btn-brand px-8 py-4 rounded-xl font-semibold text-base"
            >
              Discuss your project
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
