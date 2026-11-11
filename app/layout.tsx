import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { brand } from '@/lib/brand'
import { profileSeo } from '@/lib/profile-seo'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
})

const ogImageUrl = `${brand.siteUrl}${brand.ogImage}`

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
  keywords: [
    brand.name,
    profileSeo.givenName,
    profileSeo.familyName,
    brand.jobTitle,
    'React Native developer Egypt',
    'Next.js developer Cairo',
    'freelance frontend developer',
    'mobile app developer',
    profileSeo.education.institution,
    ...profileSeo.skills.slice(0, 8),
    brand.studioName,
  ],
  authors: [{ name: brand.name, url: brand.siteUrl }],
  creator: brand.name,
  alternates: {
    canonical: brand.siteUrl,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: brand.siteUrl,
    title: `${brand.name} | ${brand.jobTitle}`,
    description: brand.description,
    siteName: brand.name,
    images: [
      {
        url: `${brand.siteUrl}${brand.profileImage}`,
        width: 1200,
        height: 1200,
        alt: brand.profileImageAlt,
      },
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: brand.profileImageAlt,
      },
    ],
    firstName: profileSeo.givenName,
    lastName: profileSeo.familyName,
    username: 'hesham-elgammal',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.name} | ${brand.jobTitle}`,
    description: brand.description,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="me" href={brand.linkedin} />
        <link rel="me" href={brand.github} />
        <link rel="preload" as="image" href={brand.profileImage} />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
