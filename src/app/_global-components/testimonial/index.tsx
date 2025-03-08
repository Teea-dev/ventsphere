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
import { Button } from "@/components/ui/button";

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

        <div className="w-full mt-6 sm:mt-10">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;