import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shireto",
    default: "Shireto",
  },
  description: "Made with nextjs by Manish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
