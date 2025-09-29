import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hesham Elgammal - Full Stack Developer',
  description:
    'Full Stack Developer specializing in React Native mobile apps and Next.js web development. Creating robust software solutions and digital experiences.',
  keywords: [
    'portfolio',
    'developer',
    'react native',
    'nextjs',
    'mobile development',
    'web development',
    'javascript',
    'typescript',
    'hesham elgammal',
  ],
  authors: [{ name: 'Hesham Elgammal' }],
  creator: 'Hesham Elgammal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://heshamelgammal.dev',
    title: 'Hesham Elgammal - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React Native mobile apps and Next.js web development. Creating robust software solutions and digital experiences.',
    siteName: 'Hesham Elgammal Portfolio',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
