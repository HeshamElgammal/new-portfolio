'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        alert('Message sent successfully! I\'ll get back to you soon.')
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to send message'}`)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error sending message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'heshamelgammal404@gmail.com',
      link: 'mailto:heshamelgammal404@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+20 109 290 1319',
      link: 'tel:+201092901319',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Egypt',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/HeshamElgammal',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/hesham-elgammal-3b47a0383',
      color: 'hover:text-blue-600',
    },
  ]

  return (
    <section id="contact" className="bg-white dark:bg-dark-900 py-20">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-xl">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="gap-12 grid lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="mb-6 font-bold text-gray-900 dark:text-white text-2xl">
                  Let's Connect
                </h3>
                <p className="mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you have a question or just want to say hi,
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center space-x-4 bg-gray-50 hover:bg-gray-100 dark:hover:bg-dark-700 dark:bg-dark-800 p-4 rounded-xl transition-all duration-200"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                      <info.icon
                        className="text-primary-600 dark:text-primary-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-white text-lg">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-100 dark:bg-dark-800 rounded-lg text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-200`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Let's Work Together Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-primary-50 dark:from-primary-900/20 to-primary-100 dark:to-primary-800/20 p-8 border border-primary-200 dark:border-primary-700 rounded-2xl">
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-2xl">
                  Let's Work Together
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ready to bring your ideas to life? I'm available for freelance projects, 
                  full-time opportunities, and exciting collaborations. Let's discuss how 
                  we can work together to create something amazing.
                </p>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <motion.a
                    href="mailto:heshamelgammal404@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  >
                    <Mail className="mr-2" size={20} />
                    Send Email
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/hesham-elgammal-3b47a0383"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  >
                    <Linkedin className="mr-2" size={20} />
                    Connect on LinkedIn
                  </motion.a>

                  <motion.a
                    href="https://github.com/HeshamElgammal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  >
                    <Github className="mr-2" size={20} />
                    View My Code
                  </motion.a>
                </div>

                {/* Availability Status */}
                <div className="bg-green-50 dark:bg-green-900/20 mt-6 p-4 border border-green-200 dark:border-green-700 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-500 mr-3 rounded-full w-3 h-3 animate-pulse"></div>
                    <span className="font-medium text-green-700 dark:text-green-400">
                      Available for new projects
                    </span>
                  </div>
                  <p className="mt-1 text-green-600 dark:text-green-500 text-sm">
                    Typically respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
