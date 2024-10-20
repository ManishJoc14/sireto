"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedOn() {
 
  const headingVariants = {
    hidden: { y: -40, opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.2 },
    }),
  };

  const carouselVariants = {
      hidden: { y: 40, opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: i * 0.2 + 0.4 },
      }),
  };

  const featured = [
    "DekhaPadi",
    "Kantipur",
    "NayaPatrika",
    "NepalLive",
    "OnlineKhabar",
    "RatoPati",
    "RONB",
    "MountainTelevision",
  ];

  return (
    <div className="w-full mx-auto p-6 md:p-8 lg:p-10">
      <section className="w-full py-16 md:py-28 lg:py-36">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
              variants={headingVariants}
              custom={1} 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured By
            </motion.h2>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
              variants={headingVariants}
              custom={2} 
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Trusted by the best companies in the industry.
            </motion.p>
          </div>

          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }} 
           variants={carouselVariants}
           custom={1}
          >
            <Carousel className="w-full max-w-6xl py-5">
              <CarouselContent>
                {featured.map((featuredOn, i) => (
                  <CarouselItem
                    key={i}
                    className="md:basis-1/2 lg:basis-1/3 bg-rose-50 mx-3 rounded-lg py-6 flex justify-center"
                  >
                    <Image
                      src={`/featured/${featuredOn}.jpg`}
                      width={200}
                      height={100}
                      alt="featured Logo"
                      className="aspect-[2/1] mix-blend-multiply overflow-hidden rounded-lg object-contain object-center"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
