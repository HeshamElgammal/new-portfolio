'use client'

import { motion } from 'framer-motion'
import { Code, Users, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const About = () => {
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

  const skills = [
    {
      icon: Code,
      title: 'Mobile Development',
      description: 'React Native, JavaScript, Firebase, Redux',
      color: 'text-blue-500',
    },
    {
      icon: Zap,
      title: 'Web Development',
      description: 'Next.js, TypeScript, Tailwind CSS, React',
      color: 'text-purple-500',
    },
    {
      icon: Users,
      title: 'Backend & Database',
      description: 'Node.js, PostgreSQL, MongoDB, Express.js',
      color: 'text-green-500',
    },
    {
      icon: Code,
      title: 'Development Tools',
      description: 'Git, VS Code, Docker, API Development',
      color: 'text-orange-500',
    },
  ]

  return (
    <section id="about" className="bg-gray-50 dark:bg-dark-800 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-xl">
              I'm a passionate developer with a love for creating exceptional
              digital experiences and robust software solutions.
            </p>
          </motion.div>

          <div className="items-center gap-12 grid lg:grid-cols-2">
            {/* Left Column - Image and Description */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl mx-auto rounded-2xl w-80 h-80 overflow-hidden">
                  <div className="flex justify-center items-center bg-gray-200 dark:bg-gray-700 w-full h-full">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="-top-4 -right-4 absolute bg-primary-200 dark:bg-primary-800 opacity-50 rounded-full w-24 h-24"></div>
                <div className="-bottom-4 -left-4 absolute bg-primary-300 dark:bg-primary-700 opacity-50 rounded-full w-16 h-16"></div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-gray-900 dark:text-white text-2xl">
                  Hi, I'm Hesham Elgammal
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate full-stack developer specializing in React
                  Native mobile applications and Next.js web development. With
                  experience in building comprehensive platforms like Digital
                  Car and Waseet, I focus on creating scalable, user-friendly
                  solutions that make a real impact.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My expertise spans mobile app development with React Native,
                  modern web development with Next.js and TypeScript, and
                  backend technologies. I'm passionate about creating seamless
                  user experiences across all platforms.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="mb-8 font-bold text-gray-900 dark:text-white text-2xl">
                What I Do
              </h3>

              <div className="gap-6 grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-dark-700 shadow-lg hover:shadow-xl p-6 rounded-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg bg-gray-100 dark:bg-dark-600 ${skill.color}`}
                      >
                        <skill.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 font-semibold text-gray-900 dark:text-white text-xl">
                          {skill.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="gap-8 grid grid-cols-2 md:grid-cols-4 mt-20"
          >
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              // { number: '24/7', label: 'Available Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white dark:bg-dark-700 shadow-lg p-6 rounded-xl text-center"
              >
                <div className="mb-2 font-bold text-primary-600 dark:text-primary-400 text-3xl">
                  {stat.number}
                </div>
                <div className="font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
