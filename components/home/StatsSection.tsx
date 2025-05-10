"use client";

import { useEffect, useState, useRef } from "react";
import { Globe, Users, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Globe className="h-10 w-10 text-white" />,
    value: 120,
    label: "Countries",
    color: "bg-green-500",
    description: "We are proud to be operating in over 120+ countries, leveraging our expertise and valuable services across the globe."
  },
  {
    id: 2,
    icon: <Users className="h-10 w-10 text-white" />,
    value: 4000,
    label: "Employees",
    color: "bg-blue-500",
    description: "Our global team works relentlessly to discover path-breaking innovations which make a difference."
  },
  {
    id: 3,
    icon: <Award className="h-10 w-10 text-white" />,
    value: 250,
    label: "Global Approvals",
    color: "bg-red-500",
    description: "We have over 250 globally approved generics that have furthered our vision of making human lives better."
  }
];

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animation for counter
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !hasAnimated) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          setHasAnimated(true);
          
          // Animate counters
          const duration = 2000; // Duration in milliseconds
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.floor(duration / frameDuration);
          
          let frame = 0;
          const timerId = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easedProgress = easeOutQuad(progress);
            
            setAnimatedValues(stats.map(stat => Math.floor(easedProgress * stat.value)));
            
            if (frame === totalFrames) {
              clearInterval(timerId);
              setAnimatedValues(stats.map(stat => stat.value));
            }
          }, frameDuration);
        }
      }
    };
    
    // Easing function
    function easeOutQuad(t: number): number {
      return t * (2 - t);
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className={`${stat.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="stats-content">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">{animatedValues[index]}+</span>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">{stat.label}</h3>
                <p className="text-gray-600 max-w-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}