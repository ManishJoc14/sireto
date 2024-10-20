import { unstable_noStore as noStore } from 'next/cache';

import FeaturedOn from "@/components/Featured";
import AboutUs from "@/components/AboutUs";
import HeroAnimated from "@/components/HeroAnimated";
import PushingLimits from "@/components/PushingLimits";
import { Metadata } from "next";
import React from "react";
// import Video from "next-video";
// import animation from "/videos/Animation2.mp4";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  noStore();
  return (
    <>
      <HeroAnimated />
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
