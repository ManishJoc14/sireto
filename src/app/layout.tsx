import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import type React from "react"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Shireto",
    default: "Shireto - Innovative Design Solutions",
  },
  description:
    "Shireto: Pioneering design solutions for motorsports and beyond. Explore our Formula Bharat 2025 project and more.",
  keywords: ["Shireto", "Formula Bharat", "motorsports", "design", "innovation", "Nextjs"],
  openGraph: {
    title: "Shireto - Innovative Design Solutions",
    description: "Discover cutting-edge designs at Shireto, including our Formula Bharat 2025 project.",
    url: "https://shireto.vercel.app",
    siteName: "Shireto",
    images: [
      {
        url: "https://shireto.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75",
        width: 96,
        height: 96,
        alt: "Shireto Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shireto - Innovative Design Solutions",
    description: "Explore Shireto's cutting-edge designs, including our Formula Bharat 2025 project.",
    images: ["https://shireto.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75"],
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
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

