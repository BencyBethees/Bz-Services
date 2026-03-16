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

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) return setError("Email is required");
    if (!validateEmail(email))
      return setError("Please enter a valid email address");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess("Subscribed successfully!");
      setEmail("");
    }, 1500);
  };

  return (
    <footer
      className="relative w-full bg-[#131313] text-white overflow-hidden min-h-[582px]"
      id="footer"
    >
      {/* Background Lines */}
      <div
        className="absolute inset-x-0 -top-32 -bottom-32 bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/image/footer.png')",
          backgroundSize: "1894px 690px",
          backgroundPosition: "-500px center",
          filter: "brightness(1.0) contrast(1.5)",
        }}
      />

      {/* Footer Content */}
      <div className="relative max-w-[1375px] mx-auto px-4 sm:px-6 md:px-9 py-12 lg:py-16">
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
        <hr className="my-8 md:my-10 w-220 border-t border-gray-700/60" />

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
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
          <div className="grid grid-cols-2 gap-8 text-center lg:text-left justify-center lg:justify-start">
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
            className="bg-black p-6 md:p-8 rounded-xl
             w-[299px] h-[404px] mx-auto
             mt-10 lg:-mt-50 lg:-me-2
             max-[321px]:w-[260px] 
             max-[321px]:p-4 
             max-[321px]:h-auto"
          >
            <div className="flex justify-center lg:justify-start items-center">
              <img
                src="/image/logof.png"
                alt="subscribe"
                className="w-24 h-auto object-contain max-[321px]:w-20"
              />
            </div>

            <h3 className="text-[19px] font-semibold text-center lg:text-left mt-4 max-[321px]:text-[17px]">
              Subscribe now
            </h3>

            <p className="text-gray-400 text-[15px] text-center lg:text-left max-[321px]:text-[13px]">
              Empower Every Mind
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 mt-4 max-[321px]:space-y-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-black px-4 py-3 rounded-md border outline-none transition
      max-[321px]:px-3 max-[321px]:py-2
      ${error ? "border-red-500" : "border-gray-700 focus:border-orange-400"}`}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 py-3 rounded-md hover:bg-white hover:text-orange-400 transition font-medium disabled:opacity-50 max-[321px]:py-2"
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
