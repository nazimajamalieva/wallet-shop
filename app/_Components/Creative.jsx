import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Creative = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 items-center mt-10 md:mt-30 px-4 md:px-10 pb-27">
      {/* Блок 1: Текст → Картинка */}
      <div className="space-y-6 md:space-y-10 md:pe-20 text-center md:text-left order-1">
        <h1
          className="text-3xl md:text-5xl font-semibold leading-tight"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          Creative Design
        </h1>
        <p
          className="text-base md:text-xl text-gray-600"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-back"
        >
          We create stunning and effective designs that capture your brand's
          essence and engage your audience.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out-back"
          >
            <Link href="/products"> Explore Collections </Link>
          </Button>
        </div>
      </div>
      <div className="order-2">
        <Image
          src="/Assets/creater-img.png"
          alt="about"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
          data-aos="zoom-in-left"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out-back"
        />
      </div>

      <div className="space-y-6 md:space-y-10 md:pe-20 text-center md:text-left order-3">
        <h1
          className="text-3xl md:text-5xl font-semibold leading-tight"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-easing="ease-in-out-back"
        >
          Elevate Your Digital Presence
        </h1>
        <p
          className="text-base md:text-xl text-gray-600"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        >
          Our cutting-edge solutions help you stand out in the digital
          landscape. From stunning visuals to seamless user experiences, we
          bring brand to life in ways that captivate and convert.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-back"
          >
            <Link href="/about"> View Our Portfolio</Link>
          </Button>
        </div>
      </div>
      <div className="order-4 ">
        <Image
          src="/Assets/creater2-img.png"
          alt="about"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-back"
        />
      </div>
    </div>
  );
};

export default Creative;
