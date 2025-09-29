'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const skillCategories = [
    {
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 95, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 92, color: 'bg-yellow-500' },
        { name: 'Firebase', level: 88, color: 'bg-orange-500' },
        { name: 'Redux', level: 85, color: 'bg-purple-500' },
        { name: 'Native Modules', level: 80, color: 'bg-green-500' },
        { name: 'Mobile APIs', level: 90, color: 'bg-cyan-500' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'Next.js', level: 90, color: 'bg-gray-800' },
        { name: 'React', level: 95, color: 'bg-blue-600' },
        { name: 'TypeScript', level: 88, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'REST APIs', level: 90, color: 'bg-purple-500' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Express.js', level: 88, color: 'bg-gray-600' },
        { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 78, color: 'bg-green-500' },
        { name: 'Python', level: 80, color: 'bg-yellow-600' },
        { name: 'API Development', level: 90, color: 'bg-purple-500' },
      ],
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', level: 92, color: 'bg-orange-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
        { name: 'Docker', level: 75, color: 'bg-blue-500' },
        { name: 'AWS', level: 70, color: 'bg-orange-400' },
        { name: 'Linux', level: 80, color: 'bg-yellow-700' },
        { name: 'Testing', level: 85, color: 'bg-green-500' },
      ],
    },
  ]

  const technologies = [
    { name: 'React Native', icon: '📱' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Git', icon: '📦' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
  ]

  return (
    <section id="skills" className="bg-gray-50 dark:bg-dark-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-xl">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </motion.div>

          {/* Technology Icons */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="gap-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center bg-white dark:bg-dark-700 shadow-lg hover:shadow-xl p-4 rounded-xl transition-all duration-300"
                >
                  <div className="mb-2 text-3xl">{tech.icon}</div>
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-dark-700 shadow-lg p-8 rounded-2xl"
              >
                <h3 className="mb-8 font-bold text-gray-900 dark:text-white text-2xl text-center">
                  {category.title}
                </h3>
                
                <div className="gap-6 grid md:grid-cols-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700 dark:text-gray-300 text-lg">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="bg-gray-200 dark:bg-dark-600 rounded-full w-full h-3">
                        <motion.div
                          className={`h-3 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 rounded-2xl text-white">
              <h3 className="mb-4 font-bold text-2xl">
                Always Learning & Growing
              </h3>
              <p className="opacity-90 mx-auto max-w-2xl text-lg">
                I'm passionate about staying up-to-date with the latest technologies and 
                continuously improving my skills. Currently exploring AI/ML, Web3, and 
                advanced cloud architectures.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
