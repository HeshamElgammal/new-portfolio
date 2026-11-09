import {
  Briefcase,
  Car,
  Globe,
  GraduationCap,
  Mountain,
  Pill,
  Plane,
  ShoppingBag,
  Smartphone,
  Store,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ExperienceLink = {
  label: string
  href: string
}

export type Experience = {
  title: string
  company: string
  position: string
  duration: string
  type?: string
  product: string
  contribution: string
  description: string
  image?: string
  icon: LucideIcon
  gradient: string
  technologies: string[]
  github?: string
  live?: string
  links?: ExperienceLink[]
  featured?: boolean
}

export const experiences: Experience[] = [
  {
    title: 'CarLink – Automotive Service Platform',
    company: 'Medica Scope',
    position: 'Senior Frontend Developer',
    duration: 'Jun 2026 - Present',
    type: 'Full-time',
    product:
      'Saudi automotive service platform tied to OBD devices, maintenance workflows, and service-center booking.',
    contribution:
      'Implemented React Native flows for service requests and center booking, plus Center and Admin dashboards in Next.js within a shared monorepo with REST APIs and GitHub Actions CI/CD.',
    description:
      'CarLink connects drivers and service centers across mobile and dashboard surfaces for the Saudi market.',
    icon: Car,
    gradient: 'from-teal-600 via-cyan-600 to-blue-600',
    technologies: [
      'React Native',
      'Next.js',
      'Monorepo',
      'REST APIs',
      'GitHub Actions',
    ],
    featured: true,
  },
  {
    title: 'Digital Car – Saudi Automotive Platform',
    company: 'Digital Car',
    position: 'Frontend Team Lead',
    duration: 'Apr 2023 - Present',
    type: 'Full-time',
    product:
      'Saudi marketplace for buying, selling, and automotive services on iOS, Android, and web.',
    contribution:
      'Led frontend delivery across React Native surfaces and migrated data-fetching layers to TanStack Query for clearer caching, fewer redundant requests, and easier feature work.',
    description:
      'Digital Car ships cross-platform experiences for automotive buyers and sellers in the Gulf.',
    image: 'https://dcar-prod.s3.amazonaws.com/imgUploads/1736261555964.webp',
    icon: Briefcase,
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    technologies: [
      'React Native',
      'TanStack Query',
      'Team Leadership',
      'RESTful APIs',
    ],
    links: [
      {
        label: 'Website',
        href: 'https://www.digitalcar.sa/en',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.digitalcar_mobile&pcampaignid=web_share',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/sa/app/digital-car-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/id6502263841?l=ar',
      },
    ],
    featured: true,
  },
  {
    title: 'Waseet.net – Classifieds Platform',
    company: 'Waseet',
    position: 'Senior Mobile & Web Developer',
    duration: 'May 2025 - Jun 2026',
    type: 'Full-time',
    product:
      'Regional classifieds marketplace across React Native mobile and Next.js web for listings and user interactions.',
    contribution:
      'Built listing and profile flows, reusable UI components, and REST API integrations with design and backend partners for cross-platform releases.',
    description:
      'Waseet connects buyers and sellers through mobile and web classifieds experiences.',
    image: 'https://waseet.net/assets/logo-ar.svg',
    icon: ShoppingBag,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    technologies: [
      'React Native',
      'Next.js',
      'RESTful APIs',
      'Performance Optimization',
    ],
    links: [
      {
        label: 'Website',
        href: 'https://eg.waseet.net/en',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.awi.waseet&pcampaignid=web_share',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/waseet-%D8%A7%D9%84%D9%88%D8%B3%D9%8A%D8%B7/id1000200850',
      },
    ],
    featured: true,
  },
  {
    title: 'TeeslaTech – Full-Stack Web Platform & Admin Dashboard',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    duration: '2026',
    type: 'Freelance',
    product:
      'Public marketing site and admin dashboard for TeeslaTech, backed by a Node/Express API and MongoDB.',
    contribution:
      'Delivered end-to-end from Next.js monorepo (marketing + admin) through Express APIs, database models, VPS deployment, and production DNS on Hostinger.',
    description:
      'TeeslaTech needed a single engineer to ship the full product stack from UI to infrastructure.',
    icon: Globe,
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    technologies: [
      'Next.js',
      'Monorepo',
      'Express.js',
      'MongoDB',
      'Hostinger VPS',
    ],
    links: [
      { label: 'Website', href: 'https://teeslatech.com' },
      { label: 'Admin', href: 'https://admin.teeslatech.com' },
    ],
    featured: true,
  },
  {
    title: 'O-Projects – Web & Mobile Products',
    company: 'O-Projects',
    position: 'Frontend Developer',
    duration: 'Sep 2022 - Dec 2023',
    type: 'Full-time',
    product: 'Multiple client web and mobile products across affiliate and education verticals.',
    contribution:
      'Shipped React.js, Next.js, and React Native features with third-party API integrations and code review participation.',
    description:
      'O-Projects delivered frontend work across Affiliate, Lokle, Glia, and Edactik.',
    icon: Smartphone,
    gradient: 'from-indigo-500 via-blue-600 to-cyan-600',
    technologies: ['React.js', 'Next.js', 'React Native', 'Third-party APIs'],
    live: 'https://o-projects.org/',
    featured: false,
  },
  {
    title: 'Macqueen – Travel Services App',
    company: 'Zeidex',
    position: 'React Native Developer',
    duration: 'Apr 2023 - Jul 2023',
    type: 'Contract',
    product:
      'Travel services app for flights, hotels, and chauffeur booking on iOS and Android.',
    contribution:
      'Built cross-platform React Native features and improved maintainability through modular structure and state management.',
    description:
      'Macqueen serves travelers with bundled mobility and lodging services.',
    icon: Plane,
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
    technologies: ['React Native', 'State Management', 'Modular Architecture'],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.zeidex.macqueen&pcampaignid=web_share',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/sa/app/macqueen-best-hotel-rates/id1495088277',
      },
    ],
    featured: false,
  },
  {
    title: 'React Native Training Program',
    company: 'DotPy',
    position: 'React Native Instructor',
    duration: 'Jul 2022 - Sep 2022',
    type: 'Part-time',
    product: 'Instructor-led React Native curriculum for beginners and intermediate developers.',
    contribution:
      'Ran hands-on sessions, debugging labs, code review, and structured coursework.',
    description: 'DotPy training program for mobile developers in Cairo.',
    icon: GraduationCap,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    technologies: ['React Native', 'Teaching', 'Code Review', 'Curriculum Design'],
    featured: false,
  },
  {
    title: 'Turkish Stores & Petal Egypt – E-Commerce Apps',
    company: 'Blue Brain',
    position: 'React Native Developer',
    duration: 'Nov 2021 - Sep 2022',
    type: 'Full-time',
    product: 'E-commerce mobile apps for Turkish Stores and Petal Egypt.',
    contribution:
      'Integrated payment gateways and authentication and optimized Redux-based state for catalog and checkout flows.',
    description: 'Blue Brain retail apps on iOS and Android.',
    icon: Store,
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
    technologies: ['React Native', 'Redux', 'Payment Gateways', 'E-Commerce'],
    live: 'https://www.bluebrain-co.com/en',
    featured: false,
  },
  {
    title: 'DrugGo – Clinical & Pharmacy App',
    company: 'Freelance',
    position: 'React Native Developer',
    duration: 'Freelance',
    type: 'Freelance',
    product: 'Clinical decision support and pharmacy reference app for healthcare professionals.',
    contribution:
      'Revamped search and navigation performance, upgraded React Native, and refactored UI/UX for maintainability.',
    description: 'DrugGo supports clinicians with drug reference and search workflows.',
    icon: Pill,
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    technologies: [
      'React Native',
      'Performance Optimization',
      'UI/UX',
      'Refactoring',
    ],
    live: 'https://play.google.com/store/apps/details?id=com.otc&pcampaignid=web_share',
    featured: false,
  },
  {
    title: 'Hike-Time – Outdoor Activity App',
    company: 'Freelance',
    position: 'React Native Developer',
    duration: 'Freelance',
    type: 'Freelance',
    product: 'Cross-platform hiking app with trails, maps, and offline access.',
    contribution:
      'Implemented trail discovery, interactive maps, and offline route access in React Native.',
    description: 'Hike-Time helps outdoor enthusiasts plan and track routes.',
    icon: Mountain,
    gradient: 'from-green-600 via-emerald-600 to-lime-600',
    technologies: [
      'React Native',
      'Interactive Maps',
      'Route Tracking',
      'Offline Access',
    ],
    featured: false,
  },
]

export const getExperienceLinks = (experience: Experience) => {
  if (experience.links?.length) return experience.links
  if (experience.live)
    return [{ label: 'View Project', href: experience.live }]
  return []
}

/** Featured order: CarLink, Digital Car, Waseet, TeeslaTech first. */
export const featuredExperienceOrder = [
  'CarLink – Automotive Service Platform',
  'Digital Car – Saudi Automotive Platform',
  'Waseet.net – Classifieds Platform',
  'TeeslaTech – Full-Stack Web Platform & Admin Dashboard',
] as const

export const sortFeaturedExperiences = (items: Experience[]) =>
  [...items].sort(
    (a, b) =>
      featuredExperienceOrder.indexOf(
        a.title as (typeof featuredExperienceOrder)[number],
      ) -
      featuredExperienceOrder.indexOf(
        b.title as (typeof featuredExperienceOrder)[number],
      ),
  )
