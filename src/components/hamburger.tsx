"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const navLinks = {
    home: "/",
    projects: "/projects",
    partnership: "/partnership",
    connect: "/connect",
  };

  const handleScrollToDiv = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - 100,
        behavior: "smooth",
      });
      toggleMenu();
    }
  };

  const listItemVariants = {
    closed: {
      x: 100,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div
        id="hamburger"
        onClick={toggleMenu}
        className="group cursor-pointer z-[500] h-6 w-8 flex flex-col items-end gap-y-2 relative sm:hidden"
      >
        <div
          className={`h-0.5 w-8 rounded-sm bg-secondary absolute top-0 transition-all duration-500 ${
            isOpen ? "animate-hamburgerOpenTop" : "animate-hamburgerCloseTop"
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 rounded-sm bg-secondary absolute top-2 transition-all duration-500 ${
            isOpen
              ? "animate-hamburgerOpenMiddle"
              : "animate-hamburgerCloseMiddle"
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 rounded-sm bg-secondary absolute top-4 transition-all duration-500 ${
            isOpen
              ? "animate-hamburgerOpenBottom"
              : "animate-hamburgerCloseBottom"
          }`}
        ></div>
      </div>
      <ul
        className={`${
          isOpen ? "right-0" : "-right-52"
        } transition-all duration-300 ease-out flex flex-col py-36 px-12 fixed z-50 min-h-screen w-52 top-0 bg-slate-800 sm:hidden gap-8`}
      >
        {Object.entries(navLinks).map(([item, path], i) => (
          <motion.li
            variants={listItemVariants}
            animate={isOpen ? "opened" : "closed"}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            key={i}
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
    </>
  );
}
