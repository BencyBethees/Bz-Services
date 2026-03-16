"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";

const services = [
  "AI Development",
  "Cloud Technologies",
  "E-Commerce Solutions",
  "Blockchain Services",
  "Chatbot",
];

const page = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setShowArrow(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="relative  sm:h-[85vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
      absolute inset-0
      w-full h-full
      bg-no-repeat
      bg-center
      bg-cover
      bg-[url('/image/bg.jpg')]
      dark:bg-[url('/image/bg.jpg')]
    "
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#646060] via-black/60 to-black"></div>

        {/* Content */}
        <div
          className="
      relative z-10 theme-text
      px-6 sm:px-10 md:px-20 lg:px-40
      pt-24 sm:pt-28 md:pt-36 lg:pt-44
      text-left
    "
        >
          {/* Breadcrumb */}
          <div className="mb-5 md:mt-15 text-sm sm:text-base md:text-lg lg:text-xl lg:-ml-[110px]  text-[18px]">
            <span className="hover:text-orange-400 cursor-pointer text-[18px]">
              Home
            </span>
            <span className="mx-2 text-[18px]">.</span>
            <span className="hover:text-orange-400 cursor-pointer text-[18px] -mt-3">
              Services
            </span>
            <span className="mx-2 text-[18px]">.</span>
            <span className="hover:text-orange-400 cursor-pointer text-[18px] -mt-3">
              Services Details
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-2xl sm:font-bold md:text-5xl lg:text-6xl font-extrabold lg:-ml-[110px]">
            AI Development
          </h1>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-black py-20 px-6">
        <div className="theme-bg theme-text px-6 py-16 sm:py-20 text-center -mt-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* left */}
          <div className="border border-gray-800 p-6 bg-[#0c0c0c]">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center
              bg-black border border-gray-800 
              px-6 py-6 mb-6
              hover:border-gray-600 transition"
              >
                <h3 className="text-white text-lg font-medium">{service}</h3>

                <span className="w-3 h-3 bg-white rounded-full"></span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full h-full">
            <img
              src="/image/ai-brain.jpg"
              alt="AI"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* up arrow */}
      {showArrow && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-25 right-6 w-16 h-16 rounded-full flex items-center justify-center z-50"
          style={{
            background: `conic-gradient(
    from 0deg,
    orange ${scrollProgress}%,
    #000 ${scrollProgress}%
  )`,
            padding: "3px",
          }}
        >
          <div
            className="w-full h-full bg-black rounded-full flex items-center justify-center"
            style={{
              border: scrollProgress >= 99 ? "2px solid orange-400" : "none",
            }}
          >
            <FaArrowUpLong className="text-orange-400 text-xl" />
          </div>
        </button>
      )}

      {/*whp  */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-black rounded-full flex items-center justify-center z-50 "
        style={{ boxShadow: "3px 4px 6px rgba(255, 255, 255, 0.6)" }} // smoky white shadow
      >
        <FaWhatsapp className="text-orange-400 text-3xl hover:theme-text" />
      </a>
    </div>
  );
};

export default page;
