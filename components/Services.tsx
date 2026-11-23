'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Layers, Smartphone, Workflow } from 'lucide-react'
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
      'End-to-end delivery: APIs, databases, admin panels, and integrations owned from design through deployment.',
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

  return (
    <section id="services" className="section-shell scroll-mt-28 bg-dark-900/40">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Services"
            beforeHighlight="Services for "
            highlight="Your Next Project"
            subtitle="Freelance work across mobile apps, web platforms, and full-stack products, delivered by Hesham Elgammal."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                className="surface-card-interactive group p-7 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-primary-400/25 bg-primary-400/10 text-primary-300 transition-colors duration-300 group-hover:bg-primary-400/15">
                  <service.icon size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 mb-6 leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemVariants} className="surface-card mt-8 p-7 sm:p-10">
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
                  How I work
                </p>
                <h3 className="font-display text-2xl font-bold text-white">
                  A clear path from idea to launch
                </h3>
              </div>
            </div>
            <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-[15px] hidden h-px bg-gradient-to-r from-primary-400/60 via-white/10 to-transparent lg:block"
              />
              {process.map((item) => (
                <li key={item.step} className="relative">
                  <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-primary-400/40 bg-dark-900 font-mono text-xs font-semibold text-primary-300">
                    {item.step}
                  </span>
                  <h4 className="mb-1.5 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 text-center">
            <a href="#contact" className="btn-primary">
              Discuss your project
              <ArrowRight size={18} aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
