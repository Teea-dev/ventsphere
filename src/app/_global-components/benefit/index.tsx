"use client";
import React from "react";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Benefit = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#fff] flex flex-col gap-36">
      <div className=" gap-32 mx-auto flex flex-row items-center ">
        <div className="mt-4 sm:mt-6 flex flex-col justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-medium text-[#1F253F] leading-tight  max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Unlocking Potential for Ambitious Startups
            </TextAnimate>
          </h2>
          <p className="text-[#6B7280]">
            We empower startups with essential resources and guidance to thrive.
            Our tailored support provides not only capital but also strategic
            insights, mentorship, and access to a vast network of industry
            experts.
          </p>
          <div className=" space-y-4 sm:space-y-5 pt-2">
            <Button className="bg-[#1F253F]  text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base w-fit transition-colors duration-200">
              Partner with Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/potential.png"
              alt="hero image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="gap-32 mx-auto flex flex-row-reverse items-start">
        <div className="mt-4 sm:mt-6 flex flex-col justify-between gap-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-medium text-[#1F253F] leading-tight  max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Partner with seasoned professionals
            </TextAnimate>
          </h2>
          <p className="text-[#6B7280]">
            We bring extensive industry experience and insights. Our team is
            dedicated to providing you with tailored advice and mentorship,
            ensuring you navigate challenges effectively and capitalize on
            opportunities to drive your startup's success.
          </p>
          <div className="flex flex-row gap-6  space-y-4 sm:space-y-5 pt-2">
            <Button className="bg-[#1F253F]  text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base w-fit transition-colors duration-200">
              Partner with Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/partner.png"
              alt="hero image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
