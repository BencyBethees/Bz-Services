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
  "Metaverse Solutions",
  "Internet Of Things",
  "Cyber Security",
  "Web Design and Development Solution",
  "Mobile Application Development",
  "Java Development",
  "Geographic Information System (GIS) Application",
  "Website Testing Services",
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
      <div className="relative sm:h-[85vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
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
          <div className="mb-5 md:mt-15 text-sm sm:text-base md:text-lg lg:text-xl lg:-ml-[110px] text-[18px]">
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
      <div className="theme-bg py-10 px-5">
        <div className="theme-bg theme-text px-6 py-16 sm:py-20 text-left mx-auto flex flex-col lg:flex-row gap-10 items-start max-w-7xl">
          {/* LEFT: Services List */}
          <div className="p-7 bg-[#101010] w-full lg:w-1/3 order-1">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between bg-black px-4 py-4 mb-3 group cursor-pointer"
              >
                <h3 className="text-[#eaeaea] text-[16px] font-semibold">
                  {service}
                </h3>
                <span className="w-1.5 h-1.5 mt-2 bg-white rounded-full group-hover:bg-orange-400 transition-colors duration-300"></span>
              </div>
            ))}
          </div>

          {/* RIGHT: Main Content */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6 order-2">
            {/* Main Image */}
            <div className="order-1">
              <img
                src="/image/ai_development.jpg"
                alt="AI"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description Text */}
            <div className="mt-6 text-[#EAEAEA] order-2">
              <h1 className="font-bold text-[30px]">AI Development</h1>
              <p className="mt-5 leading-loose text-[16px]">
                By developing AI, we provide businesses with cutting-edge
                solutions that utilize the power of sophisticated algorithms and
                machine learning to boost productivity, improve efficiency, and{" "}
                <br /> open up new opportunities.
              </p>
              <h1 className="mt-7 font-bold text-[24px]">
                AI Development Services
              </h1>
              <p className="mt-7 leading-loose text-[16px]">
                Welcome to our AI Development Services! We offer cutting-edge
                solutions that harness the power of Artificial Intelligence (AI)
                to transform your business and drive unparalleled growth. With a
                team of highly skilled AI experts and data scientists, we are
                committed to delivering innovative and tailored AI solutions to
                meet your unique business needs. Whether you're a startup or an
                established enterprise, our AI development services will help
                you stay ahead of the competition and embrace the future of
                technology.
              </p>
              <h1 className="mt-7 font-bold text-[24px] ">
                {" "}
                Our AI Development Expertise{" "}
              </h1>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Machine Learning Algorithms:Our team excels in developing
                sophisticated machine learning algorithms that can analyze vast
                amounts of data and extract valuable insights. From supervised
                to unsupervised learning, we cover a wide range of ML techniques
                to power your AI applications.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Natural Language Processing (NLP):Unlock the potential of NLP
                with our advanced language processing solutions. We build AI
                systems that can understand, interpret, and generate human
                language, enabling seamless interactions with your customers
                through chatbots and virtual assistants.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Computer Vision:Leverage the capabilities of computer vision to
                process and interpret visual data. Our AI solutions can analyze
                images and videos, enabling applications such as object
                recognition, facial detection, and autonomous systems.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Predictive Analytics:Make data-driven decisions with our
                predictive analytics solutions. We implement AI models that can
                forecast future trends, identify patterns, and help you stay
                proactive in a dynamic market environment.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Personalization and Recommendation Systems:Enhance customer
                experience and boost engagement with personalized
                recommendations. Our AI algorithms can analyze user behavior and
                preferences to deliver tailored content, products, and
                services.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                AI-Driven Automation:Streamline your business processes and
                improve efficiency with AI-driven automation. We can design and
                implement intelligent systems that automate repetitive tasks,
                freeing up valuable time for your team.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                AI in Healthcare:Revolutionize healthcare with our AI solutions.
                From medical image analysis to personalized treatment plans, we
                leverage AI to improve diagnostics, patient care, and drug
                discovery.{" "}
              </p>{" "}
              <h1 className="mt-9 text-[30px] font-extrabold">
                {" "}
                Why Choose Us for AI Development?{" "}
              </h1>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Expert Team:Our team of AI experts brings a wealth of experience
                in developing AI solutions for diverse industries. We stay
                up-to-date with the latest advancements in AI technology to
                deliver state-of-the-art solutions.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Tailored Solutions:We understand that every business is unique.
                That's why our AI development services are customized to address
                your specific challenges and goals, ensuring the best possible
                outcomes.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Data Privacy and Security:We prioritize the privacy and security
                of your data. Our AI solutions are built with robust security
                measures to protect your sensitive information.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Scalable Solutions:Our AI applications are designed with
                scalability in mind. As your business grows, our solutions can
                adapt and accommodate increased data and user demands.{" "}
              </p>{" "}
              <p className="mt-7 leading-loose text-[16px]">
                {" "}
                Continuous Support:Our partnership doesn't end with the
                development phase. We offer ongoing support and maintenance to
                ensure the optimal performance of your AI applications.{" "}
              </p>
              {/* You can keep all other <p> descriptions the same */}
            </div>

            {/* Circular Image + Benefits */}
            <div className="flex flex-col lg:flex-row gap-10 order-3 items-center">
              {/* Circular Image */}
              <div className="order-1">
                <img
                  className="rounded-full w-83 h-83 object-cover"
                  src="/image/r.jpg"
                  alt=""
                />
              </div>

              {/* Benefits List */}
              <div className="order-2">
                <h1 className="text-[30px] font-extrabold mb-5">
                  Our benefits
                </h1>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black dark:text-white w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Accelerated Innovation
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Efficient Collaboration
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Enhanced Decision-Making
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Personalization at Scale
                    </span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <span className="bg-orange-400 text-black w-3 h-3 flex items-center justify-center rounded-full text-xs font-bold">
                      ✓
                    </span>
                    <span className="theme-text font-semibold text-[16px]">
                      Advanced Predictive Analytics
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
