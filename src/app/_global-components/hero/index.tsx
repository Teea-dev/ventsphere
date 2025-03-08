"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  GoggleLogo,
  GoodLeapLogo,
  GrammalyLogo,
  LoomLogo,
  ZippoLogo,
} from "../../../../public/icons";
import { Marquee } from "@/components/magicui/marquee";

// const companies = [
//   { name: "Zippo", component: <ZippoLogo /> },
//   { name: "Grammaly", component: <GrammalyLogo /> },
//   { name: "GoodLeap", component: <GoodLeapLogo /> },
//   { name: "Google", component: <GoggleLogo /> },
//   { name: "Loom", component: <LoomLogo /> },

// ];
// const firstRow = companies.slice(0, companies.length / 2);
// const secondRow = companies.slice(companies.length / 2);

// export function MarqueeDemo() {
//   return (
//     <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//       <div className="mb-4">
//         <p className="text-center text-sm text-muted-foreground">
//           Trusted partnership with 100+ companies
//         </p>
//       </div>

//       <Marquee pauseOnHover className="[--duration:20s]">
//         {firstRow.map((company) => (
//           <div key={company.name} className="mx-8 h-20 w-40">
//             {company.component}
//           </div>
//         ))}
//       </Marquee>

//       <Marquee reverse pauseOnHover className="[--duration:20s]">
//         {secondRow.map((company) => (
//           <div key={company.name} className="mx-8 h-20 w-40">
//             {company.component}
//           </div>
//         ))}
//       </Marquee>

//       <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
//     </div>
//   );
// }
const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-20 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full lg:w-[55%] max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1F253F] leading-tight">
            <TextAnimate animation="slideUp" by="word">
              Providing Support for Startups
            </TextAnimate>
          </h1>

          <h1 className="text-[#6B7280] text-[14px] sm:text-lg font-[400]">
            <TextAnimate animation="fadeIn" by="line" as="p">
              Empowering visionary entrepreneurs with the capital and support
              needed to transform innovative ideas into successful businesses.
            </TextAnimate>
          </h1>

          <div className="flex flex-row gap-6 space-y-4 sm:space-y-5 pt-2">
            <Button className="bg-[#1F253F]  text-white px-6 sm:px-8 py-5 sm:py-6 rounded-2xl text-sm sm:text-base w-fit transition-colors duration-200">
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
                className="lucide lucide-arrow-up-right transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
            <Button className="bg-[#EAE68B]  text-[#1F253F] px-6 sm:px-8 py-5 sm:py-6 rounded-2xl text-sm sm:text-base w-fit  transition-colors duration-200">
              Book a Strategy Call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.59"
                height="6.56"
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

        <div className="w-full sm:w-4/5 lg:w-[45%] mt-8 lg:mt-0">
          <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square">
            <Image
              src="/images/heroImg.webp"
              alt="hero image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-16">
        <p className="font-[16px]">Trusted partnership with 100+ companys</p>
        <div className=" flex items-center justify-between gap-28">
          <ZippoLogo />
          <GrammalyLogo />
          <GoodLeapLogo />
          <GoggleLogo />
          <LoomLogo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
