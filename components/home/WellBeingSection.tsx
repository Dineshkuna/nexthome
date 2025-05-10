"use client";

import { useRef, useEffect, useState } from "react";

export default function WellBeingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Envisioning a State of <span className="text-red-500">GLOBAL WELL-BEING</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our aim is to deliver good health globally, expeditiously. Our therapies extend to unmet medical needs in specialized products such as General Injectables, Oncology, Ophthalmics and Hormonal products.
          </p>
        </div>
        
        <div className="relative h-[400px]">
          {/* Dark space background with particles */}
          <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
            {/* Stars/particles effect */}
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle, rgba(32,32,32,1) 0%, rgba(0,0,0,1) 100%)" }}>
              {Array.from({ length: 50 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    opacity: Math.random() * 0.8 + 0.2,
                    animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Orbit line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gray-500 border-dashed rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}