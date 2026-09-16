'use client'

import { motion } from 'framer-motion'
import { Code, Users, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import SectionHeader from '@/components/ui/SectionHeader'
import { containerVariants, itemVariants } from '@/lib/animations'
import { brand } from '@/lib/brand'

const About = () => {
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
      description: 'Git, VS Code, Hostinger VPS, API Development',
      color: 'text-orange-500',
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-shell bg-surface">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          <SectionHeader
            eyebrow="The Studio"
            beforeHighlight=""
            highlight={brand.name}
            subtitle={`${brand.studioName} is my freelance product studio — I help companies ship mobile apps, web platforms, and full-stack systems with the reliability clients expect from a dedicated partner.`}
          />

          <div className="items-center gap-12 grid lg:grid-cols-2">
            {/* Left Column - Image and Description */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 shadow-2xl mx-auto border-4 border-white dark:border-dark-700 rounded-2xl w-80 h-80 overflow-hidden">
                  <img
                    src="/hesham-profile.jpg"
                    alt="Hesham Elgammal - Frontend Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="-top-4 -right-4 absolute bg-primary-200 dark:bg-primary-800 opacity-50 rounded-full w-24 h-24"></div>
                <div className="-bottom-4 -left-4 absolute bg-primary-300 dark:bg-primary-700 opacity-50 rounded-full w-16 h-16"></div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-slate-900 dark:text-white text-2xl">
                  About {brand.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  I specialize in React Native mobile applications and Next.js
                  web development. I&apos;ve helped build platforms like Digital
                  Car, Waseet, and Maysan, and independently delivered
                  full-stack products like TeeslaTech — frontend, backend,
                  database, and infrastructure included.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Whether you need a freelance developer for a focused sprint or
                  a long-term product partner, I bring clear communication,
                  modern engineering, and a client-first mindset to every
                  project under {brand.studioName}.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="mb-8 font-display font-bold text-slate-900 dark:text-white text-2xl">
                What I deliver
              </h3>

              <div className="gap-6 grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="modern-card-soft hover:scale-[1.02] p-6"
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
              { number: '10+', label: 'Products Delivered' },
              { number: '3+', label: 'Years in Production' },
              { number: '100%', label: 'Client-First Approach' },
              { number: '24h', label: 'Response Time' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="modern-card-soft p-6 text-center"
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
