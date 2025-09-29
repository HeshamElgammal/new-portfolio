'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="home" className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 dark:from-dark-900 via-white dark:via-dark-800 to-primary-100 dark:to-dark-900"></div>
      
      {/* Floating Elements */}
      <div className="top-20 left-10 float-animation absolute bg-primary-200 dark:bg-primary-800 opacity-20 rounded-full w-20 h-20"></div>
      <div className="top-40 right-20 float-animation absolute bg-primary-300 dark:bg-primary-700 opacity-30 rounded-full w-16 h-16" style={{ animationDelay: '1s' }}></div>
      <div className="bottom-40 left-20 float-animation absolute bg-primary-400 dark:bg-primary-600 opacity-25 rounded-full w-12 h-12" style={{ animationDelay: '2s' }}></div>

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded-full font-medium text-primary-800 dark:text-primary-200 text-sm">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 font-bold text-5xl sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">Hesham Elgammal</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-8 font-semibold text-gray-700 dark:text-gray-300 text-2xl sm:text-3xl lg:text-4xl"
          >
            Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-2xl text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed"
          >
            I create amazing digital experiences through clean code and robust development. 
            Passionate about building scalable applications and efficient software solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex sm:flex-row flex-col justify-center items-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-white text-lg transition-colors duration-200"
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="/Hesham-Elgammal-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center hover:bg-primary-600 dark:hover:bg-primary-600 px-8 py-4 border-2 border-primary-600 rounded-lg font-semibold text-primary-600 hover:text-white dark:hover:text-white dark:text-primary-400 text-lg transition-all duration-200"
            >
              <Download className="inline-block mr-2" size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/HeshamElgammal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl p-3 rounded-full text-gray-700 hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-300 transition-all duration-200"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/hesham-elgammal-3b47a0383"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl p-3 rounded-full text-gray-700 hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-300 transition-all duration-200"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:heshamelgammal404@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl p-3 rounded-full text-gray-700 hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-300 transition-all duration-200"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="bottom-8 left-1/2 absolute -translate-x-1/2 transform"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 text-gray-600 hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
