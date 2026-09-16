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
    description:
      'Developing CarLink, a Saudi automotive service platform connected to vehicle OBD devices and digital maintenance workflows. Building React Native experiences for vehicle connectivity, service requests, maintenance flows, and booking service centers. Delivering Center Dashboard and Admin Dashboard in Next.js within a shared monorepo, with reusable frontend architecture, REST API integration, and CI/CD via GitHub Actions for Firebase App Distribution.',
    icon: Car,
    gradient: 'from-teal-600 via-cyan-600 to-blue-600',
    technologies: [
      'React.js',
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
    description:
      'Lead frontend delivery across React Native mobile and web-facing experiences for a Saudi platform covering car buying, selling, and automotive services. Coordinate implementation, maintain development standards, and build scalable UI with RESTful API integration. Conduct performance profiling and optimization while contributing to product UI/UX and business flows.',
    image: 'https://dcar-prod.s3.amazonaws.com/imgUploads/1736261555964.webp',
    icon: Briefcase,
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    technologies: [
      'React Native',
      'Team Leadership',
      'RESTful APIs',
      'Performance Optimization',
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
    description:
      'Owned production features across React Native mobile and Next.js web applications. Built responsive, reusable UI components and integrated RESTful APIs for listings, user interactions, and dynamic data. Collaborated with design and backend teams to ship scalable, production-ready features with a focus on performance, maintainability, and cross-platform delivery.',
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
    description:
      'Owned the product end-to-end as sole developer — client website, admin dashboard, backend API, database, VPS, domain, and deployment. Built the public site and admin in a Next.js monorepo with Node.js, Express.js, and MongoDB (Mongoose), deployed on Hostinger VPS with full DNS and production configuration.',
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
    featured: false,
  },
  {
    title: 'O-Projects – Web & Mobile Products',
    company: 'O-Projects',
    position: 'Frontend Developer',
    duration: 'Sep 2022 - Dec 2023',
    type: 'Full-time',
    description:
      'Built and maintained frontend features across Affiliate, Lokle, Glia, and Edactik using React.js, Next.js, and React Native. Designed responsive interfaces, integrated third-party APIs, collaborated with cross-functional teams, and participated in code reviews.',
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
    description:
      'Contributed to Macqueen, a travel services platform for flight booking, accommodation, and chauffeur services. Built cross-platform React Native features and improved maintainability through modularization and efficient state management.',
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
    description:
      'Delivered React Native training for beginner and intermediate learners, including practical exercises, debugging sessions, code review, and structured course materials.',
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
    description:
      'Developed and maintained Turkish Stores and Petal Egypt e-commerce applications using React Native for iOS and Android. Integrated payment gateways and authentication and improved performance through optimized Redux state management.',
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
    description:
      'Completed a full revamp of the DrugGo mobile application for healthcare professionals — improving performance in search and navigation, migrating to the latest React Native, redesigning UI/UX, and refactoring the codebase for scalability and maintainability.',
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
    description:
      'Built a cross-platform hiking app with trail discovery, interactive maps, route tracking, and offline access for outdoor enthusiasts.',
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
