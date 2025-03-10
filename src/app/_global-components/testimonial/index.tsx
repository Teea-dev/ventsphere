"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TextAnimate } from "@/components/magicui/text-animate";
import {
  InvestmentIcon,
  MentorshipIcon,
  PartnershipIcon,
  SeedFundingIcon,
} from "../../../../public/icons";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const Testimonial = () => {
  const testimonials = [
    {
      icon: <SeedFundingIcon />,
      title: "Seed Funding",
      description:
        "We provide initial capital to early-stage startups, helping them turn innovative ideas into viable businesses.",
      background: "url('/public/images/backgroundImg.png')", // Add your image path here
    },
    {
      icon: <InvestmentIcon />,
      title: "Post-Investment Support",
      description:
        "We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.",
      background: "url('/path/to/investment-support-bg.jpg')", // Add your image path here
    },
    {
      icon: <MentorshipIcon />,
      title: "Mentorship and Coaching",
      description:
        "We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.",
      background: "url('/path/to/mentorship-bg.jpg')", // Add your image path here
    },
    {
      icon: <PartnershipIcon />,
      title: "Strategic Partnerships",
      description:
        "Access our extensive network to forge partnerships that can open doors and drive meaningful growth for your business.",
      background: "url('/path/to/partnerships-bg.jpg')", // Add your image path here
    },
  ];

  const firstRow = testimonials.slice(0, testimonials.length);
  const secondRow = testimonials.slice(testimonials.length / 2);
  const ReviewCard = ({
    img,
    title,
    description,
  }: {
    img: string;
    title: string;
    description: string;
  }) => {
    return (
      <div
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <div className="text-sm font-medium dark:text-white">{title}</div>
          </div>
        </div>
        <div className="mt-2 text-sm">{description}</div>
      </div>
    );
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            TESTIMONIAL
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] text-wrap leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Success Stories from Visionary Founders
            </TextAnimate>
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee   className="[--duration:10s]  ">
            {firstRow.map((testimonials) => (
              <ReviewCard img={""} key={testimonials.title} {...testimonials} />
            ))}
          </Marquee>
        </div>

        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard img="" key={review.title} {...review} />
            ))}
          </Marquee> */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
        {/* </div> */}
        {/* <div className="w-full mt-6 sm:mt-10">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div
                  className="rounded-2xl flex p-10 justify-between gap-3"
                  style={{
                    backgroundImage: testimonial.background,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div>{testimonial.icon}</div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#1D3D3A] mb-7">
                      {testimonial.title}
                    </h3>
                    <p className="font-light text-[#6B7280]">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
