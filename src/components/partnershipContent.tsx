"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SponsersCarousel from "@/components/sponsersCarousel";

const benefits = [
  "Global exposure through Formula Student Events.",
  "Promote motorsports culture & inspire STEM students.",
  "Directly engage with talented students.",
  "Access to a diverse talent pool for recruitment.",
  "Collaborate on R&D projects with expertise in simulation and engineering.",
  "Foster relationship with educational institutions to bridge industry – academia gap.",
  "Platform to showcase support for international college-level projects while fulfilling CSR objectives.",
];

const supportOptions = [
  {
    title: "Financial Support",
    description:
      "Our partners can provide critical financial support during various stages of the project to help us achieve our goals.",
  },
  {
    title: "Material & Equipment",
    description:
      "Partners can assist us by providing necessary materials and equipment, such as batteries, motor controllers, and BMS.",
  },
  {
    title: "Mentorship Support",
    description:
      "Partners can offer mentorship and guidance from experienced professionals in the industry.",
  },
];

export default function PartnershipContent() {
  const headerRef = useRef(null);
  const benefitsRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const benefitVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  return (
    <div className="w-full container mx-auto p-6 md:p-8 lg:p-10">
      {/* Header Section */}
      <motion.h1
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={headerVariants}
        className="text-3xl text-center py-4 text-gray-900 dark:text-gray-200 font-bold mb-6"
      >
        HOW YOU CAN SUPPORT US
      </motion.h1>

      {/* Support Options */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
      >
        {supportOptions.map((option, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            custom={i}
            className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-8"
          >
            <h2 className="text-xl font-bold mb-4">{option.title}</h2>
            <p className="text-md">{option.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Partner Benefits Section */}
      <div
        ref={benefitsRef}
        className="grid lg:grid-cols-5 w-full mx-auto p-6 my-10 md:p-8 lg:p-10"
      >
        <motion.div
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={benefitVariants}
          className="col-span-5 lg:col-span-2 w-full"
        >
          <Image
            src="/why.png"
            alt="why"
            height={400}
            width={400}
            className="w-4/5 rounded-lg"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={benefitVariants}
          className="col-span-5 lg:col-span-3"
        >
          <h1 className="text-4xl text-brandPrimary font-bold mb-6 pt-10 pb-2">
            Partner Benefit with Shireto
          </h1>
          <ul className="space-y-4 lg:space-y-2">
            {benefits.map((benefit, i) => (
              <motion.li
                key={i}
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                custom={i}
                className="flex items-start"
              >
                {listStyleSvg()}
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Sponsors Section */}
      <SponsersCarousel />
    </div>
  );
}

function listStyleSvg() {
  return (
    <svg
      stroke="red"
      fill="red"
      strokeWidth="0"
      viewBox="0 0 512 512"
      className="text-2xl mx-2 inline-block text-theme"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"></path>
    </svg>
  );
}
