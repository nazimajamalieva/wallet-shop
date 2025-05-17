import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[#DDF057] pt-30 pb-55 px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
            <div className="space-y-12">
              <h1 className="text-[5.7rem] leading-25 font-bold">
                What's In Your Wallet?
              </h1>

              <p className="text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                tempore nesciunt accusamus voluptatum expedita neque cupiditate
                sit iste nihil error!
              </p>
              <Button>Explore Collections</Button>
            </div>
            <div className="relative z-20">
              <div className="flex justify-end">
                <Image
                  src="/Assets/wallet.png"
                  alt="Banner"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <Image
                src="/Assets/banner-pattern.png"
                alt="Banner"
                width={100}
                height={100}
                className="absolute top-10 left-20 opacity-60"
              />
              <div className="bg-white p-6 rounded-lg shadow-lg w-100 absolute bottom-8 left-0">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/Assets/profile.png"
                    alt="Mary Hardy"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold flex items-center gap-2">
                      Mary Hardy <span className="text-blue-500 ">✓</span>
                    </h3>
                    <p className="text-gray-500 text-sm">
                      TUE, 24 JANUARY 2021
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  In just a few years, I built the brand to millions of social
                  media followers and website visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src="/Assets/wave.png"
          alt="Mary Hardy"
          width={1000}
          height={1000}
          className="absolute w-full -bottom-155"
        />
      </div>
    </>
  );
};

export default Banner;
