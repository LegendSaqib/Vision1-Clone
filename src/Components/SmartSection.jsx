import React, { useEffect, useState } from "react";
import pic1 from "../assets/d-img12.webp";
import pic2 from "../assets/d-img13.webp";

const SmartSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".slide-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-gray-100 max-w-[80%] mx-auto py-8 space-y-8 rounded-lg shadow-md">
      {/* Section 1 */}
      <div className="slide-section grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Content */}
        <div className="space-y-4 pl-4">
          <h2 className="text-2xl font-bold text-gray-800">Home Automation</h2>
          <p className="text-gray-600">
            Automate your home from anywhere. Welcome home to an even smarter
            home. Upgrade your deadbolt with the all-new August Wi-Fi Smart
            Lock, a lock so smart, it simplifies your daily life and the way
            your family lives. And with built-in WiFi, our lock requires no
            additional bridge to connect. Overall, smart home solutions can
            help you save time, energy, and money while improving your home's
            security and making it more enjoyable to live in.
          </p>
        </div>
        {/* Sliding Image */}
        <div
          className={`transform transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={pic1}
            alt="Home Automation"
            className="w-[80%] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="slide-section grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Content */}
        <div className="space-y-4 pl-4">
          <h2 className="text-2xl font-bold text-gray-800">Smart Solutions</h2>
          <p className="text-gray-600">
            Experience convenience and security like never before. Our smart
            solutions integrate seamlessly into your home to simplify tasks and
            give you control at your fingertips. Whether it's locking doors or
            managing energy usage, smart solutions create an efficient and
            smarter home experience.
          </p>
        </div>
        {/* Sliding Image */}
        <div
          className={`transform transition-transform duration-700 ease-in-out ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <img
            src={pic2}
            alt="Smart Lock"
            className="w-[80%] mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartSection;
