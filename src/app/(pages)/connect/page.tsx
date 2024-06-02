import { Metadata } from "next";
import React from "react";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
  title: "Connect",
};

export default function Connect() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 grid items-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and {"we'll"} get back to you as soon as
            possible.
          </p>
        </div>
        <form className="space-y-10 py-10">
          <div className="flex gap-2 items-center">
            <label htmlFor="name" className="text-sm font-medium w-[80px]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border-b-2 rounded-t-sm focus:px-3 transition-all duration-300  grow border-b-brandPrimary  py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandPrimary dark:bg-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="email" className="text-sm font-medium w-[80px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border-b-2 rounded-t-sm focus:px-3 transition-all duration-300 grow border-b-brandPrimary  py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandPrimary dark:bg-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div className="flex gap-1 items-center">
            <label htmlFor="message" className="text-sm font-medium w-[80px] self-start py-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="border-b-2 rounded-t-sm focus:px-3 transition-all duration-300 grow border-b-brandPrimary  py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brandPrimary dark:bg-gray-800 dark:text-gray-200"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full py-6 hover:scale-[0.98] hover:bg-brandPrimary transition-all duration-300">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
