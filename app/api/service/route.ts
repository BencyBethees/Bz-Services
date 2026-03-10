import { NextResponse } from "next/server";

export async function GET() {
  const services = [
    {
      icon: "/image/1.svg",
      title: "AI Development",
      description:
        "By developing AI, we provide businesses with cutting-edge solutions that utilize the power of sophisticated algorithms and machine learning to boost productivity, improve efficiency, and open up new opportunities.",
    },
    {
      icon: "/image/2.svg",
      title: "Cloud Technologies",
      description:
        "At BzAnalytics, we leverage the latest advancements in Cloud Technologies to deliver scalable, secure, and flexible solutions, enabling our clients to seamlessly migrate, manage, and optimize their infrastructure in the cloud.",
    },
    {
      icon: "/image/3.1.svg",
      title: "E-Commerce Solutions",
      description:
        "We provide comprehensive E-commerce solutions tailored to meet the unique needs of businesses, combining user-friendly interfaces, secure payment gateways, and advanced analytics, enabling our clients to establish a powerful online presence and drive exceptional growth in the digital marketplace",
    },
    {
      icon: "/image/4.svg",
      title: "Blockchain Services",
      description:
        "Through our cutting-edge Blockchain services, BzAnalytics helps businesses harness the power of decentralized technology to enhance transparency, security, and efficiency in their operations, revolutionizing industries and enabling trust in a digital world.",
    },
    {
      icon: "/image/5.svg",
      title: "Chatbot",
      description:
        "Our intelligent Chat Bot solutions at BzAnalytics leverage artificial intelligence and natural language processing to provide personalized and instant customer support, driving engagement, streamlining processes, and delivering exceptional user experiences around the clock",
    },
    {
      icon: "/image/6.svg",
      title: "Metaverse Solutions",
      description:
        "We offer innovative Metaverse solutions that enable businesses to create immersive virtual experiences, connecting people and bridging physical and digital realms, revolutionizing the way we interact, collaborate, and engage with the world.",
    },
    {
      icon: "/image/7.svg",
      title: "Internet of Things",
      description:
        "Our company specializes in harnessing the transformative power of the Internet of Things (IoT) to connect devices, gather real-time data, and unlock new possibilities for automation, efficiency, and personalized experiences, empowering businesses to thrive in the era of interconnected technology.",
    },
    {
      icon: "/image/8.svg",
      title: "Cybersecurity",
      description:
        "We prioritize the protection of your digital assets and confidential information with our robust cybersecurity solutions, combining advanced threat intelligence, cutting-edge technologies, and expert insights to safeguard your business from evolving cyber threats and ensure peace of mind.",
    },
    {
      icon: "/image/9.svg",
      title: "Web Design and Development Solution",
      description:
        "Our dedicated team of web design and development experts creates stunning and user-centric websites, tailored to your unique brand identity and optimized for seamless functionality across platforms, empowering your business to make a lasting impact in the digital landscape.",
    },
    {
      icon: "/image/10.svg",
      title: "Mobile Application Development",
      description:
        "We specialize in crafting innovative mobile applications that deliver exceptional user experiences, leveraging the latest technologies and design principles to bring your ideas to life and help your business thrive in the mobile-first world.",
    },
    {
      icon: "/image/11.svg",
      title: "Java Development",
      description:
        "Our skilled Java development team brings extensive expertise in crafting robust and scalable solutions, harnessing the power of Java's versatility to build high-performance applications that drive business growth and empower our clients with cutting-edge technology.",
    },
    {
      icon: "/image/12.1.svg",
      title: "Geographic Information System(GIS)Application",
      description:
        "We harness the power of Geographic Information System (GIS) applications to provide businesses with advanced mapping, spatial analysis, and data visualization solutions, enabling them to make informed decisions, optimize operations, and gain valuable insights from location-based data.",
    },
    {
      icon: "/image/13.svg",
      title: "Website Testing Services",
      description:
        "Our comprehensive website testing service ensures that your website performs flawlessly across browsers, devices, and operating systems, detecting and resolving any issues to deliver a seamless user experience and maximize your online presence.",
    },
    {
      icon: "/image/14.svg",
      title: "Whatsapp Intergration",
      description:
        "Elevate your customer engagement and expand your reach with our expert assistance in setting up WhatsApp for Business. Maximize your potential and streamline communication effortlessly.",
    },
    {
      icon: "/image/15.svg",
      title: "HR Voicebot",
      description:
        "Transforming HR operations with conversational AI. Seamlessly inquire about absences, schedule updates, and more, enhancing efficiency and simplifying HR management.",
    },
    {
      icon: "/image/16.png",
      title: "Digital Marketing",
      description:
        "Elevate your brand visibility and engagement with our tailored digital marketing strategies. From SEO to social media, we craft solutions to drive your online success.",
    },
  ];

  return NextResponse.json(services);
}
