import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shireto",
    default: "Shireto",
  },
  description: "Made with nextjs by Manish",
  keywords: ["shireto", "Nextjs"],
  openGraph: {
    images: [
      {
        url: "https://sireto.vercel.app/_next/image?url=%2Flogo.png&w=96&q=75",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
  );
}
