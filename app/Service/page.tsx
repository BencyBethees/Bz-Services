"use client";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import { useState } from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const page = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/service")
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
      {/* ================= HERO ================= */}
      <div className="relative h-screen sm:h-[85vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
        {/* Background Image with Zoom - REDUCED to show car */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/image/bg.jpg"
            alt="background"
            className="w-full h-full object-cover scale-[1]" // Changed from 1.4 to 1.1
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>

        {/* Content */}
        <div
          className="
    relative z-10 text-white
    px-6 sm:px-10 md:px-20 lg:px-40
    pt-24 sm:pt-28 md:pt-36 lg:pt-44
    text-left
  "
        >
          {/* Breadcrumb */}
          <div className="mb-5 md:mt-15 text-sm sm:text-base md:text-lg lg:text-xl lg:-ml-[110px]">
            <span className="hover:text-orange-400 cursor-pointer">Home</span>
            <span className="mx-2">.</span>
            <span className="hover:text-orange-400 cursor-pointer">
              Services
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-2xl sm:font-bold  md:text-5xl lg:text-6xl font-extrabold lg:-ml-[110px]">
            Services
          </h1>
        </div>
      </div>
      {/* ================= SECOND SECTION ================= */}
      <div className="bg-black text-white px-6 py-16 sm:py-20 text-center">
        <div className="flex justify-center mt-10 sm:mt-16 mb-5">
          <span className="w-1.5 h-1.5 mt-15 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase tracking-wider text-sm sm:text-base md:text-base mb-4">
          What We Are Offering
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
          Services we're providing <br />
          to our customers
        </h1>
      </div>

      {/* ================= CARDS ================= */}
      <div className="w-full bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#101010] text-[#EAEAEA]
          w-full sm:max-w-[270px]
          px-6 sm:px-8 pt-8 pb-8
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
                  className="mb-6 w-14 h-14 sm:w-16 sm:h-16"
                />

                {/* Title */}
                <h3 className="text-xl font-semibold hover:text-orange-400 cursor-pointer mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 mb-6">{service.description}</p>

                <hr className="border-gray-600 my-6" />

                {/* Read More */}
                <p
                  className="flex items-center gap-2 text-sm font-medium cursor-pointer 
  transition-all duration-300 ease-in-out hover:text-orange-400 group"
                >
                  Read More
                  <FaArrowRight
                    className="transition-transform duration-300 ease-in-out 
    rotate-[45deg] group-hover:rotate-[0deg]"
                  />
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* grid */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 py-16 bg-black">
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-1/2">
          {/* Orange Dot */}
          <div className="text-orange-400 text-3xl mb-4">•</div>

          <p className="text-sm font-bold text-gray-400 tracking-wider">
            WHY CHOOSE US
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Providing the best <br className="hidden sm:block" /> services
          </h2>

          {/* ================= FEATURES ================= */}

          {/* Item 1 */}
          <div className="flex gap-6 mt-10">
            <div className="w-14 h-14 bg-[#101010] rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
              <FaCheck className="text-orange-400 text-xl hover:text-white" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Innovative Approach
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                Our company stands out for its innovative thinking, offering
                fresh perspectives and creative solutions to meet your unique
                needs.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-6 mt-8">
            <div className="w-14 h-14 bg-[#101010] rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
              <FaCheck className="text-orange-400 text-xl hover:text-white" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Proven Track Record
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                With a successful track record of delivering high-quality
                projects, we have earned the trust of numerous satisfied
                clients.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-6 mt-8">
            <div className="w-14 h-14 bg-[#101010] rounded-full flex items-center justify-center hover:bg-orange-400 transition duration-300">
              <FaCheck className="text-orange-400 text-xl hover:text-white" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
                Expert Team
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                Our team of seasoned professionals brings a wealth of expertise
                and experience to ensure your project's success.
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg">
            <img
              src="/image/man.png"
              alt="Professional"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="w-full min-h-screen bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/image/ux_1.jpg"
              alt="UX Design 1"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* 2 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/image/ux_2.jpg"
              alt="UX Design 2"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* 3 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/image/ux_3.jpg"
              alt="UX Design 3"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* 4 */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="/image/ux_4.jpg"
              alt="UX Design 4"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-orange-400 p-5 text-white font-semibold  text-xl ">
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
    </>
  );
};

export default page;
