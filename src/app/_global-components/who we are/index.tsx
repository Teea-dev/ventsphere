"use client";
import React from "react";

import { TextAnimate } from "@/components/magicui/text-animate";
import { IdeaIcon, RouteIcon } from "../../../../public/icons";

const WhoWeAre = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#fff]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center  w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2 ">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            WHO WE ARE
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-medium text-[#1F253F] leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Your Dedicated Partner In Startup Success
            </TextAnimate>
          </h2>
        </div>

        <div className="w-full mt-6 sm:mt-10 flex justify-between items-center gap-7  ">
          <div className="bg-[#1F253F] rounded-2xl p-16 flex flex-col justify-between gap-3">
            <div className="mb-28">
              <RouteIcon />
            </div>
            <h3 className=" font-medium text-white mb-7">Our Mission</h3>
            <p className="font-light text-white ">
              Our mission is to support startups by providing not only financial
              investment but also strategic guidance, mentorship, and access to
              a robust network of industry experts.
            </p>
          </div>
          <div className="bg-[#1D3D3A] rounded-2xl p-16 flex flex-col justify-between gap-3 ">
            <div className="mb-28">
              <IdeaIcon />
            </div>
            <h3 className=" font-medium text-white mb-7">Our Vision</h3>
            <p className="font-light text-white">
              To be the leading venture capital agency that fuels innovation and
              empowers entrepreneurs, creating a thriving ecosystem where
              visionary startups can flourish and make a lasting impact on the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
