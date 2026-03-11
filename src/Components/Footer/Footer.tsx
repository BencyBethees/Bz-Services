"use client";

import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const menuColumn1 = ["Home", "About Us", "Services", "Success Stories"];
const menuColumn2 = ["Blogs", "Careers", "Contact Us"];

const socialIcons = [
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaXTwitter />, link: "#" },
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("Subscribed successfully!");
      setEmail("");
    }, 1500);
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden min-h-[582px]">

      {/* Background Lines */}
      <div
        className="absolute inset-x-0 -top-32 -bottom-32 bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/image/footer.png')",
          backgroundSize: "1894px 690px",
          backgroundPosition: "-500px center",
          filter: "brightness(1.7) contrast(2.5)",
        }}
      />

      {/* Footer Content */}
      <div className="relative max-w-[1375px] mx-auto px-6 md:px-9 py-12 lg:py-16">

        {/* Top Section */}
        <div className="text-center lg:text-left">
          <p className="text-[18px] md:text-[22px] font-medium text-gray-300">
            Let’s start working together
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4 hover:text-orange-400 transition cursor-pointer">
            hello@bzanalytics.ai
          </h2>
        </div>

        {/* Divider */}
        <hr className="my-8 md:my-10 w-200 border-t border-gray-700/60" />

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo + Social */}
          <div className="flex flex-col items-center lg:items-start space-y-8">

            <img
              src="/image/bq.png"
              alt="logo"
              className="w-[140px] md:w-[180px]"
            />

            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="w-10 h-10 md:w-12 md:h-12 bg-black border border-gray-700 rounded-full flex items-center justify-center hover:bg-orange-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Menu */}
          <div className="grid grid-cols-2 gap-8 text-center lg:text-left">

            <div className="space-y-4">
              {menuColumn1.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="space-y-4">
              {menuColumn2.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-300 hover:text-orange-400 cursor-pointer transition"
                >
                  {item}
                </p>
              ))}
            </div>

          </div>

          {/* Subscribe */}
          <div
            className="bg-[#0000004D] p-6 md:p-8 rounded-xl space-y-6
            w-full max-w-sm md:max-w-md mx-auto
            mt-10 lg:-mt-50"
          >

            <div className="flex justify-center items-center">
              <img
                src="/image/logof.png"
                alt="subscribe"
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
              />
            </div>

            <h3 className="text-[19px] font-semibold text-center lg:text-left">
              Subscribe now
            </h3>

            <p className="text-gray-400 text-[15px] text-center lg:text-left">
              Empower Every Mind
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-black px-4 py-3 rounded-md border outline-none transition
                ${
                  error
                    ? "border-red-500"
                    : "border-gray-700 focus:border-orange-400"
                }`}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 py-3 rounded-md hover:bg-white hover:text-orange-400 transition font-medium disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;