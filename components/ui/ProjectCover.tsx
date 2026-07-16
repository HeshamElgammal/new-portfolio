'use client'

import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'

type ProjectCoverProps = {
  company: string
  image?: string
  icon: LucideIcon
  gradient: string
  compact?: boolean
}

const ProjectCover = ({
  company,
  image,
  icon: Icon,
  gradient,
  compact = false,
}: ProjectCoverProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const initials = company
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  useEffect(() => {
    setImageLoaded(false)
    if (!image) return

    const loader = new window.Image()
    loader.onload = () => setImageLoaded(true)
    loader.onerror = () => setImageLoaded(false)
    loader.src = image
  }, [image])

  return (
    <div
      className={`relative overflow-hidden ${compact ? 'h-36' : 'h-48 sm:h-52'}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {imageLoaded && image && (
        <div className="top-4 right-4 z-20 absolute bg-white/90 dark:bg-dark-900/90 shadow-lg backdrop-blur-sm p-2 border border-white/30 rounded-xl max-w-[42%]">
          <img
            src={image}
            alt=""
            aria-hidden
            className="w-full max-h-12 object-contain"
          />
        </div>
      )}

      <div className="relative z-10 flex justify-between items-end p-5 h-full">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-white/20 backdrop-blur-md border border-white/25 rounded-xl w-12 h-12 text-white shadow-lg">
            <Icon size={compact ? 22 : 26} strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-semibold text-white/75 text-[10px] uppercase tracking-[0.18em]">
              {company}
            </p>
            <p className="font-bold text-white text-base">{initials}</p>
          </div>
        </div>

        <div className="opacity-15 font-black text-white text-4xl tracking-tighter select-none">
          {initials}
        </div>
      </div>
    </div>
  )
}

export default ProjectCover
