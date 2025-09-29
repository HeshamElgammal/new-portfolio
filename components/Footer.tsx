'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/HeshamElgammal',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hesham-elgammal-3b47a0383',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/heshamelgammal',
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:heshamelgammal404@gmail.com',
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-4 font-bold text-2xl gradient-text">
              Hesham Elgammal
            </h3>
            <p className="mb-6 max-w-md text-gray-400 leading-relaxed">
              Full Stack Developer specializing in mobile and web applications. 
              Creating robust software solutions that make a difference. Let's build something incredible together!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-dark-800 hover:bg-primary-600 p-3 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-lg">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>heshamelgammal404@gmail.com</p>
              <p>+20 109 290 1319</p>
              <p>Egypt</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-dark-800 border-t"
        >
          <div className="flex md:flex-row flex-col justify-between items-center">
            <p className="mb-4 md:mb-0 text-gray-400 text-sm">
              © {currentYear} Hesham Elgammal. All rights reserved.
            </p>
            
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-gray-400 text-sm"
            >
              Made with <Heart className="mx-1 text-red-500" size={16} /> using Next.js
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
