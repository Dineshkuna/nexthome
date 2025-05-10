"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";


const navItems = [
  { name: "About Us", href: "/about", hasDropdown: false },
  { name: "Our Capabilities", href: "/capabilities", hasDropdown: false },
  { name: "Investors", href: "/investors", hasDropdown: false },
  { name: "Products", href: "/products", hasDropdown: false },
  { name: "Careers", href: "/careers", hasDropdown: false },
  { name: "Media", href: "/media", hasDropdown: false },
  { name: "Responsibility", href: "/responsibility", hasDropdown: false },
  { name: "Contact", href: "/contact", hasDropdown: false },
];


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="sr-only">Eugia</span>
            <div className="text-[#5e35b1] font-semibold text-2xl">
              eugia
            </div>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[#5e35b1] flex items-center"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </Link>
              {item.hasDropdown && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href={`${item.href}/overview`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Overview
                  </Link>
                  <Link
                    href={`${item.href}/details`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Details
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/search" className="p-2 text-gray-600 hover:text-[#5e35b1]">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/account" className="p-2 ml-2 text-gray-600 hover:text-[#5e35b1]">
            <User className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-[#5e35b1]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="block rounded-lg py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#5e35b1]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="flex items-center mt-4 border-t pt-4">
            <Link 
              href="/search" 
              className="rounded-lg py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#5e35b1] flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Link>
            <Link 
              href="/account" 
              className="rounded-lg py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#5e35b1] flex items-center ml-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-2" />
              Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}