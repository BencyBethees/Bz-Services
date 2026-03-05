import React from "react";
import Service from "./Service/page"
import Footer from "@/src/Components/Footer/Footer";
import Header from "@/src/Components/Header/Header";

const page = () => {
  return (
    <div>
      <Header />
      <Service/>
      <Footer/>
    </div>
  );
};

export default page;
