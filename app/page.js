"use client";
import { useEffect } from "react";
import AboutUs from "./_Components/AboutUs";
import Banner from "./_Components/Banner";

import Creative from "./_Components/Creative";
import NewsLetter from "./_Components/NewsLetter";
import Supports from "./_Components/Supports";
import Testimonials from "./_Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Banner />
      <Supports />

      <AboutUs />

      <Creative />
      {/* <Companys /> */}
      <Testimonials />
      <NewsLetter />
    </>
  );
}
