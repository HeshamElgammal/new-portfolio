'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectVisual from '@/components/ui/ProjectVisual'
import {
  experiences,
  getExperienceLinks,
  sortFeaturedExperiences,
  type Experience,
} from '@/data/experiences'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'

const ProjectCard = ({
  experience,
  featured = false,
}: {
  experience: Experience
  featured?: boolean
}) => {
  const links = getExperienceLinks(experience)
  const techs = featured
    ? experience.technologies
    : experience.technologies.slice(0, 4)

  return (
    <motion.article
      variants={itemVariants}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-900/60 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40"
    >
      <ProjectVisual
        title={experience.title}
        company={experience.company}
        surface={experience.surface}
        accent={experience.accent}
        media={experience.media}
        compact={!featured}
      />

      <div className={`flex flex-col flex-1 ${featured ? 'p-7 sm:p-8' : 'p-5'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs">
          <span className="font-medium text-slate-400">
            {experience.duration}
          </span>
          {experience.type && (
            <>
              <span className="text-slate-600" aria-hidden>
                /
              </span>
              <span className="font-medium text-slate-400">
                {experience.type}
              </span>
            </>
          )}
        </div>

        <h3
          className={`font-display font-bold text-white leading-snug ${featured ? 'text-2xl' : 'text-lg'}`}
        >
          {experience.title}
        </h3>
        <p
          className="mt-1 font-medium text-sm"
          style={{ color: experience.accent }}
        >
          {experience.position} · {experience.company}
        </p>

        <p
          className={`text-slate-300 leading-relaxed ${featured ? 'mt-5 text-base' : 'mt-3 text-sm'}`}
        >
          {experience.product}
        </p>
        {featured && (
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            <span className="font-medium text-slate-200">My role: </span>
            {experience.contribution}
          </p>
        )}

        <ul className="flex flex-wrap gap-2 mt-5">
          {techs.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </li>
          ))}
          {!featured && experience.technologies.length > techs.length && (
            <li className="rounded-md px-2 py-1 text-xs text-slate-500">
              +{experience.technologies.length - techs.length}
            </li>
          )}
        </ul>

        {experience.media && (
          <p className="mt-5 flex items-center gap-2 text-xs text-slate-500">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: experience.accent }}
              aria-hidden
            />
            {experience.media.source}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-primary-400/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                {link.label}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.01,
    rootMargin: '0px 0px 120px 0px',
  })

  const featuredExperiences = sortFeaturedExperiences(
    experiences.filter((experience) => experience.featured),
  )
  const otherExperiences = experiences.filter(
    (experience) => !experience.featured,
  )

  return (
    <section
      id="selected-work"
      className="section-shell bg-page scroll-mt-28"
    >
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Projects"
            beforeHighlight="Selected "
            highlight="Work"
            subtitle="Production apps and platforms across automotive, classifieds, and full-stack delivery, with store and web links where they are public."
          />

          <div className="gap-6 lg:gap-8 grid md:grid-cols-2">
            {featuredExperiences.map((experience) => (
              <ProjectCard
                key={experience.title}
                experience={experience}
                featured
              />
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-24">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-display font-bold text-white text-2xl">
                More experience
              </h3>
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </div>
            <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
              {otherExperiences.map((experience) => (
                <ProjectCard key={experience.title} experience={experience} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 text-center">
            <a
              href={brand.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition-colors duration-200 hover:border-primary-400/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              View more on GitHub
              <ArrowRight size={18} aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
