import {
  Briefcase,
  Car,
  GraduationCap,
  Globe,
  Mountain,
  Pill,
  Plane,
  ShoppingBag,
  Smartphone,
  Store,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ExperienceLink = {
  label: string;
  href: string;
};

export type Experience = {
  title: string;
  company: string;
  position: string;
  duration: string;
  type?: string;
  description: string;
  image?: string;
  icon: LucideIcon;
  gradient: string;
  technologies: string[];
  github?: string;
  live?: string;
  links?: ExperienceLink[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    title: "Waseet.net – Classifieds Platform",
    company: "Waseet",
    position: "Frontend Developer",
    duration: "2025 - Present",
    type: "Full-time",
    description:
      "Helped build and maintain Waseet.net's mobile and web platforms. Focused on UI component development, API integration, and performance tuning. Worked closely with backend and design teams to align features with user needs.",
    image: "https://waseet.net/assets/logo-ar.svg",
    icon: ShoppingBag,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    technologies: [
      "React Native",
      "Next.js",
      "API Integration",
      "Performance Tuning",
    ],
    github: "https://github.com/HeshamElgammal/waseet-platform",
    links: [
      {
        label: "Website",
        href: "https://eg.waseet.net/en",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.awi.waseet&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/waseet-%D8%A7%D9%84%D9%88%D8%B3%D9%8A%D8%B7/id1000200850",
      },
    ],
    featured: true,
  },
  {
    title: "Digital Car – Saudi Arabia",
    company: "Digital Car",
    position: "Frontend Developer",
    duration: "2023 - Present",
    type: "Part-time",
    description:
      "Developed a car-selling application to transform the Saudi automotive market by prioritizing transparency and user trust. Built using React Native, the app includes features for browsing car listings, scheduling test drives, and secure payment processing. Also led the development of Maysan, a recruitment platform connecting job candidates with companies, covering both the candidate-facing and company-facing experiences.",
    image: "https://dcar-prod.s3.amazonaws.com/imgUploads/1736261555964.webp",
    icon: Car,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    technologies: [
      "React Native",
      "RESTful APIs",
      "Payment Processing",
      "User Authentication",
    ],
    github: "https://github.com/HeshamElgammal/digital-car-app",
    links: [
      {
        label: "Website",
        href: "https://www.digitalcar.sa/en",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.digitalcar_mobile&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/sa/app/digital-car-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9/id6502263841?l=ar",
      },
    ],
    featured: true,
  },
  {
    title: "Maysan – Recruitment Platform",
    company: "Digital Car",
    position: "Frontend Developer",
    duration: "2026 - Present",
    type: "Part-time",
    description:
      "Built a recruitment platform connecting job candidates with companies, covering both the candidate-facing and company-facing experiences.",
    icon: Briefcase,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    technologies: ["React Native", "RESTful APIs", "Two-sided Marketplace"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.maysan&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/sa/app/maysan/id6759877257?l=ar",
      },
    ],
    featured: true,
  },
  {
    title: "TeeslaTech – Full-Stack Web Platform & Admin Dashboard",
    company: "Freelance",
    position: "Full-Stack Developer",
    duration: "2026",
    type: "Freelance",
    description:
      "Owned the project end-to-end as sole developer — frontend, backend, database, server, and domain setup. Built the public website and admin dashboard in a single Next.js monorepo for shared code and consistent tooling. Developed the backend API with Express.js and modeled data using MongoDB (Mongoose). Deployed and configured the full stack on a Hostinger VPS, including domain and DNS setup for both teeslatech.com and admin.teeslatech.com.",
    icon: Globe,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    technologies: [
      "Next.js",
      "Monorepo",
      "Express.js",
      "MongoDB",
      "Hostinger VPS",
    ],
    links: [
      {
        label: "Website",
        href: "https://teeslatech.com",
      },
      {
        label: "Admin",
        href: "https://admin.teeslatech.com",
      },
    ],
    featured: false,
  },
  {
    title: "DrugGo - Mobile Pharmacy App",
    company: "Freelance",
    position: "Mobile Developer",
    duration: "2023 - Present",
    type: "Freelance",
    description:
      "Developed a mobile application for online pharmacy services, allowing users to browse medications, upload prescriptions, and place orders with ease. Integrated location services for nearby pharmacy suggestions, secure order tracking, and in-app notifications.",
    icon: Pill,
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    technologies: [
      "React Native",
      "Location Services",
      "Order Tracking",
      "In-app Notifications",
    ],
    github: "https://github.com/HeshamElgammal/druggo-app",
    live: "https://play.google.com/store/apps/details?id=com.otc&pcampaignid=web_share",
    featured: false,
  },
  {
    title: "Hike-Time - Outdoor Activity App",
    company: "Freelance",
    position: "Mobile Developer",
    duration: "2023",
    type: "Freelance",
    description:
      "Developed a cross-platform mobile app for hiking enthusiasts to discover and share trails, trips, and outdoor experiences. Features include trail discovery, user reviews, photo sharing, and location-based recommendations.",
    icon: Mountain,
    gradient: "from-green-600 via-emerald-600 to-lime-600",
    technologies: [
      "React Native",
      "Interactive Maps",
      "Route Tracking",
      "Offline Access",
    ],
    github: "https://github.com/HeshamElgammal/hike-time-app",
    featured: false,
  },
  {
    title: "Al-Haram Al-Makki - Educational Platform",
    company: "Misraj Technology",
    position: "Mobile Developer",
    duration: "2025",
    type: "Freelance",
    description:
      "Developed a mobile application for an educational platform offering courses and group interactions for reciters and students. Built using React Native, implemented the courses flow and main pages, and led a redesign of multiple UI components.",
    icon: GraduationCap,
    gradient: "from-amber-500 via-orange-500 to-red-500",
    technologies: [
      "React Native",
      "UI Components",
      "API Integration",
      "Cross-platform",
    ],
    github: "https://github.com/HeshamElgammal/alharam-app",
    featured: false,
  },
  {
    title: "Macqueen – Travel Services App",
    company: "Zeidex",
    position: "Mobile Developer",
    duration: "2023",
    type: "Part-time",
    description:
      "Contributed to a travel platform offering flight booking, hotel accommodation, and chauffeur services. Worked closely with UX designers to translate wireframes into interactive components. Modularized codebase and implemented efficient state management.",
    icon: Plane,
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    technologies: ["React Native", "State Management", "Modular Architecture"],
    github: "https://github.com/HeshamElgammal/macqueen-app",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.zeidex.macqueen&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/sa/app/macqueen-best-hotel-rates/id1495088277",
      },
    ],
    featured: false,
  },
  {
    title: "Oproject Web & Mobile Apps",
    company: "Oproject",
    position: "Frontend Developer",
    duration: "2022 - 2023",
    type: "Full-time",
    description:
      "Built front-end features for multiple projects including Affiliate, Lokle, Glia, and Edactik. Designed user-friendly UIs, integrated third-party APIs, and maintained code quality through peer reviews. Worked on both web and mobile platforms.",
    icon: Smartphone,
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    technologies: ["React.js", "Next.js", "React Native", "Third-party APIs"],
    github: "https://github.com/HeshamElgammal/oproject-apps",
    live: "https://o-projects.org/",
    featured: false,
  },
  {
    title: "E-Commerce Apps – Turkish Stores & Petal Egypt",
    company: "Blue Brain",
    position: "Mobile Developer",
    duration: "2021 - 2022",
    type: "Full-time",
    description:
      "Developed e-commerce applications targeting different markets. Integrated secure payment gateways, user authentication, and responsive product listings. Improved performance using Redux and followed Agile practices for rapid feature delivery.",
    icon: Store,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
    technologies: [
      "React Native",
      "Redux",
      "Payment Gateways",
      "Agile Development",
    ],
    github: "https://github.com/HeshamElgammal/ecommerce-apps",
    live: "https://www.bluebrain-co.com/en",
    featured: false,
  },
];

export const getExperienceLinks = (experience: Experience) => {
  if (experience.links?.length) return experience.links;
  if (experience.live)
    return [{ label: "View Project", href: experience.live }];
  return [];
};
