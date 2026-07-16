'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCover from '@/components/ui/ProjectCover'
import {
  experiences,
  getExperienceLinks,
  type Experience,
} from '@/data/experiences'
import { containerVariants, itemVariants } from '@/lib/animations'

const ExperienceCard = ({
  experience,
  featured = false,
}: {
  experience: Experience
  featured?: boolean
}) => {
  const links = getExperienceLinks(experience)

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: featured ? -5 : -3 }}
      className="group modern-card overflow-hidden"
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
          className={`text-gray-600 dark:text-gray-400 leading-relaxed ${featured ? 'mb-4' : 'mb-3 text-sm'}`}
        >
          {experience.description}
        </p>

        <div
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
        </div>

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
                className={`inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-300 dark:text-primary-400 transition-colors duration-200 ${featured ? '' : 'text-sm'}`}
              >
                <ExternalLink
                  size={featured ? 16 : 14}
                  className={featured ? 'mr-2' : 'mr-1.5'}
                />
                {link.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredExperiences = experiences.filter(
    (experience) => experience.featured
  )
  const otherExperiences = experiences.filter(
    (experience) => !experience.featured
  )

  return (
    <section id="experience" className="section-shell bg-white dark:bg-dark-900">
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
            beforeHighlight="Work "
            highlight="Experience"
            subtitle="Professional experience building mobile apps, web platforms, and full-stack products — from idea to production."
          />

          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary-600 rounded-full w-2 h-2" />
              <h3 className="font-bold text-gray-900 dark:text-white text-2xl">
                Current & Recent Experience
              </h3>
            </div>
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
                Previous Experience
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
              href="https://github.com/HeshamElgammal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl font-semibold text-white text-lg transition-colors duration-200"
            >
              View More on GitHub
              <ArrowRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
