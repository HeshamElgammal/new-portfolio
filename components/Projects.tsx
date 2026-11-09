'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCover from '@/components/ui/ProjectCover'
import {
  experiences,
  getExperienceLinks,
  sortFeaturedExperiences,
  type Experience,
} from '@/data/experiences'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'

const ExperienceCard = ({
  experience,
  featured = false,
}: {
  experience: Experience
  featured?: boolean
}) => {
  const links = getExperienceLinks(experience)

  return (
    <motion.div
      role="article"
      variants={itemVariants}
      className="group modern-card overflow-hidden hover:-translate-y-1 transition-transform duration-200"
    >
      <ProjectCover
        company={experience.company}
        image={experience.image}
        icon={experience.icon}
        gradient={experience.gradient}
        compact={!featured}
      />

      <div className={featured ? 'p-6' : 'p-5'}>
        <div className={featured ? 'mb-3' : 'mb-2'}>
          <h4
            className={`font-bold text-gray-900 dark:text-white ${featured ? 'text-xl' : 'text-lg'}`}
          >
            {experience.title}
          </h4>
          <p
            className={`font-medium text-primary-600 dark:text-primary-400 ${featured ? '' : 'text-sm'}`}
          >
            {experience.position} at {experience.company}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <p
              className={`text-gray-500 dark:text-gray-400 ${featured ? 'text-sm' : 'text-xs'}`}
            >
              {experience.duration}
            </p>
            {experience.type && (
              <span className="bg-primary-50 dark:bg-primary-900/30 px-2.5 py-1 border border-primary-100 dark:border-primary-800 rounded-full font-medium text-primary-700 dark:text-primary-300 text-xs">
                {experience.type}
              </span>
            )}
          </div>
        </div>

        <p
          className={`text-gray-700 dark:text-gray-300 font-medium ${featured ? 'mb-2 text-sm' : 'mb-1.5 text-xs'}`}
        >
          {experience.product}
        </p>
        <p
          className={`text-gray-600 dark:text-gray-400 leading-relaxed ${featured ? 'mb-3 text-sm' : 'mb-2 text-sm'}`}
        >
          <span className="font-medium text-gray-800 dark:text-gray-200">
            My role:{' '}
          </span>
          {experience.contribution}
        </p>

        <motion.div
          className={`flex flex-wrap gap-2 ${featured ? 'mb-4' : 'mb-3'}`}
        >
          {(featured
            ? experience.technologies
            : experience.technologies.slice(0, 3)
          ).map((tech) => (
            <span
              key={tech}
              className={`bg-gray-100 dark:bg-dark-700 px-3 py-1 border border-gray-200 dark:border-dark-600 rounded-full font-medium text-gray-700 dark:text-gray-300 ${featured ? 'text-sm' : 'text-xs'}`}
            >
              {tech}
            </span>
          ))}
          {!featured && experience.technologies.length > 3 && (
            <span className="bg-gray-100 dark:bg-dark-700 px-2 py-1 border border-gray-200 dark:border-dark-600 rounded-full text-gray-600 dark:text-gray-400 text-xs">
              +{experience.technologies.length - 3}
            </span>
          )}
        </motion.div>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1 border-gray-100 dark:border-dark-700 border-t">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-300 dark:text-primary-400 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${featured ? '' : 'text-sm'}`}
              >
                <ExternalLink
                  size={featured ? 16 : 14}
                  className={featured ? 'mr-2' : 'mr-1.5'}
                  aria-hidden
                />
                {link.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredExperiences = sortFeaturedExperiences(
    experiences.filter((experience) => experience.featured),
  )
  const otherExperiences = experiences.filter(
    (experience) => !experience.featured,
  )

  return (
    <section id="selected-work" className="section-shell bg-page scroll-mt-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-7xl"
        >
          <SectionHeader
            eyebrow="Portfolio"
            beforeHighlight="Selected "
            highlight="Work"
            subtitle="Production apps and platforms for automotive, classifieds, and full-stack delivery — with verified store and web links where available."
          />

          <motion.div variants={itemVariants} className="mb-20">
            <div className="gap-8 grid lg:grid-cols-2">
              {featuredExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.title}
                  experience={experience}
                  featured
                />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gray-400 dark:bg-gray-500 rounded-full w-2 h-2" />
              <h3 className="font-bold text-gray-900 dark:text-white text-2xl">
                More experience
              </h3>
            </div>
            <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
              {otherExperiences.map((experience) => (
                <ExperienceCard key={experience.title} experience={experience} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <motion.a
              href={brand.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-white text-lg transition-colors duration-200"
            >
              View More on GitHub
              <ArrowRight className="ml-2" size={20} aria-hidden />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
