import React from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-200/40 mt-30">
        <div className="container mx-auto py-20">
          <div className="grid grid-cols-2 gap-20 py-20">
            <div className="space-y-5 pe-20">
              <h1 className="text-6xl font-semibold leading-tight">About Us</h1>
              <p className="text-xl text-gray-600 ">
                Transform your vision into reality with our innovative design
                solurions. We craft memorable experiences that resonate with
                your audience and drive results.
              </p>
              <Button className="mt-4">Explore Collections</Button>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-10 text-white ">
                <div className="bg-secondary p-6 rounded-md space-y-3">
                  <h2 className="text-3xl font-semibold">15+</h2>
                  <p className="text-lg">Years of experience</p>
                </div>
                <div className="bg-secondary p-6 rounded-md space-y-3">
                  <h2 className="text-3xl font-semibold">15+</h2>
                  <p className="text-lg">Years of experience</p>
                </div>

                <div className="bg-secondary p-6 col-span-2 rounded-md space-y-3">
                  <div className="grid  grid-cols-2 gap-5">
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
          <div className="grid grid-cols-4 gap-10 pb-20">
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

          {/* ******************* */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
