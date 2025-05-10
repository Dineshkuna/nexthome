"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Would handle subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-r from-[#5e35b1]/90 to-[#7e57c2]/90 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="sr-only">Eugia</span>
              <div className="text-white font-semibold text-2xl">eugia</div>
            </Link>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-200 hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-200 hover:text-white transition">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-200 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Get in touch</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-200 hover:text-white transition">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-200 hover:text-white transition">
                  Support & Queries
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">Be the first to know!</h2>
            <p className="mt-4 text-sm text-gray-200">
              Get Eugia updates delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 sm:flex">
              <Input 
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-gray-300 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button type="submit" variant="outline" className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-[#5e35b1] hover:bg-gray-200 transition">
                  Subscribe Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 md:order-2 mb-4 md:mb-0">
            <Link href="https://facebook.com" className="text-gray-200 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com" className="text-gray-200 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://instagram.com" className="text-gray-200 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-base text-gray-200 md:order-1">
            &copy; {new Date().getFullYear()} Eugia Pharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}