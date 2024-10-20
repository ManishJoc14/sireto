"use client";
import Image from "next/image";
import { motion} from "framer-motion";

const data = [
  {
    src: "/passionDriven.png",
    alt: "Passion",
    title: "Passion Driven",
    description: "Relentless Pursuit",
  },
  {
    src: "/innovativeMind.png",
    alt: "Innovative",
    title: "Innovative Minds",
    description: "Pushing Boundaries",
  },
  {
    src: "/collaborative.png",
    alt: "Collaborative",
    title: "Collaborative Spirit",
    description: "Synergy in Action",
  },
  {
    src: "/ResilientDetermination.png",
    alt: "Resilient",
    title: "Resilient Determination",
    description: "Overcoming Challenges",
  },
];

export default function PushingLimits() {
  // variants for the heading and paragraph
  const headingVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2 },
    }),
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2 + 0.4 },
    }),
  };

  // variants for card item
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F8D7DA]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            variants={headingVariants}
            custom={1}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Pushing Limits, Chasing Victory
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            variants={headingVariants}
            custom={2}
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
          >
            Explore the passion and dedication behind our {"team's"} success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
              variants={cardVariants}
              custom={i}
              className="flex flex-col items-center justify-between"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={180}
                height={180}
                className="rounded-full"
              />
              <div className="space-y-1">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={titleVariants}
                  custom={1}
                  className="text-lg font-bold"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={titleVariants}
                  custom={2}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
