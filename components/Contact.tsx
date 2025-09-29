'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { useState } from 'react'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!')
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
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/heshamelgammal',
      color: 'hover:text-blue-400',
    },
  ]

  return (
    <section id="contact" className="bg-white dark:bg-dark-900 py-20">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-xl">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Let's create something amazing together!
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
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
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
                      <info.icon className="text-primary-600 dark:text-primary-400" size={24} />
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

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl">
                <h3 className="mb-6 font-bold text-gray-900 dark:text-white text-2xl">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="gap-6 grid md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white dark:bg-dark-700 px-4 py-3 border border-gray-300 dark:border-dark-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 w-full text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white dark:bg-dark-700 px-4 py-3 border border-gray-300 dark:border-dark-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 w-full text-gray-900 dark:text-white transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-white dark:bg-dark-700 px-4 py-3 border border-gray-300 dark:border-dark-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 w-full text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300 text-sm">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white dark:bg-dark-700 px-4 py-3 border border-gray-300 dark:border-dark-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-primary-500 w-full text-gray-900 dark:text-white transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-center items-center bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 px-6 py-3 rounded-lg w-full font-semibold text-white transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="mr-2 border-white border-b-2 rounded-full w-5 h-5 animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2" size={20} />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
