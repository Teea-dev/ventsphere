import React from "react";
import {
  DecorBottomLeft,
  DecorBottomRight,
  DecorTopLeft,
  DecorTopRight,
} from "../../../../public/icons";

const WaitlistBanner = () => {
  return (
    <div className="relative  w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden bg-white">
      <div className="relative bg-[#1F253F] rounded-4xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16 text-center overflow-hidden">
        {/* Top Right SVG */}
        <div className="absolute  top-5 right-10">
          <DecorTopRight />
        </div>

        {/* Bottom Right SVG */}
        <div className="absolute bottom-5 right-10">
          <DecorBottomRight />
        </div>

        {/* Top Left SVG */}
        <div className="absolute top-5 left-10">
          <DecorTopLeft />
        </div>

        {/* Bottom Left SVG */}
        <div className="absolute bottom-5 left-10">
          <DecorBottomLeft />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
            Let's Partner for Your
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Startup Success!
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-base mb-6 sm:mb-8">
            Join us in transforming your startup vision into reality!
          </p>

          <button
            className="bg-[#EAE68B] text-[#1F253F] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium 
            hover:bg-teal-50 transition-all duration-200 
            inline-flex items-center justify-center group
            text-sm sm:text-base
            shadow-sm hover:shadow-md
            w-full sm:w-auto"
          >
            Partner With Us
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-2 h-2 transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                d="M4.56034 0.0749931C4.65678 0.0754361 4.74913 0.113941 4.81732 0.182131C4.88551 0.250321 4.92402 0.342679 4.92446 0.439113L4.92446 3.87421C4.92619 3.9231 4.91805 3.97185 4.90053 4.01753C4.883 4.06322 4.85646 4.1049 4.82248 4.14011C4.7885 4.17531 4.74777 4.20331 4.70273 4.22243C4.6577 4.24155 4.60927 4.2514 4.56034 4.25141C4.51141 4.25141 4.46298 4.24155 4.41795 4.22243C4.37291 4.20331 4.33219 4.17531 4.2982 4.14011C4.26422 4.1049 4.23768 4.06322 4.22016 4.01753C4.20264 3.97185 4.1945 3.9231 4.19622 3.87421L4.19622 1.3185L0.695862 4.81886C0.627534 4.88718 0.53486 4.92557 0.43823 4.92557C0.341599 4.92557 0.248926 4.88718 0.180598 4.81886C0.11227 4.75053 0.0738833 4.65786 0.0738833 4.56122C0.0738831 4.46459 0.11227 4.37192 0.180598 4.30359L3.68096 0.803233L1.12525 0.803233C1.0309 0.799903 0.941531 0.760082 0.875965 0.69216C0.810398 0.624238 0.773755 0.533518 0.773755 0.439113C0.773755 0.344708 0.810398 0.253988 0.875965 0.186066C0.941532 0.118144 1.0309 0.0783236 1.12525 0.0749933L4.56034 0.0749931Z"
                fill="#1F253F"
              />
            </svg>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBanner;
