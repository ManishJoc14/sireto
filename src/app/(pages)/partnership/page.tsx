import Sponsers from "@/components/Sponsers";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "Partnership",
};
export default function Partnership() {
  return (
    <>
      <div className="w-full container mx-auto p-6 md:p-8 lg:p-10">
        <h1 className="text-3xl text-center py-4 text-gray-900 dark:text-gray-200 font-bold mb-6">
          HOW YOU CAN SUPPORT US
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {/* box-1 */}
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Financial Support</h2>
            <p className="text-sm">
              Our partners can provide critical financial support during various
              stages of the project to help us achieve our goals.
            </p>
          </div>
          {/* box-2 */}
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Material & Equipment</h2>
            <p className="text-sm">
              Shiretds team creates most of the components in-house, but our
              partners can assist us by providing the necessary materials and
              equipment for the fabrication of the electric car. This includes
              essential electrical components like batteries, motor controllers,
              and BMS.
            </p>
          </div>
          {/* box-3 */}
          <div className="bg-rose-50 hover:bg-brandPrimary transition-all duration-300 hover:text-white dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Mentorship Support</h2>
            <p className="text-sm">
              Our partners can provide us with mentorship and guidance from
              experienced professionals in the industry, allowing us to learn
              and grow from their knowledge and expertise.
            </p>
          </div>
        </div>
        {/* parrtner benefit section starts here */}
        <div className="grid lg:grid-cols-5 w-full mx-auto p-6 my-10 md:p-8 lg:p-10">
          <div className="col-span-5 lg:col-span-2 w-full">
            <Image
              src="/why.png"
              alt="why"
              height={400}
              width={400}
              className="w-4/5 rounded-lg"
            />
          </div>
          <div className="col-span-5 lg:col-span-3">
            <h1 className="text-4xl text-brandPrimary font-bold mb-6 pt-10 pb-2">
              Partner Benefit with Shireto
            </h1>
            <ul className="space-y-4 lg:space-y-2 ">
              <li>
                {listStyleSvg()}Global exposure through Formula Student Events.
              </li>
              <li>
                {listStyleSvg()}Promote motorsports culture & inspire STEM
                students.
              </li>
              <li>{listStyleSvg()}Directly engage with talented students.</li>
              <li>
                {listStyleSvg()}Access to a diverse talent pool for recruitment.
              </li>
              <li>
                {listStyleSvg()}
                Collaborate on R&D projects with expertise in simulation and
                engineering.
              </li>
              <li>
                {listStyleSvg()}
                Foster relationship with educational institutions tobridge
                industry – academia gap.
              </li>
              <li>
                {listStyleSvg()}
                Platform to showcase support for International college level
                project while fulfilling CSR objectives.
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsers starts here */}
        <Sponsers />
      </div>
    </>
  );
}

function listStyleSvg() {
  return (
    <>
      <svg
        stroke="red"
        fill="red"
        stroke-width="0"
        viewBox="0 0 512 512"
        className="text-2xl mx-2 inline-block text-theme"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M376.2 224H268l52.4-186.9c.9-4.5-4.6-7.1-7.2-3.4L129.5 274.6c-3.8 5.6-.2 13.4 6.3 13.4H244l-52.4 186.9c-.9 4.5 4.6 7.1 7.2 3.4l183.7-240.8c3.7-5.7.2-13.5-6.3-13.5z"></path>
      </svg>
    </>
  );
}
