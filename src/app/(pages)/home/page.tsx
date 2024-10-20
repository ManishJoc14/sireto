import FeaturedOn from "@/components/featured";
import About from "@/components/about";
import HeroAnimated from "@/components/heroAnimated";
import PushingLimits from "@/components/pushingLimits";
import { Metadata } from "next";
import React from "react";
// import Video from "next-video";
// import animation from "/videos/Animation2.mp4";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <HeroAnimated />
      {/* <Video src={animation} /> */}
      {/* <video className="w-full h-full" autoPlay muted loop>
        <source src="/Animation2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <About />
      <PushingLimits />
      <FeaturedOn />
    </>
  );
}
