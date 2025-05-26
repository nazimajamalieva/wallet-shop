import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-200/40 pt-10 md:py-30">
        <div className="container mx-auto ">
          {/* Верхняя часть — текст + карточки */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ">
            <div className="space-y-5 lg:pe-20 px-4 lg:px-0 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                About Us
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                Transform your vision into reality with our innovative design
                solurions. We craft memorable experiences that resonate with
                your audience and drive results.
              </p>
              <Button className="mt-4">Explore Collections</Button>
            </div>
            <div className="px-4 lg:px-0 pb-20">
              <div className="grid grid-cols-2 gap-5 lg:gap-10 text-white">
                <div className="bg-secondary p-6 rounded-md space-y-3">
                  <h2 className="text-3xl font-semibold">15+</h2>
                  <p className="text-lg">Years of experience</p>
                </div>
                <div className="bg-secondary p-6 rounded-md space-y-3">
                  <h2 className="text-3xl font-semibold">15+</h2>
                  <p className="text-lg">Years of experience</p>
                </div>
                <div className="bg-secondary p-6 col-span-2 rounded-md space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-semibold">1M +</h2>
                      <p className="text-lg">Happy Customers</p>
                    </div>
                    <div className="space-y-5">
                      <div className="text-end">
                        <Link href="#" className="text-xl">
                          View
                        </Link>
                      </div>
                      <Progress value={85} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ******************* */}
          <div className=" hidden md:grid grid-cols-4 gap-10 ">
            <div className="">
              <Image
                src="/Assets/shopping1.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2">
              <Image
                src="/Assets/shopping2.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
            <div className="">
              <Image
                src="/Assets/shopping3.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
          {/* ******************************* */}
          <div
            className=" md:hidden px-5 grid grid-cols-2 grid-rows-[auto_auto] gap-5 pb-20
                lg:grid-cols-4 lg:grid-rows-auto lg:gap-10"
          >
            <div className="row-start-1 col-start-1 lg:col-span-1">
              <Image
                src="/Assets/shopping1.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div className="col-span-2 row-start-2 lg:col-span-2 lg:row-auto">
              <Image
                src="/Assets/shopping2.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div className="row-start-1 col-start-2 lg:col-span-1">
              <Image
                src="/Assets/shopping3.png"
                alt="about us"
                width={500}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>

          {/* ******************* */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
