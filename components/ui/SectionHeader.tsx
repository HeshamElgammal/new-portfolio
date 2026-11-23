'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animations'

type SectionHeaderProps = {
  eyebrow?: string
  beforeHighlight: string
  highlight: string
  subtitle: string
}

/** Shared section heading used by every content section. */
const SectionHeader = ({
  eyebrow,
  beforeHighlight,
  highlight,
  subtitle,
}: SectionHeaderProps) => {
  return (
    <motion.div variants={itemVariants} className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary-400">
          <span className="h-px w-6 bg-primary-400/60" aria-hidden />
          {eyebrow}
          <span className="h-px w-6 bg-primary-400/60" aria-hidden />
        </p>
      )}
      <h2 className="mb-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
        {beforeHighlight}
        <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-sky-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default SectionHeader
