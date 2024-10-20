"use client";
import Image from "next/image";
import {  motion } from "framer-motion";
import React from "react";

const data = [
  {
    title: "Chassis",
    items: [
      ["Frame", "90k"],
      ["Suspension System", "400k"],
      ["Steering System", "40k"],
      ["Miscellaneous", "150k"],
    ],
  },
  {
    title: "Brakes and Wheels",
    items: [
      ["Tyres with rim", "200k"],
      ["Brakes system", "55k"],
      ["Wheel Hub", "20k"],
      ["Consumables", "50k"],
    ],
  },
  {
    title: "Powertrain",
    items: [
      ["Battery & BMS", "500k"],
      ["Motors and Controllers", "500k"],
      ["Electrical System", "300k"],
      ["Drivetrain", "300k"],
    ],
  },
  {
    title: "Logistics",
    items: [
      ["Travel Expenses", "180k"],
      ["Shipping", "200k"],
      ["Food and Lodging", "100k"],
      ["Participating", "150k"],
    ],
  },
  {
    title: "Composites",
    items: [
      ["Glass Fibers & resin", "47k"],
      ["Carbon Fiber", "49k"],
      ["Mold", "30k"],
      ["Paint & graph", "55k"],
      ["Miscellaneous", "15k"],
    ],
  },
  {
    title: "Safety Equipments",
    items: [
      ["Riding Gears", "150k"],
      ["PPE", "50k"],
      ["Driver Harness", "5k"],
    ],
  },
];

export default function FormulaBharat() {

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const costCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const costVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const projectBharatImages = [
    "back-1",
    "front-1",
    "front-2",
    "side-1",
    "side-expo",
    "top-expo",
    // "side-2",
  ];

  return (
    <div className="w-full mx-auto">
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-200 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={headerVariants}
              custom={1}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              FORMULA BHARAT 2025
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={headerVariants}
              custom={2}
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            >
              Discover the future of Indian motorsports with our cutting-edge
              formula-style vehicle design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
          {projectBharatImages.map((design, i) => (
            <motion.div
              key={i}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              custom={i}
            >
              <Image
                src={`/project_bharat_2025_Designs/${design}.png`}
                alt="Formula Bharat 2025 Design"
                width={600}
                height={400}
                className="rounded-lg object-cover hover:scale-[1.02] transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cost Breakdown */}
      <div className="container py-12 md:py-20 lg:py-24">
        <h1 className="text-3xl font-bold mb-6">Cost Breakdown</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((section, i) => (
            <motion.div
              key={i}
              variants={costCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              custom={i}
              className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <div className="grid grid-cols-2 gap-y-3">
                {section.items.map(([name, cost], j) => (
                  <React.Fragment key={j}>
                    <div>{name}</div>
                    <div className="text-right">{cost}</div>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center pb-10">
          <motion.h2
            variants={costVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger animation only once
            custom={1}
            className="text-2xl font-bold"
          >
            Estimated Total Cost
          </motion.h2>
          <motion.p
            variants={costVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger animation only once
            custom={2}
            className="text-4xl font-bold"
          >
            36.5L
          </motion.p>
        </div>
      </div>
    </div>
  );
}
