import FeaturedOn from "@/components/Featured";
import Hero from "@/components/hero";
import PushingLimits from "@/components/pushingLimits";
import { Metadata } from "next";
import React from "react";
import Video from "next-video";
import animation from "/videos/Animation2.mp4";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <Video src={animation} />
      <Hero />
      <PushingLimits />
      <FeaturedOn />
    </>
  );
}
