"use client"; 
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterUi() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false }); // Trigger  when in view

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }, // Delay based on the index
    }),
  };

  return (
    <footer className="bg-gray-900 py-6 text-gray-400" ref={ref}>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0} // Delay for the first text
            className="text-sm py-1"
          >
            &copy; 2024 Team Shireto. All rights reserved.
          </motion.p>
          <div className="flex flex-col gap-1">
            {["TEAM SHIRETO", "IOE Thapathali Campus,", "Kathmandu, Nepal"].map((text, i) => (
              <motion.p
                key={i}
                variants={textVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i + 1} // Delay for the subsequent texts
                className="text-sm"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
        <nav className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          {["Privacy", "Terms", "Contact", "Join"].map((linkText, i) => (
            <motion.div
              key={i}
              variants={textVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 4} // Further delay for navigation links
            >
              <Link href="/" className="text-sm hover:text-gray-200" prefetch={false}>
                {linkText}
              </Link>
            </motion.div>
          ))}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:text-gray-200" prefetch={false} aria-label="Twitter">
              <TwitterIcon className="h-5 w-5 transition-transform transform hover:scale-110" />
            </Link>
            <Link href="/" className="text-sm hover:text-gray-200" prefetch={false} aria-label="Facebook">
              <FacebookIcon className="h-5 w-5 transition-transform transform hover:scale-110" />
            </Link>
            <Link href="/" className="text-sm hover:text-gray-200" prefetch={false} aria-label="LinkedIn">
              <LinkedinIcon className="h-5 w-5 transition-transform transform hover:scale-110" />
            </Link>
          </div>
        </nav>
      </div>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={8} // Further delay for the final text
        className="text-sm text-center py-4"
      >
        Made with ❤️ by Manish
      </motion.p>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
