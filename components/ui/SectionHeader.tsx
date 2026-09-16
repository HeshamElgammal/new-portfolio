'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animations'

type SectionHeaderProps = {
  eyebrow?: string
  beforeHighlight: string
  highlight: string
  subtitle: string
}

const SectionHeader = ({
  eyebrow,
  beforeHighlight,
  highlight,
  subtitle,
}: SectionHeaderProps) => {
  return (
    <motion.div variants={itemVariants} className="mb-16 text-center">
      {eyebrow && (
        <p className="mb-3 font-medium text-primary-600 dark:text-primary-400 text-sm uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      )}
      <h2 className="mb-6 font-display font-bold text-slate-900 dark:text-white text-4xl sm:text-5xl">
        {beforeHighlight}
        <span className="gradient-text">{highlight}</span>
      </h2>
      <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default SectionHeader
