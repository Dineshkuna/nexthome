"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "How Services Can Ease Your Pain",
    date: "April, 2023",
    excerpt: "Customer-centered software design insights can help improve service delivery and reduce operational costs.",
    image: "https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Research"
  },
  {
    id: 2,
    title: "Penicillins: Uses, and Mechanism",
    date: "Dec 01, 2024",
    excerpt: "Overview of penicillin's discovery and its purpose's today.",
    image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Medicine"
  },
  {
    id: 3,
    title: "Proteins: An Overview of Mechanism and Erignostine",
    date: "Nov 20, 2024",
    excerpt: "Learn about the complex protein mechanisms that are fundamental.",
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Biology"
  }
];

export default function BlogSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">BLOGS & ARTICLES</h2>
          <div className="w-20 h-1 bg-[#5e35b1] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest research, discoveries, and innovations in the pharmaceutical industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } hover:shadow-lg transform hover:translate-y-[-5px]`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3 hover:text-[#5e35b1] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="text-[#5e35b1] p-0 hover:underline">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}