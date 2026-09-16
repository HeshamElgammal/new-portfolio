import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heshamelgammal.dev"),
  title: `${brand.name} | ${brand.tagline}`,
  description: brand.description,
  keywords: [
    "freelance developer",
    "react native agency",
    "next.js development",
    "mobile app development",
    "full stack freelancer",
    "web development egypt",
    "hesham elgammal",
    "Hesham Studio",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heshamelgammal.dev",
    title: `${brand.name} | ${brand.tagline}`,
    description: brand.description,
    siteName: brand.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
