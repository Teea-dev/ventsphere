"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="w-full">
      <nav className="w-full px-4 md:px-20 py-4 flex flex-wrap justify-between items-center bg-white relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="px-3 py-1 rounded">
            <Image
              src="/images/logo.webp"
              alt="Ventsphere logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-[16px] space-x-6">
            {[
              { label: "Service", id: "service" },
              { label: "About Us", id: "about-us" },
              { label: "Benefits", id: "benefits" },
              { label: "FAQ?", id: "faq" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-[#1F253F] text-[14px] font-medium hover:text-gray-900 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4">
          <Link
            href="#strategy-call"
            className="text-[#1F253F] text-[14px] font-medium hover:text-gray-900 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("strategy-call");
            }}
          >
            Book a Strategy Call
          </Link>
          <Button className="bg-[#1F253F] rounded-[12px] text-white text-[12px] px-6">
            Partner with us
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
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              {[
                { label: "Service", id: "service" },
                { label: "About Us", id: "about-us" },
                { label: "Benefits", id: "benefits" },
                { label: "FAQ?", id: "faq" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-50"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white w-full">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
