"use client";
import React, { useEffect, useState } from "react";
import Hamburger from "./hamburger";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  // resources remaining
  const navLinks = {
    home: "/",
    projects: "/projects",
    partnership: "/partnership",
    connect: "/connect",
  };

  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handlePageScroll = () => {
      const currentScrollY = window.scrollY;
      // while moving upward, it should be sticky
      // if current scroll is greater then prev scroll, it is moving down
      setIsSticky(currentScrollY > prevScrollY ? false : true);
      setPrevScrollY(currentScrollY);
      if (currentScrollY < 40) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handlePageScroll);

    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [prevScrollY]);

  return (
    <>
      <motion.header
        variants={container}
        initial="hidden"
        animate="show"
        className={`flex backdrop-blur-md bg-slate-900 px-10 sm:px-12 py-4 sm:py-5 items-center justify-between text-slate-100 z-50 transition-all duration-500 ease-in-out overflow-x-clip sticky ${
          isSticky ? "top-0 left-0 shadow-lg" : "-top-24 left-0"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold flex justify-center items-center"
          prefetch={false}
        >
          <Image src="/logo.png" height={40} width={40} alt="logo" />
          Shireto
        </Link>

        {/* Navigation links */}
        <nav className="flex items-baseline gap-8">
          <ul className="hidden sm:flex sm:gap-7" id="menu">
            {Object.entries(navLinks).map(([item, path], i) => (
              <motion.li
                variants={childVariants}
                key={i + item}
                className="cursor-pointer text-md font-medium"
              >
                <Link href={path}>
                  <span
                    className={`hover:text-brandPrimary ${
                      pathname === path && "text-brandPrimary"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                    {/* Capitalize first letter */}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <Hamburger />
        </nav>
      </motion.header>
    </>
  );
}