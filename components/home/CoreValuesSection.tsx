"use client";

import { useRef, useEffect, useState } from "react";
import { Heart, Award, Dna } from "lucide-react";

const values = [
  {
    id: 1,
    icon: <Heart className="h-8 w-8 text-blue-500" />,
    title: "Superior Patient Experience",
    description: "We prioritize patient satisfaction and outcomes in everything we do."
  },
  {
    id: 2,
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: "Quality",
    description: "Maintaining the highest standards in all our products and processes."
  },
  {
    id: 3,
    icon: <Dna className="h-8 w-8 text-blue-500" />,
    title: "Value-Based Care",
    description: "Delivering optimal health outcomes at reasonable costs."
  }
];

export default function CoreValuesSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="mb-4">
              <span className="text-xl font-semibold">Moving </span>
              <span className="text-green-500 font-bold">FORWARD TOGETHER</span>
            </h2>
            <p className="text-gray-600 mb-6">
              We at eugia believe that medical treatment should be patient-centric and value-oriented. To achieve this we have established 3 fundamental pillars at eugia:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                  <span className="text-sm font-medium">1</span>
                </div>
                <span className="text-gray-700">Patient-centric approach</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                  <span className="text-sm font-medium">2</span>
                </div>
                <span className="text-gray-700">Scientific excellence</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
                  <span className="text-sm font-medium">3</span>
                </div>
                <span className="text-gray-700">Global healthcare accessibility</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.id}
                className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-1000 delay-${index * 200} transform hover:translate-y-[-5px] hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-md mr-4">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}