"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation once component is mounted
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className={`max-w-xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            LEVERAGING SCIENCE FOR
          </h1>
          <h1 className="text-[#4caf50] text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            HUMANKIND
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Paving way towards affordable and accessible healthcare for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#5e35b1] hover:bg-[#4527a0] text-white px-6 py-3 rounded-md">
              Discover Our Mission
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-3 rounded-md">
              Explore Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'} hover:bg-white transition-all`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}