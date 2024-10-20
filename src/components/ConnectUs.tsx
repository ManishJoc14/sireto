"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.2 },
  }),
};

const buttonVariants = {
  hidden: { scaleX: 0 }, // Start hidden with no scale
  visible: {
    scaleX: 1, // Scale to full size when visible
    transition: { duration: 0.3, delay: 1 },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
};

export default function ConnectUs() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 grid items-center">
      <div className="max-w-md mx-auto space-y-6 p-8 flex flex-col items-baseline">
        {/* Header Section with Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={headerVariants}
          viewport={{ once: true }} // Trigger animation only once
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold">Get in Touch</h2>
        </motion.div>

        {/* Paragraph with Animation */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={paragraphVariants}
          viewport={{ once: true }}
          className="text-gray-500 dark:text-gray-400"
        >
          Fill out the form below and {"we'll"} get back to you as soon as
          possible.
        </motion.p>

        {/* Contact Form Section */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Trigger animation only once
          className="space-y-10 py-10 w-full"
        >
          {["name", "email", "message"].map((field, i) => (
            <motion.div
              key={field}
              variants={inputVariants}
              custom={i}
              className="flex items-baseline gap-4"
            >
              <label htmlFor={field} className="text-sm font-medium w-[80px]">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  placeholder="Enter your message"
                  className="border-b-2 w-full rounded-t-sm focus:px-3 transition-all duration-300 grow border-b-brandPrimary py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandPrimary dark:bg-gray-800 dark:text-gray-200"
                  rows={4}
                  required
                />
              ) : (
                <input
                  type={field}
                  id={field}
                  placeholder={`Enter your ${field}`}
                  className="border-b-2 w-full rounded-t-sm focus:px-3 transition-all duration-300 grow border-b-brandPrimary py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandPrimary dark:bg-gray-800 dark:text-gray-200"
                  required
                />
              )}
            </motion.div>
          ))}

          {/* Submit Button with Animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={buttonVariants}
            viewport={{ once: true }} // Trigger animation only once
            className="overflow-hidden"
            whileHover="hover" // Attach hover effect
          >
            <Button
              type="submit"
              className="w-full py-6 hover:bg-brandPrimary transition-all duration-300"
            >
              Submit
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
