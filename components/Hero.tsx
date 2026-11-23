'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { brand } from '@/lib/brand'

const expertise = [
  'React Native',
  'React.js',
  'Next.js',
  'TypeScript',
  'Cross-platform Mobile',
]

const stats = [
  { value: '6+ yrs', label: 'Professional experience' },
  { value: 'iOS · Android · Web', label: 'Platforms I ship to' },
  { value: 'Egypt · Remote', label: 'Working with Gulf teams' },
]

const Hero = () => {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-dark-950 pt-32 pb-20 sm:pt-36 lg:min-h-[100svh] lg:pb-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(20,184,166,0.22),transparent_70%),radial-gradient(50%_45%_at_95%_20%,rgba(37,99,235,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="section-container">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
            >
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
              </span>
              6 years building scalable mobile &amp; web applications
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-6 font-display font-extrabold text-white text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {brand.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.14)}
              className="mt-4 font-display font-semibold text-2xl leading-snug sm:text-3xl"
            >
              <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-sky-400 bg-clip-text text-transparent">
                Senior Frontend &amp; Mobile Engineer
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              I build production React Native apps, Next.js platforms, and the
              dashboards behind them, with a focus on clean architecture,
              performance, and interfaces that hold up after launch.
            </motion.p>

            <motion.ul
              {...fadeUp(0.26)}
              className="mt-7 flex flex-wrap gap-2"
              aria-label="Core expertise"
            >
              {expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-slate-200"
                >
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#selected-work"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-7 py-3.5 font-semibold text-white shadow-brand transition-all duration-200 hover:from-primary-400 hover:to-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
              >
                View My Work
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-slate-100 transition-colors duration-200 hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
              >
                Contact Me
              </a>
              <a
                href={brand.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-3.5 text-sm font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-300 rounded"
              >
                Download CV
                <ArrowUpRight size={14} aria-hidden />
              </a>
            </motion.div>

            <motion.dl
              {...fadeUp(0.4)}
              className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-500/25 via-transparent to-blue-600/25 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-dark-900/70 p-3 shadow-2xl shadow-black/50 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-inset ring-white/10">
                <Image
                  src={brand.heroImage}
                  alt={brand.heroImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 448px, 90vw"
                  className="object-cover object-center transition-transform duration-700 ease-out motion-safe:hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"
                />
              </div>
              <div className="flex items-start gap-3 px-2 pb-2 pt-4">
                <span
                  aria-hidden
                  className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]"
                />
                <div className="min-w-0">
                  <p className="font-display font-semibold text-white">
                    Current focus
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">
                    Senior Frontend Developer at Medica Scope, building CarLink
                    mobile and dashboard surfaces.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
