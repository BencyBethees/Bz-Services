"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const page = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showArrow, setShowArrow] = useState(false);
  const [atFooter, setAtFooter] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    fetch("/api/services")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => setServices(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
      {/*HERO*/}
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
          <div className="mb-5 md:mt-15 text-sm sm:text-base md:text-lg lg:text-xl lg:-ml-[110px]">
            <span className="hover:text-orange-400 cursor-pointer">Home</span>
            <span className="mx-2">.</span>
            <span className="hover:text-orange-400 cursor-pointer -mt-3">
              Services
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-2xl sm:font-bold md:text-5xl lg:text-6xl font-extrabold lg:-ml-[110px]">
            Services
          </h1>
        </div>
      </div>
      {/*SECOND SECTION  */}
      <div className="theme-bg theme-text px-6 py-16 sm:py-20 text-center -mt-20">
        <div className="flex justify-center mt-10 sm:mt-16 mb-5">
          <span className="w-1.5 h-1.5 mt-15 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase  text-sm sm:text-base md:text-base mb-4">
          What We Are Offering
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          Services we're providing <br />
          to our customers
        </h1>
      </div>

      {/* ================= CARDS */}
      <div className="w-full theme-bg  px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#101010] text-[#EAEAEA]
          w-full p-6 sm:p-8
          text-left
          border border-transparent
          hover:border-white
          transition-all duration-300
          rounded-lg
          flex flex-col justify-between"
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="mb-4 sm:mb-6 w-12 sm:w-16 h-12 sm:h-16 object-contain"
              />

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold hover:text-orange-400 cursor-pointer mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-5 sm:leading-6 mb-4 sm:mb-6">
                {service.description}
              </p>

              <hr className="border-gray-600 my-4 sm:my-6" />

              {/* Read More */}
              <Link
                href={service.link}
                className="flex items-center gap-2 text-sm font-medium cursor-pointer
  transition-all duration-300 ease-in-out hover:text-orange-400 group"
              >
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="w-full theme-bg py-16 md:py-20 px-6 md:px-10 lg:px-20 overflow-hidden ">
        <div
          className="max-w-7xl mx-auto 
    flex flex-col 
    lg:flex-row 
    items-center 
    gap-14 lg:gap-20"
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2">
            {/* Orange Dot */}
            <div className="text-orange-400 text-3xl mb-4">•</div>

            <p className="text-sm font-bold text-gray-400 tracking-widest">
              WHY CHOOSE US
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold theme-text leading-tight">
              Providing the best
              <br className="hidden sm:block" /> services
            </h2>

            <div className="mt-12 space-y-10">
              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 flex-shrink-0 
            bg-[#101010] rounded-full 
            flex items-center justify-center 
            transition-all duration-300
            group-hover:bg-orange-400 hover:theme-text"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
              transition-colors duration-300 
            hover:text-white"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Innovative Approach
                  </h3>
                  <p className="theme-text text-sm sm:text-base leading-relaxed">
                    Our company stands out for its innovative thinking, offering
                    fresh perspectives and creative solutions to meet your
                    unique needs.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 flex-shrink-0 
            bg-[#101010] rounded-full 
            flex items-center justify-center 
            transition-all duration-300
           group-hover:bg-orange-400"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
              transition-colors duration-300 
            hover:text-white "
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-500 theme-text text-sm sm:text-base leading-relaxed">
                    With a successful track record of delivering high-quality
                    projects, we have earned the trust of numerous satisfied
                    clients.
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 flex-shrink-0 
            bg-[#101010] rounded-full 
            flex items-center justify-center 
            transition-all duration-300
            group-hover:bg-orange-400"
                >
                  <FaCheck
                    className="text-orange-400 text-lg 
              transition-colors duration-300 
              hover:text-white"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold theme-text mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-500 theme-text text-sm sm:text-base leading-relaxed">
                    Our team of seasoned professionals brings a wealth of
                    expertise and experience to ensure your project's success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div
              className="relative 
        w-72 h-72 
        sm:w-[380px] sm:h-[380px] 
        md:w-[450px] md:h-[450px] 
        lg:w-[520px] lg:h-[520px] 
        flex items-center justify-center"
            >
              {/* Rotating Orange Ring */}
              <img
                src="/image/c.png"
                alt="Background Shape"
                className="absolute w-[200%] h-[200%] object-contain animate-spin [animation-duration:4s]"
              />

              {/* Main Oval Image */}
              <div className="w-[85%] h-[79%] rounded-[50%] -ms-10 overflow-hidden z-10 shadow-2xl">
                <img
                  src="/image/man.png"
                  alt="Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div
        className="w-full min-h-screen theme-bg
  py-12 sm:py-14 md:py-16
  px-4 sm:px-6 md:px-8
  mb-0 sm:-mb-[30px] md:-mb-[30px] lg:-mb-[30px]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/image/ux_1.jpg"
              alt="UX Design"
              className="w-full h-[300px] object-cover"
            />

            {/* Orange Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-2xl sm:text-3xl text-center leading-snug break-words">
                  UX/UI <br /> Design
                </p>
              </div>
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Enhancing user experiences through research, wireframes, and
                prototypes, creating visually appealing and user-friendly
                interfaces.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/image/ux_2.jpg"
              alt="UX Design 2"
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-2xl sm:text-3xl text-center leading-snug break-words">
                  On Demand <br /> Product <br /> Team
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Flexible teams for custom software development, scaling, and
                extending your internal team's capabilities, led by dedicated
                developers and product owners.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/image/ux_3.jpg"
              alt="UX Design 3"
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-2xl sm:text-3xl text-center leading-snug break-words">
                  Mobile App <br /> Development
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Building iOS and Android apps, including cross-platform
                development using Flutter, tailored for both consumer and
                enterprise needs.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/image/ux_4.jpg"
              alt="UX Design 4"
              className="w-full h-[300px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-2xl sm:text-3xl text-center leading-snug break-words">
                  Web <br /> Development
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Crafting websites, web applications, and custom software, along
                with creating web portals for specific business purposes.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 text-white ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="bg-orange-400 p-5  font-semibold text-white text-xl ">
        <Marquee gradient={false} speed={50} pauseOnHover={true}>
          <span className="mr-10 tracking-wider">
            UNLOCKING YOUR FULL POTENTIAL
          </span>
          <span className="mr-10 tracking-wider">
            TURNING CONCEPTS INTO REALITY
          </span>
          <span className="mr-10 tracking-wider">CULTIVATING CREATIVITY</span>
          <span className="mr-10 tracking-wider">
            EXPERTISE IN DESIGN AND DEVELOPMENT
          </span>
          <span className="mr-10 tracking-wider">
            REALIZING YOUR HIDDEN POTENTIAL
          </span>
          <span className="mr-10 tracking-wider">
            TRANSFORMING VISIONS INTO REALITY
          </span>
          <span className="mr-10 tracking-wider">
            FOSTERING CREATIVE INSPIRATION
          </span>
          <span className="mr-10 tracking-wider">
            CRAFTING IN DESIGN AND DEVELOPMENT
          </span>
          <span className="mr-10 tracking-wider">
            UNLEASHING YOUR MAXIMUM POTENTIAL
          </span>
          <span className="mr-10 tracking-wider">
            LET'S START WORKING TOGETHER
          </span>
        </Marquee>
      </div>

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
    </>
  );
};

export default page;
