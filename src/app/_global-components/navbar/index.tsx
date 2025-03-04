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

  return (
    <div className="w-full">
      <nav className="w-full px-4 md:px-20 py-4 flex flex-wrap justify-between items-center bg-white relative">
        <div className="flex items-center justify-between space-x-2 w-lg">
          <div className="px-3 py-1 rounded">
            <Image
              src="/images/logo.webp"
              alt="Ventsphere logo"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center text-[16px] space-x-6">
              {["Service", "About Us", "Benefits", "FAQ?"].map((item) => (
                <Link
                  key={item}
                  href={`/`}
                  className="text-[#1F253F] text-[14px] font-medium hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/`}
            className="text-[#1F253F] text-[14px] font-medium hover:text-gray-900 transition-colors"
          >
            Book a Strategy Call
          </Link>
          <Button className="hidden md:flex bg-[#1F253F]  text-white text-[12px] px-6">
            Partner with us
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-white border-t">
            <div className="flex flex-col space-y-4 py-4">
              {["Service", "About Us", "Benefits", "FAQ?"].map((item) => (
                <Link
                  key={item}
                  href={`/`}
                  className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="px-4">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white w-auto">
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
