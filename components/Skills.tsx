'use client'

import { motion } from 'framer-motion'
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React Native', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'Firebase', level: 88 },
      { name: 'Redux', level: 85 },
      { name: 'Native Modules', level: 80 },
      { name: 'Mobile APIs', level: 90 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    gradient: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Next.js', level: 90 },
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'Python', level: 80 },
      { name: 'API Development', level: 90 },
    ],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    gradient: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'VS Code', level: 95 },
      { name: 'Hostinger VPS', level: 82 },
      { name: 'AWS', level: 70 },
      { name: 'Testing', level: 85 },
    ],
  },
]

const technologies = [
  { name: 'React Native', icon: Smartphone },
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Globe },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Firebase', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'Hostinger VPS', icon: Server },
  { name: 'Express.js', icon: Server },
  { name: 'AWS', icon: Cloud },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-shell bg-surface">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="Expertise"
            beforeHighlight="Skills & "
            highlight="Technologies"
            subtitle="Technologies and tools I use to design, build, and ship production-ready products."
          />

          <motion.div variants={itemVariants} className="mb-14">
            <p className="mb-5 font-medium text-gray-500 dark:text-gray-400 text-sm text-center uppercase tracking-[0.2em]">
              Core Stack
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="inline-flex items-center gap-2 bg-white dark:bg-dark-700/80 shadow-sm hover:shadow-md px-4 py-2.5 border border-gray-200/80 dark:border-dark-600/80 rounded-full text-gray-700 dark:text-gray-200 transition-all duration-200"
                >
                  <tech.icon size={16} className="text-primary-500" />
                  <span className="font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="gap-6 grid md:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group modern-card-soft overflow-hidden"
              >
                <div
                  className={`flex items-center gap-3 bg-gradient-to-r ${category.gradient} px-6 py-4`}
                >
                  <div className="flex justify-center items-center bg-white/20 backdrop-blur-sm border border-white/25 rounded-xl w-10 h-10 text-white">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-bold text-white text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 p-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                          {skill.name}
                        </span>
                        <span className="font-semibold text-primary-600 dark:text-primary-400 text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="bg-gray-100 dark:bg-dark-600 rounded-full w-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.15 + skillIndex * 0.08,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-14">
            <div className="relative modern-card-soft bg-gradient-to-br from-primary-600 via-primary-600 to-violet-600 p-8 md:p-10 overflow-hidden text-white text-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]" />
              <div className="relative">
                <h3 className="mb-3 font-bold text-2xl">
                  Always Learning & Growing
                </h3>
                <p className="opacity-90 mx-auto max-w-2xl text-lg leading-relaxed">
                  Continuously sharpening my craft across mobile, web, and
                  full-stack — from React Native apps to Next.js platforms and
                  VPS-backed production deployments.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
