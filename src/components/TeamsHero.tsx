"use client";

import { motion } from 'framer-motion';

export const TeamsHero = () => {
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
    };

    return (
        <div className="w-full mx-auto bg-gray-50 dark:bg-gray-900">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[url(/background_images/gauze-05.jpeg)] bg-center bg-cover bg-no-repeat">
                <div className="container px-4 md:px-6">
                    <motion.h1
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white"
                        initial="hidden"
                        animate="visible"
                        variants={headerVariants}
                    >
                        Meet Our Team
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-center text-gray-300 md:text-xl"
                        initial="hidden"
                        animate="visible"
                        variants={headerVariants}
                    >
                        The passionate individuals behind our success
                    </motion.p>
                </div>
            </section>
        </div>
    );
}