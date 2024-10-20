"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function About() {
  // Animation variants
  const imageVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const headingVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2 },
    }),
  };

  const paragraphVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2 },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.2 },
    })
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <motion.div
          className="overflow-hidden rounded-lg lg:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          variants={imageVariants}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/team.png"
            alt="Team"
            width={1200}
            height={1000}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-2">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={headingVariants}
              custom={1}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl py-4"
            >
              Meet Our Shireto Team
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={paragraphVariants}
              custom={1}
              className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              We are a dynamic student-led group of motorsport enthusiasts from
              various disciplines within the Thapathali Campus. We aim to
              conceptualise, fabricate, and compete in Formula International
              events with {"Nepal's"} first Formula E car. Our primary objective
              is to establish ourselves as a prominent competitor in the global
              motorsport scene while concurrently promoting and nurturing the
              motorsport culture in Nepal.
            </motion.p>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-start py-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={buttonVariants}
              custom={1}
            >
              <Link
                href="#"
                className="inline-flex w-full sm:w-auto  h-12 items-center justify-center rounded-md bg-brandPrimary px-10 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-rose-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-rose-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
              variants={buttonVariants}
              custom={2}
            >
              <Link
                href="#"
                className="inline-flex  w-full sm:w-auto  h-12 items-center justify-center rounded-md border border-rose-200 bg-white px-10 sm:mx-2 text-sm font-medium shadow-sm transition-colors hover:bg-rose-100 hover:text-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Join Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
