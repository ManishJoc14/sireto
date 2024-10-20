import React from "react";
import FeaturedOn from "@/components/FeaturedOn";
import AboutUs from "@/components/AboutUs";
import AnimatedHero from "@/components/AnimatedHero";
import PushingLimits from "@/components/PushingLimitsUi";
import { Metadata } from "next";
// import Video from "next-video";
// import animation from "/videos/Animation2.mp4";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <AnimatedHero />
      {/* <Video src={animation} /> */}
      {/* <video className="w-full h-full" autoPlay muted loop>
        <source src="/Animation2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <AboutUs />
      <PushingLimits />
      <FeaturedOn />
    </>
  );
}
