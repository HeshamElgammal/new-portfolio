'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
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

  const experiences = [
    {
      title: 'Waseet.net – Classifieds Platform',
      company: 'Waseet',
      position: 'Frontend Developer',
      duration: '2023 - Present',
      description:
        "Helped build and maintain Waseet.net's mobile and web platforms. Focused on UI component development, API integration, and performance tuning. Worked closely with backend and design teams to align features with user needs.",
      image: 'https://waseet.net/assets/logo-ar.svg',
      technologies: [
        'React Native',
        'Next.js',
        'API Integration',
        'Performance Tuning',
      ],
      github: 'https://github.com/HeshamElgammal/waseet-platform',
      live: 'https://waseet.net/',
      featured: true,
    },
    {
      title: 'Digital Car – Saudi Arabia',
      company: 'Digital Car',
      position: 'Mobile Developer',
      duration: '2022 - 2023',
      description:
        'Developed a car-selling application to transform the Saudi automotive market by prioritizing transparency and user trust. Built using React Native, the app includes features for browsing car listings, scheduling test drives, and secure payment processing.',
      image: 'https://dcar-prod.s3.amazonaws.com/imgUploads/1736261555964.webp',
      technologies: [
        'React Native',
        'RESTful APIs',
        'Payment Processing',
        'User Authentication',
      ],
      github: 'https://github.com/HeshamElgammal/digital-car-app',
      live: 'https://play.google.com/store/apps/details?id=com.digitalcar_mobile',
      featured: true,
    },
    {
      title: 'DrugGo - Mobile Pharmacy App',
      company: 'Freelance',
      position: 'Mobile Developer',
      duration: '2022',
      description:
        'Developed a mobile application for online pharmacy services, allowing users to browse medications, upload prescriptions, and place orders with ease. Integrated location services for nearby pharmacy suggestions, secure order tracking, and in-app notifications.',
      image:
        'data:image/jpeg;base64,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',
      technologies: [
        'React Native',
        'Location Services',
        'Order Tracking',
        'In-app Notifications',
      ],
      github: 'https://github.com/HeshamElgammal/druggo-app',
      live: 'https://play.google.com/store/apps/details?id=com.druggo',
      featured: false,
    },
    {
      title: 'Hike-Time - Outdoor Activity App',
      company: 'Freelance',
      position: 'Mobile Developer',
      duration: '2022',
      description:
        'Developed a cross-platform mobile app for hiking enthusiasts to discover and share trails, trips, and outdoor experiences. Features include trail discovery, user reviews, photo sharing, and location-based recommendations.',
      image:
        'data:image/png;base64,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',
      technologies: [
        'React Native',
        'Interactive Maps',
        'Route Tracking',
        'Offline Access',
      ],
      github: 'https://github.com/HeshamElgammal/hike-time-app',
      live: 'https://play.google.com/store/apps/details?id=com.hiketime',
      featured: false,
    },
    {
      title: 'Al-Haram Al-Makki - Educational Platform',
      company: 'Misraj Technology',
      position: 'Mobile Developer',
      duration: '2021 - 2022',
      description:
        'Developed a mobile application for an educational platform offering courses and group interactions for reciters and students. Built using React Native, implemented the courses flow and main pages, and led a redesign of multiple UI components.',
      image:
        'https://media.licdn.com/dms/image/v2/D4D0BAQFWVoU7lNkrlw/company-logo_200_200/company-logo_200_200/0/1730022175697/misrajtech_logo?e=2147483647&v=beta&t=5WRX5zgSFSGWW2T8aDbtXjfpvDATAH1rL6ykcq2Ta0k',
      technologies: [
        'React Native',
        'UI Components',
        'API Integration',
        'Cross-platform',
      ],
      github: 'https://github.com/HeshamElgammal/alharam-app',
      live: 'https://play.google.com/store/apps/details?id=com.alharam',
      featured: false,
    },
    {
      title: 'Macqueen – Travel Services App',
      company: 'Zeidex',
      position: 'Mobile Developer',
      duration: '2021',
      description:
        'Contributed to a travel platform offering flight booking, hotel accommodation, and chauffeur services. Worked closely with UX designers to translate wireframes into interactive components. Modularized codebase and implemented efficient state management.',
      image:
        'https://zeidex.com/wp-content/uploads/2024/08/Screenshot-2024-08-26-at-1.49.19%E2%80%AFPM.png',
      technologies: [
        'React Native',
        'State Management',
        'Modular Architecture',
      ],
      github: 'https://github.com/HeshamElgammal/macqueen-app',
      live: 'https://play.google.com/store/apps/details?id=com.macqueen',
      featured: false,
    },
    {
      title: 'Oproject Web & Mobile Apps',
      company: 'Oproject',
      position: 'Frontend Developer',
      duration: '2020 - 2021',
      description:
        'Built front-end features for multiple projects including Affiliate, Lokle, Glia, and Edactik. Designed user-friendly UIs, integrated third-party APIs, and maintained code quality through peer reviews. Worked on both web and mobile platforms.',
      image:
        'https://media.licdn.com/dms/image/v2/C4D1BAQGWhomMpdxylw/company-background_10000/company-background_10000/0/1640955894027/o_projects_cover?e=2147483647&v=beta&t=AQxAxst59-qqwuJ15MH7MPYJPCpZ4MWVvQnFHeRYm3s',
      technologies: ['React.js', 'Next.js', 'React Native', 'Third-party APIs'],
      github: 'https://github.com/HeshamElgammal/oproject-apps',
      live: 'https://o-projects.org/',
      featured: false,
    },
    {
      title: 'E-Commerce Apps – Turkish Stores & Petal Egypt',
      company: 'Blue Brain',
      position: 'Mobile Developer',
      duration: '2020',
      description:
        'Developed e-commerce applications targeting different markets. Integrated secure payment gateways, user authentication, and responsive product listings. Improved performance using Redux and followed Agile practices for rapid feature delivery.',
      image:
        'https://www.bluebrain-co.com/en/images/8389172725319066f3cac6c85d3.png',
      technologies: [
        'React Native',
        'Redux',
        'Payment Gateways',
        'Agile Development',
      ],
      github: 'https://github.com/HeshamElgammal/ecommerce-apps',
      live: 'https://www.bluebrain-co.com/en',
      featured: false,
    },
  ]

  const featuredExperiences = experiences.filter(
    (experience) => experience.featured
  )
  const otherExperiences = experiences.filter(
    (experience) => !experience.featured
  )

  return (
    <section id="experience" className="bg-white dark:bg-dark-900 py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mx-auto max-w-7xl"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-4xl sm:text-5xl">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-xl">
              Here is my professional experience showcasing my development
              skills and passion for building robust software solutions.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="mb-8 font-bold text-gray-900 dark:text-white text-2xl">
              Current & Recent Experience
            </h3>
            <div className="gap-8 grid lg:grid-cols-2">
              {featuredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-white dark:bg-dark-800 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="top-4 right-4 absolute flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-200"
                      >
                        <Github size={20} />
                      </motion.a> */}
                      <motion.a
                        href={experience.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                        {experience.title}
                      </h4>
                      <p className="font-medium text-primary-600 dark:text-primary-400">
                        {experience.position} at {experience.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">
                        {experience.duration}
                      </p>
                    </div>
                    <p className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full text-primary-800 dark:text-primary-200 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={experience.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-300 dark:text-primary-400 transition-colors duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-8 font-bold text-gray-900 dark:text-white text-2xl">
              Previous Experience
            </h3>
            <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
              {otherExperiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="group bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="top-3 right-3 absolute flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={experience.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-1.5 rounded-full text-white transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                        {experience.title}
                      </h4>
                      <p className="font-medium text-primary-600 dark:text-primary-400 text-sm">
                        {experience.position} at {experience.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">
                        {experience.duration}
                      </p>
                    </div>
                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {experience.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded-full text-primary-800 dark:text-primary-200 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 3 && (
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400 text-xs">
                          +{experience.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <motion.a
              href="https://github.com/HeshamElgammal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-white text-lg transition-colors duration-200"
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
