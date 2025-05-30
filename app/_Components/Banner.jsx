import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[#DDF057] pt-30 pb-30 md:pb-55 px-10 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
            <div className="space-y-10 text-center md:text-left md:space-y-12">
              <h1
                className="text-3xl sm:text-4xl md:text-[5.7rem] leading-tight md:leading-[6rem] font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
              >
                What's In Your Wallet?
              </h1>

              <p
                className="text-base sm:text-lg md:text-lg text-gray-700"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out-back"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                tempore nesciunt accusamus voluptatum expedita neque cupiditate
                sit iste nihil error!
              </p>

              <div className="flex justify-center md:justify-start">
                <Button
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-out-back"
                >
                  <Link href="/products">Explore Collections</Link>
                </Button>
              </div>
            </div>

            <div className="relative z-20 ">
              <div className="flex justify-end">
                <Image
                  src="/Assets/wallet.png"
                  alt="Banner"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-out-back"
                />
              </div>

              <Image
                src="/Assets/banner-pattern.png"
                alt="Banner"
                width={100}
                height={100}
                className="absolute top-4 -left-8 sm:top-6 sm:left-10 md:top-10 md:left-20 opacity-60 "
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out-back"
              />

              <div
                className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg w-[90%] md:w-100 absolute -bottom-10  sm:bottom-6 md:bottom-8 -left-6 sm:left-4 md:left-0 text-sm md:text-base"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Image
                    src="/Assets/profile.png"
                    alt="Mary Hardy"
                    width={40}
                    height={40}
                    className="rounded-full sm:w-[50px] sm:h-[50px] "
                  />
                  <div>
                    <h3 className="font-semibold flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                      Mary Hardy{" "}
                      <span className="text-blue-500 text-base">✓</span>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      TUE, 24 JANUARY 2021
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  In just a few years, I built the brand to millions of social
                  media followers and website visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Image
          src="/Assets/wave.png"
          alt="wave"
          width={1000}
          height={1000}
          className="absolute w-full -bottom-145"
          data-aos="zoom-in"
          data-aos-duration="1300"
          data-aos-easing="ease-in-out-back"
        />
      </div>
    </>
  );
};

export default Banner;
